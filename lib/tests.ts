// Import cheerio only on server side
import * as cheerio from "cheerio";
import { cleanText } from "@/lib/text";
import { fetchWpPageBySlug, requireServerOnly } from "@/lib/wp";

// Define the data shape for test courses
export interface TestCourse {
  key: string;
  values: string[];
}

// Function to parse course numbers from text
function parseCourseNumbers(text: string): string[] {
  // Split by commas first
  const parts = text.split(",");
  const numbers: string[] = [];

  for (const part of parts) {
    const cleaned = cleanText(part);
    if (!cleaned) continue;

    // Handle slashes (e.g., "221/225" → ["221", "225"])
    if (cleaned.includes("/")) {
      const slashParts = cleaned.split("/");
      for (const slashPart of slashParts) {
        const num = cleanText(slashPart);
        if (num) numbers.push(num);
      }
    } else {
      numbers.push(cleaned);
    }
  }

  return numbers;
}

// Main function to fetch and parse tests data
export async function fetchTestsData(): Promise<TestCourse[]> {
  try {
    // Only run on server side
    const serverFallback = requireServerOnly(
      "fetchTestsData",
      getFallbackTests
    );
    if (serverFallback !== undefined) return serverFallback;

    console.log("Fetching tests data from WordPress API...");

    const page = await fetchWpPageBySlug("past-test-library");
    console.log("WordPress API response received:", page ? 1 : 0, "pages found");

    if (!page) {
      console.warn("No past test library page found");
      return getFallbackTests();
    }
    const content = page.content.rendered;

    if (!content) {
      console.warn("No content found in past test library page");
      return getFallbackTests();
    }

    console.log("Parsing HTML content with Cheerio...");

    // Parse HTML content with Cheerio
    const $ = cheerio.load(content);
    const tests: TestCourse[] = [];

    // Find the paragraph containing course codes
    // Look for paragraph with "ASSU TEST LIBRARY" or multiple <strong> tags
    $("p").each((index: number, element) => {
      const $element = $(element);
      const strongTags = $element.find("strong");

      // Process paragraphs that have multiple strong tags (likely the course list)
      if (strongTags.length > 1) {
        // Get the HTML content to preserve structure
        const html = $element.html() || "";
        
        // Use regex to find all patterns: <strong>CODE</strong> numbers
        // Match: <strong>CODE</strong> followed by numbers, commas, slashes, spaces, and <br />
        const pattern = /<strong>([A-Z]{3,4})<\/strong>\s*([^<]+?)(?=<strong>|<br\s*\/?>|$)/g;
        let match;

        while ((match = pattern.exec(html)) !== null) {
          const courseCode = cleanText(match[1]);
          let courseNumbersText = match[2];

          // Clean up the course numbers text (remove <br /> tags and extra whitespace)
          courseNumbersText = courseNumbersText
            .replace(/<br\s*\/?>/gi, " ")
            .replace(/\s+/g, " ")
            .trim();

          const courseNumbers = parseCourseNumbers(courseNumbersText);

          if (courseNumbers.length > 0) {
            tests.push({
              key: courseCode,
              values: courseNumbers,
            });
          }
        }
      }
    });

    console.log("Found", tests.length, "test courses");

    // Sort by course code for consistent display
    tests.sort((a, b) => a.key.localeCompare(b.key));

    return tests;
  } catch (error) {
    console.error("Error fetching tests data:", error);
    return getFallbackTests();
  }
}

// Helper function to get fallback tests
function getFallbackTests(): TestCourse[] {
  return [
    { key: "ACT", values: ["230", "240", "245", "247", "348", "349", "370"] },
    { key: "ANA", values: ["301"] },
    { key: "APM", values: ["346", "351"] },
  ];
}


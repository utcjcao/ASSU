// Import cheerio only on server side
import * as cheerio from "cheerio";

// Define the data shape for test courses
export interface TestCourse {
  key: string;
  values: string[];
}

// Define the WordPress API response structure
interface WordPressPage {
  id: number;
  date: string;
  slug: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

// Function to clean and normalize text
function cleanText(text: string): string {
  return text
    .trim()
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .replace(/\n+/g, " ") // Replace newlines with spaces
    .replace(/&nbsp;/g, " ") // Replace HTML non-breaking spaces
    .replace(/&amp;/g, "&") // Replace HTML entities
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
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
    if (typeof window !== "undefined") {
      console.warn("fetchTestsData should only be called on server side");
      return getFallbackTests();
    }

    console.log("Fetching tests data from WordPress API...");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(
      "https://assu.ca/wp/wp-json/wp/v2/pages?slug=past-test-library",
      {
        signal: controller.signal,
        headers: {
          "User-Agent": "ASSU-Website/1.0",
        },
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: WordPressPage[] = await response.json();
    console.log("WordPress API response received:", data.length, "pages found");

    if (!data || data.length === 0) {
      console.warn("No past test library page found");
      return getFallbackTests();
    }

    const page = data[0];
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


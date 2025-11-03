/**
 * Type definition for a course test entry.
 * Each entry contains a department code and an array of course numbers.
 */
export type CourseTestEntry = {
  department: string;
  courses: string[];
};

/**
 * WordPress API response type for pages
 */
interface WordPressPage {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  [key: string]: unknown;
}

/**
 * Strips HTML tags from a string
 * @param html The HTML string to clean
 * @returns Plain text without HTML tags
 */
function stripHtmlTags(html: string): string {
  return html
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/&nbsp;/g, " ") // Replace &nbsp; with space
    .replace(/&amp;/g, "&") // Replace &amp; with &
    .replace(/&lt;/g, "<") // Replace &lt; with <
    .replace(/&gt;/g, ">") // Replace &gt; with >
    .replace(/&quot;/g, '"') // Replace &quot; with "
    .replace(/&#39;/g, "'") // Replace &#39; with '
    .replace(/&apos;/g, "'"); // Replace &apos; with '
}

/**
 * Parses a single text line to extract department code and course numbers.
 * 
 * Expected formats:
 * - "ACT: 240, 245, 247, 348, 349, 370"
 * - "ACT - 240, 245, 247"
 * - "ACT 240 245 247"
 * 
 * @param text The text line to parse
 * @returns CourseTestEntry or null if parsing fails
 */
function parseCourseEntry(text: string): CourseTestEntry | null {
  // Match pattern: LETTERS followed by optional separator, then numbers
  const match = text.match(/^([A-Z]{2,4})\s*[:\-–]?\s*(.+)$/);

  if (match) {
    const department = match[1].trim();
    const coursesText = match[2].trim();

    // Extract all course numbers (3-4 digit numbers)
    const courses = coursesText
      .match(/\b\d{3,4}\b/g)
      ?.map((c) => c.trim())
      .filter((c) => c.length > 0) || [];

    if (courses.length > 0) {
      return { department, courses };
    }
  }

  return null;
}

/**
 * Removes duplicate entries and sorts by department code.
 * If a department appears multiple times, combines the courses.
 */
function deduplicateAndSort(data: CourseTestEntry[]): CourseTestEntry[] {
  const map = new Map<string, Set<string>>();

  // Combine courses for same department
  for (const entry of data) {
    if (!map.has(entry.department)) {
      map.set(entry.department, new Set());
    }
    const courseSet = map.get(entry.department)!;
    entry.courses.forEach((course) => courseSet.add(course));
  }

  // Convert back to array and sort
  const result: CourseTestEntry[] = Array.from(map.entries())
    .map(([department, courseSet]) => ({
      department,
      courses: Array.from(courseSet).sort((a, b) => {
        // Sort numerically
        return parseInt(a) - parseInt(b);
      }),
    }))
    .sort((a, b) => a.department.localeCompare(b.department));

  return result;
}

/**
 * Fallback data in case WordPress API fails.
 * This matches the structure from the existing tests page.
 */
function getFallbackData(): CourseTestEntry[] {
  return [
    { department: "ACT", courses: ["240", "245", "247", "348", "349", "370"] },
    { department: "ANA", courses: ["300", "301"] },
    { department: "APM", courses: ["120", "130"] },
  ];
}

/**
 * Fetches and processes course test data from WordPress.
 * 
 * This function:
 * 1. Fetches the past-test-library page from WordPress REST API
 * 2. Uses regex to parse and clean the HTML content (instead of cheerio for Next.js compatibility)
 * 3. Extracts department codes and course numbers
 * 4. Returns formatted data for KeyValueList component
 * 
 * @returns Promise<CourseTestEntry[]> Array of department/course mappings
 */
export async function getCourseTestData(): Promise<CourseTestEntry[]> {
  try {
    // Fetch data from WordPress API
    // Note: The 'next' option is a Next.js extension to fetch
    const response = await fetch(
      "https://assu.ca/wp/wp-json/wp/v2/pages?slug=past-test-library",
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      } as RequestInit
    );

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const data: WordPressPage[] = await response.json();

    if (!data || data.length === 0) {
      console.warn("No data found for past-test-library page");
      return [];
    }

    // Extract HTML content from the first page result
    const htmlContent = data[0]?.content?.rendered || "";

    // Clean HTML and parse with regex (lighter than cheerio, works better with Next.js)
    const courseData: CourseTestEntry[] = [];

    // Strategy 1: Extract text from list items (<li>...</li>)
    const listItemRegex = /<li[^>]*>(.*?)<\/li>/gi;
    let match;
    while ((match = listItemRegex.exec(htmlContent)) !== null) {
      const text = stripHtmlTags(match[1]).trim();
      const parsed = parseCourseEntry(text);
      if (parsed) {
        courseData.push(parsed);
      }
    }

    // Strategy 2: If no lists found, try parsing paragraphs (<p>...</p>)
    if (courseData.length === 0) {
      const paragraphRegex = /<p[^>]*>(.*?)<\/p>/gi;
      while ((match = paragraphRegex.exec(htmlContent)) !== null) {
        const text = stripHtmlTags(match[1]).trim();
        const parsed = parseCourseEntry(text);
        if (parsed) {
          courseData.push(parsed);
        }
      }
    }

    // Strategy 3: If still no data, try parsing table cells
    if (courseData.length === 0) {
      const tableRowRegex = /<tr[^>]*>(.*?)<\/tr>/gi;
      while ((match = tableRowRegex.exec(htmlContent)) !== null) {
        const row = match[1];
        const cellRegex = /<td[^>]*>(.*?)<\/td>/gi;
        const cells: string[] = [];
        let cellMatch;
        while ((cellMatch = cellRegex.exec(row)) !== null) {
          cells.push(stripHtmlTags(cellMatch[1]).trim());
        }
        
        if (cells.length >= 2) {
          const department = cells[0];
          const coursesText = cells[1];
          const courses = coursesText
            .split(/[,;\s]+/)
            .map((c: string) => c.trim())
            .filter((c: string) => /^\d+$/.test(c));

          if (department && courses.length > 0) {
            courseData.push({ department, courses });
          }
        }
      }
    }

    // Strategy 4: Try to parse raw text content as last resort
    if (courseData.length === 0) {
      const plainText = stripHtmlTags(htmlContent);
      const lines = plainText.split("\n");
      
      for (const line of lines) {
        const parsed = parseCourseEntry(line.trim());
        if (parsed) {
          courseData.push(parsed);
        }
      }
    }

    // Deduplicate and sort
    const uniqueData = deduplicateAndSort(courseData);

    return uniqueData;
  } catch (error) {
    console.error("Error fetching course test data:", error);
    // Return fallback data in case of error
    return getFallbackData();
  }
}

/**
 * Type guard to validate CourseTestEntry structure
 */
export function isCourseTestEntry(obj: unknown): obj is CourseTestEntry {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof (obj as CourseTestEntry).department === "string" &&
    Array.isArray((obj as CourseTestEntry).courses) &&
    (obj as CourseTestEntry).courses.every((c: unknown) => typeof c === "string")
  );
}

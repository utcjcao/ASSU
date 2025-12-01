// Import cheerio only on server side
import * as cheerio from "cheerio";

// Define the data shape for executives
export interface Executive {
  name: string;
  title: string;
  image?: string;
  bio: string;
  email: string;
  linkedin?: string;
  instagram?: string;
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
    .replace(/\n+/g, "\n") // Preserve intentional newlines
    .replace(/&nbsp;/g, " ") // Replace HTML non-breaking spaces
    .replace(/&amp;/g, "&") // Replace HTML entities
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, "'") // Right single quotation mark
    .replace(/&#8211;/g, "-") // En dash
    .replace(/&#8212;/g, "--") // Em dash
    .replace(/&apos;/g, "'");
}

// Function to construct image path from name
// Uses only the first name to match existing image naming convention
function constructImagePath(name: string): string | undefined {
  // Extract first name (before first space)
  const firstName = name.split(" ")[0]?.toLowerCase();
  if (!firstName) {
    return undefined;
  }
  return `/images/about-executives-${firstName}.webp`;
}

// Function to extract email from text
function extractEmail(text: string): string | null {
  // Look for patterns like "name[at]assu[dot]ca" or "president[at]assu[dot]ca"
  const emailPattern = /(\w+)\[at\]assu\[dot\](ca|com)/gi;
  const match = text.match(emailPattern);
  if (match) {
    const email = match[0].replace(/\[at\]/gi, "@").replace(/\[dot\]/gi, ".");
    return email.toLowerCase();
  }
  return null;
}

// Function to extract Instagram from text
function extractInstagram(text: string): string | null {
  // Look for @username patterns
  const atPattern = /@([a-zA-Z0-9._]+)/g;
  const atMatch = text.match(atPattern);
  if (atMatch) {
    return atMatch[0]; // Return with @ symbol
  }

  // Look for instagram.com links
  const linkPattern = /instagram\.com\/([a-zA-Z0-9._]+)/gi;
  const linkMatch = text.match(linkPattern);
  if (linkMatch) {
    return `@${linkMatch[0].split("/").pop()}`;
  }

  return null;
}

// Function to clean bio text (remove email and Instagram mentions)
function cleanBio(
  bio: string,
  email: string,
  instagram: string | null
): string {
  let cleaned = bio;

  // Remove email mentions
  if (email) {
    const emailPatterns = [
      email.replace("@", "\\[at\\]").replace(".", "\\[dot\\]"),
      email,
      `email at ${email}`,
      `via email at ${email}`,
      `reach out via email at ${email}`,
      `contact me via email at ${email}`,
      `email me at ${email}`,
    ];
    emailPatterns.forEach((pattern) => {
      cleaned = cleaned.replace(new RegExp(pattern, "gi"), "");
    });
  }

  // Remove Instagram mentions
  if (instagram) {
    const instagramPatterns = [
      instagram,
      `Instagram ${instagram}`,
      `on Instagram ${instagram}`,
      `dm me on Instagram ${instagram}`,
      `dm me directly on Instagram ${instagram}`,
      `shoot me a message on Instagram ${instagram}`,
      `message me on Instagram ${instagram}`,
    ];
    instagramPatterns.forEach((pattern) => {
      cleaned = cleaned.replace(new RegExp(pattern, "gi"), "");
    });

    // Remove instagram.com links
    cleaned = cleaned.replace(/instagram\.com\/[a-zA-Z0-9._]+/gi, "");
  }

  // Clean up extra whitespace
  cleaned = cleaned
    .replace(/\s+/g, " ")
    .replace(/\n\s*\n\s*\n/g, "\n\n") // Replace multiple newlines with double newline
    .trim();

  return cleaned;
}

// Main function to fetch and parse executives data
export async function fetchExecutivesData(): Promise<Executive[]> {
  try {
    // Only run on server side
    if (typeof window !== "undefined") {
      console.warn("fetchExecutivesData should only be called on server side");
      return getFallbackExecutives();
    }

    console.log("Fetching executives data from WordPress API...");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(
      "https://assu.ca/wp/wp-json/wp/v2/pages?slug=assu-executive",
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
      console.warn("No executives page found");
      return getFallbackExecutives();
    }

    const page = data[0];
    const content = page.content.rendered;

    if (!content) {
      console.warn("No content found in executives page");
      return getFallbackExecutives();
    }

    console.log("Parsing HTML content with Cheerio...");

    // Parse HTML content with Cheerio
    const $ = cheerio.load(content);
    const executives: Executive[] = [];

    // Find all h4 tags that contain executive names and titles
    $("h4").each((index: number, element) => {
      const $h4 = $(element);
      const h4Text = cleanText($h4.text());

      // Check if this h4 contains "Name, Title" format
      if (h4Text.includes(",")) {
        const parts = h4Text.split(",").map((p) => cleanText(p));
        if (parts.length >= 2) {
          const name = parts[0];
          const title = parts.slice(1).join(",").trim();

          // Skip if name or title is empty
          if (!name || !title) {
            return;
          }

          // Get the parent section containing this h4
          const $section = $h4.closest("section");
          let bioText = "";

          if ($section.length) {
            // Get all text content from the section
            const sectionText = $section.text();
            const h4Index = sectionText.indexOf(h4Text);

            if (h4Index !== -1) {
              // Extract text after the h4
              bioText = sectionText.substring(h4Index + h4Text.length).trim();

              // Remove any following h4 content (next executive)
              const nextH4Match = bioText.match(
                /\n\s*[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+,/
              );
              if (nextH4Match && nextH4Match.index !== undefined) {
                bioText = bioText.substring(0, nextH4Match.index).trim();
              }

              // Also try to find the next section or hr divider
              const $nextSection = $section.next("section");
              if ($nextSection.length) {
                const nextSectionText = $nextSection.text();
                const nextH4InNextSection = nextSectionText.match(
                  /^[A-Z][a-z]+ [A-Z][a-z]+ [A-Z][a-z]+,/
                );
                if (nextH4InNextSection) {
                  // We've reached the next executive, stop here
                }
              }
            }
          }

          // Fallback: if section approach didn't work, try sibling traversal
          if (!bioText.trim()) {
            let currentNode = element.nextSibling;
            const bioParts: string[] = [];

            while (currentNode) {
              // Wrap node in cheerio to check tag name safely
              const $node = $(currentNode);
              const tagName = $node.prop("tagName")?.toLowerCase();

              // Stop at next h4 tag
              if (tagName === "h4") {
                break;
              }

              // Stop at hr tag (section divider)
              if (tagName === "hr") {
                break;
              }

              // Collect text from p tags and substantial divs
              if (tagName === "p" || tagName === "div") {
                const nodeText = $node.text().trim();
                if (nodeText && nodeText.length > 10) {
                  bioParts.push(nodeText);
                }
              }

              currentNode = currentNode.nextSibling;
            }

            bioText = bioParts.join("\n\n");
          }

          bioText = cleanText(bioText);

          // Extract email and Instagram from bio
          const email = extractEmail(bioText) || "";
          const instagram = extractInstagram(bioText);

          // Clean bio (remove email and Instagram mentions)
          const cleanedBio = cleanBio(bioText, email, instagram);

          // Try to extract image from the section
          let image: string | undefined = undefined;

          // Look for images in the section (excluding emoji images)
          if ($section.length) {
            const $images = $section.find("img");
            $images.each((imgIndex: number, imgElement) => {
              const $img = $(imgElement);
              const imgSrc = $img.attr("src");

              // Skip emoji images and very small images (likely icons)
              if (
                imgSrc &&
                !imgSrc.includes("emoji") &&
                !imgSrc.includes("slack-edge") &&
                !imgSrc.includes("icon") &&
                imgSrc.match(/\.(jpg|jpeg|png|webp|gif)$/i)
              ) {
                // Clean and normalize the image URL
                if (imgSrc.startsWith("http")) {
                  image = imgSrc;
                } else if (imgSrc.startsWith("/")) {
                  image = `https://assu.ca${imgSrc}`;
                } else if (imgSrc.startsWith("../")) {
                  image = `https://assu.ca/wp/${imgSrc.replace(/^\.\.\//, "")}`;
                } else {
                  image = `https://assu.ca/wp/${imgSrc}`;
                }
                return false; // Break the loop after finding first valid image
              }
            });
          }

          // Fallback to local image path if no WordPress image found
          if (!image) {
            image = constructImagePath(name);
          }

          if (name && title) {
            executives.push({
              name,
              title,
              image,
              bio: cleanedBio,
              email:
                email || `${name.toLowerCase().replace(/\s+/g, "")}@assu.ca`,
              instagram: instagram || undefined,
            });
          }
        }
      }
    });

    console.log("Found", executives.length, "executives");

    return executives;
  } catch (error) {
    console.error("Error fetching executives data:", error);
    return getFallbackExecutives();
  }
}

// Helper function to get fallback executives
function getFallbackExecutives(): Executive[] {
  return [
    {
      name: "Farida Kayed",
      title: "President",
      image: "/images/about-executives-farida.webp",
      bio: "Hey Art Sci!\n\nMy name is Farida, and I am a fourth year double majoring in Pharmtox and Human Bio with a minor in immunology. It is an honour to represent you and I am really excited to advocate for you at meetings with members of the Dean's Office, make ASSU services accessible to you and empower our collective Arts and Science community! To unwind, I draw/paint, play piano, basket ball, volleyball and host events across campus!\n\nGot questions, need a chat, or just want to say hi? Drop by my office hours at SS 1068.",
      email: "president@assu.ca",
      instagram: "@faridakayed",
    },
  ];
}

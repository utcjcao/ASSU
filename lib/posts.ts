// Import cheerio only on server side
import * as cheerio from "cheerio";

// Define the data shape for blog posts
export interface BlogPost {
  image: string;
  date: string;
  title: string;
  description: string;
  slug: string;
  dateObj: Date; // Keep original date object for filtering
}

// Define the data shape for a single event/post (used in event detail pages)
export interface EventPost {
  title: string;
  date: string;
  description: string;
  image?: string;
  contentHtml: string;
}

// Define the WordPress API response structure for posts
interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  slug: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  link: string;
  _links?: {
    "wp:featuredmedia"?: Array<{ href: string }>;
  };
}

// Define the WordPress Media API response structure
interface WordPressMedia {
  id: number;
  source_url: string;
  media_details?: {
    sizes?: {
      [key: string]: {
        source_url: string;
        width: number;
        height: number;
      };
    };
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
    .replace(/&apos;/g, "'")
    .replace(/&#038;/g, "&");
}

// Function to format date from ISO string to readable format
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString;
  }
}

// Function to extract text from HTML
function extractTextFromHtml(html: string): string {
  const $ = cheerio.load(html);
  // Remove script and style tags
  $("script, style").remove();
  // Get text content
  let text = $("body").text() || $.text();
  // Clean up the text
  text = cleanText(text);
  // Replace multiple newlines with double newline
  text = text.replace(/\n\s*\n\s*\n/g, "\n\n");
  return text.trim();
}

// Function to extract image from content HTML
function extractImageFromContent(html: string): string | null {
  const $ = cheerio.load(html);
  // Look for images in the content
  const $images = $("img");

  if ($images.length > 0) {
    // Get the first image src
    const firstImage = $images.first();
    const src = firstImage.attr("src");

    if (src) {
      // Clean and normalize the image URL
      if (src.startsWith("http")) {
        return src;
      } else if (src.startsWith("/")) {
        return `https://assu.ca${src}`;
      } else if (src.startsWith("../")) {
        return `https://assu.ca/wp/${src.replace(/^\.\.\//, "")}`;
      } else {
        return `https://assu.ca/wp/${src}`;
      }
    }
  }

  return null;
}

// Function to fetch featured media URL
async function fetchFeaturedMediaUrl(
  mediaId: number,
  featuredMediaLink?: string
): Promise<string | null> {
  try {
    const mediaUrl = featuredMediaLink;

    // If we have a direct link, use it
    if (mediaUrl && mediaUrl.includes("/wp/v2/media/")) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(mediaUrl, {
        signal: controller.signal,
        headers: {
          "User-Agent": "ASSU-Website/1.0",
        },
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const media: WordPressMedia = await response.json();
        return media.source_url;
      }
    }

    // Fallback: try direct media endpoint
    if (mediaId > 0) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(
        `https://assu.ca/wp/wp-json/wp/v2/media/${mediaId}`,
        {
          signal: controller.signal,
          headers: {
            "User-Agent": "ASSU-Website/1.0",
          },
        }
      );

      clearTimeout(timeoutId);

      if (response.ok) {
        const media: WordPressMedia = await response.json();
        return media.source_url;
      }
    }
  } catch (error) {
    console.error("Error fetching featured media:", error);
  }

  return null;
}

// Main function to fetch and parse upcoming posts
export async function fetchUpcomingPosts(): Promise<BlogPost[]> {
  try {
    // Only run on server side
    if (typeof window !== "undefined") {
      console.warn("fetchUpcomingPosts should only be called on server side");
      return getFallbackPosts();
    }

    console.log("Fetching upcoming posts from WordPress API...");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(
      "https://assu.ca/wp/wp-json/wp/v2/posts?categories=28",
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

    const data: WordPressPost[] = await response.json();
    console.log("WordPress API response received:", data.length, "posts found");

    if (!data || data.length === 0) {
      console.warn("No posts found");
      return getFallbackPosts();
    }

    // Sort posts by date (newest first) before processing
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

    // Process each post
    const posts: BlogPost[] = await Promise.all(
      sortedData.map(async (post) => {
        // Extract title
        const title = cleanText(post.title.rendered);

        // Format date
        const date = formatDate(post.date);

        // Extract description from excerpt
        let description = extractTextFromHtml(post.excerpt.rendered);

        // If excerpt is empty or too short, try content
        if (!description || description.length < 50) {
          description = extractTextFromHtml(post.content.rendered);
          // Limit description length
          if (description.length > 500) {
            description = description.substring(0, 500) + "...";
          }
        }

        // Get image
        let image: string | null = null;

        // Try to fetch featured media first
        if (post.featured_media > 0) {
          const featuredMediaLink =
            post._links?.["wp:featuredmedia"]?.[0]?.href;
          image = await fetchFeaturedMediaUrl(
            post.featured_media,
            featuredMediaLink
          );
        }

        // If no featured media, try extracting from content
        if (!image) {
          image = extractImageFromContent(post.content.rendered);
        }

        // Fallback to default image
        if (!image) {
          image = "/images/involved-upcoming-1.webp";
        }

        return {
          image,
          date,
          title,
          description,
          slug: post.slug,
          dateObj: new Date(post.date),
        };
      })
    );

    console.log("Processed", posts.length, "upcoming posts");

    return posts;
  } catch (error) {
    console.error("Error fetching upcoming posts:", error);
    return getFallbackPosts();
  }
}

// Helper function to get fallback posts
function getFallbackPosts(): BlogPost[] {
  return [
    {
      image: "/images/involved-upcoming-1.webp",
      date: "March 4, 2025",
      title: "Test Raffle Contest",
      description:
        "Our famous test library exists solely because students donate their term tests. Help us update our test library by donating yours - your name will be entered in a draw to win one of two pairs of AirPod 3s that we are raffling away!",
      slug: "test-raffle-contest",
      dateObj: new Date("2025-03-04"),
    },
  ];
}

// Function to fetch a single event/post by slug
export async function getEventBySlug(slug: string): Promise<EventPost> {
  try {
    // Only run on server side
    if (typeof window !== "undefined") {
      console.warn("getEventBySlug should only be called on server side");
      throw new Error("getEventBySlug can only be called on server side");
    }

    console.log(`Fetching event with slug: ${slug} from WordPress API...`);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(
      "https://assu.ca/wp/wp-json/wp/v2/posts?categories=28",
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

    const data: WordPressPost[] = await response.json();

    // Find the post with matching slug
    const post = data.find((p) => p.slug === slug);

    if (!post) {
      throw new Error(`Post with slug "${slug}" not found`);
    }

    // Extract title
    const title = cleanText(post.title.rendered);

    // Format date
    const date = formatDate(post.date);

    // Extract description from excerpt
    let description = extractTextFromHtml(post.excerpt.rendered);

    // If excerpt is empty or too short, try content
    if (!description || description.length < 50) {
      description = extractTextFromHtml(post.content.rendered);
      // Limit description length
      if (description.length > 500) {
        description = description.substring(0, 500) + "...";
      }
    }

    // Get image
    let image: string | undefined = undefined;

    // Try to fetch featured media first
    if (post.featured_media > 0) {
      const featuredMediaLink = post._links?.["wp:featuredmedia"]?.[0]?.href;
      const fetchedImage = await fetchFeaturedMediaUrl(
        post.featured_media,
        featuredMediaLink
      );
      if (fetchedImage) {
        image = fetchedImage;
      }
    }

    // If no featured media, try extracting from content
    if (!image) {
      const extractedImage = extractImageFromContent(post.content.rendered);
      if (extractedImage) {
        image = extractedImage;
      }
    }

    // Get full HTML content (cleaned but preserving HTML structure)
    const $ = cheerio.load(post.content.rendered);
    // Remove script and style tags for security
    $("script, style").remove();
    const contentHtml = $.html();

    return {
      title,
      date,
      description,
      image,
      contentHtml,
    };
  } catch (error) {
    console.error(`Error fetching event with slug "${slug}":`, error);
    // Return a fallback event
    return {
      title: "Event Not Found",
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      description: "The requested event could not be found.",
      contentHtml: "<p>The requested event could not be found.</p>",
    };
  }
}

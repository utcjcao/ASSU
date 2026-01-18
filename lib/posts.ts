// Import cheerio only on server side
import * as cheerio from "cheerio";
import { cleanText, extractTextFromHtml } from "@/lib/text";
import { fetchJsonWithTimeout, requireServerOnly } from "@/lib/wp";
import { wpMediaUrl, wpPostsCategoryUrl } from "@/info/links";

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
      const media = await fetchJsonWithTimeout<WordPressMedia>(mediaUrl, {
        timeoutMs: 5000,
        revalidateSeconds: 86400,
      });
      return media.source_url;
    }

    // Fallback: try direct media endpoint
    if (mediaId > 0) {
      const media = await fetchJsonWithTimeout<WordPressMedia>(
        wpMediaUrl(mediaId),
        { timeoutMs: 5000, revalidateSeconds: 86400 }
      );
      return media.source_url;
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
    const serverFallback = requireServerOnly(
      "fetchUpcomingPosts",
      getFallbackPosts
    );
    if (serverFallback !== undefined) return serverFallback;

    console.log("Fetching upcoming posts from WordPress API...");

    const data = await fetchJsonWithTimeout<WordPressPost[]>(
      wpPostsCategoryUrl(28),
      { revalidateSeconds: 86400 }
    );
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
        let description = extractTextFromHtml(post.excerpt.rendered, {
          preserveNewlines: true,
          collapseBlankLines: true,
        });

        // If excerpt is empty or too short, try content
        if (!description || description.length < 50) {
          description = extractTextFromHtml(post.content.rendered, {
            preserveNewlines: true,
            collapseBlankLines: true,
          });
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
    const serverFallback = requireServerOnly("getEventBySlug", () => {
      throw new Error("getEventBySlug can only be called on server side");
    });
    if (serverFallback !== undefined) return serverFallback;

    console.log(`Fetching event with slug: ${slug} from WordPress API...`);

    const data = await fetchJsonWithTimeout<WordPressPost[]>(
      wpPostsCategoryUrl(28),
      { revalidateSeconds: 86400 }
    );

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
    let description = extractTextFromHtml(post.excerpt.rendered, {
      preserveNewlines: true,
      collapseBlankLines: true,
    });

    // If excerpt is empty or too short, try content
    if (!description || description.length < 50) {
      description = extractTextFromHtml(post.content.rendered, {
        preserveNewlines: true,
        collapseBlankLines: true,
      });
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

import { getEventBySlug, fetchUpcomingPosts } from "@/lib/posts";
import Image from "next/image";
import HeroText from "../../../components/sections/HeroText";

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getEventBySlug(slug);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 font-sans">
      <HeroText text={post.title} />
      <p className="text-base italic text-gray-500 mb-6">{post.date}</p>
      <p className="text-lg text-gray-700 mb-6">{post.description}</p>

      {post.image && (
        <div className="flex justify-center mb-6">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
      )}

      <div
        className="text-lg prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}

// ✅ Static generation for dynamic slugs from WordPress
export async function generateStaticParams() {
  try {
    // Fetch all posts to get their slugs
    const posts = await fetchUpcomingPosts();
    
    // We need to fetch the actual WordPress posts to get slugs
    // Since fetchUpcomingPosts doesn't return slugs, we'll fetch directly
    if (typeof window !== "undefined") {
      return [];
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(
      "https://assu.ca/wp/wp-json/wp/v2/posts?categories=24",
      {
        signal: controller.signal,
        headers: {
          "User-Agent": "ASSU-Website/1.0",
        },
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return [];
    }

    const data = await response.json();
    
    return data.map((post: { slug: string }) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params for events:", error);
    return [];
  }
}

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
  const hasContentImage = /<img\b/i.test(post.contentHtml);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 font-sans">
      <HeroText text={post.title} />
      <p className="text-base italic text-gray-500 mb-6">{post.date}</p>
      <p className="text-base text-gray-500 mb-6">{post.description}</p>

      {post.image && !hasContentImage && (
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
        className="event-content text-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const posts = await fetchUpcomingPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params for events:", error);
    return [];
  }
}

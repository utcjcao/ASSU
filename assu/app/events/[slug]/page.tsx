import { getEventBySlug } from "@/lib/posts";
import fs from "fs";
import path from "path";
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

// ✅ Static generation for dynamic slugs
export async function generateStaticParams() {
  const eventsDirectory = path.join(process.cwd(), "events", "upcoming");
  const filenames = fs.readdirSync(eventsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

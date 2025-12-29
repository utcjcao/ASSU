import HeroText from "../../../components/sections/HeroText";
import BlogList from "@/components/common/BlogList";
import { fetchUpcomingPosts } from "@/lib/posts";

export async function generateStaticParams() {
  try {
    const posts = await fetchUpcomingPosts();
    console.log(`Fetched ${posts.length} upcoming posts at build time`);
    return [{}];
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [{}];
  }
}

export default async function Upcoming() {
  // Fetch upcoming posts data at build time
  const allPosts = await fetchUpcomingPosts();

  // Sort all events by date (newest first)
  const sortedPosts = [...allPosts].sort(
    (a, b) => b.dateObj.getTime() - a.dateObj.getTime()
  );

  return (
    <>
      <HeroText text="Events" />
      {sortedPosts.length > 0 && <BlogList posts={sortedPosts} />}
      {sortedPosts.length === 0 && (
        <p className="text-center text-gray-dark py-8">
          No events to display.
        </p>
      )}
    </>
  );
}

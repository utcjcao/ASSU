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

  // Get current date (at start of day for comparison)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Separate upcoming and past events
  const upcomingPosts = allPosts.filter((post) => {
    // Clone the date to avoid mutating the original
    const postDate = new Date(post.dateObj.getTime());
    postDate.setHours(0, 0, 0, 0);
    return postDate >= today;
  });

  const pastPosts = allPosts.filter((post) => {
    // Clone the date to avoid mutating the original
    const postDate = new Date(post.dateObj.getTime());
    postDate.setHours(0, 0, 0, 0);
    return postDate < today;
  });

  // Sort upcoming posts by date (earliest first) and past posts by date (newest first)
  upcomingPosts.sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());
  pastPosts.sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());

  console.log(
    `Filtered posts: ${upcomingPosts.length} upcoming, ${pastPosts.length} past`
  );

  return (
    <>
      <HeroText text="Events" />
      {pastPosts.length > 0 && <BlogList posts={pastPosts} />}
      {pastPosts.length === 0 && (
        <p className="text-center text-gray-dark py-8">
          No past events to display.
        </p>
      )}
    </>
  );
}

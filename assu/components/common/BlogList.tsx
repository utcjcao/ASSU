import BlogCard from "./BlogCard";
import React from "react";

type BlogPost = {
  image: string;
  date: string;
  title: string;
  description: string;
};

type BlogListProps = {
  posts: BlogPost[];
};

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="flex flex-col items-center my-8">
      <div className="w-full max-w-3xl space-y-6">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;

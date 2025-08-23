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
    <div>
      {posts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogList;

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import breaks from "remark-breaks";

const eventsDirectory = path.join(process.cwd(), "events", "upcoming");

export interface EventPost {
  slug: string;
  contentHtml: string;
  title: string;
  date: string;
  description: string;
  image?: string;
}

export async function getEventBySlug(slug: string): Promise<EventPost> {
  const fullPath = path.join(eventsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(breaks).use(html).process(content);
  const contentHtml = processedContent.toString();

  const { title, date, description, image } = data;

  return {
    slug,
    contentHtml,
    title,
    date,
    description,
    image,
  };
}

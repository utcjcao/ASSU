import Image from "next/image";
import { ImageCarousel } from "@/components/common/ImageCarousel";
import ContentGrid, { ContentItem } from "@/components/layout/ContentGrid";
import Button from "@/components/common/Button";
import HeroText from "@/components/sections/HeroText";
import CardGrid from "@/components/layout/CardGrid";
import { fetchUpcomingPosts } from "@/lib/posts";

const serviceItems: ContentItem[] = [
  {
    id: "events",
    title: "Events",
    description:
      "Get to know your peers and enhance your university experience.",
    node: <Button className="mt-4 w-20">VIEW</Button>,
  },
  {
    id: "initiatives",
    title: "Our Initiatives",
    description:
      "Explore our projects and advocacy efforts aimed at improving student life.",
    node: <Button className="mt-4 w-20">VIEW</Button>,
  },
  {
    id: "office",
    title: "Office Services",
    description:
      "Printing, copying, and fax services to support your academic needs.",
    node: <Button className="mt-4 w-20">VIEW</Button>,
  },
  {
    id: "financial",
    title: "Financial Help",
    description: "Discover scholarships and grants to support your education.",
    node: <Button className="mt-4 w-20">VIEW</Button>,
  },
];

export default async function Home() {
  const posts = await fetchUpcomingPosts();
  const featuredPosts = posts.slice(0, 3);
  const cardItems = featuredPosts.map((post, index) => ({
    id: post.slug ?? `post-${index}`,
    imageSrc: post.image,
    imageAltText: post.title,
    title: post.title,
    href: `/events/${post.slug}`,
  }));

  return (
    <div>
      {/* Desktop / tablet carousel */}
      <div className="hidden md:block">
        <ImageCarousel />
      </div>
      {/* Mobile single hero */}
      <div className="md:hidden relative w-full rounded-lg overflow-hidden">
        <Image
          src="/images/home-carousel-1.webp"
          alt="Welcome to the ASSU Website"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/5 flex items-center px-6">
          <h2 className="text-3xl font-bold text-white leading-tight">
            Welcome to the ASSU Website.
          </h2>
        </div>
      </div>
      <HeroText text="ASSU News" />
      <CardGrid items={cardItems} columns={3} className="px-5" />
      {/* insert here */}
      <HeroText text="Our Services" />
      <ContentGrid items={serviceItems} columns={2} />
      <HeroText text="Empowering Students, Building a Community" />
    </div>
  );
}

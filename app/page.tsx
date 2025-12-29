"use client";

import Image from "next/image";
import { ImageCarousel } from "@/components/common/ImageCarousel";
import ContentGrid, { ContentItem } from "@/components/layout/ContentGrid";
import Button from "@/components/common/Button";
import HeroText from "@/components/sections/HeroText";

const serviceItems: ContentItem[] = [
  {
    id: "events",
    node: (
      <div className=" gap-3 items-start">
        {/* Text + button */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Events
          </h3>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            Get to know your peers and enhance your university experience.
          </p>
          <Button className="mt-4 w-20">VIEW</Button>
        </div>
      </div>
    ),
  },
  {
    id: "initiatives",
    node: (
      <div className=" gap-3 items-start">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Our Initiatives
          </h3>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            Explore our projects and advocacy efforts aimed at improving student
            life.
          </p>
          <Button className="mt-4 w-20">VIEW</Button>
        </div>
      </div>
    ),
  },
  {
    id: "office",
    node: (
      <div className=" gap-3 items-start">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Office Services
          </h3>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            Printing, copying, and fax services to support your academic needs.
          </p>
          <Button className="mt-4 w-20">VIEW</Button>
        </div>
      </div>
    ),
  },
  {
    id: "financial",
    node: (
      <div className=" gap-3 items-start">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Financial Help
          </h3>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            Discover scholarships and grants to support your education.
          </p>
          <Button className="mt-4 w-20">VIEW</Button>
        </div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div className="w-full mx-auto px-4">
      <div className="w-full py-8">
        {/* Desktop / tablet carousel */}
        <div className="hidden md:block">
          <ImageCarousel />
        </div>
        {/* Mobile single hero */}
        <div className="md:hidden relative w-full h-64 rounded-lg overflow-hidden">
          <Image
            src="/images/home-carousel-1.webp"
            alt="Welcome to the ASSU Website"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center px-6">
            <h2 className="text-3xl font-bold text-white leading-tight">
              Welcome to the ASSU Website.
            </h2>
          </div>
        </div>
      </div>

      <HeroText text="Our Services" />
      <ContentGrid items={serviceItems} columns={2} />
      <HeroText text="Empowering Students, Building a Community" />
    </div>
  );
}

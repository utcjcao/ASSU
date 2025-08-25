"use client";

import Divider from "components/common/Divider";
// import CardGrid from "components/layout/CardGrid";
import { ImageCarousel } from "@/components/common/ImageCarousel";
import React from "react";
import ContentGrid, { ContentItem } from "@/components/layout/ContentGrid";
import Button from "@/components/common/Button";
import Image from "next/image";

const serviceItems: ContentItem[] = [
  {
    id: "events",
    node: (
      <div className="grid grid-cols-[28px_1fr] gap-3 items-start">
        {/* Icon */}
        <Image
          src="/svg/star.svg"
          alt="Events icon"
          width={28}
          height={28}
          className="text-pink-500"
        />
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
      <div className="grid grid-cols-[28px_1fr] gap-3 items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M12 4 L6 14 H18 Z" />

          <path d="M12 10 L6 20 H18 Z" />
        </svg>
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
      <div className="grid grid-cols-[28px_1fr] gap-3 items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="4" y="4" width="10" height="10" />
          <rect x="10" y="10" width="10" height="10" />
        </svg>
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
      <div className="grid grid-cols-[28px_1fr] gap-3 items-start">
        <Image
          src="/svg/circle.svg"
          alt="Financial Help icon"
          width={28}
          height={28}
        />
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

const outerItems: ContentItem[] = [
  {
    id: "heading",
    node: (
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
        Our Services
      </h2>
    ),
  },
  {
    id: "services-grid",
    node: <ContentGrid items={serviceItems} columns={2} />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Divider />
      <ImageCarousel></ImageCarousel>

      {/* <HeroText>ASSU News</HeroText> */}

      <Divider />
      {/* card grid */}

      <section className="mx-auto px-4 ">
        <ContentGrid
          items={outerItems}
          columns={2}
          className="grid-cols-[2fr_5fr]"
        />
      </section>
      <Divider />
      <div className="flex justify-center">
        {/* Left icons */}
        <div className="flex items-center space-x-2">
          <Image
            src="/svg/cloud.svg"
            alt="Gray flower icon"
            width={32}
            height={32}
          />
          <Image
            src="/svg/cloud.svg"
            alt="Pink flower icon"
            width={32}
            height={32}
          />
        </div>

        {/* Divider line */}
        <div className="mx-3 h-8 w-px bg-gray-400" />

        {/* Text */}
        <p className="text-2xl text-gray-900">
          Empowering Students, Building a Community
        </p>
      </div>
      <Divider />

      {/* services */}
      {/* hero text */}
    </div>
  );
}

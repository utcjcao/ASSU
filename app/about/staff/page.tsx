"use client";

import React from "react";
import Text from "@/components/common/Text";
import Image from "next/image";
import HeroText from "@/components/sections/HeroText";
import Divider from "@/components/common/Divider";

type StaffMember = {
  name: string;
  title: string;
  email: string;
  image?: string;
  bio: string;
};

const staff: StaffMember[] = [
  {
    name: "Gavin Nowlan",
    title: "Student Advisor",
    email: "gavin.nowlan@utoronto.ca",
    image: "/images/about-staff-gavin.webp",
    bio: "Gavin, a former two-term ASSU President, graduated with a degree in History, Near and Middle Eastern Civilization, and Sexual Diversity Studies. After pursuing graduate studies, Gavin returned to the Faculty of Arts and Science.",
  },
  {
    name: "Jane Seto Paul",
    title: "Executive Co-ordinator",
    email: "jane.seto@utoronto.ca",
    image: "/images/about-staff-jane.webp",
    bio: "Jane graduated from UofT’s New College in 1992 with a Bachelor of Science degree, majoring in Psychology and Anthropology. In her spare time, she enjoys music, movies, travel, golf, shopping and card making.",
  },
];

export default function Staff() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <HeroText text="Our Staff"></HeroText>
      <Text as="p" className=" text-[var(--color-text-secondary)] mb-4">
        At the heart of the ASSU is a dedicated group of individuals committed
        to enriching the academic and campus experience for all Arts and Science
        students at the University of Toronto.
      </Text>
      <Divider></Divider>

      {/* Staff Grid */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {staff.map((member, index) => (
          <div
            key={`${member.name}-${index}`}
            className="bg-white rounded-lg shadow-sm p-6 md:p-8 flex flex-col space-y-6"
          >
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-gray-200">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={`${member.name}${
                    member.title ? ` - ${member.title}` : ""
                  }`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                  No image available
                </div>
              )}
            </div>

            <div className="space-y-3">
              <Text
                as="h2"
                className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]"
              >
                {member.name}
              </Text>
              {member.title && (
                <Text
                  as="h3"
                  className="text-xl md:text-2xl text-[var(--color-text-primary)]"
                >
                  {member.title}
                </Text>
              )}
            </div>

            <Text
              as="p"
              className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg whitespace-pre-line"
            >
              {member.bio}
            </Text>

            <a
              href={`mailto:${member.email}`}
              className="text-pink font-semibold underline"
            >
              {member.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

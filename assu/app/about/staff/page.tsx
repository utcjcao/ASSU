"use client";

import React from "react";
import Text from "@/components/common/Text";
import Divider from "@/components/common/Divider";
import Image from "next/image";
import ContentGrid, { ContentItem } from "@/components/layout/ContentGrid";

const staffItems: ContentItem[] = [
  {
    id: "gavin-image",
    node: (
      <Image
        src="/images/about-staff-gavin.webp"
        alt="Photo of Gavin Nowlan"
        width={220}
        height={220}
        className="rounded-lg object-cover"
      />
    ),
  },
  {
    id: "gavin-details",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600">Student Advisor</p>
        <h3 className="text-2xl font-bold text-black">Gavin Nowlan</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          Gavin, a former two-term ASSU President, graduated with a degree in
          History, Near and Middle Eastern Civilization, and Sexual Diversity
          Studies. After pursuing graduate studies, Gavin returned to the
          Faculty of Arts and Science.
        </p>
        <a
          href="mailto:gavin.nowlan@utoronto.ca"
          className="flex items-center gap-2 text-pink-600 hover:underline"
        >
          <span className="text-lg">
            <svg
              data-bbox="20 44.5 160 110.999"
              viewBox="0 0 200 200"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              data-type="shape"
              fill="currentColor"
              className="text-pink-500"
            >
              <g>
                <path d="M109.336 104.331a17.481 17.481 0 0 1-18.671 0L20.222 59.784H20v78.442c0 9.54 7.784 17.273 17.386 17.273h125.228c9.602 0 17.386-7.733 17.386-17.273V59.784h-.222l-70.442 44.547z"></path>
                <path d="M22.578 44.5l.215.125 68.173 43.111a16.917 16.917 0 0 0 18.069 0l68.173-43.111.215-.125H22.578z"></path>
              </g>
            </svg>
          </span>
          gavin.nowlan@utoronto.ca
        </a>
      </div>
    ),
  },
  {
    id: "jane-image",
    node: (
      <Image
        src="/images/about-staff-jane.webp"
        alt="Photo of Jane Seto Paul"
        width={220}
        height={220}
        className="rounded-lg object-cover"
      />
    ),
  },
  {
    id: "jane-details",
    node: (
      <div className="space-y-3">
        <p className="text-sm text-gray-600">Executive Co-ordinator</p>
        <h3 className="text-2xl font-bold text-black">Jane Seto Paul</h3>
        <p className="text-gray-700 text-base leading-relaxed">
          Jane graduated from UofT – New College in 1992 with a Bachelor of
          Science degree, majoring in Psychology and Anthropology. In her spare
          time, she enjoys music, movies, travel, golf, shopping and card
          making.
        </p>
        <a
          href="mailto:jane.seto@utoronto.ca"
          className="flex items-center gap-2 text-pink-600 hover:underline"
        >
          <span className="text-lg">
            <svg
              data-bbox="20 44.5 160 110.999"
              viewBox="0 0 200 200"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              data-type="shape"
              fill="currentColor"
              className="text-pink-500"
            >
              <g>
                <path d="M109.336 104.331a17.481 17.481 0 0 1-18.671 0L20.222 59.784H20v78.442c0 9.54 7.784 17.273 17.386 17.273h125.228c9.602 0 17.386-7.733 17.386-17.273V59.784h-.222l-70.442 44.547z"></path>
                <path d="M22.578 44.5l.215.125 68.173 43.111a16.917 16.917 0 0 0 18.069 0l68.173-43.111.215-.125H22.578z"></path>
              </g>
            </svg>
          </span>
          jane.seto@utoronto.ca
        </a>
      </div>
    ),
  },
];

export default function Staff() {
  return (
    <div className="min-h-screen bg-gray-lighter">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16">
          <Divider className="mb-8" width="100%" maxWidth="100%" />
          <Text
            as="h1"
            className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4"
          >
            Our Staff
          </Text>
          <Divider className="mb-6" width="100%" maxWidth="100%" />
          <Text
            as="p"
            className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-4"
          >
            At the heart of the ASSU is a dedicated group of individuals
            committed to enriching the academic and campus experience for all
            Arts and Science students at the University of Toronto.
          </Text>
          <div className="w-full h-px bg-black opacity-25"></div>
        </div>

        {/* Staff Grid */}
        <div className="max-w-5xl mx-auto">
          <ContentGrid items={staffItems} columns={2} />
        </div>
      </div>
    </div>
  );
}

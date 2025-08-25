"use client";

import React from "react";
import Button from "@/components/common/Button";
import ContentGrid, { ContentItem } from "@/components/layout/ContentGrid";     
import Divider from "@/components/common/Divider";     

// Define data
const items: ContentItem[] = [
    {
      id: "news",
      title: "ASSU News",
      description:
        "Stay up to date with the latest announcements, events, and advocacy efforts from the Arts & Science Students’ Union.",
      node: (
        <Button aria-label="Explore ASSU News">
          <a href="/news">Explore →</a>
        </Button>
      ),
    },
    {
      id: "initiatives",
      title: "Our Initiatives",
      description:
        "Discover the projects, initiatives, and campaigns we’re currently working on to support and enhance the student experience.",
      node: (
        <Button aria-label="Explore Initiatives">
          <a href="/get-involved/initiatives">Explore →</a>
        </Button>
      ),
    },
    {
      id: "arbor",
      title: "Arbor Journal",
      description:
        "Showcasing student voices and academic excellence. Explore insightful articles, research, and creative works in our annual publication.",
      node: (
        <Button aria-label="Explore Arbor Journal">
          <a href="/get-involved/arbor-journal">Explore →</a>
        </Button>
      ),
    },
    {
      id: "universal-minds",
      title: "Project: Universal Minds",
      description:
        "A volunteer-based tutoring program that connects U of T students with local high school students, offering free one-on-one academic support.",
      node: (
        <Button aria-label="Explore Project: Universal Minds">
          <a href="/get-involved/universal-minds">Explore →</a>
        </Button>
      ),
    },
  ];

export default function GetInvolved() {
  return (
  <div className="min-h-screen bg-gray-lighter" aria-labelledby="page-title">
      <main className="max-w-5xl mx-auto px-6 py-12">
        
        <Divider />
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8">Get Involved</h1>
        <Divider />

        {/* ContentGrid draws the thin separators between cells like the mock */}
        <ContentGrid
          items={items}
          columns={2}
          ariaLabel="Get Involved options"
          className="mt-6"
        />

        <Divider />
      </main>
    </div>
  );
}

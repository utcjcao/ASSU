"use client";

import React from "react";
import Button from "@/components/common/Button";
import ContentGrid, { ContentItem } from "@/components/layout/ContentGrid";
import Divider from "@/components/common/Divider";
import AssuImage from "@/components/common/AssuImage";

// Content items for the Initiatives page (pairs row-by-row in the grid)
const items: ContentItem[] = [
  // Row 1: Intro (left) + URC (right)
  {
    id: "intro",
    title: "Our Initiatives",
    description:
      "At ASSU, we are proud to support student growth through a range of initiatives. These programs celebrate academic excellence, foster community connections, and provide creative spaces for students to share their voices.",
  },
  {
    id: "urc",
    title: "Undergraduate Research Conference",
    description:
      "An annual event where students from all Arts & Science disciplines present their research through oral and poster presentations.",
    node: (
      <Button ariaLabel="Explore Undergraduate Research Conference">
        <a href="/get-involved/urc">Explore →</a>
      </Button>
    ),
  },

  // Row 2: Arbor Journal (left) + Project: Universal Minds (right)
  {
    id: "arbor",
    title: "Arbor Journal",
    description:
      "A student‑run, multidisciplinary journal that publishes outstanding undergraduate research and creative work across humanities, social sciences, and sciences.",
    node: (
      <Button ariaLabel="Explore Arbor Journal">
        <a href="/get-involved/arbor-journal">Explore →</a>
      </Button>
    ),
  },
  {
    id: "universal-minds",
    title: "Project\nUniversal Minds",
    description:
      "A volunteer‑based tutoring program connecting U of T students with local high school students to provide free one‑on‑one academic support in Math, Science, and English.",
    node: (
      <Button ariaLabel="Explore Project Universal Minds">
        <a href="/get-involved/universal-minds">Explore →</a>
      </Button>
    ),
  },

  // Row 3: Open Mic Night (left) + Room 1068 Podcast (right)
  {
    id: "open-mic",
    title: "Open Mic Night",
    description:
      "An event held at The Cat’s Eye, offering students a platform to showcase their talents in a relaxed setting.",
    node: (
      <AssuImage
        src="/images/involved-initiatives-openmic.webp"
        alt="Open mic night image"
      />
    ),
  },
  {
    id: "room-1068",
    title: "Room 1068 Podcast",
    description:
      "ASSU’s podcast featuring discussions with students, faculty, and community members on topics relevant to the university community.",
    node: (
      <AssuImage
        src="/images/involved-initiatives-podcast.webp"
        alt="Podcast image"
      />
    ),
  },
];

export default function InitiativesPage() {
  return (
    <div className="min-h-screen bg-gray-lighter" aria-labelledby="page-title">
      <main className="max-w-5xl mx-auto px-6 py-12">
        <Divider />
        <h1 id="page-title" className="text-4xl font-bold mb-8">
          Our Initiatives
        </h1>
        <Divider />

        {/* ContentGrid draws the thin separators between cells like the mock */}
        <ContentGrid
          items={items}
          columns={2}
          ariaLabel="Initiatives grid"
          className="mt-6"
        />

        <Divider />
      </main>
    </div>
  );
}
"use client";

import React from "react";
import Divider from "@/components/common/Divider";
import Text from "@/components/common/Text";
import ContentGrid from "@/components/layout/ContentGrid";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";

const MAX_COLS = 4;
const CARD_W = 300; // ImageCard size="md" -> 300px (sm=280, lg=320)
const GAP = 16; // === Tailwind gap-4
const CONTENT_MAX = MAX_COLS * CARD_W + (MAX_COLS - 1) * GAP; // px

type CourseUnion = {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  subtitle: string;
  desc: React.ReactNode;
};

const unions: CourseUnion[] = [
  {
    id: "asa",
    name: "Anthropology Students’ Association",
    image: "/images/unions-asa.webp",
    imageAlt: "Anthropology Students’ Association event photo",
    subtitle: "(ASA)",
    desc: (
      <div className="flex flex-col gap-2">
        <p>
          <a
            data-auto-recognition="true"
            href="http://anthro.sa.utoronto.ca"
            target="_blank"
          >
            http://anthro.sa.utoronto.ca
          </a>
          <br />
          <a
            data-auto-recognition="true"
            href="mailto:asa.students@utoronto.ca"
          >
            asa.students@utoronto.ca
          </a>
          <br />
          <a
            data-auto-recognition="true"
            href="https://www.facebook.com/groups/ANTHROPOLOGYROCKS"
            target="_blank"
          >
            https://www.facebook.com/groups/ANTHROPOLOGYROCKS
          </a>
          <br />
          <a
            data-auto-recognition="true"
            href="https://www.instagram.com/utorontoasa/"
            target="_blank"
          >
            https://www.instagram.com/utorontoasa/
          </a>
        </p>
      </div>
    ),
  },
  {
    id: "ascu",
    name: "African Studies Course Union",
    image: "/images/unions-ascu.webp",
    imageAlt: "African Studies Course Union photo",
    subtitle: "(ASCU)",
    desc: (
      <div className="flex flex-col gap-2">
        <p>
          <a data-auto-recognition="true" href="mailto:asc.union@gmail.com">
            asc.union@gmail.com
          </a>
          <br />
          <a
            data-auto-recognition="true"
            href="https://www.instagram.com/uoftascu/"
            target="_blank"
          >
            https://www.instagram.com/uoftascu/
          </a>
        </p>
      </div>
    ),
  },
  {
    id: "bus",
    name: "Biochemistry Undergraduate Students’ Society",
    image: "/images/unions-buss.webp",
    imageAlt: "Biochemistry Undergraduate Students’ Society photo",
    subtitle: "(BUSS)",
    desc: (
      <div className="flex flex-col gap-2">
        <p>
          <a
            data-auto-recognition="true"
            href="http://buss.biochemistry.utoronto.ca"
            target="_blank"
          >
            http://buss.biochemistry.utoronto.ca
          </a>
          <br />
          <a data-auto-recognition="true" href="mailto:uoftbuss@gmail.com">
            uoftbuss@gmail.com
          </a>
          <br />
          <a
            data-auto-recognition="true"
            href="https://www.facebook.com/groups/2219352191"
            target="_blank"
          >
            https://www.facebook.com/groups/2219352191
          </a>
          <br />
          <a
            data-auto-recognition="true"
            href="https://www.instagram.com/uoftbuss/"
            target="_blank"
          >
            https://www.instagram.com/uoftbuss/
          </a>
        </p>
      </div>
    ),
  },
  {
    id: "bcbsa",
    name: "Bioinformatics & Computational Biology Students' Association",
    image: "/images/unions-bcbsa.webp",
    imageAlt: "Bioinformatics & Computational Biology Students' Association",
    subtitle: "(BCBSA)",
    desc: (
      <div className="flex flex-col gap-2">
        <p>
          <a data-auto-recognition="true" href="mailto:bcbsa.uoft@gmail.com">
            bcbsa.uoft@gmail.com
          </a>
          <br />
          <a
            data-auto-recognition="true"
            href="https://www.instagram.com/bcbsa.uoft/"
            target="_blank"
          >
            https://www.instagram.com/bcbsa.uoft/
          </a>
        </p>
      </div>
    ),
  },
];

export default function CourseUnionsPage() {
  return (
    <main className="min-h-screen bg-gray-lighter" aria-labelledby="page-title">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <Divider className="mb-8" width="100%" />

        <div className="mx-auto px-4" style={{ maxWidth: `${CONTENT_MAX}px` }}>
          <Text
            as="h1"
            className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4"
          >
            Course Unions
          </Text>
        </div>
        <Divider className="mb-8" width="100%" />
        <Text
          as="p"
          className="text-base md:text-xl lg:text-2xl text-[var(--color-text-primary)] mb-4"
        >
          Course Unions are the core of the Arts and Science Students’ Union.
          From A to Z, Anthropology to Women & Gender Studies, these academic
          unions represent the students in disciplines within the Faculty of
          Arts and Science and by taking any course you are automatically a part
          of them.
          <br />
          <br />
          We have nearly 55 active Course Unions offering several academic and
          social services for their members. While each Course Union is unique,
          both in vision and in form, all share the common goals of meeting
          students’ needs and representing students’ views.
        </Text>
        <Divider className="mb-6" width="100%" />
        <div className="mx-auto px-4" style={{ maxWidth: `${CONTENT_MAX}px` }}>
          <section aria-label="Course unions list" className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {unions.map((union) => (
                <AccordionItem key={union.id} value={union.id}>
                  <AccordionTrigger>
                    <span className="flex-1 text-left">
                      {union.name} {union.subtitle}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="flex flex-col gap-4">
                      <Image
                        src={union.image}
                        alt={union.imageAlt}
                        width={300}
                        height={200}
                        className="w-full max-w-md rounded-lg object-cover"
                      />
                      {union.desc}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-6">
        <Divider width="100%" />
      </div>
    </main>
  );
}

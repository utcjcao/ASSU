import React from "react";
import HeroText from "@/components/sections/HeroText";
import AssuImage from "@/components/common/AssuImage";
import Text from "@/components/common/Text";
import Link from "@/components/common/Link";
import ContentGrid, { ContentItem } from "@/components/layout/ContentGrid";
import Divider from "@/components/common/Divider";

const items: ContentItem[] = [
  {
    id: "pum-image",
    node: (
      <AssuImage
        src="/images/pum.webp"
        alt="Project Universal Minds Poster"
        aspectClassName="aspect-[3/4]"
      />
    ),
  },
  {
    id: "pum-text",
    node: (
      <div className="space-y-4">
        <Text as="p">
          Project: Universal Minds is a program that brings students at the
          University of Toronto closer to their community.
        </Text>
        <Text as="p">
          It’s a volunteer-based tutoring program for struggling high school
          students in schools near our campus. You’ll meet one-on-one with a
          student either in person at a local school or using an online meeting
          platform (like Zoom). This program is different from other programs in
          that it’s a free tutoring service for high school students.
        </Text>
        <Text as="p">
          As university students our tutors serve as much as mentors as they do
          teachers as they are showing high school students the opportunities
          available to them in post-secondary education.
        </Text>
        <Text as="p">
          Project: Universal Minds currently offers tutoring in Math, Science
          and English, tutors are free to select a particular tutoring
          discipline, but are not limited to sticking to one subject when
          tutoring.
        </Text>
      </div>
    ),
  },
];

export default function UniversalMindsPage() {
  return (
    <div className="flex flex-col">
      <HeroText text="Project: Universal Minds" />
      <ContentGrid
        items={items}
        columns={2}
        ariaLabel="Project Universal Minds content"
        className="max-w-4xl mx-auto"
      />
      <Divider />
      <Text as="p">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Each tutor must meet with their student for a minimum of one hour
            per week (CCR recognized program).
          </li>
          <li>
            Tutors have the freedom to meet with their students at a time that
            fits their own schedules.
          </li>
          <li>
            Both Undergrad and Graduate students at the University of Toronto
            are welcome to apply.
          </li>
          <li>
            It&apos;s perfect for hands on teaching experience or serving as a
            prerequisite for teachers college.
          </li>
        </ul>
      </Text>
      <HeroText text="To Apply" />
      <Text as="p">
        Fill out the{" "}
        <Link href="https://assu.ca/wp/wp-content/uploads/2025/08/PUM-Tutor-Application-2025-2026-fillable.pdf">
          application form
        </Link>{" "}
        and submit to ASSU office (SS1068) or by email
        (gavin.nowlan@utoronto.ca) ​ If you have any questions regarding the
        program or are interested in getting involved please contact the
        co-coordinator Gavin Nowlan: gavin.nowlan@utoronto.ca
      </Text>
    </div>
  );
}

import React from "react";
import HeroText from "@/components/sections/HeroText";
import AssuImage from "@/components/common/AssuImage";
import Text from "@/components/common/Text";
import ContentGrid, { ContentItem } from "@/components/layout/ContentGrid";
import Divider from "@/components/common/Divider";
import Link from "@/components/common/Link";

const items: ContentItem[] = [
  {
    id: "urc-image",
    node: (
      <AssuImage
        src="/images/urc.avif"
        alt="Undergraduate Research Conference"
        aspectClassName="aspect-[4/3]"
        imgClassName="object-contain"
        className="mx-auto"
      />
    ),
  },
  {
    id: "urc-text",
    node: (
      <div className="space-y-4">
        <Text as="p" className="text-lg">
          This annual event celebrates the diverse research endeavors of
          undergraduate students across all Arts & Science disciplines,
          including the humanities, social sciences, and sciences. Whether
          you&apos;ve conducted research through coursework, independent study,
          or other academic projects, URC offers a platform to present your
          findings to peers, faculty, and the broader university community.
        </Text>
        <Text as="p" className="text-lg">
          Students can choose between oral presentations and poster sessions.
        </Text>
        <Text as="p" className="text-lg">
          2025 Event date: Feb 28, 2025
        </Text>
        <Text as="p" className="text-lg">
          2025 Submission deadline: Jan 10, 2025
        </Text>
        <Text as="p" className="text-lg">
          Apply <Link href="https://forms.gle/DxYUDSrsHfqWpZ1v7">here</Link>.
        </Text>
      </div>
    ),
  },
];

export default function UrcPage() {
  return (
    <div className="flex flex-col">
      <HeroText text="Undergraduate Research Conference" />
      <ContentGrid items={items} columns={2} ariaLabel="URC overview" />
      <Divider></Divider>
      <div className="space-y-4">
        <Text as="p" className="text-lg">
          ASSU is also seeking dedicated students to join the URC 2025
          Selections Committee.
        </Text>
        <Text as="p" className="text-lg">
          As a committee member, you&apos;ll play a crucial role in reviewing
          and selecting abstracts for the conference presentations. This is an
          excellent opportunity to engage with the research community, develop
          critical evaluation skills, and contribute to the success of a major
          academic event.
        </Text>
        <Text as="p" className="text-lg">
          2025 Application deadline: Dec 31, 2024
        </Text>
        <Text as="p" className="text-lg">
          Application form can be found{" "}
          <Link href="https://forms.gle/saPyWyBeyWRifPcLA">here</Link>.
        </Text>
        <Text as="p" className="text-lg">
          If you have any questions regarding the program or are interested in
          getting involved please contact the co-coordinator Gavin Nowlan:
          gavin.nowlan@utoronto.ca
        </Text>
      </div>
    </div>
  );
}

import HeroText from "@/components/sections/HeroText";
import Text from "@/components/common/Text";
import Divider from "@/components/common/Divider";
import ContentGrid, { ContentItem } from "@/components/layout/ContentGrid";
import Button from "@/components/common/Button";

export default function AwardsAndGrants() {
  const contentItems: ContentItem[] = [
    {
      id: "awards",
      title: "Awards",
      description:
        "Rewarding academic excellence, leadership, and achievements. Explore scholarships tailored for students like you.",
      node: (
        <Button ariaLabel="Explore awards">
          <a href="/awards-and-grants/awards">Explore →</a>
        </Button>
      ),
    },
    {
      id: "grants",
      title: "Grants",
      description:
        "Access need-based grants designed to provide financial support for students facing economic challenges.",
      node: (
        <Button ariaLabel="Explore grants">
          <a href="/awards-and-grants/grants">Explore →</a>
        </Button>
      ),
    },
  ];

  return (
    <div>
      <HeroText text="Awards & Grants"></HeroText>
      <Text as="p">
        We offer a variety of awards and grants to help ease the cost of your
        education. Explore a variety of grants, scholarships, and bursaries
        available to students based on merit, financial need, and unique
        opportunities.
      </Text>
      <Text as="p">
        Check eligibility, application deadlines, and get guidance on securing
        funding for your academic journey.
      </Text>
      <Divider />
      {/* add content grid here */}
      <ContentGrid
        items={contentItems}
        columns={2}
        ariaLabel="Awards and grants options"
        className="mt-6"
      />
    </div>
  );
}

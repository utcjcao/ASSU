import AssuImage, { OverlayBlock } from "@/components/common/AssuImage";
import Divider from "@/components/common/Divider";
import Text from "@/components/common/Text";
import VerticalTimeline, {
  assuTimelineData,
} from "@/components/common/VerticalTimeline";
import MapSection from "@/components/common/MapSection";
import ContactInfoGrid from "@/components/layout/ContactInfoGrid";
import HeroText from "@/components/sections/HeroText";

export default function About() {
  const overlays: OverlayBlock[] = [
    {
      content: (
        <div className="text-white text-center max-w-4xl">
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl italic mb-3 md:mb-4 leading-relaxed">
            &quot;Education is the bridge between the present and the future. It
            molds individuals capable of turning challenges into opportunities
            and nurtures the imagination that will one day shape the
            world.&quot;
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">
            – Maria Montessori
          </p>
        </div>
      ),
      position: "center",
    },
  ];

  return (
    <div className=" mx-auto">
      <AssuImage
        src="/images/about-assu-hero.webp"
        alt="University of Toronto campus with historic buildings"
        overlays={overlays}
        aspectClassName="aspect-[4/3] md:aspect-[18/9]"
        sizes="(max-width: 640px) 100vw, (max-width: 980px) 100vw, 980px"
        className="mb-8"
      />
      <HeroText text="About the ASSU"></HeroText>
      <Text as="p" className="text-lg">
        The Arts and Science Students’ Union (ASSU) is the academic student
        union for over 27,000 full-time undergraduate students in the Faculty of
        Arts & Science at the University of Toronto. Based in Sidney Smith,
        1068, ASSU is made up of over 60 course unions, 7 elected executives,
        and 3 staff members. Through our structure of course unions, we organize
        with students and community members to hold events, change policies,
        improve programs, run successful campaigns, and provide support for
        academic grievances.
      </Text>
      <Text as="p" className="text-lg">
        ASSU recognizes that our academic experience is inherently linked to our
        lived experience and seeks to support our members in addressing the
        systemic barriers that they face, including poverty, racism, sexism,
        homophobia, transphobia, ableism, and discrimination based upon
        immigration status. We work to ensure that the academic needs and
        concerns of all students are fulfilled.
      </Text>
      <Divider />
      <VerticalTimeline
        timelinePoints={assuTimelineData}
        header="Our History"
        className="mb-8"
      />
      <Divider margin="0" />
      <ContactInfoGrid />
      <Divider borderTopWidth="3px" margin="0" />
      <MapSection title="" description="" className="!py-8" />
      <Divider borderTopWidth="3px" />
    </div>
  );
}

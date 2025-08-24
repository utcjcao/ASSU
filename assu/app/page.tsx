import Divider from "components/common/Divider";
import AssuImage from "components/common/AssuImage";
import Button from "components/common/Button";
import ImageCard from "components/common/ImageCard";
import CardGrid from "components/layout/CardGrid";
import { ImageCarousel } from "@/components/common/ImageCarousel";
import ContentGrid from "@/components/layout/ContentGrid";
import HeroText from "@/components/sections/HeroText";

export default function Home() {
  return (
    <div className="">
      <Divider />
      <ImageCarousel></ImageCarousel>

      <HeroText>ASSU News</HeroText>

      <CardGrid
        ariaLabel="news grid"
        items={[
          {
            id: "raffle",
            imageSrc: "/images/gallery-1.webp",
            imageAltText: "Students holding a raffle sign",
            title: "Test Raffle Contest",
            subtitle: "Mar 4, 2025",
            description: "Enter our test raffle contest!",
            href: "/events/test-raffle",
          },
          {
            id: "asa",
            imageSrc: "/images/gallery-2.webp",
            imageAltText: "Anthropology club photo",
            title: "Anthropology Students' Association (ASA)",
            href: "/unions/asa",
          },
          {
            id: "raffle2",
            imageSrc: "/images/gallery-1.webp",
            imageAltText: "Students holding a raffle sign",
            title: "Test Raffle Contest",
            subtitle: "Mar 4, 2025",
            description: "Enter our test raffle contest!",
            href: "/events/test-raffle",
          },
        ]}
      />
      {/* card grid */}

      {/* services */}
      {/* hero text */}
    </div>
  );
}

import Divider from "components/common/Divider";
// import AssuImage from "components/common/AssuImage";
// import Button from "components/common/Button";
// import ImageCard from "components/common/ImageCard";
import CardGrid from "components/layout/CardGrid";
import { ImageCarousel } from "@/components/common/ImageCarousel";
<<<<<<< HEAD
// import HeroImage from "../components/sections/HeroImage";
import Tabs, { TabItem } from "components/common/Tabs";
import ContentGrid from "@/components/layout/ContentGrid";
import MapSection from "../components/common/MapSection";
import VerticalTimelineExample from "../components/common/VerticalTimeline.example";

const tabsData: TabItem[] = [
  {
    id: "tab1",
    label: "Title 1",
    content: (
      <div>
        <h3 className="text-xl font-sans font-bold text-gray-darker mb-3">
          Title 1
        </h3>
        <p className="text-gray-dark mb-4">
          Description 1. This is some sample text content for the first tab. You
          can put any content here that you want to display when this tab is
          active.
        </p>
        <p className="text-gray-dark">
          Additional description text for tab 1 content area.
        </p>
      </div>
    ),
  },
  {
    id: "tab2",
    label: "Title 2",
    content: (
      <div>
        <h3 className="text-xl font-sans font-bold text-gray-darker mb-3">
          Title 2
        </h3>
        <p className="text-gray-dark mb-4">
          Description 2. This is some sample text content for the second tab.
          You can customize this content as needed for your specific use case.
        </p>
        <p className="text-gray-dark">
          Additional description text for tab 2 content area.
        </p>
      </div>
    ),
  },
  {
    id: "tab3",
    label: "Title 3",
    content: (
      <div>
        <h3 className="text-xl font-sans font-bold text-gray-darker mb-3">
          Title 3
        </h3>
        <p className="text-gray-dark mb-4">
          Description 3. This is some sample text content for the third tab. The
          tab component supports as many tabs as you need.
        </p>
        <p className="text-gray-dark">
          Additional description text for tab 3 content area.
        </p>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-lighter p-8">
        <VerticalTimelineExample />
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          {/* Page Title */}
          <h1 className="text-6xl font-sans text-gray-darker mb-8">
            ASSU Styling Demo
          </h1>
=======
// import ContentGrid from "@/components/layout/ContentGrid";
// import HeroText from "@/components/sections/HeroText";

export default function Home() {
  return (
    <div className="">
      <Divider />
      <ImageCarousel></ImageCarousel>
>>>>>>> 6e9b4d0bf8948c2a3f48fd0b0b72daf1c6611452

      {/* <HeroText>ASSU News</HeroText> */}

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

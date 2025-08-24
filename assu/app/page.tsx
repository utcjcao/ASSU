import Divider from "components/common/Divider";
// import AssuImage from "components/common/AssuImage";
// import Button from "components/common/Button";
// import ImageCard from "components/common/ImageCard";
import CardGrid from "components/layout/CardGrid";
import { ImageCarousel } from "@/components/common/ImageCarousel";
// import ContentGrid from "@/components/layout/ContentGrid";
// import HeroText from "@/components/sections/HeroText";

export default function Home() {
  return (
    <div className="">
      <Divider />
      <ImageCarousel></ImageCarousel>

      {/* <HeroText>ASSU News</HeroText> */}

      <Divider />
      <CardGrid
        ariaLabel="news grid"
        // gapPx={40}
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

<<<<<<< HEAD
      {/* services */}
      {/* hero text */}
=======
        {/* Buttons */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-sans text-pink mb-8">
            ASSU Button Styles
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button>Button</Button>
          </div>
        </div>

        <div className="mb-8">
          <Tabs tabs={tabsData} defaultActiveTab="tab1" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-pink p-4 rounded text-center">
            <div className="text-2xl font-sans text-white">Primary Pink</div>
            <div className="text-sm font-body text-white">pink</div>
          </div>
          <div className="bg-pink-light p-4 rounded text-center">
            <div className="text-2xl font-sans text-gray-darker">
              Light Pink
            </div>
            <div className="text-sm font-body text-gray-dark">pink-light</div>
          </div>
          <div className="bg-pink-lighter p-4 rounded text-center">
            <div className="text-2xl font-sans text-gray-darker">
              Lighter Pink
            </div>
            <div className="text-sm font-body text-gray-dark">pink-lighter</div>
          </div>
          <div className="bg-blue-dark p-4 rounded text-center">
            <div className="text-2xl font-sans text-white">Dark Blue</div>
            <div className="text-sm font-body text-white">blue-dark</div>
          </div>
        </div>

        {/* Image Card */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-sans text-pink mb-8">Image Card</h2>
          <div className="flex flex-wrap gap-4">
            <ImageCard
              size="sm"
              subtitle="date here"
              description="description here"
              imageSrc="/images/gallery-2.webp"
              title="Image Card Example"
              imageAltText="Image card example"
            />
          </div>
        </div>

        {/* Image Card Grid */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-sans text-pink mb-8">Image Card Grid</h2>
          <div className="flex flex-wrap gap-4">
            <CardGrid
              columns={2}
              ariaLabel="Unions grid"
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
                {
                  id: "asa2",
                  imageSrc: "/images/gallery-2.webp",
                  imageAltText: "Anthropology club photo",
                  title: "Anthropology Students' Association (ASA)",
                  href: "/unions/asa",
                },
              ]}
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-sans text-pink mb-8">Image Card Grid</h2>
          <div className="flex flex-wrap gap-4">
            <ContentGrid
              items={[
                {
                  id: "current1",
                  title: "Increasing Accessibility",
                  description: "Increasing Accessibility on campus",
                  ariaLabel: "Increasing Accessibility on campus",
                  node: <Button>Button</Button>
                },
                {
                  id: "current2",
                  title: "Ethics pre-requisite",
                  description: "Ethics pre-requisite module",
                  ariaLabel: "Ethics pre-requisite module",
                  node: <Button>Button</Button>
                },
                {
                  id: "current3",
                  title: "Syllabus archive",
                  description: "Digital Syllabus archive",
                  ariaLabel: "Digital Syllabus archive",
                  node: <Button>Button</Button>
                },
                {
                  id: "current4",
                  title: "Room 1068",
                  description: "Revitalizing Room 1068 ASSU Podcast",
                  ariaLabel: "Revitalizing Room 1068 ASSU Podcast",
                  node: <Button>Button</Button>
                }
              ]}
              columns={2}
              ariaLabel="content grid"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <AssuImage
            src="/next.svg"
            alt="Next.js logo"
            caption="Regular image with overlay"
            sizes="(max-width: 640px) 100vw, 50vw"
            aspectClassName="aspect-square"
            overlays={[
              {
                content: (
                  <span className="inline-block rounded bg-black/40 px-2 py-1 text-sm">
                    Top left title
                  </span>
                ),
                position: "top-left",
              },
              {
                content: (
                  <span className="inline-block rounded bg-black/40 px-2 py-1 text-xs">
                    Bottom right description
                  </span>
                ),
                position: "bottom-right",
              },
            ]}
          />

          <AssuImage
            src="/public-not-exist.svg"
            alt="Broken image example"
            caption="Demonstrates error fallback"
            overlay=""
            sizes="(max-width: 640px) 100vw, 50vw"
            aspectClassName="aspect-[4/3]"
          />
        </div>

        <main className="min-h-screen bg-gray-100">
          <ImageCarousel />
        </main>

        {/* Map Section */}
        <MapSection
          title=""
          description=""
          mapConfig={{
            lat: 37.4419, // Stanford University coordinates
            lng: -122.1419,
            zoom: 16,
            height: "600px",
            markerTitle: "ASSU Office Location",
            ariaLabel:
              "Interactive map showing ASSU office location at Stanford University",
          }}
        />
      </div>
>>>>>>> 11e292f (made course unions page and updated components)
    </div>
  );
}

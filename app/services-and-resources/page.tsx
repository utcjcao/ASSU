import Text from "@/components/common/Text";
import HeroText from "@/components/sections/HeroText";
import ContentGrid from "@/components/layout/ContentGrid";
import Link from "next/link";
import Divider from "@/components/common/Divider";
import Button from "@/components/common/Button";

export default function ServicesAndResources() {
  const services = [
    {
      id: "academic-resources",
      title: "Free Academic Resources",
      description:
        "We offer free academic resources, including tutoring, study guides, and workshops, to support your learning and success.",
      href: "/services-and-resources/resources",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <path
            d="M32 4L38.5 22.5L58 22.5L42.5 35L49 53.5L32 40L15 53.5L21.5 35L6 22.5L25.5 22.5L32 4Z"
            stroke="rgb(201,8,111)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
    {
      id: "event-campaign-organization",
      title: "Event and Campaign Organization",
      description:
        "We collaborate with students and faculty members to hold events, advocate for policy changes, and improve academic programs.",
      href: "/get-involved/upcoming",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="rgb(201,8,111)"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="32"
            cy="32"
            r="18"
            stroke="rgb(201,8,111)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
    {
      id: "awards-bursaries",
      title: "Award and Bursary Administration",
      description:
        "We manage the distribution of over $23,000 in annual awards and bursaries with a transparent application process.",
      href: "/awards-and-grants/awards",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <rect x="28" y="8" width="8" height="48" fill="rgb(201,8,111)" />
          <rect x="8" y="28" width="48" height="8" fill="rgb(201,8,111)" />
        </svg>
      ),
    },
    {
      id: "universal-minds",
      title: "Universal Minds",
      description:
        "We provide high school students with academic support through a university-run tutoring program.",
      href: "https://assu.ca/wp/get-involved/projectuniversal-minds/",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <path
            d="M16 26 A16 16 0 0 1 48 26 A16 16 0 0 1 16 26 Z"
            stroke="deeppink"
            fill="none"
            strokeWidth="2"
          />
          <path
            d="M16 42 A16 16 0 0 1 48 42 A16 16 0 0 1 16 42 Z"
            stroke="deeppink"
            fill="none"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      id: "past-test-library",
      title: "Past Test Library",
      description:
        "We maintain a collection of past exams and quizzes to help students prepare for their tests.",
      href: "/services-and-resources/tests",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <polygon
            points="64,32 48,4.288 16,4.288 0,32 16,59.712 48,59.712"
            fill="rgb(201,8,111)"
          />
        </svg>
      ),
    },
    {
      id: "office-services",
      title: "Office Services",
      description:
        "Offer essential services like printing and copying, along with personalized support and information for students.",
      href: "/services-and-resources/office-services",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <path
            d="M32 2 C18 2, 2 18, 2 32 C2 46, 18 62, 32 62 L32 46 C38 54, 48 62, 62 62 L62 2 C48 2, 38 10, 32 18 Z"
            stroke="black"
            fill="none"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[rgb(243,243,243)] w-full max-w-none">
      {/* Header Section */}
      <HeroText text="Student Resources" />
      <Text as="p" className="text-lg text-gray-700 mb-4 mx-auto">
        ASSU offers a various amount of services in order to provide support for
        students.
      </Text>
      <Text as="p" className="text-lg text-gray-700 mb-4 mx-auto">
        Stop by anytime to scan our events board and see what current campaigns
        ASSU has going on or to take a break between classes and chat with our
        friendly executive and staff!
      </Text>
      <Divider margin="0" />
      {/* Services Grid*/}
      <ContentGrid
        ariaLabel="Services and resources"
        columns={3}
        mergeAdjacentOnMobile={false}
        className="w-full mx-auto"
        cellClassName="flex flex-col px-8 py-10 md:px-10 md:py-12 min-h-[380px] md:min-h-[450px]"
        items={services.map((service) => ({
          id: service.id,
          node: (
            <div className="flex w-full flex-1 flex-col items-center justify-between text-center">
              <div className="flex flex-col items-center gap-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  {service.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <Button>
                <Link href={service.href}>EXPLORE →</Link>
              </Button>
            </div>
          ),
        }))}
      />
      <Divider />
    </div>
  );
}

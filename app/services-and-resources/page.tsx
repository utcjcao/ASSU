import Text from "@/components/common/Text";
import HeroText from "@/components/sections/HeroText";
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
      <Divider />

      {/* Services Grid*/}
      {[services.slice(0, 3), services.slice(3, 6)].map((row, rowIndex) => (
        <div key={`service-row-${rowIndex}`} className="w-full">
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            role="list"
            aria-label="Services and resources"
          >
            {row.map((service, index) => (
              <div
                key={service.id}
                role="listitem"
                className={`relative bg-[rgb(243,243,243)] px-8 py-10 md:px-10 md:py-12 min-h-[380px] md:min-h-[450px] ${
                  index < row.length - 1
                    ? "md:after:absolute md:after:top-8 md:after:bottom-8 md:after:right-0 md:after:w-px md:after:bg-gray-900 md:after:content-['']"
                    : ""
                }`}
              >
                <div className="grid h-full grid-rows-[auto_auto_1fr_auto] items-start text-center">
                  <div className="flex h-16 items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-black">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-8 flex justify-center">
                    <Button>
                      <Link href={service.href}>EXPLORE →</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {rowIndex === 0 ? <Divider /> : null}
        </div>
      ))}
      <Divider />
    </div>
  );
}

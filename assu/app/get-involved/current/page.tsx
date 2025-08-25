import HeroImage from "@/components/sections/HeroImage";
import Divider from "@/components/common/Divider";

export default function Current() {
  // Current projects data based on the Wix site with specific text formatting
  const currentProjects = [
    {
      id: 1,
      parts: [
        { text: "Increasing accessibility", color: "pink", bold: true },
        { text: "on campus", color: "black", bold: false },
      ],
    },
    {
      id: 2,
      parts: [
        { text: "Ethics pre-requisite", color: "pink", bold: true },
        { text: "module for field work courses", color: "black", bold: false },
      ],
    },
    {
      id: 3,
      parts: [
        { text: "Digital", color: "black", bold: false },
        { text: "syllabus archive", color: "pink", bold: true },
      ],
    },
    {
      id: 4,
      parts: [
        { text: "Revitalizing", color: "black", bold: false },
        { text: "Room 1068,", color: "pink", bold: true },
        { text: "ASSU's podcast", color: "black", bold: false },
      ],
    },
    {
      id: 5,
      parts: [
        { text: "Tri-campus push to", color: "black", bold: false },
        { text: "extending CR/NCR deadline", color: "pink", bold: true },
      ],
    },
    {
      id: 6,
      parts: [
        { text: "Encouraging instructors to", color: "black", bold: false },
        { text: "release more than 10%", color: "pink", bold: true },
        { text: "before drop deadline", color: "black", bold: false },
      ],
    },
    {
      id: 7,
      parts: [
        { text: "Bahen Centre access and", color: "black", bold: false },
        { text: "priority", color: "pink", bold: true },
        {
          text: "enrolment for Bioinformatics students",
          color: "pink",
          bold: true,
        },
        { text: "in mandatory courses", color: "black", bold: false },
      ],
    },
    {
      id: 8,
      parts: [
        { text: "Grant to subsidize", color: "black", bold: false },
        { text: "travel and registration", color: "pink", bold: true },
        {
          text: "expenses for student competitions",
          color: "black",
          bold: false,
        },
      ],
    },
    {
      id: 9,
      parts: [
        { text: "Advocating for a", color: "black", bold: false },
        { text: "later drop deadline", color: "pink", bold: true },
      ],
    },
    {
      id: 10,
      parts: [
        { text: "Encouraging faculty-funded", color: "black", bold: false },
        { text: "alumni networking", color: "pink", bold: true },
        { text: "events across departments", color: "black", bold: false },
      ],
    },
  ];

  const achievements = [
    "Extended Robarts Library Hours for three consecutive final exam seasons",
    "Increased our free printing limit",
    'ASSU "New Initiative" Award, encouraging the creation of new organizations on campus',
    "Increased journal funding for course unions",
    "Brought together all course unions, college councils, and the UTSU for a collaborative event in September",
    "Streamlined budget review process for course union grants",
    "Streamlined research travel grant approval process",
  ];

  return (
    <div className="min-h-screen bg-[rgb(243,243,243)]">
      {/* Current Projects Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Divider above Current Projects */}
        <Divider className="mb-8" width="100%" maxWidth="100%" color="black" />

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Current Projects
          </h1>
          {/* Divider below title */}
          <Divider
            className="mb-8"
            width="100%"
            maxWidth="100%"
            color="black"
          />
        </div>

        {/* Projects Grid - 3 horizontal sections with vertical dividers */}
        <div className="bg-[rgb(243,243,243)]">
          {/* First Row - 4 projects */}
          <div className="grid grid-cols-4">
            {currentProjects.slice(0, 4).map((project, index) => (
              <div key={project.id} className="relative">
                <div className="p-3">
                  <div className="space-y-0 -space-y-24">
                    {project.parts.map((part, partIndex) => (
                      <div
                        key={partIndex}
                        className={`${
                          part.color === "pink"
                            ? "text-[rgb(201,8,111)]"
                            : "text-black"
                        } ${
                          part.bold
                            ? "font-bold text-3xl"
                            : "font-normal text-lg"
                        } block`}
                      >
                        {part.text}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Vertical divider (except for last item) */}
                {index < 3 && (
                  <div className="absolute right-0 top-[10%] bottom-[10%] w-px bg-gray-400"></div>
                )}
              </div>
            ))}
          </div>

          {/* Thin divider between rows */}
          <div className="w-full h-px bg-black"></div>

          {/* Second Row - 3 projects */}
          <div className="grid grid-cols-4">
            {currentProjects.slice(4, 7).map((project, index) => (
              <div key={project.id} className="relative">
                <div className="p-3">
                  <div className="space-y-0 -space-y-24">
                    {project.parts.map((part, partIndex) => (
                      <div
                        key={partIndex}
                        className={`${
                          part.color === "pink"
                            ? "text-[rgb(201,8,111)]"
                            : "text-black"
                        } ${
                          part.bold
                            ? "font-bold text-3xl"
                            : "font-normal text-lg"
                        } block`}
                      >
                        {part.text}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Vertical divider (except for last item) */}
                {index < 2 && (
                  <div className="absolute right-0 top-[10%] bottom-[10%] w-px bg-gray-400"></div>
                )}
              </div>
            ))}
            {/* Empty cell to maintain 4-column grid */}
            <div className="p-3"></div>
          </div>

          {/* Thin divider between rows */}
          <div className="w-full h-px bg-black"></div>

          {/* Third Row - 3 projects + decorative shapes */}
          <div className="grid grid-cols-4">
            {currentProjects.slice(7, 10).map((project, index) => (
              <div key={project.id} className="relative">
                <div className="p-3">
                  <div className="space-y-0 -space-y-24">
                    {project.parts.map((part, partIndex) => (
                      <div
                        key={partIndex}
                        className={`${
                          part.color === "pink"
                            ? "text-[rgb(201,8,111)]"
                            : "text-black"
                        } ${
                          part.bold
                            ? "font-bold text-3xl"
                            : "font-normal text-lg"
                        } block`}
                      >
                        {part.text}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Vertical divider (except for last item) */}
                {index < 2 && (
                  <div className="absolute right-0 top-[10%] bottom-[10%] w-px bg-gray-400"></div>
                )}
              </div>
            ))}
            {/* Decorative flower shapes */}
            <div className="p-3 flex items-center justify-center gap-4">
              {/* Outline flower */}
              <svg className="w-12 h-12" viewBox="0 0 32 32" aria-hidden="true">
                <defs>
                  <mask id="flowerOuter">
                    <rect width="32" height="32" fill="black" />
                    <circle cx="16" cy="16" r="10.2" fill="white" />
                    <circle cx="24" cy="16" r="7.2" fill="white" />
                    <circle cx="21.657" cy="21.657" r="7.2" fill="white" />
                    <circle cx="16" cy="24" r="7.2" fill="white" />
                    <circle cx="10.343" cy="21.657" r="7.2" fill="white" />
                    <circle cx="8" cy="16" r="7.2" fill="white" />
                    <circle cx="10.343" cy="10.343" r="7.2" fill="white" />
                    <circle cx="16" cy="8" r="7.2" fill="white" />
                    <circle cx="21.657" cy="10.343" r="7.2" fill="white" />
                  </mask>

                  <mask id="flowerInner">
                    <rect width="32" height="32" fill="black" />
                    <circle cx="16" cy="16" r="9.2" fill="white" />
                    <circle cx="24" cy="16" r="6.2" fill="white" />
                    <circle cx="21.657" cy="21.657" r="6.2" fill="white" />
                    <circle cx="16" cy="24" r="6.2" fill="white" />
                    <circle cx="10.343" cy="21.657" r="6.2" fill="white" />
                    <circle cx="8" cy="16" r="6.2" fill="white" />
                    <circle cx="10.343" cy="10.343" r="6.2" fill="white" />
                    <circle cx="16" cy="8" r="6.2" fill="white" />
                    <circle cx="21.657" cy="10.343" r="6.2" fill="white" />
                  </mask>
                </defs>

                <rect
                  width="32"
                  height="32"
                  fill="black"
                  mask="url(#flowerOuter)"
                />
                <rect
                  width="32"
                  height="32"
                  fill="rgb(243, 243, 243)"
                  mask="url(#flowerInner)"
                />
              </svg>

              {/* Solid magenta flower */}
              <svg
                className="w-12 h-12" // ⬅️ increased size here
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <defs>
                  <mask id="flowerSolid">
                    <rect width="32" height="32" fill="black" />
                    <circle cx="16" cy="16" r="9.5" fill="white" />
                    <circle cx="24" cy="16" r="6.5" fill="white" />
                    <circle cx="21.657" cy="21.657" r="6.5" fill="white" />
                    <circle cx="16" cy="24" r="6.5" fill="white" />
                    <circle cx="10.343" cy="21.657" r="6.5" fill="white" />
                    <circle cx="8" cy="16" r="6.5" fill="white" />
                    <circle cx="10.343" cy="10.343" r="6.5" fill="white" />
                    <circle cx="16" cy="8" r="6.5" fill="white" />
                    <circle cx="21.657" cy="10.343" r="6.5" fill="white" />
                  </mask>
                </defs>

                <rect
                  width="32"
                  height="32"
                  fill="rgb(201, 8, 111)"
                  mask="url(#flowerSolid)"
                />
              </svg>
            </div>
          </div>

          {/* Thin divider at bottom */}
          <div className="w-full h-px bg-black"></div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mb-4">
        <HeroImage
          src="/images/involved-current-projects.webp"
          alt="University building with spire and green dome"
          containerClassName="w-full"
          heroAspectClassName="aspect-[16/9]"
        />
      </section>

      {/* Achievements Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-2">
        {/* Divider above Achievements */}
        <Divider className="mb-8" width="100%" maxWidth="100%" color="black" />

        <div className="mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Achievements in the Past Year
          </h2>
          {/* Divider below title */}
          <Divider
            className="mb-1"
            width="100%"
            maxWidth="100%"
            color="black"
          />
        </div>

        {/* Simple bulleted list */}
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-0.1">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-xl text-black flex items-start">
                <span className="text-black mr-3 mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
        <Divider className="pt-2" width="100%" maxWidth="100%" color="black" />
      </section>
    </div>
  );
}

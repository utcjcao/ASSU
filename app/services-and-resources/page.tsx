import Divider from "@/components/common/Divider";
import Link from "next/link";

export default function ServicesAndResources() {
  return (
    <div className="min-h-screen bg-[rgb(243,243,243)] w-full max-w-none">
      {/* Header Section */}
      <section className="w-[120%] -ml-[10%] px-8 py-8">
        <div className="text-left mb-16">
          {/* Top divider */}
          <Divider
            className="mb-8"
            width="100%"
            maxWidth="100%"
            color="black"
          />

          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Student Resources
          </h1>

          {/* Bottom divider */}
          <Divider
            className="mb-8"
            width="100%"
            maxWidth="100%"
            color="black"
          />

          <p className="text-lg text-gray-700 mb-4 max-w-3xl mx-auto">
            ASSU offers a various amount of services in order to provide support
            for students.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stop by anytime to scan our events board and see what current
            campaigns ASSU has going on or to take a break between classes and
            chat with our friendly executive and staff!
          </p>
        </div>
      </section>

      {/* Services Grid*/}
      <section className="w-[120%] -ml-[10%] px-4 pb-2 -mt-20">
        <div className="border-t border-b border-gray-300 bg-[rgb(243,243,243)]">
          <div className="grid grid-cols-1 md:grid-cols-3 relative">
            {/* horizontal line*/}
            <div className="absolute left-[5%] right-[5%] top-[calc(50%+35px)] h-px bg-gray-300 z-10"></div>

            {/* Free Academic Resources */}
            <div className="text-center p-8 flex flex-col h-full relative">
              {/* vertical line*/}
              <div className="absolute right-0 top-[5%] bottom-[5%] w-px bg-gray-300"></div>
              {/* Pink star icon */}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                  <path
                    d="M32 4L38.5 22.5L58 22.5L42.5 35L49 53.5L32 40L15 53.5L21.5 35L6 22.5L25.5 22.5L32 4Z"
                    stroke="rgb(201,8,111)"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Free Academic Resources
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We offer free academic resources, including tutoring, study
                guides, and workshops, to support your learning and success.
              </p>
              <Link
                href="/services-and-resources/resources"
                className="bg-[rgb(201,8,111)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(180,7,100)] transition-colors duration-300 flex items-center mx-auto mt-auto"
              >
                EXPLORE
                <svg className="w-4 h-4 ml-2" fill="white" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            {/* Event and Campaign Organization */}
            <div className="text-center p-8 flex flex-col h-full relative">
              {/* vertical line*/}
              <div className="absolute right-0 top-[5%] bottom-[5%] w-px bg-gray-300"></div>
              {/* Pink concentric circles icon */}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
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
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Event and Campaign Organization
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We collaborate with students and faculty members to hold events,
                advocate for policy changes, and improve academic programs.
              </p>
              <Link
                href="/get-involved/upcoming"
                className="bg-[rgb(201,8,111)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(180,7,100)] transition-colors duration-300 flex items-center mx-auto mt-auto"
              >
                EXPLORE
                <svg className="w-4 h-4 ml-2" fill="white" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            {/* Award and Bursary Administration */}
            <div className="text-center p-8 flex flex-col h-full">
              {/* pink plus sign icon */}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                  <rect
                    x="28"
                    y="8"
                    width="8"
                    height="48"
                    fill="rgb(201,8,111)"
                  />
                  <rect
                    x="8"
                    y="28"
                    width="48"
                    height="8"
                    fill="rgb(201,8,111)"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Award and Bursary Administration
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We manage the distribution of over $23,000 in annual awards and
                bursaries with a transparent application process.
              </p>
              <Link
                href="/awards-and-grants/awards"
                className="bg-[rgb(201,8,111)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(180,7,100)] transition-colors duration-300 flex items-center mx-auto mt-auto"
              >
                EXPLORE
                <svg className="w-4 h-4 ml-2" fill="white" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            {/* Universal Minds */}
            <div className="text-center p-8 flex flex-col h-full relative">
              {/*vertical line*/}
              <div className="absolute right-0 top-[5%] bottom-[5%] w-px bg-gray-300"></div>
              {/* Two overlapping ovals*/}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                  {/* Top capsule*/}
                  <path
                    d="M16 26
         A16 16 0 0 1 48 26
         A16 16 0 0 1 16 26
         Z"
                    stroke="deeppink"
                    fill="none"
                    strokeWidth="2"
                  />
                  {/* Bottom capsule */}
                  <path
                    d="M16 42
         A16 16 0 0 1 48 42
         A16 16 0 0 1 16 42
         Z"
                    stroke="deeppink"
                    fill="none"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-black mb-4">
                Universal Minds
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We provide high school students with academic support through a
                university-run tutoring program.
              </p>
              <Link
                href="https://assu.ca/wp/get-involved/projectuniversal-minds/"
                className="bg-[rgb(201,8,111)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(180,7,100)] transition-colors duration-300 flex items-center mx-auto mt-auto"
              >
                EXPLORE
                <svg className="w-4 h-4 ml-2" fill="white" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            <div className="text-center p-8 flex flex-col h-full relative">
              {/*vertical line*/}
              <div className="absolute right-0 top-[5%] bottom-[5%] w-px bg-gray-300"></div>

              {/* Past Test Library*/}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                  <polygon
                    points="
        64,32
        48,4.288
        16,4.288
        0,32
        16,59.712
        48,59.712
      "
                    fill="rgb(201,8,111)"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-black mb-4">
                Past Test Library
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We maintain a collection of past exams and quizzes to help
                students prepare for their tests.
              </p>
              <Link
                href="/services-and-resources/tests"
                className="bg-[rgb(201,8,111)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(180,7,100)] transition-colors duration-300 flex items-center mx-auto mt-auto"
              >
                EXPLORE
                <svg className="w-4 h-4 ml-2" fill="white" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            {/* Office Services */}
            <div className="text-center p-8 flex flex-col h-full">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                  <path
                    d="M32 2
         C18 2, 2 18, 2 32
         C2 46, 18 62, 32 62
         L32 46
         C38 54, 48 62, 62 62
         L62 2
         C48 2, 38 10, 32 18
         Z"
                    stroke="black"
                    fill="none"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-black mb-4">
                Office Services
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Offer essential services like printing and copying, along with
                personalized support and information for students.
              </p>
              <Link
                href="/services-and-resources/office-services"
                className="bg-[rgb(201,8,111)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[rgb(180,7,100)] transition-colors duration-300 flex items-center mx-auto mt-auto"
              >
                EXPLORE
                <svg className="w-4 h-4 ml-2" fill="white" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

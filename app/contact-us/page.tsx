"use client";

import Divider from "../../components/common/Divider";
import MapSection from "../../components/common/MapSection";
import Link from "@/components/common/Link";
import Accordion, {
  type AccordionItemData,
} from "@/components/common/Accordion";
import HeroText from "@/components/sections/HeroText";

const faqItems: AccordionItemData[] = [
  {
    value: "faq-1",
    question: "Where do I go to get an official UofT Transcript?",
    answer:
      "Transcripts can be ordered online via Acorn or from the UofT transcript centre, located at Enrolment Services. 172 St. George St. Toronto ON M5R 0A3. For inquiries call: 416-978-2190",
  },
  {
    value: "faq-2",
    question: "Where can I find final exams?",
    answer:
      "All finals that are released by the Faculty are available on the Library website (will need to cut and paste into your browser): http://eres.library.utoronto.ca/courseindex.asp, which you can download for free. Answers are not available anywhere.",
  },
  {
    value: "faq-3",
    question: "Where can I find term tests?",
    answer:
      "ASSU has a library of student donated tests. Students can come in and photocopy them. Some of our Course Unions also carry tests - you can ask at our office. ASSU is always looking for students to donate their old tests to our library - we will make a photocopy of the test.",
  },
  {
    value: "faq-4",
    question: "Where is the Lost and Found for Sidney Smith?",
    answer:
      "There are a few places to check for lost items:\n\n1) the ASSU office - SS 1068\n\n2) the APUS office - SS 1089\n\n3) the Faculty Registrar's Office - SS 1006\n\n4) the Caretaking Office - SS 1090\n\n5) the Central Caretaking Lost & Found - 256 McCaul Street, 3rd Floor.",
  },
  {
    value: "faq-5",
    question: "How do I book the Sidney Smith Lobby?",
    answer:
      "The lobby is available for booking to recognized student groups only. This booking is done through the Faculty Registrar's Office - for more info check out this link: https://sidneysmithcommons.artsci.utoronto.ca/welcome/sidney-smith-lobby/",
  },
  {
    value: "faq-6",
    question: "How do I book group study rooms around campus?",
    answer:
      "Robarts Library, Gerstein Science Information Centre, and Other Libraries\n\nGo to the U of T Library study room booking system:\nhttps://uoft.libcal.com/reserve/groupstudy\n\nSelect the library and study room you want to book.\n\nChoose the date and time slot available.\n\nEnter your UTORid credentials to confirm the booking.\n\nFaculty-Specific Libraries (e.g., E.J. Pratt, Innis College Library)\n\nSome faculty libraries have their own booking system.\n\nCheck their library website or ask at the front desk.",
  },
  {
    value: "faq-7",
    question: "Where is there a microwave for students to use?",
    answer:
      "The APUS office has one and so does the cafeteria downstairs. Other locations include MS cafeteria, Robarts library cafeteria, and Gerstein library cafeteria.",
  },
];

export default function ContactUs() {
  return (
    <div className="bg-gray-lighter min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <HeroText text="Frequently Asked Questions" />
        <div className="mb-8">
          <Accordion items={faqItems} />
        </div>

        {/* removed unused contact form, TODO LATER */}

        {/* Contact Information Section - 4 columns */}
        <div className="mb-8 max-w-3xl">
          <Divider borderTopWidth="4px" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
            {/* Column 1 - Three dots SVG and Contact Us */}
            <div className="text-left">
              <h3 className="text-base font-sans text-gray-darker font-semibold">
                Contact Us
              </h3>
            </div>
            {/* Column 2 - Address */}
            <div className="text-left relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-light -ml-20"></div>
              <div className="md:-ml-16">
                <h3 className="text-base font-sans text-gray-darker font-semibold mb-3 text-left">
                  Address
                </h3>
                <div className="text-gray-dark font-body text-left text-sm">
                  <p className="text-left">100 St. George Street</p>
                  <p className="text-left">Sidney Smith Hall</p>
                  <p className="text-left">Room 1068</p>
                </div>
              </div>
            </div>

            {/* Column 3 - Contact Details */}
            <div className="text-left relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-light -ml-20"></div>
              <div className="md:-ml-16">
                <h3 className="text-base font-sans text-gray-darker font-semibold mb-3 text-left">
                  Contact
                </h3>
                <div className="text-gray-dark font-body space-y-1 text-left text-sm">
                  <p className="text-left">Phone: (416) 978-4903</p>
                  <p className="text-left">Fax: (416) 971-2161</p>
                  <p className="mt-2 text-left">students.assu@utoronto.ca</p>
                  <div className="flex gap-3 mt-4 justify-start">
                    <Link href="https://www.linkedin.com/company/uoft-assu/about/">
                      Linkedin
                    </Link>
                    <Link href="https://www.instagram.com/assu_uoft/?hl=en">
                      Instagram
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4 - Opening Hours */}
            <div className="text-left relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-light -ml-20"></div>
              <div className="md:-ml-16">
                <h3 className="text-base font-sans text-gray-darker font-semibold mb-3 text-left">
                  Opening Hours
                </h3>
                <div className="text-gray-dark font-body space-y-1 text-left text-sm">
                  <p className="text-left">Monday 10:00 am - 5:00 pm</p>
                  <p className="text-left">Tuesday 10:00 am - 5:00 pm</p>
                  <p className="text-left">Wednesday 10:00 am - 6:00 pm</p>
                  <p className="text-left">Thursday 10:00 am - 6:00 pm</p>
                  <p className="text-left">
                    Friday 10:00 am - 5:00 pm (Friday closed from May-Aug)
                  </p>
                  <p className="font-bold text-left">Weekends Closed</p>
                </div>
              </div>
            </div>
          </div>
          {/* Final thick horizontal line */}
          <Divider borderTopWidth="4px" />
        </div>

        {/* Map Section */}
        <MapSection
          title=""
          description=""
          mapConfig={{
            lat: 43.6629,
            lng: -79.3957,
            zoom: 15,
            height: "400px",
            markerTitle: "ASSU - Sidney Smith Hall",
            ariaLabel: "Map showing ASSU location at Sidney Smith Hall",
          }}
        />
      </div>
    </div>
  );
}

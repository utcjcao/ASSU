"use client";

import Divider from "../../components/common/Divider";
import MapSection from "../../components/common/MapSection";
import Accordion, {
  type AccordionItemData,
} from "@/components/common/Accordion";
import HeroText from "@/components/sections/HeroText";
import ContactInfoGrid from "@/components/layout/ContactInfoGrid";

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
    <div>
      <HeroText text="Frequently Asked Questions" />
      <Accordion items={faqItems} />

      {/* removed unused contact form, TODO LATER */}
      <Divider margin="0" />
      <ContactInfoGrid></ContactInfoGrid>
      <Divider margin="0" />

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
  );
}

import React from "react";
import HeroText from "../../../components/sections/HeroText";
import Accordion from "../../../components/common/Accordion";
import ContentGrid from "../../../components/layout/ContentGrid";

const faqItems = [
  {
    value: "faq-1",
    question: "The Assignment Calculator",
    answer: `This is an excellent tool hosted on the UTSC web site, but everyone can use it.

      The purpose of the calculator is to help you break down your assignment or project into manageable steps, direct you to useful guides & services (particularly the Library and Writing Centers). If you log in and supply an email address, it will also email you reminders and links on the schedule calculated.`,
  },
  {
    value: "faq-2",
    question: "U of T Libraries",
    answer: `U of T’s library system has more than 30 branches. A variety of services are provided by library staff, including individual consultations on research strategies, workshops on library and online research, guides to research within a variety of subjects, and group study room reservations.`,
  },
  {
    value: "faq-3",
    question: "Writing at U of T Website",
    answer: `Writing is one of the core skills you should develop as a student at the University of Toronto. This site provides some great information about the many stages of academic writing: planning, researching, referencing, writing, and editing. Frequently asked questions about academic writing are addressed, with concrete suggestions about how to deal with common writing problems. Some resources for English language learners are also available on this site.`,
  },
  {
    value: "faq-4",
    question: "Academic Success Centre",
    answer: `Offers a wide variety of services and programming to help students meet their academic and personal goals at the University. Individualized learning skills consultations are available by appointment, or on a first-come, first-served basis for drop-in visitors.

      You can reserve private study space, attend workshops and lectures related to academic success (e.g., “Stop Procrastinating!”, “Overcoming Exam Anxiety”, “Giving Oral Presentations”), or consult their library of helpful publications about best learning practices.`,
  },
  {
    value: "faq-5",
    question: "Chemistry Peer Tutoring",
    answer: `Victoria College tutors help with Labs, concepts, and past test questions. Tutoring is free and open to all enrolled Arts and Science chemistry students.`,
  },
];

const collegeResources = [
  {
    id: "innis-college",
    title: "Innis College",
    description: "2 Sussex Avenue, MSS 1J5\nregistrar.innis@utoronto.ca",
    links: ["Writing Centre", "Academic Advising"],
  },
  {
    id: "new-college",
    title: "New College",
    description: "300 Huron Street, MSS 2J6\nnewcollege.registrar@utoronto.ca",
  },
  {
    id: "university-college",
    title: "University College",
    description: "15 King's College Circle, MSS 1J3\nuc.registrar@utoronto.ca",
  },
  {
    id: "trinity-college",
    title: "Trinity College",
    description: "6 Hoskin Avenue, MSS 1H8\nregistrar.trinity@utoronto.ca",
  },
  {
    id: "victoria-college",
    title: "Victoria College",
    description: "73 Queen’s Park Cres, MSS 1K7\nvic.registrar@utoronto.ca",
  },
  {
    id: "woodsworth-college",
    title: "Woodsworth College",
    description: "119 St. George Street, MSS 1A9\nww.registrar@utoronto.ca",
  },
  {
    id: "st-michaels-college",
    title: "St. Michael’s College",
    description: "81 St. Mary Street, MSS 1X5\nsmc.registrar@utoronto.ca",
  },
];

export default function Resources() {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 px-4">
      <HeroText text="Frequently asked questions" />
      <Accordion items={faqItems} />
      <HeroText text="College Specific Resource" />
      <ContentGrid items={collegeResources} />
    </div>
  );
}

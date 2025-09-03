import React from "react";
import HeroText from "../../../components/sections/HeroText";
import Accordion from "../../../components/common/Accordion";

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
    description:
      "2 Sussex Avenue, MSS 1J5\n (416) 978-2513\nregistrar.innis@utoronto.ca",
    links: ["Writing Centre", "Academic Advising"],
  },
  {
    id: "new-college",
    title: "New College",
    description:
      "300 Huron Street, MSS 2J6\n (416) 978-2400\nnewcollege.registrar@utoronto.ca",
    links: ["Writing Centre", "Academic Programs"],
  },
  {
    id: "university-college",
    title: "University College",
    description:
      "15 King's College Circle, MSS 1J3\n(416) 978-7966\nuc.registrar@utoronto.ca",
    links: ["Writing Centre", "Advising & Support"],
  },
  {
    id: "trinity-college",
    title: "Trinity College",
    description:
      "6 Hoskin Avenue, MSS 1H8\n (416) 978-2687\nregistrar.trinity@utoronto.ca",
    links: ["Writing Centre", "Math Aid Centre", "Peer Advisors"],
  },
  {
    id: "victoria-college",
    title: "Victoria College",
    description:
      "73 Queen’s Park Cres, MSS 1K7\n (416) 585-4508\nvic.registrar@utoronto.ca",
    links: ["Writing Centre"],
  },
  {
    id: "woodsworth-college",
    title: "Woodsworth College",
    description:
      "119 St. George Street, MSS 1A9\n (416) 978-4444\nww.registrar@utoronto.ca",
    links: ["Writing Centre", "Math Learning Centre"],
  },
  {
    id: "st-michaels-college",
    title: "St. Michael’s College",
    description:
      "81 St. Mary Street, MSS 1X5\n (416) 926-7117\nsmc.registrar@utoronto.ca",
    links: ["Academic Resources & Support"],
  },
];

export default function Resources() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto space-y-10 px-4">
      <HeroText text="Frequently asked questions" />
      <Accordion items={faqItems} />
      <HeroText text="College Specific Resources" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-300">
        {collegeResources.map((college, index) => (
          <React.Fragment key={college.id}>
            <div
              className={`flex flex-col gap-2 px-4 py-6 border-gray-300 ${
                index % 4 !== 3 ? "lg:border-r" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold text-black break-words">
                {college.title}
              </h3>
              <p className="text-xs text-gray-700 whitespace-pre-line break-words leading-relaxed">
                {college.description}
              </p>
              <div className="flex flex-col gap-2 mt-2">
                {college.links.map((link, i) => (
                  <button
                    key={i}
                    className="px-3 py-2 text-xs bg-gray-dark text-white rounded-none hover:bg-gray-800 transition min-h-[40px] text-left"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Horizontal divider after 4th item */}
            {index === 3 && (
              <div className="col-span-full border-t border-gray-300"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import HeroText from "@/components/sections/HeroText";
import Accordion, {
  type AccordionItemData,
} from "@/components/common/Accordion";
import ContentGrid from "@/components/layout/ContentGrid";
import Divider from "@/components/common/Divider";

const faqItems: AccordionItemData[] = [
  {
    value: "faq-1",
    question: "The Assignment Calculator",
    answer:
      "This is an excellent tool hosted on the UTSC website, but everyone can use it.\n\nThe purpose of the calculator is to help you break down your assignment or project into manageable steps, direct you to useful guides & services (particularly the Library and Writing Centres). If you log in and supply an email address, it will also email you reminders and links on the schedule calculated.",
  },
  {
    value: "faq-2",
    question: "U of T Libraries",
    answer:
      "U of T's library system has more than 30 branches. A variety of services are provided by library staff, including individual consultations on research strategies, workshops on library and online research, guides to research within a variety of subjects, and group study room reservations.",
  },
  {
    value: "faq-3",
    question: "Writing at U of T Website",
    answer:
      "Writing is one of the core skills you should develop as a student at the University of Toronto. This site provides great information about the many stages of academic writing: planning, researching, referencing, writing, and editing. Frequently asked questions about academic writing are addressed, with concrete suggestions about how to deal with common writing problems. Some resources for English language learners are also available on this site.",
  },
  {
    value: "faq-4",
    question: "Academic Success Centre",
    answer:
      "Offers a wide variety of services and programming to help students meet their academic and personal goals at the University. Individualized learning skills consultations are available by appointment, or on a first-come, first-served basis for drop-in visitors.\n\nYou can reserve private study space, attend workshops and lectures related to academic success (e.g., Stop Procrastinating!, Overcoming Exam Anxiety, Giving Oral Presentations), or consult their library of helpful publications about best learning practices.",
  },
  {
    value: "faq-5",
    question: "Chemistry Peer Tutoring",
    answer:
      "Victoria College tutors help with labs, concepts, and past test questions. Tutoring is free and open to all enrolled Arts and Science chemistry students.",
  },
  {
    value: "faq-6",
    question: "Math Aid Centres",
    answer:
      "The Department of Mathematics provides free math assistance to all first-year Arts & Science students, with one-on-one tutoring available.",
  },
  {
    value: "faq-7",
    question: "Statistics Aid Centres",
    answer:
      "The Department of Statistics provides free statistical help to undergraduate students.",
  },
  {
    value: "faq-8",
    question: "Economics Study Centre",
    answer:
      "The Department of Economics provides free assistance to students enrolled in core undergraduate economics courses.",
  },
  {
    value: "faq-9",
    question: "Philosophy Essay Clinic",
    answer:
      "The Department of Philosophy provides free assistance to students enrolled in philosophy courses at the University.",
  },
  {
    value: "faq-10",
    question: "English Language Learning (ELL)",
    answer:
      "The English Language Learning Program supports all U of T undergraduates enrolled in the Faculty of Arts and Science whose first language is not English (ESL or multilingual students), as well as native speakers seeking to improve their English language skills.",
  },
];

const collegeResources = [
  {
    id: "innis-college",
    title: "Innis College",
    description:
      "2 Sussex Avenue, MSS 1J5\n (416) 978-2513\nregistrar.innis@utoronto.ca",
    links: [
      {
        label: "Writing Centre",
        href: "https://innis.utoronto.ca/student-services/writing-centre/",
      },
    ],
  },
  {
    id: "new-college",
    title: "New College",
    description:
      "300 Huron Street, MSS 2J6\n (416) 978-2400\nnewcollege.registrar@utoronto.ca",
    links: [
      {
        label: "Writing Centre",
        href: "http://www.newcollege.utoronto.ca/academics/writing-centre/",
      },
      {
        label: "Math & Statistics Aid",
        href: "https://www.newcollege.utoronto.ca/registration-advising/academic-advising/academic-resources/",
      },
    ],
  },
  {
    id: "university-college",
    title: "University College",
    description:
      "15 King's College Circle, MSS 1J3\n(416) 978-7966\nuc.registrar@utoronto.ca",
    links: [
      {
        label: "Writing Centre",
        href: "http://www.uc.utoronto.ca/writing-centre",
      },
    ],
  },
  {
    id: "trinity-college",
    title: "Trinity College",
    description:
      "6 Hoskin Avenue, MSS 1H8\n (416) 978-2687\nregistrar.trinity@utoronto.ca",
    links: [
      {
        label: "Writing Centre",
        href: "https://www.trinity.utoronto.ca/study-arts-science/academic-support-services/writing-support/",
      },
      {
        label: "Math Aid Centre",
        href: "https://www.trinity.utoronto.ca/study-arts-science/academic-support-services/math-support/",
      },
    ],
  },
  {
    id: "victoria-college",
    title: "Victoria College",
    description:
      "73 Queen's Park Cres, MSS 1K7\n (416) 585-4508\nvic.registrar@utoronto.ca",
    links: [
      {
        label: "Writing Centre",
        href: "https://vic.utoronto.ca/current-students/registrars-office/tutor",
      },
      {
        label: "Chemistry Peer Tutoring",
        href: "https://vic.utoronto.ca/current-students/registrars-office/tutor",
      },
    ],
  },
  {
    id: "woodsworth-college",
    title: "Woodsworth College",
    description:
      "119 St. George Street, MSS 1A9\n (416) 978-4444\nww.registrar@utoronto.ca",
    links: [
      {
        label: "Academic Writing Centre",
        href: "https://wdw.utoronto.ca/advising-support-services/academic",
      },
    ],
  },
  {
    id: "st-michaels-college",
    title: "St. Michael's College",
    description:
      "81 St. Mary Street, MSS 1X5\n (416) 926-7117\nsmc.registrar@utoronto.ca",
    links: [
      {
        label: "Student Services",
        href: "https://stmikes.utoronto.ca/student-life/student-services/",
      },
      {
        label: "Writing Resources",
        href: "https://stmikes.utoronto.ca/library/research/writing/",
      },
    ],
  },
];

export default function Resources() {
  return (
    <div>
      <HeroText text="Free Academic Resources" />
      <Accordion items={faqItems} />
      <HeroText text="College Specific Resources" />
      <Divider margin="0"></Divider>
      <ContentGrid
        ariaLabel="College specific resources"
        columns={4}
        mergeAdjacentOnMobile={false}
        className="w-full mx-auto"
        cellClassName="px-6 py-6 md:px-8 md:py-8"
        items={[
          ...collegeResources.map((college) => ({
            id: college.id,
            node: (
              <div className="flex h-full flex-col gap-3">
                <h3 className="text-2xl font-semibold text-black break-words">
                  {college.title}
                </h3>
                <p className="text-xs text-gray-700 whitespace-pre-line break-words leading-relaxed">
                  {college.description}
                </p>
                <div className="flex flex-col gap-2 mt-2">
                  {college.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 text-xs bg-gray-dark text-white rounded-none hover:bg-gray-800 transition min-h-[40px]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ),
          })),
          {
            id: "icons-only",
            node: (
              <div className="flex h-full items-center justify-center gap-6">
                <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none">
                  <circle
                    cx="32"
                    cy="32"
                    r="26"
                    stroke="rgb(201,8,111)"
                    strokeWidth="1"
                  />
                </svg>
                <svg
                  className="w-14 h-14"
                  viewBox="0 0 64 64"
                  fill="rgb(201,8,111)"
                >
                  <polygon
                    points="22.89,10 41.11,10 54,22.89 54,41.11 41.11,54 22.89,54 10,41.11 10,22.89"
                    fill="rgb(201,8,111)"
                  />
                </svg>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

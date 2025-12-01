import React from "react";
import HeroText from "@/components/sections/HeroText";
import Accordion, {
  type AccordionItemData,
} from "@/components/common/Accordion";
import ContentGrid from "@/components/layout/ContentGrid";

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
    <div className="w-full max-w-screen-3xl mx-auto space-y-10 px-4">
      <HeroText text="Frequently asked questions" />
      <Accordion items={faqItems} />
      <HeroText text="College Specific Resources" />

      <div className="border-t border-gray-300 max-w-3xl mx-auto w-full">
        <ContentGrid
          ariaLabel="College specific resources"
          columns={3}
          mergeAdjacentOnMobile={false}
          className="w-full max-w-3xl mx-auto md:[&_[role='gridcell']]:px-8 md:[&_[role='gridcell']]:py-8 [&_[role='gridcell']]:px-6 [&_[role='gridcell']]:py-6"
          items={collegeResources.map((college) => ({
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
                      className="px-3 py-2 text-xs bg-gray-dark text-white rounded-none hover:bg-gray-800 transition min-h-[40px] text-left"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
}

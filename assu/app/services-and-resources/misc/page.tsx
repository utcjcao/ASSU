import Divider from "components/common/Divider";
import Text from "components/common/Text";
// import Link from "components/common/Link";
import LinkSection, { LinkItem } from "components/common/LinkSection";

export default function Misc() {
  const studentSocieties: LinkItem[] = [
    {
      title: "Association of Part-time Undergraduate Students (APUS)",
      href: "https://apus.ca/",
      description:
        "APUS Represents all part-time undergraduate students. Here is where you can find out more information about APUS.",
    },
    {
      title: "Graduate Students' Union (GSU)",
      href: "https://utgsu.ca/",
      description:
        "The GSU represents all graduate students at the University of Toronto. Here is where you can find out more information about the GSU.",
    },
    {
      title: "University of Toronto Students' Union (UTSU)",
      href: "https://utsu.ca",
      description:
        "UTSU Represents all full-time undergraduate students. Here is where you can find information on Health and Dental plans and student clubs.",
    },
  ];

  const uoftLinks: LinkItem[] = [
    {
      title: "Sidney Smith Commons",
      href: "https://sidneysmithcommons.artsci.utoronto.ca/",
      description:
        "The Sidney Smith Commons is a student study space and help-hub located in the East side of the Sid Smith Building.",
    },
    {
      title: "Sidney Smith Lobby Table Booking",
      href: "https://sidneysmithcommons.artsci.utoronto.ca/welcome/sidney-smith-lobby/",
      description:
        "Use this link to book a table in the Sid Smith Lobby for your course union or student group.",
    },
    {
      title: "Exams and Course Collections",
      href: "https://login.library.utoronto.ca/cgi-bin/go_log.pl?url=http://exams.library.utoronto.ca",
      description:
        "The U of T Library's exam and course collection.",
    },
    {
      title: "Faculty of Arts & Science",
      href: "http://www.artsci.utoronto.ca/",
      description:
        "The official website of the Faculty of Arts and Science at the University of Toronto.",
    },
    {
      title: "Faculty Registrar's Office",
      href: "https://www.artsci.utoronto.ca/current/faculty-registrar",
      description:
        "Useful link for undergraduate students. Here is where you will find the link to the online calendar and timetable, as well other useful links.",
    },
    {
      title: "University of Toronto",
      href: "http://www.utoronto.ca/",
      description:
        "The official University of Toronto website",
    },
  ];

  return (
    <div>
      <Divider borderTopWidth="3px" />
      <Text as="h1" className="text-5xl font-sans font-bold">
        Useful Links
      </Text>
      <Divider borderTopWidth="3px" />
      <Text as="p" className="text-lg">
        Find essential links to student societies, academic resources, and U of
        T services. <br /> Easily access the resources that keep you informed
        and supported throughout your university journey.
      </Text>
      <Divider />
      <LinkSection header="Student Societies" links={studentSocieties} />
      <Divider />
      <LinkSection header="U of T Resources" links={uoftLinks} isArrowFilled />
      <Divider />
    </div>
  );
}

import VerticalTimeline, { TimelinePoint } from "./VerticalTimeline";

// Example usage of the VerticalTimeline component
// This matches the design shown in the image

const assuTimelineData: TimelinePoint[] = [
  {
    date: "1827",
    description: "**University of Toronto** was founded",
  },
  {
    date: "1967",
    description:
      "The first Course Union, the **History Students' Union**, was established, marking the beginning of increased student participation in academic decision-making.",
  },
  {
    date: "Late 1960s",
    description:
      "More **Course Unions** formed across various disciplines to create better communication between students and faculty.",
  },
  {
    date: "1972",
    description:
      "The **Arts and Science Students' Union** (ASSU) was officially founded to unify and support undergraduate students in the Faculty of Arts and Science.",
  },
  {
    date: "1990s",
    description:
      "ASSU expanded its reach, supporting student advocacy, academic policies, and funding for student-run initiatives.",
  },
  {
    date: "2000s",
    description:
      "The number of Course Unions under ASSU grew to **over 60**.",
  },
  {
    date: "Present",
    description:
      "ASSU continues to advocate for students, organize academic and social events, offer grants and scholarships, and enhance the student experience at U of T.",
  },
];

export default function VerticalTimelineExample() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <VerticalTimeline timelinePoints={assuTimelineData} />
    </div>
  );
}

// Export the timeline data for reuse
export { assuTimelineData };

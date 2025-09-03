import { render, screen } from "@testing-library/react";
import VerticalTimeline, { TimelinePoint } from "../VerticalTimeline";

const mockTimelinePoints: TimelinePoint[] = [
  {
    date: "1827",
    description: "**University of Toronto** was founded",
  },
  {
    date: "1967",
    description:
      "The first **Course Union**, the **History Students' Union**, was established, marking the beginning of increased **student participation** in academic decision-making.",
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
];

describe("VerticalTimeline", () => {
  it("renders without crashing", () => {
    render(<VerticalTimeline timelinePoints={mockTimelinePoints} />);
  });

  it("renders all timeline points", () => {
    render(<VerticalTimeline timelinePoints={mockTimelinePoints} />);

    // Check that all dates are rendered
    expect(screen.getByText("1827")).toBeInTheDocument();
    expect(screen.getByText("1967")).toBeInTheDocument();
    expect(screen.getByText("Late 1960s")).toBeInTheDocument();
    expect(screen.getByText("1972")).toBeInTheDocument();
  });

  it("renders bold text correctly", () => {
    render(<VerticalTimeline timelinePoints={mockTimelinePoints} />);

    // Check that bold text is rendered as strong elements
    const boldElements = screen.getAllByText("University of Toronto");
    expect(boldElements[0]).toBeInTheDocument();
    expect(boldElements[0].tagName).toBe("STRONG");
  });

  it("renders regular text correctly", () => {
    render(<VerticalTimeline timelinePoints={mockTimelinePoints} />);

    // Check that regular text is rendered
    expect(screen.getByText("was founded")).toBeInTheDocument();
  });

  it("renders nothing when no timeline points are provided", () => {
    const { container } = render(<VerticalTimeline timelinePoints={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("applies custom className", () => {
    const { container } = render(
      <VerticalTimeline
        timelinePoints={mockTimelinePoints}
        className="custom-class"
      />
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("renders timeline dots", () => {
    const { container } = render(
      <VerticalTimeline timelinePoints={mockTimelinePoints} />
    );

    // Check that timeline dots are rendered (simplified styling)
    const dots = container.querySelectorAll(".bg-pink.rounded-full");
    expect(dots).toHaveLength(mockTimelinePoints.length);
  });
});

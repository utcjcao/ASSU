import { render, screen } from "@testing-library/react";
import LinkSection, { LinkItem } from "../LinkSection";

const mockLinks: LinkItem[] = [
  {
    title: "Association of Part-time Undergraduate Students (APUS)",
    href: "https://apus.ca",
    description:
      "APUS Represents all part-time undergraduate students. Here is where you can find out more information about APUS.",
  },
  {
    title: "Graduate Students' Union (GSU)",
    href: "https://gsu.ca",
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

describe("LinkSection", () => {
  it("renders without crashing", () => {
    render(<LinkSection header="Student Societies" links={mockLinks} />);
  });

  it("renders the header correctly", () => {
    render(<LinkSection header="Student Societies" links={mockLinks} />);
    expect(screen.getByText("Student Societies")).toBeInTheDocument();
  });

  it("renders all links", () => {
    render(<LinkSection header="Student Societies" links={mockLinks} />);

    // Check that all link titles are rendered
    expect(
      screen.getByText("Association of Part-time Undergraduate Students (APUS)")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Graduate Students' Union (GSU)")
    ).toBeInTheDocument();
    expect(
      screen.getByText("University of Toronto Students' Union (UTSU)")
    ).toBeInTheDocument();
  });

  it("renders all descriptions", () => {
    render(<LinkSection header="Student Societies" links={mockLinks} />);

    // Check that descriptions are rendered
    expect(
      screen.getByText(/APUS Represents all part-time undergraduate students/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/The GSU represents all graduate students/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/UTSU Represents all full-time undergraduate students/)
    ).toBeInTheDocument();
  });

  it("renders links with correct href attributes", () => {
    render(<LinkSection header="Student Societies" links={mockLinks} />);

    const apusLink = screen.getByRole("link", {
      name: "Association of Part-time Undergraduate Students (APUS)",
    });
    expect(apusLink).toHaveAttribute("href", "https://apus.ca");
  });

  it("applies custom className", () => {
    const { container } = render(
      <LinkSection header="Test" links={mockLinks} className="custom-class" />
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("renders arrow with correct styling when isArrowFilled is true", () => {
    const { container } = render(
      <LinkSection header="Test" links={mockLinks} isArrowFilled={true} />
    );
    const arrow = container.querySelector("svg");
    expect(arrow).toHaveClass("text-pink", "fill-current");
  });

  it("renders arrow with correct styling when isArrowFilled is false", () => {
    const { container } = render(
      <LinkSection header="Test" links={mockLinks} isArrowFilled={false} />
    );
    const arrow = container.querySelector("svg");
    expect(arrow).toHaveClass("text-pink", "stroke-current", "fill-none");
  });
});

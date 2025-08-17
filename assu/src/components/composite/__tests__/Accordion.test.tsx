import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import StyledAccordion from "./Accordion";

const mockItems = [
  {
    value: "transcript",
    question: "Where do I go to get an official UofT Transcript?",
    answer: "You can request official transcripts from the Registrar's Office.",
  },
  {
    value: "final-exams",
    question: "Where can I find final exams?",
    answer: "Final exams are typically available through the course portal.",
  },
  {
    value: "term-tests",
    question: "Where can I find term tests?",
    answer:
      "Term tests are usually distributed by instructors or posted online.",
  },
  {
    value: "lost-and-found",
    question: "Where is the Lost and Found for Sidney Smith?",
    answer:
      "The Lost and Found is located at the front desk in Sidney Smith Hall.",
  },
];

describe("StyledAccordion", () => {
  it("renders all accordion triggers", () => {
    render(<StyledAccordion items={mockItems} />);
    expect(
      screen.getByText(/Where do I go to get an official UofT Transcript/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Where can I find final exams/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Where can I find term tests/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Where is the Lost and Found for Sidney Smith/i)
    ).toBeInTheDocument();
  });

  it("expands and collapses content when clicked", async () => {
    render(<StyledAccordion items={mockItems} />);
    const trigger = screen.getByText(/Where can I find final exams/i);
    await userEvent.click(trigger);

    expect(
      screen.getByText(/Final exams are typically available/)
    ).toBeVisible();

    await userEvent.click(trigger); // collapse
    expect(
      screen.queryByText(/Final exams are typically available/)
    ).not.toBeVisible();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import StyledAccordion from "./Accordion";

describe("StyledAccordion", () => {
  it("renders all accordion triggers", () => {
    render(<StyledAccordion />);
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
    render(<StyledAccordion />);
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

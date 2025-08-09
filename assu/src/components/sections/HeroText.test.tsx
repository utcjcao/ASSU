import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HeroText from "./HeroText";

describe("HeroText Component", () => {
  it("renders with default text when no props are provided", () => {
    render(<HeroText />);
    expect(
      screen.getByRole("heading", { name: /Get Involved/i })
    ).toBeInTheDocument();
  });

  it("renders with custom text when passed", () => {
    render(<HeroText text="Join Us Today" />);
    expect(
      screen.getByRole("heading", { name: /Join Us Today/i })
    ).toBeInTheDocument();
  });

  it("renders top and bottom horizontal lines", () => {
    render(<HeroText />);
    const lines = screen.getAllByRole("separator");
    expect(lines).toHaveLength(2);
  });

  it("applies correct color styles from global.css", () => {
    render(<HeroText />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveClass("text-[color:var(--color-title)]");
  });
});

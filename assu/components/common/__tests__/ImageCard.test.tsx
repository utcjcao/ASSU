import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Adjust path if your alias differs
import ImageCard from "@/components/common/ImageCard";

// --- Mock AssuImage so we don't depend on its implementation ---
const AssuImageMock = jest.fn((props: any) => (
  <div
    data-testid="assu-image"
    data-src={String(props.src)}
    data-alt={String(props.alt)}
  />
));
jest.mock("@/components/common/AssuImage", () => ({
  __esModule: true,
  default: (props: any) => AssuImageMock(props),
}));

describe("ImageCard", () => {
  const baseProps = {
    imageSrc: "/images/example.webp",
    imageAltText: "Example alt",
    title: "Card Title",
  };

  test("renders with role=group and aria-label set to title", () => {
    render(<ImageCard {...baseProps} />);
    const root = screen.getByRole("group", { name: "Card Title" });
    expect(root).toBeInTheDocument();
  });

  test("renders title always and subtitle when provided", () => {
    render(<ImageCard {...baseProps} subtitle="The subtitle" />);
    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("The subtitle")).toBeInTheDocument();
  });

  test("does not render overlay when description is absent", () => {
    render(<ImageCard {...baseProps} />);
    // Overlay content is the description; ensure none is present
    expect(screen.queryByTestId("overlay-content")).not.toBeInTheDocument();
    // But we should still have the media element (AssuImage mock)
    expect(screen.getByTestId("assu-image")).toBeInTheDocument();
  });

  test("renders overlay with description (links allowed)", () => {
    render(
      <ImageCard
        {...baseProps}
        description={
          <div data-testid="overlay-content">
            <a href="https://example.com/a" target="_blank" rel="noreferrer">
              Link A
            </a>
            <br />
            <a href="mailto:hello@example.com">Email</a>
          </div>
        }
      />
    );

    // Overlay container/content appears in DOM (opacity is CSS-driven; we only check presence)
    expect(screen.getByTestId("overlay-content")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /link a/i })).toHaveAttribute(
      "href",
      "https://example.com/a"
    );
    expect(screen.getByRole("link", { name: /email/i })).toHaveAttribute(
      "href",
      "mailto:hello@example.com"
    );
  });

  test("passes src and alt to AssuImage", () => {
    render(<ImageCard {...baseProps} />);
    const img = screen.getByTestId("assu-image");
    expect(img).toHaveAttribute("data-src", "/images/example.webp");
    expect(img).toHaveAttribute("data-alt", "Example alt");
  });

  test("applies size classes for md and merges custom className", () => {
    render(
      <ImageCard
        {...baseProps}
        size="md"
        className="custom-class"
        subtitle="Sub"
      />
    );

    const root = screen.getByRole("group", { name: "Card Title" });
    // Spot-check a couple of the size utility classes
    expect(root).toHaveClass(
      "w-[320px]",
      "h-[300px]",
      "min-w-[320px]",
      "min-h-[300px]"
    );
    // Merged className
    expect(root).toHaveClass("custom-class");
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageCard from "../ImageCard";

const baseProps = {
  imageSrc: "/images/sample.webp",
  imageAltText: "Sample image",
  title: "Test Raffle Contest",
  subtitle: "Mar 4, 2025",
  description: "Enter our test raffle contest!",
};

describe("ImageCard", () => {
  it("renders image, title, and subtitle", () => {
    render(<ImageCard {...baseProps} />);
    expect(screen.getByAltText(/sample image/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /test raffle contest/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/mar 4, 2025/i)).toBeInTheDocument();
  });

  it("is focusable and has an accessible name via aria-label", () => {
    render(<ImageCard {...baseProps} />);
    const card = screen.getByLabelText(/test raffle contest/i);
    expect(card).toBeInTheDocument();
    //tabIndex should be set so it's keyboard focusable
    expect(card).toHaveAttribute("tabindex", "0");
  });

  it("renders as a real link when href is provided", () => {
    render(<ImageCard {...baseProps} href="/events/raffle" />);
    const link = screen.getByRole("link", { name: /test raffle contest/i });
    expect(link).toHaveAttribute("href", "/events/raffle");
  });

  it("does not have an href when none is provided", () => {
    render(<ImageCard {...baseProps} />);
    const card = screen.getByLabelText(/test raffle contest/i);
    expect(card).not.toHaveAttribute("href");
  });

  it("invokes click on Space and Enter (keyboard activation)", () => {
    render(<ImageCard {...baseProps} href="/events/raffle" />);
    const link = screen.getByRole("link", { name: /test raffle contest/i });

    const clickSpy = jest.fn();
    link.addEventListener("click", clickSpy);

    fireEvent.keyDown(link, { key: " " }); // Space
    fireEvent.keyDown(link, { key: "Enter" }); // Enter

    expect(clickSpy).toHaveBeenCalledTimes(2);
  });

  it("shows overlay content in the DOM when description is provided", () => {
    render(<ImageCard {...baseProps} />);
    //Overlay exists in DOM (even if visually hidden until hover)
    expect(
      screen.getByText(/enter our test raffle contest!/i)
    ).toBeInTheDocument();
  });

  it("has a fixed size for each preset (authoring checks on Tailwind classes)", () => {
    const { rerender } = render(<ImageCard {...baseProps} size="sm" />);
    let card = screen.getByLabelText(/test raffle contest/i);
    expect(card.className).toMatch(/w-\[280px\]/);
    expect(card.className).toMatch(/h-\[260px\]/);

    rerender(<ImageCard {...baseProps} size="md" />);
    card = screen.getByLabelText(/test raffle contest/i);
    expect(card.className).toMatch(/w-\[300px\]/);
    expect(card.className).toMatch(/h-\[340px\]/);

    rerender(<ImageCard {...baseProps} size="lg" />);
    card = screen.getByLabelText(/test raffle contest/i);
    expect(card.className).toMatch(/w-\[320px\]/);
    expect(card.className).toMatch(/h-\[360px\]/);
  });

  it("includes focus-visible ring classes (keyboard focus indicator)", () => {
    render(<ImageCard {...baseProps} />);
    const card = screen.getByLabelText(/test raffle contest/i);
    expect(card.className).toMatch(/focus-visible:ring-2/);
    expect(card.className).toMatch(/focus-visible:ring-pink/);
    expect(card.className).toMatch(/focus-visible:ring-offset-2/);
  });

  it("does not render the overlay when description is absent", () => {
    render(
      <ImageCard
        imageSrc="/images/sample.webp"
        imageAltText="Sample image"
        title="Test Raffle Contest"
        subtitle="Mar 4, 2025"
        href="/events/raffle"
        description={undefined} // cover falsy branch
      />
    );
    // Overlay text should NOT be in the DOM at all
    expect(
      screen.queryByText(/enter our test raffle contest!/i)
    ).not.toBeInTheDocument();
  });

  it("renders without a subtitle when not provided", () => {
    render(
      <ImageCard
        imageSrc="/images/sample.webp"
        imageAltText="Sample image"
        title="Test Raffle Contest"
        href="/events/raffle"
        // no subtitle
        description="Enter our test raffle contest!"
      />
    );
    // The title is present
    expect(
      screen.getByRole("link", { name: /test raffle contest/i })
    ).toBeInTheDocument();
    // Subtitle should not be present
    expect(screen.queryByText(/mar 4, 2025/i)).not.toBeInTheDocument();
  });

  it("merges extra className from props", () => {
    render(<ImageCard {...baseProps} className="mx-auto" />);
    const card = screen.getByLabelText(/test raffle contest/i);
    expect(card).toHaveClass("mx-auto");
  });
});

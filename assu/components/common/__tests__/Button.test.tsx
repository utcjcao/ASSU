import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";

describe("Button", () => {
  it("renders a button with the given text", () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole("button", { name: /click me/i });
    expect(btn).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Tap</Button>);
    fireEvent.click(screen.getByRole("button", { name: /tap/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies the default (pink) styling classes", () => {
    render(<Button>Pink</Button>);
    const btn = screen.getByRole("button", { name: /pink/i });
    // spot-check a few key classes from your component defaults
    expect(btn).toHaveClass("bg-pink");
    expect(btn).toHaveClass("text-white");
  });

  it("applies custom className from props", () => {
    render(<Button className="custom-x">Custom</Button>);
    const btn = screen.getByRole("button", { name: /custom/i });
    expect(btn).toHaveClass("custom-x");
  });

  it("respects size prop (sm → text-sm; lg → px-5)", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    let btn = screen.getByRole("button", { name: /small/i });
    expect(btn.className).toMatch(/text-sm/);

    rerender(<Button size="lg">Large</Button>);
    btn = screen.getByRole("button", { name: /large/i });
    expect(btn.className).toMatch(/px-5/);
  });

  it("supports aria-label for screen readers (icon-only pattern)", () => {
    render(
      <Button ariaLabel="Submit">
        <span aria-hidden="true">★</span>
      </Button>
    );
    // Accessible name should be from aria-label
    const btn = screen.getByRole("button", { name: /submit/i });
    expect(btn).toBeInTheDocument();
  });

  it("includes focus styles for keyboard users (class presence)", () => {
    render(<Button>Focus</Button>);
    const btn = screen.getByRole("button", { name: /focus/i });
    // Check focus-visible classes exist (behavior is browser-driven;
    // here we just ensure the classes are part of the compiled string)
    expect(btn.className).toMatch(/focus-visible:ring-2/);
    expect(btn.className).toMatch(/focus-visible:ring-pink/);
    expect(btn.className).toMatch(/focus-visible:ring-offset-2/);
  });
});
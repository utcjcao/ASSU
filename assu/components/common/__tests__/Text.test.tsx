import { render, screen } from "@testing-library/react";
import Text from "../Text";

describe("Text Component", () => {
  describe("Basic Rendering", () => {
    it("renders children correctly", () => {
      render(<Text as="p">Hello World</Text>);
      expect(screen.getByText("Hello World")).toBeInTheDocument();
    });

    it("renders with default props", () => {
      render(<Text as="p">Default text</Text>);
      const element = screen.getByText("Default text");
      expect(element.tagName).toBe("P");
      expect(element).toHaveClass("text-[var(--font-body-medium)]");
      expect(element).toHaveClass("font-[var(--font-sans)]");
      expect(element).toHaveClass("text-left");
      expect(element).toHaveClass("text-[var(--color-text-primary)]");
    });
  });

  describe("Semantic Tags", () => {
    it.each([
      ["h1", "H1"],
      ["h2", "H2"],
      ["h3", "H3"],
      ["h4", "H4"],
      ["h5", "H5"],
      ["h6", "H6"],
      ["p", "P"],
      ["span", "SPAN"],
      ["div", "DIV"],
      ["label", "LABEL"],
      ["strong", "STRONG"],
      ["em", "EM"],
      ["small", "SMALL"],
    ])("renders %s tag correctly", (tag, expectedTagName) => {
      render(<Text as={tag as any}>Test {tag}</Text>);
      const element = screen.getByText(`Test ${tag}`);
      expect(element.tagName).toBe(expectedTagName);
    });
  });

  describe("Font Definitions", () => {
    it("applies correct font classes for headings", () => {
      render(<Text as="h2">Heading</Text>);
      const element = screen.getByText("Heading");
      expect(element).toHaveClass("text-[var(--font-h2)]");
      expect(element).toHaveClass("font-[var(--font-sans)]");
    });

    it("applies correct font classes for body text", () => {
      render(<Text as="p">Body text</Text>);
      const element = screen.getByText("Body text");
      expect(element).toHaveClass("text-[var(--font-body-medium)]");
      expect(element).toHaveClass("font-[var(--font-sans)]");
    });

    it("applies correct font classes for small text", () => {
      render(<Text as="small">Small text</Text>);
      const element = screen.getByText("Small text");
      expect(element).toHaveClass("text-[var(--font-body-x-small)]");
      expect(element).toHaveClass("font-[var(--font-body)]");
    });

    it("applies correct font classes for labels", () => {
      render(<Text as="label">Label text</Text>);
      const element = screen.getByText("Label text");
      expect(element).toHaveClass("text-[var(--font-body-small)]");
      expect(element).toHaveClass("font-[var(--font-body)]");
    });
  });

  describe("Text Alignment", () => {
    it.each([
      ["left", "text-left"],
      ["center", "text-center"],
      ["right", "text-right"],
      ["justify", "text-justify"],
    ])("applies %s alignment correctly", (align, expectedClass) => {
      render(
        <Text as="p" align={align as any}>
          Aligned text
        </Text>
      );
      const element = screen.getByText("Aligned text");
      expect(element).toHaveClass(expectedClass);
    });

    it("defaults to left alignment", () => {
      render(<Text as="p">Default alignment</Text>);
      const element = screen.getByText("Default alignment");
      expect(element).toHaveClass("text-left");
    });
  });

  describe("Text Styles", () => {
    it.each([
      ["normal", ""],
      ["italic", "italic"],
      ["underline", "underline"],
      ["line-through", "line-through"],
    ])("applies %s style correctly", (style, expectedClass) => {
      render(
        <Text as="p" style={style as any}>
          Styled text
        </Text>
      );
      const element = screen.getByText("Styled text");
      if (expectedClass) {
        expect(element).toHaveClass(expectedClass);
      } else {
        // For normal style, no additional class should be added
        expect(element).not.toHaveClass("italic", "underline", "line-through");
      }
    });

    it("defaults to normal style", () => {
      render(<Text as="p">Default style</Text>);
      const element = screen.getByText("Default style");
      expect(element).not.toHaveClass("italic", "underline", "line-through");
    });
  });

  describe("Colors", () => {
    it.each([
      ["primary", "text-[var(--color-text-primary)]"],
      ["secondary", "text-[var(--color-text-secondary)]"],
      ["pink", "text-[var(--color-pink)]"],
      ["gray", "text-[var(--color-gray)]"],
      ["gray-dark", "text-[var(--color-gray-dark)]"],
      ["gray-darker", "text-[var(--color-gray-darker)]"],
    ])("applies %s color correctly", (color, expectedClass) => {
      render(
        <Text as="p" color={color as any}>
          Colored text
        </Text>
      );
      const element = screen.getByText("Colored text");
      expect(element).toHaveClass(expectedClass);
    });

    it("defaults to primary color", () => {
      render(<Text as="p">Default color</Text>);
      const element = screen.getByText("Default color");
      expect(element).toHaveClass("text-[var(--color-text-primary)]");
    });

    it("applies custom color when provided", () => {
      render(
        <Text as="p" color="custom" customColor="var(--color-blue)">
          Custom colored text
        </Text>
      );
      const element = screen.getByText("Custom colored text");
      expect(element).toHaveClass("text-[var(--color-blue)]");
    });

    it("falls back to primary color when custom color is not provided", () => {
      render(
        <Text as="p" color="custom">
          No custom color
        </Text>
      );
      const element = screen.getByText("No custom color");
      expect(element).toHaveClass("text-[var(--color-text-primary)]");
    });
  });

  describe("CSS Classes", () => {
    it("applies default responsive margins", () => {
      render(<Text as="p">Text with margins</Text>);
      const element = screen.getByText("Text with margins");
      expect(element).toHaveClass("mb-3", "md:mb-4");
    });

    it("applies transition classes", () => {
      render(<Text as="p">Text with transitions</Text>);
      const element = screen.getByText("Text with transitions");
      expect(element).toHaveClass("transition-all", "duration-200");
    });

    it("merges custom className with default classes", () => {
      render(
        <Text as="p" className="custom-class bg-blue-100 p-4">
          Custom styled text
        </Text>
      );
      const element = screen.getByText("Custom styled text");
      expect(element).toHaveClass("custom-class", "bg-blue-100", "p-4");
      expect(element).toHaveClass("text-[var(--font-body-medium)]"); // Default class
    });

    it("handles empty className gracefully", () => {
      render(
        <Text as="p" className="">
          Empty className
        </Text>
      );
      const element = screen.getByText("Empty className");
      expect(element).toBeInTheDocument();
      expect(element).toHaveClass("text-[var(--font-body-medium)]");
    });
  });

  describe("Edge Cases", () => {
    it("renders with complex children", () => {
      render(
        <Text as="p">
          <span>Mixed</span> content with <strong>HTML</strong> elements
        </Text>
      );
      expect(screen.getByText("Mixed")).toBeInTheDocument();
      expect(screen.getByText("HTML")).toBeInTheDocument();
    });

    it("renders with numeric children", () => {
      render(<Text as="span">123</Text>);
      expect(screen.getByText("123")).toBeInTheDocument();
    });

    it("renders with empty children", () => {
      const { container } = render(<Text as="p" />);
      const element = container.querySelector("p");
      expect(element).toBeInTheDocument();
      expect(element).toBeEmptyDOMElement();
    });

    it("handles special characters in children", () => {
      render(<Text as="p">Special chars: &lt; &gt; &amp; &quot;</Text>);
      expect(screen.getByText('Special chars: < > & "')).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("renders semantic HTML correctly", () => {
      render(<Text as="h2">Page Heading</Text>);
      const heading = screen.getByRole("heading", { level: 2 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent("Page Heading");
    });

    it("renders label correctly for screen readers", () => {
      render(<Text as="label">Form Label</Text>);
      const label = screen.getByText("Form Label");
      expect(label.tagName).toBe("LABEL");
    });
  });

  describe("Integration", () => {
    it("combines multiple props correctly", () => {
      render(
        <Text
          as="h3"
          align="center"
          style="italic"
          color="pink"
          className="mt-8 mb-4"
        >
          Complex heading
        </Text>
      );
      const element = screen.getByText("Complex heading");
      expect(element.tagName).toBe("H3");
      expect(element).toHaveClass("text-[var(--font-h3)]");
      expect(element).toHaveClass("font-[var(--font-sans)]");
      expect(element).toHaveClass("text-center");
      expect(element).toHaveClass("italic");
      expect(element).toHaveClass("text-[var(--color-pink)]");
      expect(element).toHaveClass("mt-8", "mb-4");
    });
  });
});

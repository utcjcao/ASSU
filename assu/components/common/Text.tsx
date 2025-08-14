import { ReactNode, createElement } from "react";

type TextAlign = "left" | "center" | "right" | "justify";

type TextStyle = "normal" | "italic" | "underline" | "line-through";

type SemanticTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div"
  | "label"
  | "strong"
  | "em"
  | "small";

interface TextProps {
  children: ReactNode;
  as: SemanticTag;
  align?: TextAlign;
  style?: TextStyle;
  className?: string;
  color?:
    | "primary"
    | "secondary"
    | "pink"
    | "gray"
    | "gray-dark"
    | "gray-darker"
    | "custom";
  customColor?: string;
}

export default function Text({
  children,
  as,
  align = "left",
  style = "normal",
  className = "",
  color = "primary",
  customColor,
}: TextProps) {
  // Font definitions using your CSS variables - complete font properties
  const fontDefinitions: Record<SemanticTag, string> = {
    h1: "text-[var(--font-h2)]", // Using h2 size for h1 since h1 isn't defined
    h2: "text-[var(--font-h2)]",
    h3: "text-[var(--font-h3)]",
    h4: "text-[var(--font-h4)]",
    h5: "text-[var(--font-h5)]",
    h6: "text-[var(--font-h6)]",
    p: "text-[var(--font-body-medium)]",
    span: "text-[var(--font-body-medium)]",
    div: "text-[var(--font-body-medium)]",
    label: "text-[var(--font-body-small)]",
    strong: "text-[var(--font-body-medium)]",
    em: "text-[var(--font-body-medium)]",
    small: "text-[var(--font-body-x-small)]",
  };

  // Color mapping using your CSS variables
  const colorClasses: Record<string, string> = {
    primary: "text-[var(--color-text-primary)]",
    secondary: "text-[var(--color-text-secondary)]",
    pink: "text-[var(--color-pink)]",
    gray: "text-[var(--color-gray)]",
    "gray-dark": "text-[var(--color-gray-dark)]",
    "gray-darker": "text-[var(--color-gray-darker)]",
    custom: customColor
      ? `text-[${customColor}]`
      : "text-[var(--color-text-primary)]",
  };

  // Font family based on semantic tag
  const getFontFamily = (tag: SemanticTag) => {
    if (
      tag.startsWith("h") ||
      tag === "p" ||
      tag === "strong" ||
      tag === "em"
    ) {
      return "font-[var(--font-sans)]"; // Questrial for headings and main text
    }
    return "font-[var(--font-body)]"; // DIN Next for labels and small text
  };

  // Base classes with responsive design
  const baseClasses = [
    fontDefinitions[as],
    getFontFamily(as),
    `text-${align}`,
    colorClasses[color],
    // Mobile-first responsive margins
    "mb-3 md:mb-4",
    // Smooth transitions for responsive changes
    "transition-all duration-200",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Apply text styles
  const styleClasses: Record<TextStyle, string> = {
    normal: "",
    italic: "italic",
    underline: "underline",
    "line-through": "line-through",
  };

  const finalClasses = `${baseClasses} ${styleClasses[style]}`.trim();

  // Render with semantic tag using createElement
  return createElement(as, { className: finalClasses }, children);
}

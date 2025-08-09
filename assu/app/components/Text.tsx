import { ReactNode, createElement } from "react";

type TextSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

type TextWeight =
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

type TextAlign = "left" | "center" | "right" | "justify";

type TextStyle = "normal" | "italic" | "underline" | "line-through";

type MaxWidth =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "full"
  | "none";

type LineHeight = "tight" | "snug" | "normal" | "relaxed" | "loose";

type LetterSpacing = "tight" | "normal" | "wide";

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
  as?: SemanticTag;
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  style?: TextStyle;
  className?: string;
  maxWidth?: MaxWidth;
  lineHeight?: LineHeight;
  spacing?: LetterSpacing;
}

export default function Text({
  children,
  as = "p",
  size = "base",
  weight = "normal",
  align = "left",
  style = "normal",
  className = "",
  maxWidth = "none",
  lineHeight = "normal",
  spacing = "normal",
}: TextProps) {
  // Responsive text sizes - smaller on mobile, larger on desktop
  const responsiveSizes: Record<TextSize, string> = {
    xs: "text-xs md:text-sm",
    sm: "text-sm md:text-base",
    base: "text-base md:text-lg",
    lg: "text-lg md:text-xl",
    xl: "text-xl md:text-2xl",
    "2xl": "text-2xl md:text-3xl",
    "3xl": "text-3xl md:text-4xl",
    "4xl": "text-4xl md:text-5xl",
    "5xl": "text-5xl md:text-6xl",
    "6xl": "text-6xl md:text-7xl",
    "7xl": "text-7xl md:text-8xl",
    "8xl": "text-8xl md:text-9xl",
    "9xl": "text-9xl",
  };

  // Responsive line heights - tighter on mobile for better readability
  const responsiveLineHeights: Record<LineHeight, string> = {
    tight: "leading-tight md:leading-snug",
    snug: "leading-snug md:leading-normal",
    normal: "leading-normal md:leading-relaxed",
    relaxed: "leading-relaxed md:leading-loose",
    loose: "leading-loose",
  };

  // Responsive spacing - tighter on mobile, more generous on desktop
  const responsiveSpacing: Record<LetterSpacing, string> = {
    tight: "tracking-tight md:tracking-normal",
    normal: "tracking-normal md:tracking-wide",
    wide: "tracking-wide md:tracking-wider",
  };

  // Max width utilities for mobile-safe line lengths
  const maxWidthClasses: Record<MaxWidth, string> = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    full: "max-w-full",
    none: "",
  };

  // Base classes with responsive design
  const baseClasses = [
    responsiveSizes[size],
    `font-${weight}`,
    `text-${align}`,
    responsiveLineHeights[lineHeight],
    responsiveSpacing[spacing],
    maxWidthClasses[maxWidth],
    // Mobile-first responsive margins
    "mb-3 md:mb-4",
    // Ensure proper contrast and readability
    "text-gray-darker",
    // Smooth transitions for responsive changes
    "transition-all duration-200",
    className,
  ]
    .filter(Boolean) // Remove empty strings
    .join(" "); // Join all classes with a space

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

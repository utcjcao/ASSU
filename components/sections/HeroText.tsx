import React from "react";

interface HeroTextProps {
  text?: string;
}

const HeroText: React.FC<HeroTextProps> = ({ text = "Get Involved" }) => {
  return (
    <div className="my-8 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        {/* Top line */}
        <hr className="border-t-2 border-[color:var(--color-line)]" />

        {/* Heading text */}
        <h1
          className="text-3xl font-bold text-[color:var(--color-title)] my-2"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {text}
        </h1>

        {/* Bottom line */}
        <hr className="border-t-2 border-[color:var(--color-line)]" />
      </div>
    </div>
  );
};

export default HeroText;

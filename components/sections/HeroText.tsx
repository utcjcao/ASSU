import React from "react";
import Divider from "../common/Divider";

interface HeroTextProps {
  text?: string;
  borderWidth?: string;
}

const HeroText: React.FC<HeroTextProps> = ({
  text = "Get Involved",
  borderWidth = "3px",
}) => {
  return (
    <div className="my-8 flex flex-col items-center">
      <div className="w-full">
        <Divider margin="0 auto" borderTopWidth={borderWidth} />
        <h1
          className="text-5xl font-bold text-[color:var(--color-title)] my-2"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {text}
        </h1>
        <Divider margin="0 auto" borderTopWidth={borderWidth} />
      </div>
    </div>
  );
};

export default HeroText;

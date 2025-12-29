"use client";

import React from "react";

interface DividerProps {
  className?: string;
  width?: string;
  height?: string;
  color?: string;
  margin?: string;
  borderTopWidth?: string;
}

const Divider: React.FC<DividerProps> = ({
  className = "",
  width,
  height,
  color = "var(--color-gray)",
  margin,
  borderTopWidth = "1px",
}) => {
  const baseStyles: React.CSSProperties = {
    width: width || "100%",
    height: height || "7px",
    position: "relative",
    margin: margin || "0 auto 22px auto",
    left: "0px",
    justifySelf: "start",
    alignSelf: "start",
    transformOrigin: "center 1.5px",
  };

  const lineStyles: React.CSSProperties = {
    borderTop: `${borderTopWidth} solid ${color}`,
    boxSizing: "border-box",
    height: "0",
    width: "100%",
  };

  return (
    <div className={`${className}`} style={baseStyles} data-testid="divider">
      <div style={lineStyles} />
    </div>
  );
};

export default Divider;

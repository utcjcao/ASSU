"use client";

import React, { useEffect, useState } from "react";

interface DividerProps {
  className?: string;
  width?: string;
  height?: string;
  color?: string;
  margin?: string;
  maxWidth?: string;
  borderTopWidth?: string;
}

const Divider: React.FC<DividerProps> = ({
  className = "",
  width,
  height,
  color = "var(--color-gray)",
  margin,
  maxWidth,
  borderTopWidth = "1px",
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024 && window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getMaxWidth = () => {
    if (isMobile) return "95%";
    if (isTablet) return "90%";
    return "980px";
  };

  const baseStyles: React.CSSProperties = {
    width: width || "100%",
    maxWidth: maxWidth || getMaxWidth(),
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

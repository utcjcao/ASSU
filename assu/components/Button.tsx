"use client";

import React, { useEffect, useState } from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    size?: "sm" | "md" | "lg";
    className?: string;
    ariaLabel?: string;
}

export default function Button({
  children,
  size = "md",
  className = "",
  onClick,
  ariaLabel,
}: ButtonProps) {
    
    //Shared base styles for all buttons
    const base = [
        //Layout
        "bg-pink text-white hover:bg-pink-light inline-flex items-center justify-center rounded-full font-medium select-none",
        //Interaction 
        "transition-colors outline-none touch-manipulation",
        //Keyboard focus ring
        "focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:outline-none",
        //Minimum size for mobile-friendly
        "min-h-11 min-w-11",
    ].join(" ");

    //Scaled to size
    const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-2.5 text-base",
        lg: "px-5 py-3 text-lg",
    };

    const composedButton = [
        base,
        sizes[size],
        className,
    ].filter(Boolean).join(" ")

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={composedButton}
    >
      {children}
    </button>
  );
}
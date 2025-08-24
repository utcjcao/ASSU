"use client";
import React, { useEffect, useRef } from "react";

export interface TimelinePoint {
  date: string;
  description: string;
}

export interface VerticalTimelineProps {
  timelinePoints: TimelinePoint[];
  className?: string;
}

/**
 * Renders text with bold formatting support
 * Supports **bold text** syntax within the description
 */
function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      // Remove the ** markers and render as bold
      const boldText = part.slice(2, -2);
      return (
        <strong key={index} className="font-bold">
          {boldText}
        </strong>
      );
    }
    return part;
  });
}

export default function VerticalTimeline({
  timelinePoints,
  className = "",
}: VerticalTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const positionElements = () => {
      if (!timelineRef.current) return;

      const timelineItems = timelineRef.current.querySelectorAll(
        "[data-timeline-item]"
      );

      timelineItems.forEach((item, index) => {
        const descriptionEl = item.querySelector(
          "[data-description]"
        ) as HTMLElement;
        const dotEl = item.querySelector("[data-dot]") as HTMLElement;
        const dateEl = item.querySelector("[data-date]") as HTMLElement;

        if (!descriptionEl || !dotEl || !dateEl) return;

        // Get the description's height and calculate its center
        const descriptionRect = descriptionEl.getBoundingClientRect();
        const descriptionCenter = descriptionRect.height / 2;

        // Position dot and date at the vertical center of the description
        dotEl.style.transform = `translateY(${descriptionCenter - 8}px)`; // -8px to center the 16px dot
        dateEl.style.transform = `translateY(${descriptionCenter - 12}px)`; // -12px to center the text roughly
      });
    };

    // Position elements after initial render and on window resize
    positionElements();
    window.addEventListener("resize", positionElements);

    // Also position after fonts load
    document.fonts.ready.then(positionElements);

    return () => {
      window.removeEventListener("resize", positionElements);
    };
  }, [timelinePoints]);

  if (!timelinePoints || timelinePoints.length === 0) {
    return null;
  }

  return (
    <div
      className={`relative max-w-6xl mx-auto ${className}`}
      ref={timelineRef}
    >
      {/* Continuous timeline line behind all points */}
      <div
        className="absolute left-1/2 top-2 w-0 border-l-2 border-dotted border-gray-300 z-0 transform -translate-x-0.5"
        style={{ height: `calc(100% - 1rem)` }}
      />

      {/* Timeline container */}
      <div className="flex flex-col">
        {timelinePoints.map((point, index) => (
          <div
            key={index}
            className="relative flex items-start group"
            data-timeline-item
          >
            {/* Date section - left side */}
            <div className="flex-1 pr-8 text-right">
              <span
                className="font-bold text-xl text-[var(--color-text-primary)] inline-block transition-transform duration-200"
                data-date
              >
                {point.date}
              </span>
            </div>

            {/* Timeline dot - center */}
            <div className="flex-shrink-0 relative z-10 flex justify-center">
              <div
                className="w-4 h-4 bg-pink rounded-full transition-transform duration-200"
                data-dot
              />
            </div>

            {/* Description section - right side */}
            <div className="flex-1 pl-8.5 pb-8">
              <div
                className="text-[var(--color-text-primary)] text-base leading-relaxed"
                data-description
              >
                {renderFormattedText(point.description)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import React from "react";

export type ContentItem = {
  id: string | number;
  title: string;
  description?: string;
//   href?: string;
  ariaLabel?: string; // overrides the accessible name if needed
};

interface ContentGridProps {
  items: ContentItem[];
  columns?: number; // default 3
  // grid label for screen readers
  ariaLabel?: string;
  className?: string;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function ContentGrid({
  items,
  columns = 3,
  ariaLabel = "Content grid",
  className = "",
}: ContentGridProps) {
  const colCount = Math.max(1, columns);
  const rows = chunk(items, colCount);

  return (
    <div
      role="grid"
      aria-label={ariaLabel}
      aria-rowcount={rows.length}
      aria-colcount={colCount}
      className={[
        // visual grid (responsive)
        "grid gap-0", // we draw our own separators; use padding inside cells
        "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className,
      ].filter(Boolean).join(" ")}
    >
      {rows.map((row, rIndex) => (
        <div
          key={`row-${rIndex}`}
          role="row"
          aria-rowindex={rIndex + 1}
          className="contents" // keep CSS grid layout; children are grid items
        >
          {row.map((item, cIndex) => {
            const cellKey = item.id ?? `${rIndex}-${cIndex}`;
            const titleId = `content-title-${cellKey}`;

            // Shared classes for a cell:
            // - padding and min touch target
            // - partial separators using before: (top) and after: (left) drawn *inside* the cell
            //   We skip top separator on the first row and left separator on the first column.
            const isFirstRow = rIndex === 0;
            const isFirstCol = cIndex === 0;

            const borders = [
              !isFirstRow ? "border-t border-gray-500" : "",
              !isFirstCol ? "border-l border-gray-500" : "",
            ]
              .filter(Boolean)
              .join(" ");

            const cellBase =
              "relative p-5 md:p-6 min-h-11 min-w-11 focus-within:outline-none";
            const partialTop =
              !isFirstRow
                ? "before:absolute before:top-0 before:left-4 before:right-4 before:h-px before:bg-gray-dark"
                : "";
            const partialLeft =
              !isFirstCol
                ? "after:absolute after:top-4 after:bottom-4 after:left-0 after:w-px after:bg-gray-dark"
                : "";

            const cellChrome =
              "hover:bg-gray-50 transition-colors rounded-none"; 

            const cellClass = [cellBase, partialTop, partialLeft, cellChrome]
              .filter(Boolean)
              .join(" ");

            // Inner content styles
            const titleCls = "text-base md:text-lg font-semibold text-gray-dark";
            const descCls = "mt-2 text-sm md:text-base text-gray-700";

            return (
              <div
                key={cellKey}
                role="gridcell"
                tabIndex={0}
                aria-colindex={cIndex + 1}
                aria-labelledby={titleId}
                className={[
                  cellClass,
                  // keyboard ring when focusing the cell itself
                  "focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2",
                  "cursor-default",
                ].join(" ")}
              >
                <h3 id={titleId} className={titleCls}>
                  {item.title}
                </h3>
                {item.description ? (
                  <p className={descCls}>{item.description}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
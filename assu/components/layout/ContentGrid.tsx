"use client";

import React from "react";

export type ContentItem = {
  id: string | number;
  node?: React.ReactNode;
  title?: string;
  description?: string;
  ariaLabel?: string;
};

interface ContentGridProps {
  items: ContentItem[];
  columns?: number; // default 2
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
  columns = 2,
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
      className={[`grid gap-0 grid-cols-${columns} mx-auto`, className]
        .filter(Boolean)
        .join(" ")}
    >
      {rows.map((row, rIndex) => (
        <div
          key={`row-${rIndex}`}
          role="row"
          aria-rowindex={rIndex + 1}
          className="contents"
        >
          {row.map((item, cIndex) => {
            const cellKey = item.id ?? `${rIndex}-${cIndex}`;
            const titleId = `content-title-${cellKey}`;

            // skip top separator on the first row and left separator on the first column.
            const isFirstRow = rIndex === 0;
            const isFirstCol = cIndex === 0;

            // const borders = [
            //   !isFirstRow ? "border-t border-gray-500" : "",
            //   !isFirstCol ? "border-l border-gray-500" : "",
            // ].filter(Boolean).join(" ");

            const cellBase =
              "relative p-5 md:p-6 min-h-11 min-w-11 focus-within:outline-none";
            const partialTop = !isFirstRow
              ? "before:absolute before:top-0 before:left-4 before:right-4 before:h-px before:bg-gray-500"
              : "";
            const partialLeft = !isFirstCol
              ? "after:absolute after:top-4 after:bottom-4 after:left-0 after:w-px after:bg-gray-500"
              : "";

            const cellChrome = "rounded-none";

            const cellClass = [cellBase, partialTop, partialLeft, cellChrome]
              .filter(Boolean)
              .join(" ");

            // Inner content styles
            const titleCls = "text-base md:text-lg font-semibold text-pink";
            const descCls = "mt-2 text-sm md:text-base text-gray-700";

            return (
              <div
                key={cellKey}
                role="gridcell"
                tabIndex={0}
                aria-colindex={cIndex + 1}
                // only set aria-labelledby if title exists
                {...(item.title ? { "aria-labelledby": titleId } : {})}
                className={[
                  cellClass,
                  "focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2",
                  "cursor-default",
                ].join(" ")}
              >
                {item.title ? (
                  <p id={titleId} className={titleCls}>
                    {item.title}
                  </p>
                ) : null}

                {item.description ? (
                  <p className={descCls}>{item.description}</p>
                ) : null}

                {item.node ? <div className="pt-5">{item.node}</div> : null}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

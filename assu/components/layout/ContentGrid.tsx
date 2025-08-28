"use client";

import React from "react";

export type ContentItem = {
  id: string | number;
  node?: React.ReactNode;
  title?: string;
  description?: string;
  ariaLabel?: string;
  mergeKey?: string;
};

interface ContentGridProps {
  items: ContentItem[];
  columns?: number; // default 2
  // grid label for screen readers
  ariaLabel?: string;
  className?: string;
  mergeAdjacentOnMobile?: boolean;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function groupForMobile(items: ContentItem[], enabled: boolean) {
  if (!enabled) return items.map(i => [i]);
  const groups: ContentItem[][] = [];
  let i = 0;
  while (i < items.length) {
    const a = items[i];
    const next = items[i + 1];
    if (a?.mergeKey && next?.mergeKey && a.mergeKey === next.mergeKey) {
      groups.push([a, next]);
      i += 2;
    } else {
      groups.push([a]);
      i += 1;
    }
  }
  return groups;
}

export default function ContentGrid({
  items,
  columns = 2,
  ariaLabel = "Content grid",
  className = "",
  mergeAdjacentOnMobile = true,
}: ContentGridProps) {
  const colCount = Math.max(1, columns);
  const rows = chunk(items, colCount);
  const mobileGroups = groupForMobile(items, mergeAdjacentOnMobile);
  const cellBase = "relative p-5 md:p-6 min-h-11 min-w-11 focus-within:outline-none rounded-none";
  const titleCls = "text-base md:text-lg font-semibold text-pink";
  const descCls = "mt-2 text-sm md:text-base text-gray-700";

  return (
    <div className={className}>
      {/* Mobile: single column; merged groups */}
      <div
        role="grid"
        aria-label={ariaLabel}
        className="md:hidden grid grid-cols-1 gap-0"
      >
        {mobileGroups.map((group, idx) => {
          const isFirst = idx === 0;
          const mobileTop =
            !isFirst
              ? "before:content-[''] before:absolute before:top-0 before:left-4 before:right-4 before:h-px before:bg-gray-500"
              : "";
          return (
            <div key={idx} role="row" className={["contents"].join(" ")}>
              <div
                role="gridcell"
                tabIndex={0}
                className={[
                  cellBase,
                  mobileTop,
                  "focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 cursor-default",
                ].join(" ")}
              >
                {group.map((item, j) => (
                  <div key={item.id ?? j} className={j > 0 ? "pt-5" : ""}>
                    {item.title ? (
                      <p className={titleCls} id={`content-title-${item.id}`}>
                        {item.title}
                      </p>
                    ) : null}
                    {item.description ? (
                      <p className={descCls}>{item.description}</p>
                    ) : null}
                    {item.node ? <div className="pt-5">{item.node}</div> : null}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop: original grid behavior */}
      <div
        role="grid"
        aria-label={ariaLabel}
        aria-rowcount={rows.length}
        aria-colcount={colCount}
        className={[
          "hidden md:grid gap-0",
          `md:grid-cols-${columns}`,
          "mx-auto",
        ].join(" ")}
      >
        {rows.map((row, rIndex) => (
          <div key={`row-${rIndex}`} role="row" className="contents">
            {row.map((item, cIndex) => {
              const cellKey = item.id ?? `${rIndex}-${cIndex}`;
              const titleId = `content-title-${cellKey}`;
              const isFirstRow = rIndex === 0;
              const isFirstCol = cIndex === 0;

              const partialTop = !isFirstRow
                ? "md:before:content-[''] md:before:absolute md:before:top-0 md:before:left-4 md:before:right-4 md:before:h-px md:before:bg-gray-500"
                : "";
              const partialLeft = !isFirstCol
                ? "md:after:absolute md:after:top-4 md:after:bottom-4 md:after:left-0 md:after:w-px md:after:bg-gray-500"
                : "";

              return (
                <div
                  key={cellKey}
                  role="gridcell"
                  tabIndex={0}
                  {...(item.title ? { "aria-labelledby": titleId } : {})}
                  className={[
                    cellBase,
                    partialTop,
                    partialLeft,
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
    </div>
  );
}
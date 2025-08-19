"use client";

import React from "react";
import ImageCard from "../common/ImageCard";

type CardItem = {
  id: string | number;
  imageSrc: string;
  imageAltText: string;
  title: string;
  subtitle?: string;
  description?: string;
  href: string;
};

interface CardGridProps {
  items: CardItem[];
  /** number of columns to compose rows for ARIA semantics (desktop baseline) */
  columns?: number; // default 4
  ariaLabel?: string;
  className?: string;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function CardGrid({
  items,
  columns = 4,
  ariaLabel = "Card grid",
  className = "",
}: CardGridProps) {
  const rows = chunk(items, Math.max(1, columns));

  return (
    <div
      role="grid"
      aria-label={ariaLabel}
      aria-rowcount={rows.length}
      aria-colcount={columns}
      className={[
        // responsive grid; visual layout
        "grid gap-4",
        "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className,
      ]
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
          {row.map((card, cIndex) => {
            const titleId = `card-title-${card.id ?? `${rIndex}-${cIndex}`}`;
            return (
              <div
                key={card.id ?? `${rIndex}-${cIndex}`}
                role="gridcell"
                aria-colindex={cIndex + 1}
                aria-labelledby={titleId}
                className={[
                  // ensure touch-friendly click area
                  "min-h-11 min-w-11",
                  // rounded and focus-visible ring when using keyboard on inner link
                  "rounded-2xl",
                ].join(" ")}
              >
                {/* Render the ImageCard (link-only) */}
                <ImageCard
                  imageSrc={card.imageSrc}
                  imageAltText={card.imageAltText}
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.description}
                  href={card.href}
                  // allow external layout classes if needed by parent
                />

                {/* SR-only title to back aria-labelledby on the cell */}
                <span id={titleId} className="sr-only">
                  {card.title}
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
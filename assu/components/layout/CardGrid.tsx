"use client";

import React from "react";
import ImageCard from "../common/ImageCard";

type CardItem = {
  id: string | number;
  imageSrc: string;
  imageAltText: string;
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
  href?: string;
};

interface CardGridProps {
  items: CardItem[];
  columns?: 1 | 2 | 3 | 4 ;
  ariaLabel?: string;
  className?: string;
  cardWidthPx?: number;              
  gapPx?: number;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function colsClass(n: number): string {
  switch (n) {
    case 1: return "grid-cols-1";
    case 2: return "grid-cols-2";
    case 3: return "grid-cols-3";
    case 4: return "grid-cols-4";
    default: return "grid-cols-3";
  }
}

export default function CardGrid({
  items,
  columns = 3,
  ariaLabel = "Card grid",
  className = "",
  cardWidthPx = 300,  
  gapPx = 16,          
}: CardGridProps) {
  const colCount = Math.max(1, Math.min(6, columns));
  const rows = chunk(items, colCount);

  const maxCols = Math.max(1, Math.min(4, columns));
  const maxWidth = maxCols * cardWidthPx + (maxCols - 1) * gapPx;

  return (
    <div className="w-full flex justify-center">
      <div
        role="grid"
        aria-label={ariaLabel}
        className={[
          "grid",
          "justify-center",
          className,
        ].join(" ")}
        style={{
          columnGap: `${gapPx}px`,
          rowGap: `${gapPx}px`,
          gridTemplateColumns: `repeat(auto-fit, ${cardWidthPx}px)`,
          maxWidth: `${maxWidth}px`,
          width: "100%",
        }}
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
                  className="min-w-0 rounded-2xl flex justify-center"
                >
                  <ImageCard
                    imageSrc={card.imageSrc}
                    imageAltText={card.imageAltText}
                    title={card.title}
                    subtitle={card.subtitle}
                    description={card.description}
                    size="md"
                  />
                  <span id={titleId} className="sr-only">
                    {card.title}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
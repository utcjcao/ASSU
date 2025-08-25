"use client";

import React from "react";
import AssuImage from "./AssuImage";

interface ImageCardProps {
  imageSrc: string;
  imageAltText: string;
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
}

export default function ImageCard({
  imageSrc,
  imageAltText,
  title,
  subtitle,
  description,
  className,
  size = "sm",
}: ImageCardProps) {
  const hasOverlay = Boolean(description);

  //Scaled to size
  const sizes: Record<NonNullable<ImageCardProps["size"]>, string> = {
    sm: "w-[280px] h-[260px] min-w-[280px] min-h-[260px] max-w-[280px] max-h-[260px] flex-none",
    md: "w-[320px] h-[300px] min-w-[320px] min-h-[300px] max-w-[320px] max-h-[300px] flex-none",
    lg: "w-[320px] h-[360px] min-w-[320px] min-h-[360px] max-w-[320px] max-h-[360px] flex-none",
  };

  const base = [
    "group relative block overflow-hidden rounded-2xl shadow",
    "outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2",
    "flex flex-col",
    hasOverlay ? "hover:shadow-md transition-shadow" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const media = "absolute inset-0";
  const imgCls = "h-full w-full object-cover";

  //Title/subtitle — fades out on hover/focus
  const baseCaption = [
    "absolute inset-x-0 bottom-0 z-10 p-4 text-white",
    "bg-gradient-to-t from-black/60 via-black/25 to-transparent",
    hasOverlay
      ? "transition-opacity duration-200 opacity-100 group-hover:opacity-0 group-focus-within:opacity-0"
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  //Overlay (black bg + description) — appears on hover/focus
  const overlay = [
    "absolute inset-0 z-20 flex items-center justify-center text-center px-4",
    "bg-black text-white",
    "transition-opacity duration-200",
    "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",
    "break-words whitespace-normal overflow-hidden", // 👈 added for wrapping
  ].join(" ");

  // const Title = (
  //   <h3 className="text-xl font-semibold drop-shadow-sm">{title}</h3>
  // );

  // const Subtitle = subtitle ? (
  //   <p className="mt-1 text-sm text-white/90">{subtitle}</p>
  // ) : null;

  // const OverlayContent = description ? (
  //   <div className="max-w-[90%]">
  //     <p className="mt-2 text-sm leading-relaxed">{description}</p>
  //   </div>
  // ) : null;

  return (
    <div
      className={[base, sizes[size], className].join(" ")}
      tabIndex={-1}
      role="group"
      aria-label={title}
    >
      <div className={media}>
        <AssuImage
          src={imageSrc}
          alt={imageAltText}
          className="h-full w-full"
          aspectClassName="!aspect-auto h-full"
          radiusClassName="rounded-2xl"
          imgClassName={imgCls}
        />
      </div>

      <div className={baseCaption}>
        {subtitle && <p className="mt-1 text-sm text-white/90">{subtitle}</p>}
        <h3 className="text-xl font-semibold drop-shadow-sm">{title}</h3>
      </div>

      {hasOverlay && (
        <div className={overlay}>
          <div className="max-w-[90%] text-left">
            <div className="space-y-2 text-sm leading-relaxed">
              {description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import React from "react";
import AssuImage from "./AssuImage";

interface ImageCardProps {
  imageSrc: string;
  imageAltText: string;
  title: string;
  subtitle?: string; //Optional (date/subtitle purposes)
  description?: string; //Optional (hover description purposes)
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Button({
  imageSrc,
  imageAltText,
  title,
  subtitle,
  description,
  href,
  className,
  size = "sm",
}: ImageCardProps) {
  //Scaled to size
  const sizes: Record<NonNullable<ImageCardProps["size"]>, string> = {
    sm: "w-[280px] h-[260px] min-w-[280px] min-h-[260px] max-w-[280px] max-h-[260px] flex-none",
    md: "w-[300px] h-[340px] min-w-[300px] min-h-[340px] max-w-[300px] max-h-[340px] flex-none",
    lg: "w-[320px] h-[360px] min-w-[320px] min-h-[360px] max-w-[320px] max-h-[360px] flex-none",
  };

  const base = [
    "group relative overflow-hidden rounded-2xl bg-white shadow transition hover:shadow-md",
    "outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2",
    "flex flex-col",
  ].join(" ");

  const media = "absolute inset-0";
  const imgCls = "h-full w-full object-cover";

  //Title/subtitle — fades out on hover/focus
  const baseCaption = [
    "absolute inset-x-0 bottom-0 p-4",
    "transition-opacity duration-200",
    "opacity-100 group-hover:opacity-0 group-focus-visible:opacity-0",
    "text-white",
    "bg-gradient-to-t from-black/60 via-black/20 to-transparent",
  ].join(" ");

  //Overlay (black bg + description) — appears on hover/focus
  const overlay = [
    "absolute inset-0 flex items-center justify-center text-center px-4",
    "bg-black text-white",
    "transition-opacity duration-200",
    "opacity-10 group-hover:opacity-100 group-focus-visible:opacity-100",
  ].join(" ");

  const Title = (
    <h3 className="text-xl font-semibold drop-shadow-sm">{title}</h3>
  );

  const Subtitle = subtitle ? (
    <p className="mt-1 text-sm text-white/90">{subtitle}</p>
  ) : null;

  const OverlayContent = description ? (
    <div className="max-w-[90%]">
      <p className="mt-2 text-sm leading-relaxed">{description}</p>
    </div>
  ) : null;

  return (
    <a
      href={href}
      tabIndex={0}
      aria-label={title}
      className={[base, sizes[size], className].filter(Boolean).join(" ")}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          (e.currentTarget as HTMLAnchorElement).click();
        }
      }}
    >
      <div className={media}>
        <AssuImage
          src={imageSrc}
          alt={imageAltText}
          className={imgCls}
        ></AssuImage>
      </div>

      <div className={baseCaption}>
        {subtitle && Subtitle}
        {Title}
      </div>

      {description && <div className={overlay}>{OverlayContent}</div>}
    </a>
  );
}

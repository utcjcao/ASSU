"use client";

import Image, { ImageProps } from "next/image";
import { useId, useState } from "react";

export type OverlayBlock = {
  content: React.ReactNode;
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "center-left"
    | "center"
    | "center-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  className?: string;
  interactive?: boolean;
};

export type AssuImageProps = {
  src: ImageProps["src"];
  alt: string;
  caption?: string;
  ariaLabel?: string;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  aspectClassName?: string;
  /** Tailwind radius class applied to the visual container. */
  radiusClassName?: string;
  priority?: boolean;
  /**
   * Deprecated: use `overlays` for multiple/custom placements
   */
  overlay?: React.ReactNode;
  overlayPosition?: "top" | "center" | "bottom";
  overlayAlign?: "left" | "center" | "right";
  /**
   * Multiple overlay blocks with precise positioning.
   */
  overlays?: OverlayBlock[];
  fallback?: React.ReactNode;
};

/**
 * Accessible, responsive image with optional text overlay, skeleton while loading,
 * and error fallback. Uses next/image with fill layout by default.
 */
export default function AssuImage({
  src,
  alt,
  caption,
  ariaLabel,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 33vw",
  className = "",
  imgClassName = "",
  aspectClassName = "aspect-[16/9]",
  radiusClassName = "rounded-lg",
  priority = false,
  overlay,
  overlayPosition = "bottom",
  overlayAlign = "left",
  overlays,
  fallback,
}: AssuImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const captionId = useId();

  const figureLabel = ariaLabel ?? alt;

  const overlayPositionClasses =
    overlayPosition === "center"
      ? "inset-0 grid place-items-center p-4"
      : overlayPosition === "top"
      ? "top-0 left-0 right-0 p-4"
      : "bottom-0 left-0 right-0 p-4"; // bottom

  const overlayAlignClasses =
    overlayAlign === "center"
      ? "text-center"
      : overlayAlign === "right"
      ? "text-right"
      : "text-left";

  return (
    <figure
      role="group"
      aria-label={figureLabel}
      aria-busy={!isLoaded && !hasError}
      aria-describedby={caption ? captionId : undefined}
      className={`w-full max-w-full ${className}`}
    >
      <div
        className={`relative w-full overflow-hidden ${radiusClassName} ${aspectClassName}`}
      >
        {/* Skeleton */}
        {!isLoaded && !hasError && (
          <div
            className="absolute inset-0 animate-pulse bg-gray-light/40"
            aria-hidden="true"
            data-testid="image-skeleton"
          />
        )}

        {/* Error fallback */}
        {hasError ? (
          <div
            className="absolute inset-0 flex items-center justify-center bg-gray-lighter text-gray-dark border border-dashed border-gray-light"
            role="img"
            aria-label={`Image failed to load: ${alt}`}
            data-testid="image-fallback"
          >
            {fallback ?? (
              <div className="flex flex-col items-center gap-2 p-4 text-center">
                <Image
                  src="/file.svg"
                  alt="Fallback image"
                  width={96}
                  height={96}
                  className="opacity-70"
                />
                <span className="text-sm">Image unavailable</span>
              </div>
            )}
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            onLoadingComplete={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`object-cover select-none ${imgClassName}`}
          />
        )}

        {/* Legacy single overlay (visual only) */}
        {overlay && !hasError && !overlays && (
          <div
            className={`pointer-events-none absolute ${overlayPositionClasses} ${overlayAlignClasses} text-white break-words`}
            aria-hidden="true"
          >
            {/* Subtle gradient if anchored to top/bottom for readability */}
            {(overlayPosition === "bottom" || overlayPosition === "top") && (
              <div
                className={`absolute inset-0 ${
                  overlayPosition === "bottom"
                    ? "bg-gradient-to-t from-black/50 via-black/10 to-transparent"
                    : "bg-gradient-to-b from-black/50 via-black/10 to-transparent"
                }`}
                aria-hidden="true"
              />
            )}
            <div className="relative z-10">
              {typeof overlay === "string" ? (
                <span className="inline-block rounded bg-black/40 px-2 py-1 text-sm">
                  {overlay}
                </span>
              ) : (
                overlay
              )}
            </div>
          </div>
        )}

        {/* Multiple overlays */}
        {overlays && overlays.length > 0 && !hasError && (
          <div aria-hidden="true">
            {overlays.map((block, index) => {
              const pos = block.position ?? "bottom-left";
              const posClasses =
                pos === "top-left"
                  ? "top-0 left-0 p-4"
                  : pos === "top-center"
                  ? "top-0 left-1/2 -translate-x-1/2 p-4"
                  : pos === "top-right"
                  ? "top-0 right-0 p-4"
                  : pos === "center-left"
                  ? "top-1/2 -translate-y-1/2 left-0 p-4"
                  : pos === "center"
                  ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 sm:p-4 md:p-6 lg:p-8"
                  : pos === "center-right"
                  ? "top-1/2 -translate-y-1/2 right-0 p-4"
                  : pos === "bottom-center"
                  ? "bottom-0 left-1/2 -translate-x-1/2 p-4"
                  : pos === "bottom-right"
                  ? "bottom-0 right-0 p-4"
                  : "bottom-0 left-0 p-4"; // bottom-left default

              return (
                <div
                  key={index}
                  className={`absolute text-white break-words ${posClasses} ${
                    block.interactive
                      ? "pointer-events-auto"
                      : "pointer-events-none"
                  } ${block.className ?? ""}`}
                >
                  {block.content}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {caption && (
        <figcaption id={captionId} className="mt-2 text-sm text-gray">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

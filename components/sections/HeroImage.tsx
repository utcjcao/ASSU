"use client";

import AssuImage, { AssuImageProps } from "../common/AssuImage";

export type HeroImageProps = Omit<AssuImageProps, "aspectClassName" | "sizes"> & {
  /**
   * Constrains width to the site container so it does not go edge-to-edge.
   * Defaults to `max-w-7xl` with horizontal padding on small screens.
   */
  containerClassName?: string;
  /**
   * If provided, will set an aspect ratio class for the hero.
   * Defaults to a wide ratio suitable for banners.
   */
  heroAspectClassName?: string;
  /**
   * Responsive size hints for hero. Defaults to full width across breakpoints within container.
   */
  heroSizes?: string;
};

export default function HeroImage({
  containerClassName = "",
  heroAspectClassName = "aspect-[21/9]",
  heroSizes = "100vw",
  className = "",
  ...rest
}: HeroImageProps) {
  return (
    <div className={`w-full ${containerClassName}`}>
      <AssuImage
        {...rest}
        className={`w-full ${className}`}
        aspectClassName={heroAspectClassName}
        sizes={heroSizes}
        imgClassName={`object-cover ${rest.imgClassName ?? ""}`}
      />
    </div>
  );
}



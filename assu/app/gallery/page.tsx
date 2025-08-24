"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";

interface SingleWithTextRow {
  type: "single-with-text";
  image: string;
  date: string;
  title: string;
}

interface MultiImageRow {
  type: "triple" | "double";
  images: string[];
}

type GalleryRow = SingleWithTextRow | MultiImageRow;

interface GalleryPage {
  rows: GalleryRow[];
}

const galleryData: GalleryPage[] = [
  // Page 1
  {
    rows: [
      // Row 1: 1 image + text
      {
        type: "single-with-text",
        image: "/images/gallery-1.webp",
        date: "Mar 28",
        title: "ASSU Social 2024",
      },
      // Row 2: 3 images
      {
        type: "triple",
        images: [
          "/images/gallery-2.webp",
          "/images/involved-upcoming-1.webp",
          "/images/involved-upcoming-2.webp",
        ],
      },
      // Row 3: 2 images
      {
        type: "double",
        images: [
          "/images/involved-upcoming-3.webp",
          "/images/involved-upcoming-4.webp",
        ],
      },
      // Row 4: 2 images
      {
        type: "double",
        images: [
          "/images/involved-upcoming-5.webp",
          "/images/involved-upcoming-6.webp",
        ],
      },
    ],
  },
  // Page 2
  {
    rows: [
      // Row 1: 1 image + text
      {
        type: "single-with-text",
        image: "/images/involved-upcoming-7.webp",
        date: "Mar 7, 2023",
        title: "ASSU 50 Years Reunion",
      },
      // Row 2: 3 images
      {
        type: "triple",
        images: [
          "/images/involved-upcoming-8.webp",
          "/images/involved-upcoming-9.webp",
          "/images/involved-upcoming-10.webp",
        ],
      },
      // Row 3: 2 images
      {
        type: "double",
        images: [
          "/images/home-carousel-1.webp",
          "/images/home-carousel-2.webp",
        ],
      },
      // Row 4: 2 images
      {
        type: "double",
        images: [
          "/images/home-carousel-3.webp",
          "/images/about-assu-hero.webp",
        ],
      },
    ],
  },
];

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-[95vw] mx-auto px-2 sm:px-4 lg:px-6">
        {/* Title Section with Lines */}
        <div className="mb-8">
          {/* Top horizontal line */}
          <div className="w-full h-1 bg-gray-600 mb-6"></div>

          {/* Gallery title - left aligned */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-left">
            Gallery
          </h1>

          {/* Middle horizontal line */}
          <div className="w-full h-1 bg-gray-600 mb-6"></div>

          {/* Subtitle - left aligned */}
          <p className="text-xl text-gray-600 mb-6 text-left">
            See us in action!
          </p>

          {/* Bottom line */}
          <div className="w-full h-0.5 bg-gray-600"></div>
        </div>

        {/* Multi-Image Carousel */}
        <div className="flex items-center gap-6 w-full mx-auto">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="flex-shrink-0 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200"
            aria-label="Previous page"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Carousel Content */}
          <div className="flex-1">
            <Carousel>
              <CarouselContent className="-ml-4">
                {galleryData.map((page, pageIndex) => (
                  <CarouselItem
                    key={pageIndex}
                    className={`pl-4 ${
                      pageIndex === currentPage ? "block" : "hidden"
                    }`}
                  >
                    <div className="space-y-6">
                      {page.rows.map((row, rowIndex) => {
                        if (row.type === "single-with-text") {
                          const singleRow = row as SingleWithTextRow;
                          return (
                            <div
                              key={rowIndex}
                              className="flex flex-col lg:flex-row gap-6 items-center"
                            >
                              <div className="flex-1">
                                <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                                  <Image
                                    src={singleRow.image}
                                    alt={`${singleRow.title} event photo`}
                                    fill
                                    className="object-cover"
                                    priority={pageIndex === 0 && rowIndex === 0}
                                  />
                                </div>
                              </div>
                              <div className="flex-1 text-center lg:text-left">
                                <div className="text-2xl font-semibold text-pink-600 mb-2">
                                  {singleRow.date}
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">
                                  {singleRow.title}
                                </h2>
                              </div>
                            </div>
                          );
                        } else if (row.type === "triple") {
                          const multiRow = row as MultiImageRow;
                          return (
                            <div
                              key={rowIndex}
                              className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            >
                              {multiRow.images.map((image, imageIndex) => (
                                <div
                                  key={imageIndex}
                                  className="relative h-[300px] rounded-lg overflow-hidden"
                                >
                                  <Image
                                    src={image}
                                    alt={`Gallery image ${imageIndex + 1}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          );
                        } else if (row.type === "double") {
                          const multiRow = row as MultiImageRow;
                          return (
                            <div
                              key={rowIndex}
                              className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                              {multiRow.images.map((image, imageIndex) => (
                                <div
                                  key={imageIndex}
                                  className="relative h-[350px] rounded-lg overflow-hidden"
                                >
                                  <Image
                                    src={image}
                                    alt={`Gallery image ${imageIndex + 1}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="flex-shrink-0 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200"
            aria-label="Next page"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {galleryData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-4 h-4 rounded-full transition-all duration-200 ${
                index === currentPage
                  ? "bg-pink-600 shadow-lg"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

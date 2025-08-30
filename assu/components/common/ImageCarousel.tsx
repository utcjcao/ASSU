"use client";

import { useState } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const slides = [
  {
    src: "/images/home-carousel-1.webp",
    heading: "Welcome to the ASSU Website",
    description:
      "U of T ASSU represents over 28K full-time undergrad students at the University of Toronto St. George Campus.",
    link: "/about/assu",
  },
  {
    src: "/images/home-carousel-2.webp",
    heading: "Services and Resources",
    description:
      "Unlock the support you need: academic, financial, and wellness resources all in one place.",
    link: "/services-and-resources/resources",
  },
  {
    src: "/images/home-carousel-3.webp",
    heading: "Course Unions",
    description:
      "Looking to join a course union? Part of a union seeking our help? You're at the right place.",
    link: "/course-unions",
  },
];

export function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-lg overflow-hidden">
      <Carousel>
        <CarouselContent className="-ml-4">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className={`pl-4 ${index === currentSlide ? "block" : "hidden"}`}
            >
              <div className="relative h-[500px] w-full">
                <Image
                  data-testid={`carousel-image-${index}`}
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
                <div className="absolute inset-0 bg-black/40 flex items-center px-8">
                  <div className="ml-12 max-w-sm text-left text-white">
                    <h2
                      data-testid={`carousel-heading-${index}`}
                      className="text-5xl font-bold leading-tight break-words"
                    >
                      {slide.heading}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed break-words max-w-md">
                      {slide.description}
                    </p>
                    <a
                      href={slide.link}
                      className="mt-6 inline-block text-white underline text-base"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition"
        aria-label="Previous Slide"
      >
        <Image
          src="/svg/arrow.svg"
          alt="Previous"
          width={24}
          height={24}
          className="w-6 h-6 rotate-180"
        />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition"
        aria-label="Next Slide"
      >
        <Image
          src="/svg/arrow.svg"
          alt="Next"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

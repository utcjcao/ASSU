// components/ImageCarousel.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../components/ui/carousel";

const slides = [
  {
    src: "/images/home-carousel-1.webp",
    heading: "Welcome to the ASSU Website",
    description:
      "U of T ASSU represents over 28K full-time undergrad students at the University of Toronto St. George Campus.",
    link: "#about",
  },
  {
    src: "/images/home-carousel-2.webp",
    heading: "Welcome to the ASSU Website",
    description:
      "U of T ASSU represents over 28K full-time undergrad students at the University of Toronto St. George Campus.",
    link: "#about",
  },
  {
    src: "/images/home-carousel-3.webp",
    heading: "Welcome to the ASSU Website",
    description:
      "U of T ASSU represents over 28K full-time undergrad students at the University of Toronto St. George Campus.",
    link: "#about",
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
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6">
                  <h2
                    data-testid={`carousel-heading-${index}`}
                    className="text-4xl font-bold"
                  >
                    {slide.heading}
                  </h2>
                  <p className="mt-4 text-lg max-w-2xl">{slide.description}</p>
                  <a
                    href={slide.link}
                    className="mt-6 text-white underline text-lg"
                  >
                    About Us
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
      >
        ◀
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

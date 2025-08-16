// components/ImageCarousel.tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const slides = [
  {
    src: "/images/assu-campus.jpg",
    heading: "Welcome to the ASSU Website",
    description:
      "U of T ASSU represents over 28K full-time undergrad students at the University of Toronto St. George Campus.",
    link: "#about",
  },
  // Add more slides if needed
];

export function ImageCarousel() {
  return (
    <Carousel className="w-full max-w-6xl mx-auto rounded-lg overflow-hidden">
      <CarouselContent className="-ml-4">
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="pl-4">
            <div className="relative h-[500px] w-full">
              <Image
                src={slide.src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6">
                <h2 className="text-4xl font-bold">{slide.heading}</h2>
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

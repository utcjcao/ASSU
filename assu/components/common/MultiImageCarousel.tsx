"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import AssuImage from "./AssuImage";

export type CarouselImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type MultiImageCarouselProps = {
  images: CarouselImage[];
  className?: string;
  imagesPerPage?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  ariaLabel?: string;
};

/**
 * Multi-image carousel component that displays images in a grid layout.
 * Features keyboard navigation, touch support, and full accessibility.
 */
export default function MultiImageCarousel({
  images,
  className = "",
  imagesPerPage = 4, // 2x2 grid by default
  autoPlay = false,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  ariaLabel = "Image carousel",
}: MultiImageCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const playPauseButtonRef = useRef<HTMLButtonElement>(null);

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const currentImages = images.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || totalPages <= 1) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, totalPages, autoPlayInterval]);

  // Navigation functions
  const goToPrevious = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setIsPlaying(false);
  }, [totalPages]);

  const goToNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setIsPlaying(false);
  }, [totalPages]);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
    setIsPlaying(false);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        goToPrevious();
        break;
      case "ArrowRight":
        event.preventDefault();
        goToNext();
        break;
      case "Home":
        event.preventDefault();
        goToPage(0);
        break;
      case "End":
        event.preventDefault();
        goToPage(totalPages - 1);
        break;
      case " ":
      case "Enter":
        if (event.target === playPauseButtonRef.current) {
          event.preventDefault();
          togglePlayPause();
        }
        break;
    }
  }, [goToPrevious, goToNext, goToPage, totalPages, togglePlayPause]);

  // Touch handling
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentPage < totalPages - 1) {
      goToNext();
    }
    if (isRightSwipe && currentPage > 0) {
      goToPrevious();
    }
  };

  // Focus management
  const handleControlFocus = () => {
    // Ensure carousel is visible when controls are focused
    carouselRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center p-8 text-gray-dark bg-gray-lighter rounded-lg">
        <p>No images to display</p>
      </div>
    );
  }

  return (
    <div
      ref={carouselRef}
      className={`w-full max-w-6xl mx-auto ${className}`}
      role="region"
      aria-label={ariaLabel}
      aria-live="polite"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Navigation controls and content in flex layout */}
      {showControls && totalPages > 1 ? (
        <div className="flex items-center gap-4">
          {/* Previous button */}
          <button
            ref={prevButtonRef}
            onClick={goToPrevious}
            onFocus={handleControlFocus}
            disabled={currentPage === 0}
            className="flex-shrink-0 w-12 h-12 bg-white/90 hover:bg-white border border-gray-light rounded-full shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2"
            aria-label="Previous images"
            type="button"
          >
            <svg
              className="w-6 h-6 mx-auto text-gray-darker"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Main carousel content */}
          <div
            className="flex-1 relative overflow-hidden rounded-lg"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Images grid */}
            <div className="grid grid-cols-2 gap-4 p-4 min-h-[400px] md:min-h-[500px]">
              {currentImages.map((image, index) => (
                <div
                  key={`${currentPage}-${index}`}
                  className="relative group"
                  role="img"
                  aria-label={image.alt}
                >
                  <AssuImage
                    src={image.src}
                    alt={image.alt}
                    caption={image.caption}
                    aspectClassName="aspect-[4/3]"
                    radiusClassName="rounded-lg"
                    className="w-full h-full transition-transform duration-200 group-hover:scale-[1.02]"
                    imgClassName="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              ))}
              
              {/* Fill empty slots if needed */}
              {currentImages.length < imagesPerPage && (
                <>
                  {Array.from({ length: imagesPerPage - currentImages.length }).map((_, index) => (
                    <div
                      key={`empty-${index}`}
                      className="aspect-[4/3] rounded-lg bg-gray-lighter border-2 border-dashed border-gray-light flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="text-gray text-sm">No image</span>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>

          {/* Next button */}
          <button
            ref={nextButtonRef}
            onClick={goToNext}
            onFocus={handleControlFocus}
            disabled={currentPage === totalPages - 1}
            className="flex-shrink-0 w-12 h-12 bg-white/90 hover:bg-white border border-gray-light rounded-full shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2"
            aria-label="Next images"
            type="button"
          >
            <svg
              className="w-6 h-6 mx-auto text-gray-darker"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      ) : (
        /* No controls - just the carousel content */
        <div
          className="relative overflow-hidden rounded-lg"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Images grid */}
          <div className="grid grid-cols-2 gap-4 p-4 min-h-[400px] md:min-h-[500px]">
            {currentImages.map((image, index) => (
              <div
                key={`${currentPage}-${index}`}
                className="relative group"
                role="img"
                aria-label={image.alt}
              >
                <AssuImage
                  src={image.src}
                  alt={image.alt}
                  caption={image.caption}
                  aspectClassName="aspect-[4/3]"
                  radiusClassName="rounded-lg"
                  className="w-full h-full transition-transform duration-200 group-hover:scale-[1.02]"
                  imgClassName="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
            
            {/* Fill empty slots if needed */}
            {currentImages.length < imagesPerPage && (
              <>
                {Array.from({ length: imagesPerPage - currentImages.length }).map((_, index) => (
                  <div
                    key={`empty-${index}`}
                    className="aspect-[4/3] rounded-lg bg-gray-lighter border-2 border-dashed border-gray-light flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="text-gray text-sm">No image</span>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      )}

      {/* Auto-play control - moved outside main container */}
      {autoPlay && totalPages > 1 && (
        <button
          ref={playPauseButtonRef}
          onClick={togglePlayPause}
          onFocus={handleControlFocus}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white border border-gray-light rounded-full shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          type="button"
        >
          {isPlaying ? (
            <svg
              className="w-5 h-5 mx-auto text-gray-darker"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 mx-auto text-gray-darker ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      )}



      {/* Page indicators */}
      {showIndicators && totalPages > 1 && (
        <div className="flex justify-center mt-1 space-x-2" role="tablist" aria-label="Carousel pages">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              onFocus={handleControlFocus}
              className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 ${
                index === currentPage
                  ? "bg-pink scale-110"
                  : "bg-gray-light hover:bg-gray"
              }`}
              aria-label={`Go to page ${index + 1}`}
              aria-selected={index === currentPage}
              role="tab"
              type="button"
            />
          ))}
        </div>
      )}

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Page {currentPage + 1} of {totalPages}. 
        {isPlaying ? "Slideshow is playing." : "Slideshow is paused."}
        Showing {currentImages.length} images.
      </div>

      {/* Usage instructions for screen readers */}
      <div className="sr-only">
        Use arrow keys to navigate between pages, Home and End keys to jump to first or last page.
        {autoPlay && " Press Space or Enter on the play/pause button to control slideshow."}
      </div>
    </div>
  );
}

import MultiImageCarousel, { CarouselImage } from "../../components/common/MultiImageCarousel";

// Sample images for demonstration
const sampleImages: CarouselImage[] = [
  {
    src: "/images/gallery-1.webp",
    alt: "ASSU Event - Student Orientation",
    caption: "Welcome Week 2024 - New student orientation in the main hall"
  },
  {
    src: "/images/gallery-2.webp", 
    alt: "ASSU Meeting - Council Session",
    caption: "Monthly council meeting discussing student initiatives"
  },
  {
    src: "/images/involved-upcoming-1.webp",
    alt: "ASSU Workshop - Academic Support",
    caption: "Study skills workshop for first-year students"
  },
  {
    src: "/images/involved-upcoming-2.webp",
    alt: "ASSU Social - Campus Community",
    caption: "Community building event at the student center"
  },
  {
    src: "/images/involved-upcoming-3.webp",
    alt: "ASSU Volunteer - Community Service",
    caption: "Students volunteering at local community center"
  },
  {
    src: "/images/involved-upcoming-4.webp",
    alt: "ASSU Awards - Recognition Ceremony",
    caption: "Annual student achievement awards ceremony"
  },
  {
    src: "/images/involved-upcoming-5.webp",
    alt: "ASSU Sports - Intramural Games",
    caption: "Inter-faculty sports competition finals"
  },
  {
    src: "/images/involved-upcoming-6.webp",
    alt: "ASSU Culture - Arts Festival",
    caption: "Annual arts and culture festival showcase"
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-lighter p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-sans text-gray-darker mb-4">
            ASSU Gallery
          </h1>
          <p className="text-lg text-gray-dark max-w-2xl mx-auto">
            Explore moments from ASSU events, meetings, and community activities. 
            Use keyboard navigation (arrow keys) or touch gestures to browse through our photo collection.
          </p>
        </div>

        {/* Multi-Image Carousel Demo */}
        <div className="mb-16">
          <h2 className="text-3xl font-sans text-gray-darker mb-6 text-center">
            Recent Events & Activities
          </h2>
          <MultiImageCarousel
            images={sampleImages}
            imagesPerPage={4}
            autoPlay={true}
            autoPlayInterval={6000}
            showControls={true}
            showIndicators={true}
            ariaLabel="ASSU events and activities photo gallery"
            className="mb-8"
          />
        </div>

        {/* Additional carousel with different configuration */}
        <div className="mb-16">
          <h2 className="text-3xl font-sans text-gray-darker mb-6 text-center">
            Featured Highlights
          </h2>
          <MultiImageCarousel
            images={sampleImages.slice(0, 6)}
            imagesPerPage={2}
            autoPlay={false}
            showControls={true}
            showIndicators={true}
            ariaLabel="Featured ASSU highlights"
            className="mb-8"
          />
        </div>

        {/* Accessibility and Usage Information */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-light">
          <h3 className="text-2xl font-sans text-gray-darker mb-4">
            How to Navigate
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-dark">
            <div>
              <h4 className="font-semibold mb-2">Keyboard Navigation:</h4>
              <ul className="space-y-1 text-sm">
                <li>• <kbd className="px-2 py-1 bg-gray-lighter rounded text-xs">←</kbd> <kbd className="px-2 py-1 bg-gray-lighter rounded text-xs">→</kbd> Navigate between pages</li>
                <li>• <kbd className="px-2 py-1 bg-gray-lighter rounded text-xs">Home</kbd> Go to first page</li>
                <li>• <kbd className="px-2 py-1 bg-gray-lighter rounded text-xs">End</kbd> Go to last page</li>
                <li>• <kbd className="px-2 py-1 bg-gray-lighter rounded text-xs">Space</kbd> <kbd className="px-2 py-1 bg-gray-lighter rounded text-xs">Enter</kbd> Play/pause slideshow</li>
                <li>• <kbd className="px-2 py-1 bg-gray-lighter rounded text-xs">Tab</kbd> Navigate to controls</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Touch & Mouse:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Swipe left/right on mobile devices</li>
                <li>• Click navigation arrows</li>
                <li>• Click page indicators</li>
                <li>• Click play/pause button</li>
                <li>• Hover over images for subtle zoom effect</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-pink-light rounded-lg">
            <p className="text-sm text-gray-darker">
              <strong>Accessibility:</strong> This carousel is fully accessible with screen reader support, 
              keyboard navigation, proper ARIA labels, and descriptive alt text for all images.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
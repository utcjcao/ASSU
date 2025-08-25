import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MultiImageCarousel, { CarouselImage } from "../MultiImageCarousel";

// Mock Next.js Image component
jest.mock("next/image", () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) => (
    <div data-testid="next-image" data-src={src} aria-label={alt} {...props}>
      Mock Image: {alt}
    </div>
  ),
}));

// Mock AssuImage component
jest.mock("../AssuImage", () => {
  return function MockAssuImage({ 
    src, 
    alt, 
    caption, 
    ...props 
  }: { 
    src: string; 
    alt: string; 
    caption?: string; 
    [key: string]: unknown 
  }) {
    return (
      <div data-testid="assu-image" data-src={src} {...props}>
        <div>Mock Image: {alt}</div>
        {caption && <figcaption>{caption}</figcaption>}
      </div>
    );
  };
});

const mockImages: CarouselImage[] = [
  { src: "/test1.jpg", alt: "Test image 1", caption: "Caption 1" },
  { src: "/test2.jpg", alt: "Test image 2", caption: "Caption 2" },
  { src: "/test3.jpg", alt: "Test image 3", caption: "Caption 3" },
  { src: "/test4.jpg", alt: "Test image 4", caption: "Caption 4" },
  { src: "/test5.jpg", alt: "Test image 5", caption: "Caption 5" },
  { src: "/test6.jpg", alt: "Test image 6", caption: "Caption 6" },
];

describe("MultiImageCarousel", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders carousel with images", () => {
    render(<MultiImageCarousel images={mockImages.slice(0, 4)} />);
    
    expect(screen.getByRole("region", { name: "Image carousel" })).toBeInTheDocument();
    expect(screen.getByText("Mock Image: Test image 1")).toBeInTheDocument();
    expect(screen.getByText("Mock Image: Test image 4")).toBeInTheDocument();
  });

  it("shows navigation controls when there are multiple pages", () => {
    render(<MultiImageCarousel images={mockImages} imagesPerPage={4} />);
    
    expect(screen.getByLabelText("Previous images")).toBeInTheDocument();
    expect(screen.getByLabelText("Next images")).toBeInTheDocument();
  });

  it("hides navigation controls when showControls is false", () => {
    render(<MultiImageCarousel images={mockImages} showControls={false} />);
    
    expect(screen.queryByLabelText("Previous images")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Next images")).not.toBeInTheDocument();
  });

  it("navigates to next page when next button is clicked", async () => {
    render(<MultiImageCarousel images={mockImages} imagesPerPage={4} />);
    
    const nextButton = screen.getByLabelText("Next images");
    fireEvent.click(nextButton);
    
    await waitFor(() => {
      expect(screen.getByText(/Page 2 of 2/)).toBeInTheDocument();
    });
  });

  it("navigates to previous page when previous button is clicked", async () => {
    render(<MultiImageCarousel images={mockImages} imagesPerPage={4} />);
    
    // Go to next page first
    const nextButton = screen.getByLabelText("Next images");
    fireEvent.click(nextButton);
    
    await waitFor(() => {
      expect(screen.getByText(/Page 2 of 2/)).toBeInTheDocument();
    });
    
    // Then go back to previous page
    const prevButton = screen.getByLabelText("Previous images");
    fireEvent.click(prevButton);
    
    await waitFor(() => {
      expect(screen.getByText(/Page 1 of 2/)).toBeInTheDocument();
    });
  });

  it("supports keyboard navigation", async () => {
    render(<MultiImageCarousel images={mockImages} imagesPerPage={4} />);
    
    const carousel = screen.getByRole("region");
    
    // Navigate with arrow keys
    fireEvent.keyDown(carousel, { key: "ArrowRight" });
    await waitFor(() => {
      expect(screen.getByText(/Page 2 of 2/)).toBeInTheDocument();
    });
    
    fireEvent.keyDown(carousel, { key: "ArrowLeft" });
    await waitFor(() => {
      expect(screen.getByText(/Page 1 of 2/)).toBeInTheDocument();
    });
    
    // Navigate with Home/End keys
    fireEvent.keyDown(carousel, { key: "End" });
    await waitFor(() => {
      expect(screen.getByText(/Page 2 of 2/)).toBeInTheDocument();
    });
    
    fireEvent.keyDown(carousel, { key: "Home" });
    await waitFor(() => {
      expect(screen.getByText(/Page 1 of 2/)).toBeInTheDocument();
    });
  });

  it("shows page indicators", () => {
    render(<MultiImageCarousel images={mockImages} imagesPerPage={4} />);
    
    const indicators = screen.getByRole("tablist", { name: "Carousel pages" });
    expect(indicators).toBeInTheDocument();
    
    const pageButtons = screen.getAllByRole("tab");
    expect(pageButtons).toHaveLength(2);
  });

  it("hides indicators when showIndicators is false", () => {
    render(<MultiImageCarousel images={mockImages} showIndicators={false} />);
    
    expect(screen.queryByRole("tablist")).not.toBeInTheDocument();
  });

  it("handles empty images array", () => {
    render(<MultiImageCarousel images={[]} />);
    
    expect(screen.getByText("No images to display")).toBeInTheDocument();
  });

  it("auto-plays when autoPlay is enabled", async () => {
    render(
      <MultiImageCarousel 
        images={mockImages} 
        imagesPerPage={4} 
        autoPlay={true} 
        autoPlayInterval={1000}
      />
    );
    
    expect(screen.getByText(/Page 1 of 2/)).toBeInTheDocument();
    
    // Fast-forward time
    jest.advanceTimersByTime(1000);
    
    await waitFor(() => {
      expect(screen.getByText(/Page 2 of 2/)).toBeInTheDocument();
    });
  });

  it("shows play/pause button when autoPlay is enabled", () => {
    render(<MultiImageCarousel images={mockImages} autoPlay={true} />);
    
    expect(screen.getByLabelText("Pause slideshow")).toBeInTheDocument();
  });

  it("toggles play/pause state", async () => {
    render(<MultiImageCarousel images={mockImages} autoPlay={true} />);
    
    const playPauseButton = screen.getByLabelText("Pause slideshow");
    fireEvent.click(playPauseButton);
    
    await waitFor(() => {
      expect(screen.getByLabelText("Play slideshow")).toBeInTheDocument();
    });
  });

  it("has proper ARIA attributes", () => {
    render(<MultiImageCarousel images={mockImages} ariaLabel="Test carousel" />);
    
    const carousel = screen.getByRole("region", { name: "Test carousel" });
    expect(carousel).toHaveAttribute("aria-live", "polite");
    expect(carousel).toHaveAttribute("tabIndex", "0");
  });

  it("fills empty slots when there are fewer images than imagesPerPage", () => {
    render(<MultiImageCarousel images={mockImages.slice(0, 2)} imagesPerPage={4} />);
    
    expect(screen.getAllByText("No image")).toHaveLength(2);
  });
});

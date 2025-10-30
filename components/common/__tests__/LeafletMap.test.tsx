import { render, screen } from "@testing-library/react";
import LeafletMap from "../LeafletMap";

// Mock Leaflet safely
jest.mock("leaflet", () => {
  const bindPopupMock = jest.fn(() => ({
    openPopup: jest.fn(),
  }));

  const addToMock = jest.fn(() => ({
    bindPopup: bindPopupMock,
  }));

  return {
    map: jest.fn(() => ({
      setView: jest.fn(),
      remove: jest.fn(),
    })),
    tileLayer: jest.fn(() => ({
      addTo: jest.fn(),
    })),
    divIcon: jest.fn(() => ({
      options: {},
    })),
    marker: jest.fn(() => ({
      addTo: addToMock,
    })),
  };
});

describe("LeafletMap Component", () => {
  const defaultProps = {
    lat: 43.7,
    lng: -79.4,
    zoom: 13,
  };

  it("renders the map wrapper element", () => {
    const { container } = render(<LeafletMap {...defaultProps} />);
    // Check outer wrapper
    const mapWrapper = container.querySelector("div.relative");
    expect(mapWrapper).toBeInTheDocument();
  });

  it("applies custom height and accessibility label", () => {
    render(
      <LeafletMap {...defaultProps} height="500px" ariaLabel="Test Map" />
    );

    // Use the aria-label passed
    const mapElement = screen.getByLabelText("Test Map");
    expect(mapElement).toBeInTheDocument();

    // Check that the outer wrapper has the correct height
    const wrapper = mapElement.parentElement;
    expect(wrapper).toBeInTheDocument();
    const style = wrapper!.getAttribute("style") || "";
    expect(style.includes("500px")).toBe(true);
  });

  it("renders without crashing using default props", () => {
    render(<LeafletMap {...defaultProps} />);
    // Use the default aria-label from the component
    const mapElement = screen.getByLabelText(
      "Interactive map showing location"
    );
    expect(mapElement).toBeInTheDocument();
  });
});

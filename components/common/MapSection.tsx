"use client";

import LeafletMap from "./LeafletMap";

interface MapSectionProps {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
  /** Custom className for the section wrapper */
  className?: string;
  /** Map configuration */
  mapConfig?: {
    lat?: number;
    lng?: number;
    zoom?: number;
    height?: string;
    markerTitle?: string;
    ariaLabel?: string;
  };
}

const MapSection: React.FC<MapSectionProps> = ({
  title = "Find Us",
  description = "Visit us at our location. The map below shows our exact position and you can interact with it to explore the surrounding area.",
  className = "",
  mapConfig = {},
}) => {
  const {
    lat = 43.6629, // Default to University of Toronto coordinates
    lng = -79.3957,
    zoom = 15,
    height = "500px",
    markerTitle = "Our Location",
    ariaLabel = "Interactive map showing our location",
  } = mapConfig;

  return (
    <section className={`w-full py-12 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header - only show if title or description exists */}
        {(title || description) && (
          <div className="text-center mb-8">
            {title && (
              <h2 className="text-4xl md:text-5xl font-sans text-gray-darker mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg font-body text-gray-dark max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Map Container */}
        <div className="w-full">
          <LeafletMap
            lat={lat}
            lng={lng}
            zoom={zoom}
            height={height}
            markerTitle={markerTitle}
            ariaLabel={ariaLabel}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;

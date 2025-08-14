'use client';

import GoogleMap from './GoogleMap';

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
  title = 'Find Us',
  description = 'Visit us at our location. The map below shows our exact position and you can interact with it to explore the surrounding area.',
  className = '',
  mapConfig = {},
}) => {
  // You'll need to set your Google Maps API key here
  // For production, use environment variables: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  // Debug logging (remove in production)
  console.log('MapSection: API Key available:', !!GOOGLE_MAPS_API_KEY);
  console.log('MapSection: API Key length:', GOOGLE_MAPS_API_KEY?.length || 0);
  console.log('MapSection: API Key value:', GOOGLE_MAPS_API_KEY ? `${GOOGLE_MAPS_API_KEY.substring(0, 10)}...` : 'undefined');

  if (!GOOGLE_MAPS_API_KEY) {
    return (
      <section className={`w-full py-12 px-4 ${className}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-sans text-gray-darker mb-4">
              {title}
            </h2>
            <p className="text-lg font-body text-gray-dark max-w-2xl mx-auto">
              {description}
            </p>
          </div>
          
          <div className="bg-yellow/10 border border-yellow/30 rounded-lg p-8 text-center">
            <div className="text-yellow text-3xl mb-4">🗺️</div>
            <h3 className="text-xl font-sans text-gray-darker mb-2">
              Google Maps API Key Required
            </h3>
            <p className="text-gray-dark font-body mb-4">
              To display the interactive map, please add your Google Maps API key to your environment variables.
            </p>
            <div className="bg-gray-lighter rounded-md p-4 text-left">
              <code className="text-sm font-mono text-gray-darker">
                NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
              </code>
            </div>
            <p className="text-sm text-gray font-body mt-4">
              Get your API key from the{' '}
              <a 
                href="https://developers.google.com/maps/documentation/javascript/get-api-key"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:text-pink-light underline"
              >
                Google Cloud Console
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  const {
    lat = 37.4419, // Stanford University coordinates as default
    lng = -122.1419,
    zoom = 15,
    height = '500px',
    markerTitle = 'Our Location',
    ariaLabel = 'Interactive map showing our location',
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
          <GoogleMap
            apiKey={GOOGLE_MAPS_API_KEY}
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

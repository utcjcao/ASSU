'use client';

import { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface GoogleMapProps {
  /** Google Maps API key */
  apiKey: string;
  /** Center latitude coordinate */
  lat?: number;
  /** Center longitude coordinate */
  lng?: number;
  /** Zoom level (1-20) */
  zoom?: number;
  /** Map height */
  height?: string;
  /** Custom className for styling */
  className?: string;
  /** Marker title for accessibility */
  markerTitle?: string;
  /** Map aria-label for accessibility */
  ariaLabel?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  apiKey,
  lat = 37.4419, // Default to Stanford University coordinates
  lng = -122.1419,
  zoom = 15,
  height = '400px',
  className = '',
  markerTitle = 'Location marker',
  ariaLabel = 'Interactive map showing location',
}) => {
  const [mapContainer, setMapContainer] = useState<HTMLDivElement | null>(null);
  
  const mapContainerRef = (element: HTMLDivElement | null) => {
    console.log('GoogleMap: Callback ref called with element:', element);
    setMapContainer(element);
  };
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);

  console.log('GoogleMap: Component rendered, mapContainer:', mapContainer);
  console.log('GoogleMap: About to render JSX, loading:', loading, 'error:', error);

  useEffect(() => {
    console.log('GoogleMap: useEffect called, mapContainer:', mapContainer);
    if (!apiKey) {
      console.error('GoogleMap: API key not provided');
      setError('Google Maps API key not provided');
      setLoading(false);
      return;
    }

    if (!mapContainer) {
      console.log('GoogleMap: Map container not available yet, waiting...');
      return;
    }

    const initializeMap = async () => {
      console.log('GoogleMap: Initializing map...');
      console.log('GoogleMap: mapContainer exists:', !!mapContainer);
      console.log('GoogleMap: apiKey exists:', !!apiKey);
      console.log('GoogleMap: apiKey length:', apiKey?.length || 0);

      try {
        // Initialize Google Maps loader
        const loader = new Loader({
          apiKey: apiKey,
          version: 'weekly',
          libraries: ['places'],
        });

        // Load the Google Maps API
        await loader.load();

        // Create map instance
        const mapInstance = new google.maps.Map(mapContainer, {
          center: { lat, lng },
          zoom: zoom,
          // Enhanced map options for better UX
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER,
          },
          zoomControl: true,
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER,
          },
          scaleControl: true,
          streetViewControl: true,
          streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP,
          },
          fullscreenControl: true,
          fullscreenControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP,
          },
          // Touch-friendly settings
          gestureHandling: 'cooperative',
          // Styling for better integration
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'on' }],
            },
          ],
        });

        // Create marker with custom arrow icon
        const markerInstance = new google.maps.Marker({
          position: { lat, lng },
          map: mapInstance,
          title: markerTitle,
          animation: google.maps.Animation.DROP,
          // Custom arrow marker styling in ASSU primary pink
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="32" height="40" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
                <!-- Drop shadow -->
                <ellipse cx="16" cy="38" rx="8" ry="2" fill="rgba(0,0,0,0.2)"/>
                <!-- Main pin body -->
                <path d="M16 2C10.477 2 6 6.477 6 12c0 7.5 10 24 10 24s10-16.5 10-24c0-5.523-4.477-10-10-10z" 
                      fill="#C9086F" stroke="white" stroke-width="1"/>
                <!-- Inner circle -->
                <circle cx="16" cy="12" r="4" fill="white"/>
                <!-- Inner dot -->
                <circle cx="16" cy="12" r="2" fill="#C9086F"/>
              </svg>
            `),
            scaledSize: new google.maps.Size(32, 40),
            anchor: new google.maps.Point(16, 36), // Anchor at the bottom point of the pin
          },
        });

        // Add info window for accessibility
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 12px; font-family: questrial, sans-serif; max-width: 200px;">
              <h3 style="margin: 0 0 8px 0; color: #C9086F; font-size: 18px; font-weight: bold;">
                ${markerTitle}
              </h3>
              <p style="margin: 0 0 4px 0; color: rgb(69, 61, 76); font-size: 14px; line-height: 1.4;">
                Arts & Science Students' Union
              </p>
              <p style="margin: 0; color: rgb(105, 105, 105); font-size: 12px;">
                Click for directions
              </p>
            </div>
          `,
        });

        // Show info window on marker click
        markerInstance.addListener('click', () => {
          infoWindow.open(mapInstance, markerInstance);
        });

        setMap(mapInstance);
        setMarker(markerInstance);
        setLoading(false);
      } catch (err) {
        console.error('Error loading Google Maps:', err);
        setError('Failed to load Google Maps. Please check your API key and internet connection.');
        setLoading(false);
      }
    };

    initializeMap();

    // Cleanup function
    return () => {
      if (marker) {
        marker.setMap(null);
      }
      if (map) {
        // Clear all listeners
        google.maps.event.clearInstanceListeners(map);
      }
    };
  }, [apiKey, lat, lng, zoom, markerTitle, mapContainer, map, marker]);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (map) {
        google.maps.event.trigger(map, 'resize');
        map.setCenter({ lat, lng });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [map, lat, lng]);

  return (
    <div 
      className={`w-full rounded-lg overflow-hidden border border-gray-light shadow-lg ${className} relative`}
      style={{ height }}
    >
      {/* Always render the map container */}
      <div
        ref={mapContainerRef}
        className="w-full h-full"
        role="application"
        aria-label={ariaLabel}
        tabIndex={0}
        style={{ minHeight: '400px' }}
        onKeyDown={(e) => {
          // Enhance keyboard accessibility
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (marker && map) {
              const infoWindow = new google.maps.InfoWindow({
                content: `
                  <div style="padding: 12px; font-family: questrial, sans-serif; max-width: 200px;">
                    <h3 style="margin: 0 0 8px 0; color: #C9086F; font-size: 18px; font-weight: bold;">
                      ${markerTitle}
                    </h3>
                    <p style="margin: 0 0 4px 0; color: rgb(69, 61, 76); font-size: 14px; line-height: 1.4;">
                      Arts & Science Students' Union
                    </p>
                    <p style="margin: 0; color: rgb(105, 105, 105); font-size: 12px;">
                      Press Enter or Space to interact
                    </p>
                  </div>
                `,
              });
              infoWindow.open(map, marker);
            }
          }
        }}
      />
      
      {/* Loading overlay */}
      {loading && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-lighter border border-gray-light rounded-lg"
          role="status"
          aria-label="Loading map"
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink mx-auto mb-4"></div>
            <p className="text-gray-dark font-body">Loading map...</p>
          </div>
        </div>
      )}
      
      {/* Error overlay */}
      {error && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-red/10 border border-red/20 rounded-lg"
          role="alert"
          aria-label="Map loading error"
        >
          <div className="text-center p-6">
            <div className="text-red text-2xl mb-2">⚠️</div>
            <p className="text-red font-body font-medium mb-2">Unable to load map</p>
            <p className="text-gray-dark font-body text-sm">{error}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleMap;

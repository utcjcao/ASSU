"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface LeafletMapProps {
  /** Center latitude coordinate */
  lat?: number;
  /** Center longitude coordinate */
  lng?: number;
  /** Zoom level (1–20) */
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

const LeafletMap: React.FC<LeafletMapProps> = ({
  lat = 43.6629, // Default: UofT
  lng = -79.3957,
  zoom = 15,
  height = "400px",
  className = "",
  markerTitle = "Our Location",
  ariaLabel = "Interactive map showing location",
}) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    try {
      // Prevent reinitialization
      if (mapInstanceRef.current) return;

      // Initialize map
      const map = L.map(mapRef.current, {
        center: [lat, lng],
        zoom,
        zoomControl: true,
        scrollWheelZoom: true,
        attributionControl: true,
      });

      // Add tile layer (OpenStreetMap - free and public)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Custom pink marker
      const pinkMarker = L.divIcon({
        className: "custom-leaflet-marker",
        html: `
          <svg width="32" height="40" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="16" cy="38" rx="8" ry="2" fill="rgba(0,0,0,0.2)"/>
            <path d="M16 2C10.477 2 6 6.477 6 12c0 7.5 10 24 10 24s10-16.5 10-24c0-5.523-4.477-10-10-10z" 
              fill="#C9086F" stroke="white" stroke-width="1"/>
            <circle cx="16" cy="12" r="4" fill="white"/>
            <circle cx="16" cy="12" r="2" fill="#C9086F"/>
          </svg>
        `,
        iconSize: [32, 40],
        iconAnchor: [16, 36],
        popupAnchor: [0, -36],
      });

      // Add marker
      const marker = L.marker([lat, lng], { icon: pinkMarker })
        .addTo(map)
        .bindPopup(
          `
          <div style="padding: 12px; font-family: questrial, sans-serif; max-width: 200px;">
            <h3 style="margin: 0 0 8px 0; color: #C9086F; font-size: 18px; font-weight: bold;">
              ${markerTitle}
            </h3>
            <p style="margin: 0 0 4px 0; color: rgb(69, 61, 76); font-size: 14px;">
              Arts & Science Students' Union
            </p>
            <p style="margin: 0; color: rgb(105, 105, 105); font-size: 12px;">
              Click the pin for more info
            </p>
          </div>
        `
        );

      // Accessibility keyboard support
      mapRef.current.tabIndex = 0;
      mapRef.current.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          marker.openPopup();
        }
      });

      mapInstanceRef.current = map;
      setLoading(false);
    } catch (err) {
      console.error("Error initializing Leaflet map:", err);
      setError(
        "Failed to load map. Please check your connection or configuration."
      );
      setLoading(false);
    }

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lat, lng, zoom, markerTitle]);

  return (
    <div
      className={`relative z-0 w-full rounded-lg overflow-hidden border border-gray-light shadow-lg ${className}`}
      style={{ height, zIndex: 0 }}
    >
      {/* Map Container */}
      <div
        ref={mapRef}
        className="w-full h-full"
        role="application"
        aria-label={ariaLabel}
        style={{ minHeight: "400px" }}
      />

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-lighter border border-gray-light rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink mx-auto mb-4"></div>
            <p className="text-gray-dark font-body">Loading map...</p>
          </div>
        </div>
      )}

      {/* Error Overlay */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red/10 border border-red/20 rounded-lg">
          <div className="text-center p-6">
            <div className="text-red text-2xl mb-2">⚠️</div>
            <p className="text-red font-body font-medium mb-2">
              Unable to load map
            </p>
            <p className="text-gray-dark font-body text-sm">{error}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeafletMap;

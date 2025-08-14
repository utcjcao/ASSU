# Google Maps Component Documentation

This document describes the Google Maps components implemented for the ASSU website.

## Components

### GoogleMap

A low-level, fully-featured Google Maps component with accessibility and responsive design.

**Props:**
- `apiKey` (string, required): Google Maps API key
- `lat` (number, optional): Center latitude (default: 37.4419)
- `lng` (number, optional): Center longitude (default: -122.1419) 
- `zoom` (number, optional): Zoom level 1-20 (default: 15)
- `height` (string, optional): Map height (default: '400px')
- `className` (string, optional): Additional CSS classes
- `markerTitle` (string, optional): Marker title for accessibility
- `ariaLabel` (string, optional): ARIA label for the map

### MapSection

A higher-level component that includes the map with a title, description, and additional information cards.

**Props:**
- `title` (string, optional): Section title (default: 'Find Us')
- `description` (string, optional): Section description
- `className` (string, optional): Additional CSS classes for the section
- `mapConfig` (object, optional): Configuration object for the map

## Features

### ✅ Interactive Features
- **Zoom Controls**: Users can zoom in/out using controls or mouse wheel
- **Pan Navigation**: Click and drag to move around the map
- **Street View**: Integrated street view control
- **Map Types**: Satellite, terrain, and roadmap views available
- **Fullscreen Mode**: Option to view map in fullscreen

### ✅ Visual Indicators
- **Custom Marker**: Pink branded marker with white center
- **Info Window**: Click marker to see location details
- **Smooth Animations**: Marker appears with drop animation

### ✅ Accessibility
- **ARIA Labels**: Proper ARIA roles and labels for screen readers
- **Keyboard Navigation**: Tab-accessible with Enter/Space key support
- **Screen Reader Support**: Descriptive text for assistive technologies
- **High Contrast**: Visual elements maintain good contrast ratios

### ✅ Responsive Design
- **Mobile Optimized**: Adapts to all screen sizes
- **Flexible Heights**: Configurable height for different layouts
- **Grid Layout**: Information cards stack on mobile devices
- **Viewport Handling**: Automatically adjusts on window resize

### ✅ Touch-Friendly
- **Cooperative Gestures**: Requires two-finger scroll to prevent accidental pan
- **Large Touch Targets**: Controls sized appropriately for mobile
- **Touch Events**: Optimized for touch devices

## Setup

### 1. Install Dependencies

The required dependencies are already added to package.json:
```bash
npm install
```

### 2. Get Google Maps API Key

1. Visit the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Maps JavaScript API"
4. Create credentials (API Key)
5. Restrict the API key to your domain for security

### 3. Set Environment Variable

Create a `.env.local` file in your project root:
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

**Important**: Never commit your actual API key to version control.

### 4. Usage Examples

#### Basic Usage
```tsx
import MapSection from '../components/common/MapSection';

export default function Page() {
  return (
    <MapSection />
  );
}
```

#### Custom Configuration
```tsx
<MapSection
  title="Visit Our Office"
  description="Come see us in person!"
  mapConfig={{
    lat: 37.7749,
    lng: -122.4194,
    zoom: 18,
    height: '500px',
    markerTitle: 'Our San Francisco Office',
    ariaLabel: 'Map showing our office in downtown San Francisco',
  }}
/>
```

#### Direct Google Maps Component
```tsx
import GoogleMap from '../components/common/GoogleMap';

<GoogleMap
  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
  lat={37.4419}
  lng={-122.1419}
  zoom={15}
  height="400px"
  markerTitle="Stanford University"
  ariaLabel="Map of Stanford University campus"
/>
```

## Browser Support

- **Chrome/Chromium**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile browsers**: Optimized for iOS Safari and Chrome Mobile

## API Key Security

For production deployments:

1. **Restrict by HTTP referrer**: Add your domain to allowed referrers
2. **Restrict by API**: Only enable Maps JavaScript API
3. **Monitor usage**: Set up billing alerts
4. **Environment variables**: Never hardcode keys

## Troubleshooting

### Map Not Loading
- Check API key is set correctly
- Verify API key has Maps JavaScript API enabled
- Check browser console for error messages
- Ensure domain is whitelisted if using HTTP referrer restrictions

### Performance Issues
- Consider limiting zoom levels if needed
- Use map clustering for multiple markers
- Optimize marker icons for faster loading

### Accessibility Issues
- Test with screen readers
- Verify keyboard navigation works
- Check color contrast meets WCAG standards

## Future Enhancements

Potential features that could be added:

- **Multiple Markers**: Support for displaying multiple locations
- **Directions**: Integration with Google Directions API
- **Geocoding**: Address search functionality
- **Clustering**: Marker clustering for many locations
- **Custom Styling**: Map theming to match brand colors
- **Offline Support**: Progressive Web App features

import { render, screen } from '@testing-library/react';
import GoogleMap from '../GoogleMap';

// Mock the Google Maps API loader
jest.mock('@googlemaps/js-api-loader', () => ({
  Loader: jest.fn().mockImplementation(() => ({
    load: jest.fn().mockResolvedValue({}),
  })),
}));

// Mock Google Maps API
const mockMap = {
  setCenter: jest.fn(),
  addListener: jest.fn(),
};

const mockMarker = {
  setMap: jest.fn(),
  addListener: jest.fn(),
};

const mockInfoWindow = {
  open: jest.fn(),
};

interface MockGoogleMaps {
  maps: {
    Map: jest.Mock;
    Marker: jest.Mock;
    InfoWindow: jest.Mock;
    event: {
      trigger: jest.Mock;
      clearInstanceListeners: jest.Mock;
    };
    ControlPosition: {
      TOP_CENTER: number;
      RIGHT_CENTER: number;
      RIGHT_TOP: number;
    };
    MapTypeControlStyle: {
      HORIZONTAL_BAR: number;
    };
    Animation: {
      DROP: number;
    };
    Size: jest.Mock;
    Point: jest.Mock;
  };
}

(global as unknown as { google: MockGoogleMaps }).google = {
  maps: {
    Map: jest.fn().mockImplementation(() => mockMap),
    Marker: jest.fn().mockImplementation(() => mockMarker),
    InfoWindow: jest.fn().mockImplementation(() => mockInfoWindow),
    event: {
      trigger: jest.fn(),
      clearInstanceListeners: jest.fn(),
    },
    ControlPosition: {
      TOP_CENTER: 1,
      RIGHT_CENTER: 2,
      RIGHT_TOP: 3,
    },
    MapTypeControlStyle: {
      HORIZONTAL_BAR: 1,
    },
    Animation: {
      DROP: 1,
    },
    Size: jest.fn(),
    Point: jest.fn(),
  },
};

describe('GoogleMap Component', () => {
  const defaultProps = {
    apiKey: 'test-api-key',
    lat: 37.4419,
    lng: -122.1419,
    zoom: 15,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state initially', () => {
    render(<GoogleMap {...defaultProps} />);
    
    expect(screen.getByText('Loading map...')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders error state when no API key is provided', () => {
    render(<GoogleMap {...defaultProps} apiKey="" />);
    
    expect(screen.getByText('Unable to load map')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('applies custom className and height', () => {
    const { container } = render(
      <GoogleMap {...defaultProps} className="custom-class" height="500px" />
    );
    
    const mapContainer = container.querySelector('.custom-class');
    expect(mapContainer).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(
      <GoogleMap 
        {...defaultProps} 
        ariaLabel="Test map label"
        markerTitle="Test marker"
      />
    );
    
    // Check for loading state accessibility
    expect(screen.getByLabelText('Loading map')).toBeInTheDocument();
  });

  it('accepts custom coordinates and zoom level', () => {
    const customProps = {
      ...defaultProps,
      lat: 40.7128,
      lng: -74.0060,
      zoom: 12,
    };
    
    render(<GoogleMap {...customProps} />);
    
    // Component should render without errors with custom coordinates
    expect(screen.getByText('Loading map...')).toBeInTheDocument();
  });

  it('handles missing required props gracefully', () => {
    // Test with minimal props
    render(<GoogleMap apiKey="test-key" />);
    
    expect(screen.getByText('Loading map...')).toBeInTheDocument();
  });

  it('renders with default marker title and aria label', () => {
    render(<GoogleMap {...defaultProps} />);
    
    // Should not throw errors with default values
    expect(screen.getByText('Loading map...')).toBeInTheDocument();
  });
});

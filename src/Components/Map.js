"use client"

import { useEffect, useRef, useState } from 'react';

function Map() {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initMap = () => {
      try {
        const doualaLocation = { lat: 4.0733, lng: 9.7017 };
        const map = new window.google.maps.Map(mapRef.current, {
          center: doualaLocation,
          zoom: 14,
        });

        new window.google.maps.Marker({
          position: doualaLocation,
          map: map,
          title: 'Our Location in Bonamoussadi, Douala'
        });

        setMapLoaded(true);
      } catch (err) {
        console.error("Error initializing map:", err);
        setError("Failed to initialize map. Please check the console for more details.");
      }
    };

    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA3OML16RotUEQpOi8HB1pvaftDBgRZGHQ`;
      script.async = true;
      script.defer = true;
      script.addEventListener('load', initMap);
      script.addEventListener('error', (e) => {
        console.error("Error loading Google Maps script:", e);
        setError("Failed to load Google Maps. Please check your internet connection and try again.");
      });
      document.head.appendChild(script);
    };

    if (!window.google) {
      loadScript();
    } else {
      initMap();
    }
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      {!mapLoaded && <div>Loading map...</div>}
      <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
    </>
  );
}

export default Map;
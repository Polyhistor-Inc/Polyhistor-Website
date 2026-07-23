"use client";

import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";

interface MapFitBoundsProps {
  results: { latitude: number; longitude: number }[];
}

export default function MapFitBounds({ results }: MapFitBoundsProps) {
  const map = useMap();
  const lastBoundsRef = useRef<string | null>(null);

  useEffect(() => {
    if (results.length === 0 || !map) return;
    const key = results
      .map((r) => `${r.latitude.toFixed(5)},${r.longitude.toFixed(5)}`)
      .join(";");
    if (lastBoundsRef.current === key) return;
    lastBoundsRef.current = key;
    const lats = results.map((r) => r.latitude);
    const lons = results.map((r) => r.longitude);
    const bounds: [[number, number], [number, number]] = [
      [Math.min(...lats), Math.min(...lons)],
      [Math.max(...lats), Math.max(...lons)],
    ];
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 16, animate: true });
  }, [results, map]);

  return null;
}

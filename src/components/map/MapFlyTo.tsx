"use client";

import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";

export default function MapFlyTo({
  center,
  zoom = 13,
  duration = 1.2,
}: {
  center: [number, number];
  zoom?: number;
  duration?: number;
}) {
  const map = useMap();
  const lastCenterRef = useRef<string | null>(null);

  useEffect(() => {
    if (!map) return;
    const key = `${center[0].toFixed(5)},${center[1].toFixed(5)}`;
    if (lastCenterRef.current === key) return;
    lastCenterRef.current = key;
    map.flyTo(center, zoom, { duration });
  }, [center, zoom, duration, map]);

  return null;
}

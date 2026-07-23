"use client";

import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";

export default function MapCityCenter({
  center,
  disabled = false,
}: {
  center: [number, number];
  disabled?: boolean;
}) {
  const map = useMap();
  const lastCenterRef = useRef<string | null>(null);

  useEffect(() => {
    if (!map) return;
    if (disabled) {
      map.stop();
      return;
    }
    const key = `${center[0].toFixed(5)},${center[1].toFixed(5)}`;
    if (lastCenterRef.current === key) return;
    lastCenterRef.current = key;
    map.flyTo(center, 13, { duration: 1.2 });
  }, [center, disabled, map]);

  return null;
}

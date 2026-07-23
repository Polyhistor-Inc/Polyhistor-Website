"use client";

import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";

export default function MapResizer({ trigger }: { trigger: number }) {
  const map = useMap();
  const hasObservedRef = useRef(false);

  useEffect(() => {
    if (!map || hasObservedRef.current) return;
    hasObservedRef.current = true;
    const container = map.getContainer();
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });
    resizeObserver.observe(container);

    const id = requestAnimationFrame(() => map.invalidateSize());
    const timeout = setTimeout(() => map.invalidateSize(), 150);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(id);
      clearTimeout(timeout);
    };
  }, [map]);

  useEffect(() => {
    if (!map) return;
    void trigger;
    const id = requestAnimationFrame(() => map.invalidateSize());
    const timeout = setTimeout(() => map.invalidateSize(), 250);
    return () => {
      cancelAnimationFrame(id);
      clearTimeout(timeout);
    };
  }, [map, trigger]);

  return null;
}

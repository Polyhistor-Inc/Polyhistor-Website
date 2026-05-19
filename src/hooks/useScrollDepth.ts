"use client";

import { trackScrollDepth } from "@/lib/analytics";
import { useEffect, useRef } from "react";

export function useScrollDepth() {
  const depthsLogged = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const percent = Math.round((scrollTop / docHeight) * 100);
      const thresholds = [25, 50, 75, 90, 100];

      for (const threshold of thresholds) {
        if (percent >= threshold && !depthsLogged.current.has(threshold)) {
          depthsLogged.current.add(threshold);
          trackScrollDepth(threshold);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

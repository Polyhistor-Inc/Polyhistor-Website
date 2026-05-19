"use client";

import { useScrollDepth } from "@/hooks/useScrollDepth";
import { trackFeatureCardView, trackPricingTierView } from "@/lib/analytics";
import { useEffect, useRef } from "react";

export default function HomeAnalytics() {
  useScrollDepth();

  const observedRefs = useRef<Map<string, boolean>>(new Map());
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-track-id");
            const type = entry.target.getAttribute("data-track-type");
            if (id && !observedRefs.current.get(id)) {
              observedRefs.current.set(id, true);
              if (type === "feature") trackFeatureCardView(id);
              if (type === "pricing") trackPricingTierView(id);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("[data-track-id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}

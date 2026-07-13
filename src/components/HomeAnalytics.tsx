"use client";

import { useScrollDepth } from "@/hooks/useScrollDepth";
import { trackFeatureCardView, trackPricingTierView } from "@/lib/analytics";
import { useEffect, useRef } from "react";

export default function HomeAnalytics() {
  useScrollDepth();

  const observedRefs = useRef<Map<string, boolean>>(new Map());
  const observedEls = useRef<Set<Element>>(new Set());

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

    const observeTrackable = (root: ParentNode) => {
      root.querySelectorAll("[data-track-id]").forEach((el) => {
        if (!observedEls.current.has(el)) {
          observedEls.current.add(el);
          observer.observe(el);
        }
      });
    };

    observeTrackable(document);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            observeTrackable(node as Element);
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      observedEls.current.clear();
    };
  }, []);

  return null;
}

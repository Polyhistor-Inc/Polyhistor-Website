"use client";

import { trackPageView, trackTimeOnPage } from "@/lib/analytics";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AnalyticsProvider() {
  const pathname = usePathname();
  const startTimeRef = useRef<number>(Date.now());
  const prevPathRef = useRef<string>(pathname);

  // Track page views on route changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    // If path changed, log time on previous page then track new page
    if (prevPathRef.current !== pathname) {
      const duration = Math.round((Date.now() - startTimeRef.current) / 1000);
      trackTimeOnPage(duration, prevPathRef.current);
      startTimeRef.current = Date.now();
      prevPathRef.current = pathname;
    }

    trackPageView(pathname, document.title);
  }, [pathname]);

  // Track time on page when user leaves
  useEffect(() => {
    const handleBeforeUnload = () => {
      const duration = Math.round((Date.now() - startTimeRef.current) / 1000);
      trackTimeOnPage(duration, pathname);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [pathname]);

  return null;
}

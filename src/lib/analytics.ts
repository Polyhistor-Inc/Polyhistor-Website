"use client";

import { getAnalytics, isSupported, logEvent, setUserProperties, type Analytics } from "firebase/analytics";
import { initializeApp, type FirebaseApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;
let initPromise: Promise<Analytics | null> | null = null;

async function getAnalyticsInstance(): Promise<Analytics | null> {
  if (analytics) return analytics;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    const supported = await isSupported();
    if (!supported) {
      console.warn("Firebase Analytics not supported in this environment");
      return null;
    }
    if (!app) {
      app = initializeApp(firebaseConfig);
    }
    analytics = getAnalytics(app);
    return analytics;
  })();

  return initPromise;
}

// ─── Generic Event Logger ───────────────────────────────────────────

export async function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>
) {
  const a = await getAnalyticsInstance();
  if (!a) return;
  logEvent(a, eventName, params as Record<string, never>);
}

// ─── Page Views ─────────────────────────────────────────────────────

export async function trackPageView(path: string, title?: string) {
  const a = await getAnalyticsInstance();
  if (!a) return;
  logEvent(a, "page_view", {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
}

// ─── User Properties ────────────────────────────────────────────────

export async function setUserProps(props: Record<string, string | number | boolean>) {
  const a = await getAnalyticsInstance();
  if (!a) return;
  setUserProperties(a, props);
}

// ─── Demo Page Events ───────────────────────────────────────────────

export async function trackDemoSearch(params: {
  query: string;
  city: string;
  resultCount: number;
  success: boolean;
  error?: string;
}) {
  await trackEvent("demo_search", {
    search_query: params.query,
    search_city: params.city,
    result_count: params.resultCount,
    success: params.success,
    error: params.error || "",
  });
}

export async function trackDemoSuggestionClick(suggestion: string) {
  await trackEvent("demo_suggestion_click", { suggestion });
}

export async function trackDemoResultClick(params: {
  placeName: string;
  city: string;
  vibeScore: number;
  rank: number;
}) {
  await trackEvent("demo_result_click", {
    place_name: params.placeName,
    city: params.city,
    vibe_score: params.vibeScore,
    result_rank: params.rank,
  });
}

export async function trackDemoCityChange(city: string) {
  await trackEvent("demo_city_change", { city });
}

export async function trackDemoRateLimit(secondsRemaining: number) {
  await trackEvent("demo_rate_limit", { seconds_remaining: secondsRemaining });
}

// ─── Heatmap Page Events ────────────────────────────────────────────

export async function trackHeatmapLoad(params: {
  city: string;
  tribe: string;
  cellCount: number;
  success: boolean;
  error?: string;
}) {
  await trackEvent("heatmap_load", {
    heatmap_city: params.city,
    heatmap_tribe: params.tribe || "all",
    cell_count: params.cellCount,
    success: params.success,
    error: params.error || "",
  });
}

export async function trackHeatmapCityChange(city: string) {
  await trackEvent("heatmap_city_change", { city });
}

export async function trackHeatmapTribeChange(tribe: string) {
  await trackEvent("heatmap_tribe_change", { tribe: tribe || "all" });
}

export async function trackHeatmapCellHover(params: {
  tribe: string;
  density: number;
  h3Index: string;
}) {
  // Debounced at call site — only log every ~2s
  await trackEvent("heatmap_cell_hover", {
    cell_tribe: params.tribe,
    cell_density: Math.round(params.density * 100) / 100,
    h3_index: params.h3Index,
  });
}

export async function trackHeatmapRateLimit(secondsRemaining: number) {
  await trackEvent("heatmap_rate_limit", { seconds_remaining: secondsRemaining });
}

// ─── Waitlist Events ────────────────────────────────────────────────

export async function trackWaitlistSubmit(params: {
  success: boolean;
  source?: string;
  error?: string;
}) {
  await trackEvent("waitlist_submit", {
    success: params.success,
    source: params.source || "direct",
    error: params.error || "",
  });
}

// ─── Landing Page Events ────────────────────────────────────────────

export async function trackCTAClick(params: {
  label: string;
  location: string;
  href: string;
}) {
  await trackEvent("cta_click", {
    cta_label: params.label,
    cta_location: params.location,
    cta_href: params.href,
  });
}

export async function trackFeatureCardView(featureTitle: string) {
  await trackEvent("feature_card_view", { feature_title: featureTitle });
}

export async function trackPricingTierView(tierName: string) {
  await trackEvent("pricing_tier_view", { tier_name: tierName });
}

export async function trackScrollDepth(depthPercent: number) {
  await trackEvent("scroll_depth", { depth_percent: depthPercent });
}

// ─── Navigation Events ──────────────────────────────────────────────

export async function trackNavClick(params: {
  link: string;
  location: "navbar" | "footer" | "mobile_menu";
}) {
  await trackEvent("nav_click", {
    nav_link: params.link,
    nav_location: params.location,
  });
}

// ─── Engagement ─────────────────────────────────────────────────────

export async function trackTimeOnPage(seconds: number, path: string) {
  await trackEvent("time_on_page", {
    duration_seconds: seconds,
    page_path: path,
  });
}

export async function trackReturningVisitor(visitCount: number) {
  await trackEvent("returning_visitor", { visit_count: visitCount });
}

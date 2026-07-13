"use client";

import { CITIES } from "@/lib/constants";
import {
  canMakeRequest,
  getRateLimitResetTime,
  recordRequest,
} from "@/lib/rateLimiter";
import {
  trackCTAClick,
  trackDemoCityChange,
  trackDemoRateLimit,
  trackDemoResultClick,
  trackDemoSearch,
  trackDemoSuggestionClick,
} from "@/lib/analytics";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const CircleMarker = dynamic(
  () => import("react-leaflet").then((mod) => mod.CircleMarker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

interface Tribe {
  tribe_id: string;
  label: string;
  icon: string;
  color: string;
  rule_score: number;
  embedding_score: number;
  final_score: number;
}

interface PlaceResult {
  id: string;
  name: string;
  category: string;
  main_category: string;
  taxonomy: {
    primary: string;
    hierarchy: string[];
    alternates: string[] | null;
  };
  latitude: number;
  longitude: number;
  distance_meters: number;
  vibe_match_score: number;
  temporal_state: string;
  next_transition: number | null;
  tribe_density: number;
  tribes: Tribe[];
  estimated_wait_minutes: number;
  recommendation: string;
}

interface SuggestionCategory {
  id: string;
  label: string;
  icon: string;
  description: string;
  queries: { query: string; city: string; cityLabel: string }[];
}

interface SuggestionsResponse {
  categories: SuggestionCategory[];
  meta: { total_categories: number; total_queries: number };
}


function MapFlyToInner({ lat, lon }: { lat: number; lon: number }) {
  const { useMap } = require("react-leaflet");
  const map = useMap();
  const lastCoordRef = useRef<string | null>(null);
  useEffect(() => {
    if (!map || lat == null || lon == null) return;
    const key = `${lat.toFixed(6)},${lon.toFixed(6)}`;
    if (lastCoordRef.current === key) return;
    lastCoordRef.current = key;
    map.flyTo([lat, lon], 16, { duration: 1.5 });
  }, [lat, lon, map]);
  return null;
}

function MapFitBounds({ results }: { results: PlaceResult[] }) {
  const { useMap } = require("react-leaflet");
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

function MapCityCenter({
  center,
  disabled = false,
}: {
  center: [number, number];
  disabled?: boolean;
}) {
  const { useMap } = require("react-leaflet");
  const map = useMap();
  const lastCenterRef = useRef<string | null>(null);
  useEffect(() => {
    if (!map || disabled) return;
    const key = `${center[0].toFixed(5)},${center[1].toFixed(5)}`;
    if (lastCenterRef.current === key) return;
    lastCenterRef.current = key;
    map.flyTo(center, 13, { duration: 1.2 });
  }, [center, disabled, map]);
  return null;
}

function MapResizer({
  results,
  focusCoord,
}: {
  results: PlaceResult[];
  focusCoord: { lat: number; lon: number } | null;
}) {
  const { useMap } = require("react-leaflet");
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

    // Initial layout may still be settling; trigger a resize after the DOM paints.
    const id = requestAnimationFrame(() => map.invalidateSize());
    const timeout = setTimeout(() => map.invalidateSize(), 150);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(id);
      clearTimeout(timeout);
    };
  }, [map]);

  // Also invalidate when result/focus changes cause layout shifts.
  useEffect(() => {
    if (!map) return;
    const id = requestAnimationFrame(() => map.invalidateSize());
    const timeout = setTimeout(() => map.invalidateSize(), 250);
    return () => {
      cancelAnimationFrame(id);
      clearTimeout(timeout);
    };
  }, [map, results.length, focusCoord]);

  return null;
}

export default function DemoPage() {
  const [query, setQuery] = useState("cozy coffee shop for working");
  const [city, setCity] = useState("san francisco");
  const [results, setResults] = useState<PlaceResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [latency, setLatency] = useState<number | null>(null);
  const mapCenter = useMemo<[number, number]>(() => {
    const cityData = CITIES.find((c) => c.value === city);
    return cityData ? [cityData.lat, cityData.lon] : [37.7749, -122.4194];
  }, [city]);
  const [focusCoord, setFocusCoord] = useState<{ lat: number; lon: number } | null>(null);
  const [suggestions, setSuggestions] = useState<SuggestionCategory[]>([]);
  const [suggestionsLoading, setSuggestionsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const resultRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [rateLimit, setRateLimit] = useState(canMakeRequest());

  // Fetch suggestions on mount
  useEffect(() => {
    setSuggestionsLoading(true);
    fetch("/api/demo/suggestions")
      .then((r) => r.json())
      .then((data: SuggestionsResponse) => {
        setSuggestions(data.categories || []);
      })
      .catch(() => setSuggestions([]))
      .finally(() => setSuggestionsLoading(false));
  }, []);

  // Refresh rate limit status every second for live countdown
  useEffect(() => {
    setRateLimit(canMakeRequest());
    const interval = setInterval(() => {
      setRateLimit(canMakeRequest());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const runSearch = async (searchQuery?: string, searchCity?: string) => {
    const q = searchQuery ?? query;
    const c = searchCity ?? city;

    const limit = canMakeRequest();
    if (!limit.allowed) {
      setError(`Rate limit reached. Try again in ${limit.resetInSeconds}s`);
      setRateLimit(limit);
      trackDemoRateLimit(limit.resetInSeconds);
      return;
    }

    setLoading(true);
    setError("");
    setLatency(null);
    setFocusCoord(null);
    const startTime = performance.now();
    try {
      const res = await fetch(
        `/api/demo/search?query=${encodeURIComponent(q)}&city=${encodeURIComponent(c)}&limit=5`
      );

      const backendRemaining = res.headers.get("X-RateLimit-Remaining");
      if (backendRemaining && parseInt(backendRemaining) < limit.remaining) {
        console.warn("Backend rate limit tighter than client:", backendRemaining);
      }

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "API error" }));
        if (res.status === 429) {
          setError(err.message || `Too many requests. Try again in ${err.retry_after || getRateLimitResetTime()}s.`);
        } else {
          setError(err.error || "Something went wrong. Try again.");
        }
        setResults([]);
        setLoading(false);
        return;
      }

      recordRequest();
      const data = await res.json();
      const places: PlaceResult[] = data.results || [];
      setResults(places);
      setLatency(Math.round(performance.now() - startTime));
      setRateLimit(canMakeRequest());
      trackDemoSearch({ query: q, city: c, resultCount: places.length, success: true });
      if (places.length === 0) {
        setError("No results found. Try a different city or query.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      setResults([]);
      trackDemoSearch({ query: q, city: c, resultCount: 0, success: false, error: "network_error" });
    } finally {
      setLoading(false);
    }
  };

  const surpriseMe = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/demo/suggestions/random");
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      if (data.query) {
        setQuery(data.query);
        if (data.city) setCity(data.city);
        setActiveChip(`random-${Date.now()}`);
        await runSearch(data.query, data.city);
      }
    } catch {
      // fallback
      const fallback = [
        "cozy coffee shop for working",
        "romantic rooftop bar",
        "quiet workspace with wifi",
        "date night restaurant",
        "dog friendly brewery",
      ];
      const random = fallback[Math.floor(Math.random() * fallback.length)];
      setQuery(random);
      setActiveChip(`random-${Date.now()}`);
      await runSearch(random, city);
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 0.8) return "text-emerald-400";
    if (score >= 0.6) return "text-amber-400";
    return "text-white/40";
  };

  const getScoreDotColor = (score: number) => {
    if (score >= 0.8) return "bg-emerald-400";
    if (score >= 0.6) return "bg-amber-400";
    return "bg-white/30";
  };

  const getStateColor = (state: string) => {
    if (state === "PEAK") return { text: "text-red-400", dot: "bg-red-400", label: "PEAK" };
    if (state === "QUIET" || state === "QUIET_WORK") return { text: "text-emerald-400", dot: "bg-emerald-400", label: state.replace(/_/g, " ") };
    if (state === "MORNING_RUSH") return { text: "text-orange-400", dot: "bg-orange-400", label: "RUSH" };
    return { text: "text-white/40", dot: "bg-white/30", label: state.replace(/_/g, " ") };
  };

  const getRecBadge = (rec: string) => {
    if (rec === "GO_NOW") return { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", label: "GO NOW" };
    if (rec === "WAIT") return { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20", label: "WAIT" };
    if (rec === "AVOID") return { text: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20", label: "AVOID" };
    return { text: "text-white/40", bg: "bg-white/5", border: "border-white/10", label: rec };
  };

  const handleFocusPlace = (place: PlaceResult, index: number) => {
    setFocusCoord({ lat: place.latitude, lon: place.longitude });
    resultRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  const categoryQueries = selectedCategory
    ? suggestions.find((c) => c.id === selectedCategory)?.queries || []
    : [];

  return (
    <main className="flex-1 pt-24 pb-8 px-4 md:px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 mb-4">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>No API key required — 30 requests/min per IP</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Try Polyhistor Live</h1>
          <p className="text-white/50 max-w-lg mx-auto">
            Search 3.55M places with natural language. See contextual scores, temporal states, and tribe density in real time.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 md:p-5 mb-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <svg aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && runSearch()}
                placeholder="e.g., cozy coffee shop for working"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition text-[15px]"
              />
            </div>
            <select
              value={city}
              onChange={(e) => { setCity(e.target.value); trackDemoCityChange(e.target.value); }}
              className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:border-white/30 transition md:w-48 text-[15px]"
              style={{ appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='rgba(255,255,255,0.4)' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: "36px" }}
            >
              {CITIES.map((c) => (
                <option key={c.value} value={c.value} className="bg-black">{c.label}</option>
              ))}
            </select>
            <button
              onClick={() => runSearch()}
              disabled={loading || !rateLimit.allowed}
              className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-zinc-200 transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {loading ? "Searching..." : "Search"}
            </button>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs text-white/30 mr-1 self-center">Try:</span>
            {suggestionsLoading ? (
              <span className="text-xs text-white/30 self-center">Loading suggestions...</span>
            ) : (
              <>
                {suggestions.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(selectedCategory === cat.id ? null : cat.id);
                      trackDemoSuggestionClick(cat.label);
                    }}
                    className={`px-3 py-1.5 rounded-[20px] text-[13px] font-medium transition whitespace-nowrap ${
                      selectedCategory === cat.id
                        ? "bg-white text-black border-white"
                        : "bg-white/[0.04] border border-white/[0.08] text-white/60 hover:bg-white/10 hover:border-white/30 hover:text-white/90"
                    }`}
                  >
                    {cat.icon} {cat.label}
                  </button>
                ))}
                <button
                  onClick={surpriseMe}
                  disabled={loading || !rateLimit.allowed}
                  className="px-3 py-1.5 rounded-[20px] text-[13px] font-medium bg-white/[0.04] border border-white/[0.08] text-white/60 hover:bg-white/10 hover:border-white/30 hover:text-white transition whitespace-nowrap disabled:opacity-40"
                >
                  🎲 Surprise Me
                </button>
              </>
            )}
          </div>

          {/* Query chips from selected category */}
          {selectedCategory && categoryQueries.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 pl-0">
              {categoryQueries.map((q, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setQuery(q.query);
                    if (q.city) setCity(q.city);
                    setActiveChip(`${selectedCategory}-${i}`);
                    runSearch(q.query, q.city);
                  }}
                  disabled={!rateLimit.allowed}
                  className={`px-3 py-1.5 rounded-lg text-[13px] transition disabled:opacity-40 ${
                    activeChip === `${selectedCategory}-${i}`
                      ? "bg-white/10 border border-white/30 text-white"
                      : "bg-white/[0.03] border border-white/[0.06] text-white/50 hover:text-white/80 hover:border-white/15"
                  }`}
                >
                  {q.query} {q.cityLabel ? `· ${q.cityLabel}` : ""}
                </button>
              ))}
            </div>
          )}

          {/* Rate limit indicators */}
          {!rateLimit.allowed && (
            <div className="mt-3 text-sm text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
              Rate limit reached. Try again in {rateLimit.resetInSeconds}s
            </div>
          )}
          {rateLimit.allowed && rateLimit.remaining <= 5 && rateLimit.remaining > 0 && (
            <div className="mt-3 text-xs text-amber-400">
              {rateLimit.remaining} search{rateLimit.remaining !== 1 ? "es" : ""} left this minute
            </div>
          )}
        </div>

        {/* Results + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4 min-h-[480px]">
          <div className="lg:col-span-2 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm text-white/70">Results</h3>
              {latency !== null && (
                <div className={`inline-flex items-center gap-[6px] px-3 py-1 rounded-[20px] text-xs font-medium border ${latency > 100 ? "bg-amber-500/[0.08] border-amber-500/[0.15] text-amber-500" : "bg-emerald-500/[0.08] border-emerald-500/[0.15] text-emerald-500"}`}>
                  <svg aria-hidden="true" className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {latency}ms
                </div>
              )}
            </div>
            <div className="flex-1 overflow-y-auto space-y-2 max-h-[440px]">
              {results.length === 0 && !loading && !error && (
                <p className="text-white/30 text-center py-20">Enter a query and click Search</p>
              )}
              {loading && (
                <div className="space-y-3 py-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5 animate-pulse">
                      <div className="flex justify-between mb-2">
                        <div className="space-y-2 flex-1">
                          <div className="h-4 bg-white/10 rounded w-2/3" />
                          <div className="h-3 bg-white/5 rounded w-1/2" />
                        </div>
                        <div className="h-6 w-12 bg-white/10 rounded ml-4" />
                      </div>
                      <div className="flex gap-2 mt-3">
                        <div className="h-3 bg-white/5 rounded w-16" />
                        <div className="h-3 bg-white/5 rounded w-12" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {error && !loading && (
                <div className="text-center py-12">
                  <p className="text-white/40 mb-2">{error}</p>
                  <button onClick={() => runSearch()} className="text-sm text-[#a855f7] hover:underline">Try again</button>
                </div>
              )}
              {results.map((place, i) => {
                const score = place.vibe_match_score || 0;
                const stateStyle = getStateColor(place.temporal_state || "UNKNOWN");
                const rec = getRecBadge(place.recommendation || "UNKNOWN");
                const topTribes = (place.tribes || []).slice(0, 2);
                return (
                  <div
                    key={place.id || i}
                    ref={(el) => { resultRefs.current[i] = el; }}
                    className={`p-4 bg-white/5 rounded-xl border transition cursor-pointer ${
                      focusCoord?.lat === place.latitude && focusCoord?.lon === place.longitude
                        ? "border-white/30 bg-white/[0.08]"
                        : "border-white/5 hover:border-white/10"
                    }`}
                    style={{ animation: `fadeIn 0.3s ease ${i * 0.05}s both` }}
                    onClick={() => {
                      handleFocusPlace(place, i);
                      trackDemoResultClick({
                        placeName: place.name,
                        city,
                        vibeScore: place.vibe_match_score || 0,
                        rank: i + 1,
                      });
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="min-w-0">
                        <h4 className="font-semibold text-sm truncate">{place.name}</h4>
                        <p className="text-xs text-white/40 mt-0.5">
                          {place.taxonomy?.primary || place.category || place.main_category || "place"}
                        </p>
                      </div>
                      <div className="flex flex-col items-end flex-shrink-0 ml-3">
                        <span className={`text-lg font-bold ${getScoreColor(score)}`}>
                          {Math.round(score * 100)}%
                        </span>
                        <span className="text-[10px] text-white/30 uppercase tracking-wider">Match</span>
                      </div>
                    </div>

                    {/* Badges row */}
                    <div className="flex flex-wrap items-center gap-2 mt-2.5">
                      {/* Temporal state */}
                      <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] ${stateStyle.text}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${stateStyle.dot}`} />
                        {stateStyle.label}
                      </span>

                      {/* Recommendation */}
                      <span className={`inline-flex items-center text-[11px] font-medium px-2 py-0.5 rounded-full ${rec.bg} ${rec.text} border ${rec.border}`}>
                        {rec.label}
                      </span>

                      {/* Distance */}
                      {place.distance_meters > 0 && (
                        <span className="text-[11px] text-white/30">
                          {(place.distance_meters / 1000).toFixed(1)} km
                        </span>
                      )}

                      {/* Wait time */}
                      {place.estimated_wait_minutes > 0 && (
                        <span className="text-[11px] text-white/30">
                          ⏳ {place.estimated_wait_minutes}min
                        </span>
                      )}
                    </div>

                    {/* Tribe chips */}
                    {topTribes.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {topTribes.map((tribe) => (
                          <span
                            key={tribe.tribe_id}
                            className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full border"
                            style={{
                              color: tribe.color || "#a0a0c0",
                              borderColor: `${tribe.color || "#a0a0c0"}30`,
                              backgroundColor: `${tribe.color || "#a0a0c0"}10`,
                            }}
                          >
                            <span>{tribe.icon}</span>
                            <span>{tribe.label}</span>
                            <span className="opacity-60">{Math.round(tribe.final_score * 100)}%</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm text-white/70">Map</h3>
              <span className="text-xs text-white/30">{results.length > 0 ? `${results.length} place${results.length !== 1 ? "s" : ""}` : ""}</span>
            </div>
            <div className="h-[400px] rounded-xl overflow-hidden">
              <MapContainer
                center={mapCenter}
                zoom={13}
                className="block"
                style={{ height: "100%", width: "100%" }}
                zoomControl={false}
              >
                <MapCityCenter center={mapCenter} disabled={results.length > 0} />
                <MapResizer results={results} focusCoord={focusCoord} />
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  attribution="&copy; OpenStreetMap &copy; CARTO"
                  subdomains="abcd"
                  maxZoom={19}
                />
                <MapFitBounds results={results} />
                {focusCoord && (
                  <MapFlyToInner lat={focusCoord.lat} lon={focusCoord.lon} />
                )}
                {results.map((place, i) => {
                  const score = place.vibe_match_score || 0;
                  const pinColor = score >= 0.8 ? "#10b981" : score >= 0.6 ? "#f59e0b" : "#71717a";
                  return (
                    <CircleMarker
                      key={place.id || i}
                      center={[place.latitude, place.longitude]}
                      radius={i === 0 ? 10 : 7}
                      pathOptions={{
                        fillColor: pinColor,
                        color: pinColor,
                        weight: 2,
                        opacity: 1,
                        fillOpacity: 0.8,
                      }}
                      eventHandlers={{
                        click: () => {
                          resultRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
                        },
                      }}
                    >
                      <Popup>
                        <span style={{ fontWeight: 700, color: "#000" }}>{place.name}</span>
                        <br />
                        <span style={{ color: "#444" }}>
                          {place.taxonomy?.primary || place.category || ""}
                        </span>
                        <br />
                        <span style={{ color: pinColor, fontWeight: 600 }}>
                          {Math.round(score * 100)}% match
                        </span>
                        <br />
                        <span style={{ color: "#666", fontSize: 12 }}>
                          {getStateColor(place.temporal_state || "UNKNOWN").label}
                        </span>
                      </Popup>
                    </CircleMarker>
                  );
                })}
              </MapContainer>
            </div>
          </div>
        </div>

      </div>

      {/* CTA */}
      <section className="py-12 px-6 border-t border-white/5 mt-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to build?</h2>
          <p className="text-white/50 mb-6">Get early access and start building with contextual location intelligence.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/heatmap" onClick={() => trackCTAClick({ label: "Explore Tribe Heatmap", location: "demo_page_bottom", href: "/heatmap" })} className="px-8 py-3 rounded-xl font-medium border border-white/15 hover:border-white/30 transition text-white">Explore Tribe Heatmap</Link>
            <Link href="/waitlist" onClick={() => trackCTAClick({ label: "Join the Waitlist", location: "demo_page_bottom", href: "/waitlist" })} className="bg-white text-black px-8 py-3 rounded-xl font-medium hover:bg-zinc-200 transition">Join the Waitlist</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

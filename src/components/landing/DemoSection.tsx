"use client";

import { CITIES, DEMO_QUERIES } from "@/lib/constants";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "leaflet/dist/leaflet.css";

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

interface PlaceResult {
  name: string;
  category?: string;
  latitude: number;
  longitude: number;
  vibe_match_score?: number;
  score?: number;
  temporal_state?: string;
  distance_meters?: number;
  tribe_density?: number;
}

function MapFlyTo({ center }: { center: [number, number] }) {
  const { useMap } = require("react-leaflet");
  const map = useMap();
  useEffect(() => {
    map?.flyTo(center, 13, { duration: 1.2 });
  }, [center, map]);
  return null;
}

export default function DemoSection() {
  const [query, setQuery] = useState("cozy coffee shop");
  const [city, setCity] = useState("san francisco");
  const [results, setResults] = useState<PlaceResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mapCenter, setMapCenter] = useState<[number, number]>([37.7749, -122.4194]);
  const cityChangedRef = useRef(false);

  // Update map center when city dropdown changes
  useEffect(() => {
    const cityData = CITIES.find((c) => c.value === city);
    if (cityData) {
      setMapCenter([cityData.lat, cityData.lon]);
      cityChangedRef.current = true;
    }
  }, [city]);

  const runSearch = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `/api/demo/search?query=${encodeURIComponent(query)}&city=${encodeURIComponent(city)}&limit=5`
      );
      const data = await res.json();
      const places = data.places || data.results || [];
      setResults(places);
    } catch (err) {
      setError("Failed to fetch results. Try again.");
    } finally {
      setLoading(false);
    }
  }, [query, city]);

  useEffect(() => {
    runSearch();
  }, [runSearch]);

  const getStateColor = (state: string) => {
    if (state === "PEAK" || state === "MORNING_RUSH") return "text-red-400";
    if (state === "QUIET" || state === "CALM") return "text-green-400";
    return "text-yellow-400";
  };

  return (
    <section id="demo" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Try It Live</h2>
          <p className="text-white/50 text-lg">Search with natural language. No API key needed for the demo.</p>
        </div>

        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row gap-4 mb-6 relative z-10">
            <div className="flex-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && runSearch()}
                placeholder="e.g., cozy coffee shop"
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition text-lg"
              />
            </div>
            <label htmlFor="demo-city" className="sr-only">City</label>
            <select
              id="demo-city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 transition md:w-48"
            >
              {CITIES.map((c) => (
                <option key={c.value} value={c.value} className="bg-black">
                  {c.label}
                </option>
              ))}
            </select>
            <button
              onClick={runSearch}
              disabled={loading}
              className="bg-white text-black px-8 py-3.5 rounded-xl font-medium hover:bg-zinc-200 transition disabled:opacity-50"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {DEMO_QUERIES.map((q) => (
              <button
                key={q}
                onClick={() => {
                  setQuery(q);
                  runSearch();
                }}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white/60 hover:text-white hover:border-white/20 transition"
              >
                {q}
              </button>
            ))}
          </div>

          {error && <p className="text-red-400 text-center mb-4">{error}</p>}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {results.length === 0 && !loading && (
                <p className="text-white/30 text-center py-12">Click &quot;Search&quot; to see results</p>
              )}
              {loading && (
                <p className="text-white/30 text-center py-12">Searching...</p>
              )}
              <AnimatePresence mode="popLayout">
                {results.map((place, i) => {
                  const score = place.vibe_match_score || place.score || 0;
                  const state = place.temporal_state || "UNKNOWN";
                  return (
                    <motion.div
                      key={place.name + i}
                      layout
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[rgba(168,85,247,0.4)] hover:bg-white/10 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-sm group-hover:text-white transition-colors">{place.name}</h3>
                          <p className="text-xs text-white/60">{place.category || "place"}</p>
                        </div>
                        <span className="text-lg font-medium text-white">
                          {Math.round(score * 100)}%
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-3 text-xs font-medium">
                        <span className={getStateColor(state)}>● {state.replace(/_/g, " ")}</span>
                        {place.distance_meters && (
                          <span className="text-white/60 px-2 py-0.5 rounded-full bg-white/5">
                            {(place.distance_meters / 1000).toFixed(1)}km
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            <div className="h-[360px] rounded-2xl overflow-hidden bg-[#0d0f17] border border-white/10 relative z-10 shadow-inner">
              <MapContainer
                center={mapCenter}
                zoom={13}
                className="h-full w-full"
                zoomControl={false}
              >
                <MapFlyTo center={mapCenter} />
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  attribution="&copy; OpenStreetMap &copy; CARTO"
                  subdomains="abcd"
                  maxZoom={19}
                />
                {results.map((place, i) => (
                  <CircleMarker
                    key={i}
                    center={[place.latitude, place.longitude]}
                    radius={i === 0 ? 10 : 7}
                    pathOptions={{
                      fillColor: i === 0 ? "#ffffff" : "#71717a",
                      color: "#18181b",
                      weight: 2,
                      opacity: 1,
                      fillOpacity: 0.8,
                    }}
                  >
                    <Popup>
                      <b className="text-black">{place.name}</b>
                      <br />
                      <span className="text-black/70">{place.category || ""}</span>
                      <br />
                      <span className="font-bold text-black">
                        {Math.round((place.vibe_match_score || place.score || 0) * 100)}% match
                      </span>
                    </Popup>
                  </CircleMarker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { CITIES, DEMO_QUERIES } from "@/lib/constants";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";

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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Try It Live</h2>
          <p className="text-white/50">Search with natural language. No API key needed for the demo.</p>
        </div>

        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(102,126,234,0.15)]">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && runSearch()}
                placeholder="e.g., cozy coffee shop"
                className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 transition text-lg"
              />
            </div>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500 transition md:w-48"
            >
              {CITIES.map((c) => (
                <option key={c.value} value={c.value} className="bg-[#141420]">
                  {c.label}
                </option>
              ))}
            </select>
            <button
              onClick={runSearch}
              disabled={loading}
              className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
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
              {results.map((place, i) => {
                const score = place.vibe_match_score || place.score || 0;
                const state = place.temporal_state || "UNKNOWN";
                return (
                  <div
                    key={i}
                    className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition"
                    style={{ animation: `fadeIn 0.3s ease ${i * 0.05}s both` }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-sm">{place.name}</h4>
                        <p className="text-xs text-white/40">{place.category || "place"}</p>
                      </div>
                      <span className="text-lg font-bold bg-gradient-to-r from-[#667eea] to-[#a855f7] bg-clip-text text-transparent">
                        {Math.round(score * 100)}%
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-2 text-xs">
                      <span className={getStateColor(state)}>● {state.replace(/_/g, " ")}</span>
                      {place.distance_meters && (
                        <span className="text-white/30">{(place.distance_meters / 1000).toFixed(1)}km</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="h-[320px] rounded-xl overflow-hidden bg-[#0d0f17]">
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
                      fillColor: i === 0 ? "#a855f7" : "#667eea",
                      color: "#764ba2",
                      weight: 2,
                      opacity: 1,
                      fillOpacity: 0.8,
                    }}
                  >
                    <Popup>
                      <b>{place.name}</b>
                      <br />
                      {place.category || ""}
                      <br />
                      <span style={{ color: "#a855f7" }}>
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

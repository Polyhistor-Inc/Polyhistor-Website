"use client";

import { CITIES } from "@/lib/constants";
import {
  trackHeatmapCityChange,
  trackHeatmapLoad,
  trackHeatmapRateLimit,
  trackHeatmapTribeChange,
} from "@/lib/analytics";
import { canMakeRequest, recordRequest } from "@/lib/rateLimiter";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

interface HeatmapCell {
  h3_index: string;
  tribe_id: string;
  density: number;
  lat: number;
  lng: number;
  last_updated: string;
}

interface HeatmapResponse {
  count: number;
  city_filter: string;
  privacy_metadata: {
    mechanism: string;
    epsilon: number;
    sensitivity: number;
    aggregation_level: string;
  };
  heatmap: HeatmapCell[];
}

const TRIBES = [
  { id: "", label: "All Tribes" },
  { id: "FOUNDER", label: "Founders 🚀" },
  { id: "STUDENT", label: "Students 📚" },
  { id: "CREATIVE", label: "Creatives 🎨" },
  { id: "FOODIE", label: "Foodies 🍽️" },
  { id: "FITNESS", label: "Fitness 💪" },
  { id: "NIGHTLIFE", label: "Nightlife 🌙" },
  { id: "WELLNESS", label: "Wellness 🧘" },
];

const TRIBE_COLORS: Record<string, string> = {
  FOUNDER: "#FF5733",
  STUDENT: "#33FF57",
  CREATIVE: "#3357FF",
  FOODIE: "#FF33A1",
  FITNESS: "#33FFD4",
  NIGHTLIFE: "#B433FF",
  WELLNESS: "#33D4FF",
};

// Dynamically imported layer — bundles react-leaflet + h3-js in one chunk.
// Uses native Leaflet via window.L (set by react-leaflet's leaflet import).
const HeatmapLayer = dynamic(
  () =>
    Promise.all([import("react-leaflet"), import("h3-js")]).then(([RL, h3Mod]) => {
      const h3 = (h3Mod as any).default || h3Mod;
      const { useMap } = RL;

      return function LayerComponent({
        cells,
        tribe,
        maxDensity,
      }: {
        cells: HeatmapCell[];
        tribe: string;
        maxDensity: number;
      }) {
        const map = useMap();

        useEffect(() => {
          if (!map || cells.length === 0) return;

          let layerGroup: any;
          let timeoutId: ReturnType<typeof setTimeout>;

          const init = () => {
            const L = (window as any).L;
            if (!L) {
              timeoutId = setTimeout(init, 50);
              return;
            }

            layerGroup = L.layerGroup().addTo(map);

            cells.forEach((cell) => {
              try {
                const boundary = h3.cellToBoundary(cell.h3_index);
                const color = tribe
                  ? TRIBE_COLORS[tribe] || "#f59e0b"
                  : TRIBE_COLORS[cell.tribe_id] || "#f59e0b";
                const fillOpacity = tribe
                  ? 0.3 + 0.5 * Math.min(cell.density / maxDensity, 1)
                  : 0.35;

                const polygon = L.polygon(boundary, {
                  color,
                  weight: 1,
                  opacity: 0.6,
                  fillColor: color,
                  fillOpacity,
                }).addTo(layerGroup);

                polygon.bindTooltip(
                  `<div style="font-size:12px;line-height:1.5">
                    <strong>${cell.tribe_id}</strong><br/>
                    Density: ${cell.density.toFixed(2)}<br/>
                    H3: ${cell.h3_index}
                  </div>`,
                  { direction: "top", offset: [0, -10], className: "hex-tooltip" }
                );
              } catch {
                // skip invalid cells
              }
            });
          };

          init();

          return () => {
            clearTimeout(timeoutId);
            if (layerGroup) map.removeLayer(layerGroup);
          };
        }, [cells, tribe, maxDensity, map]);

        return null;
      };
    }),
  { ssr: false }
);

function MapCityCenter({ center, trigger }: { center: [number, number]; trigger: number }) {
  const { useMap } = require("react-leaflet");
  const map = useMap();
  useEffect(() => {
    map?.flyTo(center, 12, { duration: 1.2 });
  }, [center, trigger, map]);
  return null;
}

export default function HeatmapPage() {
  const [city, setCity] = useState("san francisco");
  const [tribe, setTribe] = useState("");
  const [appliedCity, setAppliedCity] = useState("san francisco");
  const [appliedTribe, setAppliedTribe] = useState("");
  const [cells, setCells] = useState<HeatmapCell[]>([]);
  const [loading, setLoading] = useState(false);
  const [flyTrigger, setFlyTrigger] = useState(0);
  const [status, setStatus] = useState<{
    text: string;
    type: "idle" | "loading" | "success" | "warn" | "error";
  }>({
    text: "",
    type: "idle",
  });
  const [maxDensity, setMaxDensity] = useState(1);

  const cityData = CITIES.find((c) => c.value === appliedCity);
  const mapCenter: [number, number] = cityData
    ? [cityData.lat, cityData.lon]
    : [37.7749, -122.4194];

  const loadHeatmap = useCallback(async () => {
    const limit = canMakeRequest();
    if (!limit.allowed) {
      setStatus({
        text: `Rate limit reached. Try again in ${limit.resetInSeconds}s`,
        type: "warn",
      });
      trackHeatmapRateLimit(limit.resetInSeconds);
      return;
    }

    setLoading(true);
    setStatus({ text: "Loading heatmap...", type: "loading" });

    try {
      const params = new URLSearchParams({ city, limit: "500" });
      if (tribe) params.append("tribe_id", tribe);

      const res = await fetch(`/api/heatmap?${params}`);

      if (res.status === 429) {
        const err = await res.json().catch(() => ({}));
        setStatus({
          text: err.message || "Rate limited by server. Wait a moment.",
          type: "warn",
        });
        setLoading(false);
        return;
      }

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data: HeatmapResponse = await res.json();
      const heatmapCells = data.heatmap || [];

      if (heatmapCells.length === 0) {
        setStatus({
          text: "No data found for this city and tribe.",
          type: "warn",
        });
        setCells([]);
        setLoading(false);
        return;
      }

      recordRequest();
      const md = Math.max(...heatmapCells.map((c) => c.density), 1);
      setMaxDensity(md);
      setCells(heatmapCells);
      setAppliedCity(city);
      setAppliedTribe(tribe);
      setFlyTrigger((t) => t + 1);
      trackHeatmapLoad({ city, tribe, cellCount: heatmapCells.length, success: true });
      setStatus({
        text: `${heatmapCells.length} cells loaded`,
        type: "success",
      });
    } catch (err) {
      console.error("Heatmap error:", err);
      trackHeatmapLoad({ city, tribe, cellCount: 0, success: false, error: err instanceof Error ? err.message : "unknown" });
      setStatus({
        text: err instanceof Error ? err.message : "Something went wrong",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  }, [city, tribe]);

  const statusColor = {
    idle: "text-white/50",
    loading: "text-white/50",
    success: "text-emerald-400",
    warn: "text-amber-400",
    error: "text-red-400",
  };

  return (
    <main className="h-screen flex flex-col pt-20">
      {/* Toolbar */}
      <div className="bg-[#0f1117]/90 backdrop-blur-md border-b border-white/[0.06] px-4 md:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <svg className="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="1 6 1 22 8 18 16 22 21 18 21 2 16 6 8 2 1 6" />
              <line x1="8" y1="2" x2="8" y2="18" />
              <line x1="16" y1="6" x2="16" y2="22" />
            </svg>
            <h1 className="text-sm font-medium text-white/70 tracking-tight">Tribe Heatmap</h1>
            {status.type !== "idle" && status.text && (
              <span className={`hidden sm:inline text-xs ml-3 ${statusColor[status.type]}`}>
                {status.text}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <select
              value={city}
              onChange={(e) => { setCity(e.target.value); trackHeatmapCityChange(e.target.value); }}
              suppressHydrationWarning
              className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[rgba(102,126,234,0.5)] cursor-pointer"
              style={{
                appearance: "none",
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 12 12'%3E%3Cpath fill='rgba(255,255,255,0.4)' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 10px center",
                paddingRight: "28px",
              }}
            >
              {CITIES.map((c) => (
                <option key={c.value} value={c.value} className="bg-[#141420]">
                  {c.label}
                </option>
              ))}
            </select>

            <select
              value={tribe}
              onChange={(e) => { setTribe(e.target.value); trackHeatmapTribeChange(e.target.value); }}
              suppressHydrationWarning
              className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-[rgba(102,126,234,0.5)] cursor-pointer"
              style={{
                appearance: "none",
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 12 12'%3E%3Cpath fill='rgba(255,255,255,0.4)' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 10px center",
                paddingRight: "28px",
              }}
            >
              {TRIBES.map((t) => (
                <option key={t.id} value={t.id} className="bg-[#141420]">
                  {t.label}
                </option>
              ))}
            </select>

            <button
              onClick={loadHeatmap}
              disabled={loading}
              className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:opacity-90 transition disabled:opacity-50 whitespace-nowrap"
            >
              {loading ? "Loading..." : "Load"}
            </button>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 relative">
        <MapContainer
          center={mapCenter}
          zoom={12}
          className="absolute inset-0 w-full"
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution="&copy; OpenStreetMap &copy; CARTO"
            subdomains="abcd"
            maxZoom={19}
          />
          <MapCityCenter center={mapCenter} trigger={flyTrigger} />
          <HeatmapLayer cells={cells} tribe={appliedTribe} maxDensity={maxDensity} />
        </MapContainer>

        {/* Legend */}
        <div className="absolute bottom-4 right-4 z-[400] bg-[#0f1117]/90 backdrop-blur-md border border-white/10 rounded-xl p-3 text-xs">
          <div className="font-semibold text-white/70 mb-2">Density</div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm" style={{ background: "#dc2626" }} />
              <span className="text-white/50">High</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm" style={{ background: "#f59e0b" }} />
              <span className="text-white/50">Medium</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm" style={{ background: "#ca8a04" }} />
              <span className="text-white/50">Low</span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-white/10">
            <div className="font-semibold text-white/70 mb-1.5">Tribes</div>
            <div className="space-y-1">
              {TRIBES.slice(1).map((t) => (
                <div key={t.id} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ background: TRIBE_COLORS[t.id] }} />
                  <span className="text-white/50">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

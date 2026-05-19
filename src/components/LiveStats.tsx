"use client";

import { useEffect, useState } from "react";

interface HealthData {
  status: string;
  latency: number;
  services?: Record<string, string>;
}

export default function LiveStats() {
  const [health, setHealth] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchHealth = async () => {
      try {
        const res = await fetch("/api/health", { cache: "no-store" });
        const data = await res.json();
        if (mounted) {
          setHealth(data);
        }
      } catch {
        if (mounted) {
          setHealth({ status: "offline", latency: 0 });
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchHealth();
    const interval = setInterval(fetchHealth, 30000); // refresh every 30s

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const isOnline = health?.status === "healthy";

  return (
    <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
      {[
        { value: "$297", label: "Self-hosted / mo" },
        { value: "4x", label: "Faster cold-start" },
        { value: "<20ms", label: "Repeat queries" },
        { value: "3.55M", label: "Places indexed" },
      ].map((stat, i) => (
        <div
          key={i}
          className="rounded-xl px-3 py-3.5 bg-white/[0.02] border border-white/[0.06] text-center"
        >
          <p className="text-xl font-semibold text-white/80">
            {stat.value}
          </p>
          <p className="text-[11px] text-white/30 mt-0.5">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

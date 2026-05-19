import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Polyhistor — Location Intelligence for AI Agents",
    short_name: "Polyhistor",
    description:
      "Commercial location intelligence alternative: $297/mo self-hosted vs $22,880/mo incumbents. 4x faster cold-start, sub-20ms repeats. Built for AI agents.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f1117",
    theme_color: "#667eea",
    icons: [
      {
        src: "/logo-120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        src: "/logo-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

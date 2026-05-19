import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tribe Heatmap — Privacy-Preserving Crowd Intelligence",
  description:
    "Explore tribe density heatmaps across US cities. Privacy-preserving H3 hexagon visualizations for Founder, Student, Creative, Foodie, Fitness, Nightlife, and Wellness tribes.",
  openGraph: {
    title: "Tribe Heatmap — Privacy-Preserving Crowd Intelligence",
    description:
      "Explore tribe density heatmaps across US cities. Privacy-preserving H3 hexagon visualizations for Founder, Student, Creative, Foodie, Fitness, Nightlife, and Wellness tribes.",
  },
};

export default function HeatmapLayout({ children }: { children: React.ReactNode }) {
  return children;
}

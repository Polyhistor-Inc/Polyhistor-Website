import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo — Try Polyhistor's Contextual Search",
  description:
    "Try Polyhistor's semantic location search demo. Search for places by vibe, mood, and activity across 50 US cities.",
  openGraph: {
    title: "Demo — Try Polyhistor's Contextual Search",
    description:
      "Try Polyhistor's semantic location search demo. Search for places by vibe, mood, and activity across 50 US cities.",
  },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}

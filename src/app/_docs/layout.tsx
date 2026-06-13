import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Documentation — Polyhistor",
  description:
    "Polyhistor API documentation. Learn how to integrate contextual location search, vibe search, temporal intelligence, and tribe density into your app.",
  openGraph: {
    title: "API Documentation — Polyhistor",
    description:
      "Polyhistor API documentation. Learn how to integrate contextual location search, vibe search, temporal intelligence, and tribe density into your app.",
  },
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

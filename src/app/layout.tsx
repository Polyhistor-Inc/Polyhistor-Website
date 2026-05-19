import AnalyticsProvider from "@/components/AnalyticsProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

const siteConfig = {
  title: "Polyhistor — Contextual Intelligence Engine for Location-Aware Apps",
  description:
    "Commercial location intelligence alternative: $297/mo self-hosted vs $22,880/mo incumbents. 4x faster cold-start, sub-20ms repeats. Built for AI agents.",
  url: "https://thepolyhistor.com",
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "geospatial API",
    "location intelligence",
    "Commercial location API alternative",
    "semantic search",
    "AI agents",
    "Polyhistor",
  ],
  authors: [{ name: "Polyhistor Team" }],
  creator: "Polyhistor",
  publisher: "Polyhistor Inc.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL(siteConfig.url),
  // Next.js auto-generates canonical per-page based on metadataBase + pathname
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "Polyhistor",
    images: [
      {
        url: "/polyhistor-logo.png",
        width: 1200,
        height: 630,
        alt: "Polyhistor — Location Intelligence for AI Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/polyhistor-logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f1117",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={`${inter.className} font-sans bg-[#0f1117] text-[#e2e8f0]`}>
        <AnalyticsProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import FirebaseAnalytics from "@/components/FirebaseAnalytics";
import Footer from "@/components/Footer";
import GlobalWaitlistWrapper from "@/components/GlobalWaitlistWrapper";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import { ModalProvider } from "@/context/ModalContext";
import { structuredData } from "@/lib/seo-config";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

const siteConfig = {
  title: "Polyhistor | Never Lose Your Friends (Or Your Money) Again",
  description:
    "The all-in-one app to track your squad, split costs instantly, and find the perfect middle point to meet. Group travel made simple for Gen Z travelers.",
  url: "https://thepolyhistor.com",
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "group travel agency software",
    "student tour operator app",
    "travel liability protection",
    "group travel safety app",
    "ThePolyHistor",
    "trip coordination platform",
  ],
  authors: [{ name: "ThePolyHistor Team" }],
  creator: "ThePolyHistor",
  publisher: "ThePolyHistor",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "ThePolyHistor",
    images: [
      {
        url: "/social-card.png?v=3",
        alt: "ThePolyHistor App - Agency Dashboard & Mobile App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@ThePolyHistor",
    images: [`${siteConfig.url}/social-card.png?v=3`],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head />
      <body className={`${inter.className} font-sans`}>
        <StructuredData data={structuredData.consumer} />
        <StructuredData data={structuredData.organization} />
        <FirebaseAnalytics />
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
          <GlobalWaitlistWrapper />
        </ModalProvider>
      </body>
    </html>
  );
}

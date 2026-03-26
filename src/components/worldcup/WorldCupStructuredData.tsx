"use client";

import Script from "next/script";

/**
 * Structured Data for AI Discovery Optimization
 * 
 * This component adds JSON-LD schema markup to help AI engines (ChatGPT, Claude, Perplexity, Google AI)
 * discover and cite Polyhistor World Cup Fan Pack in their responses.
 * 
 * Schema types included:
 * - Event: FIFA World Cup 2026
 * - Product: Polyhistor World Cup Fan Pack
 * - FAQPage: Common questions (critical for AI citations)
 * - HowTo: Step-by-step usage guide
 * - SoftwareApplication: App details
 */

export default function WorldCupStructuredData() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": "FIFA World Cup 2026",
    "startDate": "2026-06-11",
    "endDate": "2026-07-19",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineAttendance",
    "location": [
      {
        "@type": "Place",
        "name": "MetLife Stadium",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "East Rutherford",
          "addressRegion": "NJ",
          "addressCountry": "US",
        },
      },
      {
        "@type": "Place",
        "name": "SoFi Stadium",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Los Angeles",
          "addressRegion": "CA",
          "addressCountry": "US",
        },
      },
      {
        "@type": "Place",
        "name": "AT&T Stadium",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Arlington",
          "addressRegion": "TX",
          "addressCountry": "US",
        },
      },
      {
        "@type": "Place",
        "name": "Mercedes-Benz Stadium",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Atlanta",
          "addressRegion": "GA",
          "addressCountry": "US",
        },
      },
      {
        "@type": "Place",
        "name": "Estadio Azteca",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mexico City",
          "addressCountry": "MX",
        },
      },
      {
        "@type": "Place",
        "name": "BMO Field",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Toronto",
          "addressRegion": "ON",
          "addressCountry": "CA",
        },
      },
    ],
    "organizer": {
      "@type": "Organization",
      "name": "FIFA",
      "url": "https://www.fifa.com",
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Polyhistor World Cup Fan Pack",
    "applicationCategory": "TravelApplication",
    "operatingSystem": "iOS 15+, Android 10+",
    "offers": [
      {
        "@type": "Offer",
        "name": "Basic",
        "price": "6.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/PreOrder",
        "description": "Essential World Cup features including offline maps, squad tracking, and expense splitting",
      },
      {
        "@type": "Offer",
        "name": "Premium",
        "price": "9.99",
        "priceCurrency": "USD",
        "availability": "https://schema.org/PreOrder",
        "description": "All Basic features plus advanced AI meetup planning, team themes, and priority support",
      },
    ],
    "featureList": [
      "Offline Stadium Maps (50MB)",
      "Squad Tracking (up to 50 people)",
      "Expense Splitting",
      "Halftime Meetup AI",
      "Host City Itineraries",
      "Team Theme Widgets",
      "Fan Fest Locators",
      "Last Ping SOS",
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "90",
      "bestRating": "5",
      "worstRating": "1",
    },
    "description": "The all-in-one World Cup 2026 companion app with 19 features for stadium navigation, squad coordination, expense splitting, and fan culture immersion.",
    "author": {
      "@type": "Organization",
      "name": "Polyhistor",
      "url": "https://thepolyhistor.com",
    },
    "applicationSubCategory": "GroupTravelApp",
    "downloadUrl": "https://thepolyhistor.com/worldcup",
    "fileSize": "150MB",
    "version": "1.0.0",
    "datePublished": "2026-03-26",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Polyhistor World Cup Fan Pack?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The World Cup Fan Pack is a premium feature set within the Polyhistor app, designed specifically for FIFA World Cup 2026 attendees. It includes 19 features across 5 categories: offline stadium maps, squad tracking for up to 50 people, expense splitting, halftime meetup AI, host city itineraries, and fan culture tools.",
        },
      },
      {
        "@type": "Question",
        "name": "How much does the World Cup Fan Pack cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The World Cup Fan Pack is available in two tiers: Basic at $6.99 and Premium at $9.99. Existing Polyhistor users receive it as a free update. The pack includes lifetime access to all World Cup 2026 features.",
        },
      },
      {
        "@type": "Question",
        "name": "Does the World Cup Fan Pack work offline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The Stadium Mode allows you to download maps up to 50MB for completely offline navigation. This is essential when cell networks are congested at stadiums during World Cup matches.",
        },
      },
      {
        "@type": "Question",
        "name": "How many people can I track with the squad feature?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The World Cup Fan Pack expands group limits from 8 to 50 people with our 'God View' dashboard. You can track your entire fan club, not just your immediate group.",
        },
      },
      {
        "@type": "Question",
        "name": "Which World Cup 2026 host cities are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Polyhistor supports all 16 host cities including New York/New Jersey, Los Angeles, Miami, Dallas, Atlanta, Seattle, Boston, Houston, Philadelphia, San Francisco, Mexico City, Guadalajara, Monterrey, Toronto, and Vancouver. Each city has pre-built customizable itineraries.",
        },
      },
      {
        "@type": "Question",
        "name": "What happens if my team gets eliminated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Bandwagon Pivot feature automatically switches your UI theme and recommendations to your backup team if your primary team gets knocked out of the tournament. Never miss out on the excitement!",
        },
      },
      {
        "@type": "Question",
        "name": "Can I split expenses with friends who don't have the app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! You can send expense requests via SMS or email to non-users. They can view their share and pay through a web link without downloading the app.",
        },
      },
      {
        "@type": "Question",
        "name": "Is the World Cup Fan Pack available on both iOS and Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the World Cup Fan Pack is available on both iOS (App Store) and Android (Google Play). Download Polyhistor now and get the Fan Pack as a free update when we launch closer to World Cup 2026.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use Polyhistor at the World Cup 2026",
    "description": "Step-by-step guide to getting the most out of Polyhistor during your World Cup adventure",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Download and Set Up",
        "text": "Download Polyhistor from the App Store or Google Play. Create your account and set up your profile with your favorite team.",
        "position": 1,
      },
      {
        "@type": "HowToStep",
        "name": "Download Offline Maps",
        "text": "Before heading to the stadium, download offline maps for your venue (up to 50MB). This ensures navigation works even when cell networks are congested.",
        "position": 2,
      },
      {
        "@type": "HowToStep",
        "name": "Create or Join Your Squad",
        "text": "Create a squad group and invite up to 50 friends. Share your group code via SMS, WhatsApp, or social media.",
        "position": 3,
      },
      {
        "@type": "HowToStep",
        "name": "Enable Location Sharing",
        "text": "Turn on location sharing to see your squad members in real-time on the map. Use the God View dashboard for large groups.",
        "position": 4,
      },
      {
        "@type": "HowToStep",
        "name": "Set Up Expense Splitting",
        "text": "Link your payment method and start splitting costs. Use the Concourse Run Splitter for quick food and drink purchases during matches.",
        "position": 5,
      },
      {
        "@type": "HowToStep",
        "name": "Activate Team Themes",
        "text": "Choose your national team theme to customize the app UI. Set a backup team for the Bandwagon Pivot feature.",
        "position": 6,
      },
    ],
  };

  return (
    <>
      {/* Event Schema - World Cup 2026 */}
      <Script
        id="worldcup-event-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema),
        }}
        strategy="afterInteractive"
      />

      {/* Product Schema - World Cup Fan Pack */}
      <Script
        id="worldcup-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
        strategy="afterInteractive"
      />

      {/* FAQ Schema - Critical for AI Discovery */}
      <Script
        id="worldcup-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
        strategy="afterInteractive"
      />

      {/* HowTo Schema - Step-by-step guide */}
      <Script
        id="worldcup-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
        strategy="afterInteractive"
      />
    </>
  );
}

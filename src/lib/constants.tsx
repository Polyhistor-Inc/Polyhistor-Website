export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://api.thepolyhistor.com";

export const CITIES = [
  { value: "san francisco", label: "San Francisco", lat: 37.7749, lon: -122.4194 },
  { value: "new york", label: "New York", lat: 40.7128, lon: -74.0060 },
  { value: "chicago", label: "Chicago", lat: 41.8781, lon: -87.6298 },
  { value: "los angeles", label: "Los Angeles", lat: 34.0522, lon: -118.2437 },
  { value: "austin", label: "Austin", lat: 30.2672, lon: -97.7431 },
  { value: "seattle", label: "Seattle", lat: 47.6062, lon: -122.3321 },
  { value: "denver", label: "Denver", lat: 39.7392, lon: -104.9903 },
  { value: "boston", label: "Boston", lat: 42.3601, lon: -71.0589 },
];

export const DEMO_QUERIES = [
  "cozy coffee shop",
  "wheelchair accessible restaurant",
  "quiet study spot",
  "outdoor patio bar",
];

export const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Vibe Search",
    description: "768-dimensional semantic embeddings power natural language queries. \"Cozy coffee shop\" actually works — no keyword matching.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Temporal Intelligence",
    description: "Know if a place is PEAK, QUIET, or CLOSED right now. Temporal state machines model how places change throughout the day.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Tribe Density",
    description: "Privacy-preserving crowd intelligence via H3 hex grids. 7 tribe profiles: Founder, Student, Creative, Foodie, Fitness, Nightlife, Wellness.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Self-Hosted Pricing",
    description: "$297/month at 1M requests vs $22,880 for commercial providers. Step-fixed cost model eliminates the \"Success Tax\" on growth.",
    iconBg: "bg-green-500/20",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Self-Hostable",
    description: "MIT licensed. Deploy with Docker Compose or Kubernetes. PostgreSQL + pgvector stack — no vendor lock-in, no API call metering.",
    iconBg: "bg-blue-500/20",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Agent-Native",
    description: "Built for autonomous AI agents, not just human UIs. Deep Contextual Search™ powers multi-step itinerary planning and real-time recommendations.",
    iconBg: "bg-orange-500/20",
  },
];

export const PRICING_TIERS = [
  {
    name: "Free",
    description: "For hobby projects and testing",
    price: "$0",
    period: "/mo",
    features: [
      "30 requests/minute",
      "5,000 requests/month",
      "Vibe, Nearby, Unified search",
      "Community support",
    ],
    cta: "Join Waitlist",
    ctaStyle: "border",
    href: "/waitlist",
  },
  {
    name: "Pro",
    description: "For production apps",
    price: "$29",
    period: "/mo",
    features: [
      "300 requests/minute",
      "100,000 requests/month",
      "All endpoints + enrichment",
      "Trip planner + heatmaps",
      "Priority email support",
    ],
    cta: "Join Waitlist",
    ctaStyle: "gradient",
    href: "/waitlist",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For teams at scale",
    price: "Custom",
    period: "",
    features: [
      "Unlimited requests",
      "Self-hosted deployment",
      "Custom embeddings",
      "SLA + dedicated support",
    ],
    cta: "Join Waitlist",
    ctaStyle: "border",
    href: "/waitlist",
  },
];

export const USE_CASES = [
  {
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI Travel Agents",
    description: "Autonomous agents that plan itineraries, find restaurants, and optimize routes based on real-time crowd density and temporal state.",
    iconBg: "bg-purple-500/10",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Local Discovery Apps",
    description: "Semantic search that understands \"romantic date spot\" or \"quiet workspace.\" No keyword gymnastics required.",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Accessibility Platforms",
    description: "Filter by wheelchair access, quiet hours, and sensory-friendly environments. Built with inclusive design from the ground up.",
    iconBg: "bg-green-500/10",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Real Estate & Neighborhood Analysis",
    description: "Understand neighborhood character, amenity density, and temporal patterns to value properties and recommend locations.",
    iconBg: "bg-orange-500/10",
  },
];

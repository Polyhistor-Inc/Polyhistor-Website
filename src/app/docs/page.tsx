"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Lang = "curl" | "js" | "python";

interface CodeExampleProps {
  lang: Lang;
  code: string;
}

function CodeExample({ lang, code }: CodeExampleProps) {
  const [activeLang, setActiveLang] = useState<Lang>(lang);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="bg-[#0d0f17] border border-white/[0.06] rounded-xl overflow-hidden my-4">
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.06]">
        <span className="text-xs text-white/40 font-medium">Example</span>
        <button
          onClick={handleCopy}
          className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition ${
            copied
              ? "bg-emerald-500/[0.15] text-emerald-500 border border-emerald-500/[0.2]"
              : "bg-white/[0.04] text-white/40 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white/70"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="p-4 text-[13px] leading-[1.7] overflow-x-auto font-mono">
        <pre>{code}</pre>
      </div>
    </div>
  );
}

function MultiLangExample({
  curl,
  js,
  python,
}: {
  curl: string;
  js: string;
  python: string;
}) {
  const [activeLang, setActiveLang] = useState<Lang>("curl");
  const [copied, setCopied] = useState(false);

  const code = { curl, js, python };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code[activeLang]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="bg-[#0d0f17] border border-white/[0.06] rounded-xl overflow-hidden my-4">
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.06]">
        <div className="flex gap-1">
          {(["curl", "js", "python"] as Lang[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                activeLang === lang
                  ? "bg-[rgba(102,126,234,0.15)] text-[#a855f7]"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {lang === "curl" ? "cURL" : lang === "js" ? "JavaScript" : "Python"}
            </button>
          ))}
        </div>
        <button
          onClick={handleCopy}
          className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition ${
            copied
              ? "bg-emerald-500/[0.15] text-emerald-500 border border-emerald-500/[0.2]"
              : "bg-white/[0.04] text-white/40 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white/70"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="p-4 text-[13px] leading-[1.7] overflow-x-auto font-mono">
        <pre>{code[activeLang]}</pre>
      </div>
    </div>
  );
}

const SECTIONS = [
  { id: "getting-started", label: "Getting Started" },
  { id: "authentication", label: "Authentication" },
  { id: "rate-limits", label: "Rate Limits" },
  { id: "demo-search", label: "Demo Search" },
  { id: "suggestions", label: "Suggestions" },
  { id: "unified-search", label: "Unified Search" },
  { id: "place-details", label: "Place Details" },
  { id: "spatial-search", label: "Spatial Search" },
  { id: "vibe-search", label: "Vibe Search" },
  { id: "temporal-state", label: "Temporal State" },
  { id: "tribe-heatmap", label: "Tribe Heatmap" },
  { id: "trip-planner", label: "Trip Planner" },
  { id: "waitlist", label: "Waitlist" },
  { id: "health", label: "Health Checks" },
  { id: "sdks", label: "SDKs & Examples" },
  { id: "errors", label: "Error Reference" },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.map((s) => document.getElementById(s.id));
      let current = SECTIONS[0].id;
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) current = section.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredSections = SECTIONS.filter((s) =>
    s.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setSidebarOpen(false);
    }
  };

  return (
    <main className="min-h-screen pt-16">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-[#0f1117]/90">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 mr-1"
            >
              <svg aria-hidden="true" className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/">
              <img src="/logo.svg" alt="Polyhistor" width="100" height="32" className="h-8 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/demo" className="text-sm text-white/60 hover:text-white transition hidden sm:block">Demo</Link>
            <Link href="/waitlist" className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-200 transition">Join Waitlist</Link>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-[55] lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`fixed top-16 left-0 bottom-0 w-64 overflow-y-auto z-40 bg-white/[0.02] border-r border-white/[0.06] transition-transform duration-300 lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4">
            <div className="relative mb-4">
              <svg aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search docs..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/30 focus:outline-none focus:border-[rgba(102,126,234,0.4)] text-sm"
              />
            </div>

            <div className="text-[11px] font-semibold uppercase tracking-[0.05em] text-white/30 px-4 pt-4 pb-2">Introduction</div>
            {filteredSections.slice(0, 3).map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition ${
                  activeSection === s.id
                    ? "bg-[rgba(102,126,234,0.1)] text-[#a855f7] font-medium"
                    : "text-white/50 hover:bg-white/[0.04] hover:text-white/80"
                }`}
              >
                {s.label}
              </button>
            ))}

            <div className="text-[11px] font-semibold uppercase tracking-[0.05em] text-white/30 px-4 pt-4 pb-2">API Reference</div>
            {filteredSections.slice(3, 12).map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition ${
                  activeSection === s.id
                    ? "bg-[rgba(102,126,234,0.1)] text-[#a855f7] font-medium"
                    : "text-white/50 hover:bg-white/[0.04] hover:text-white/80"
                }`}
              >
                {s.label}
              </button>
            ))}

            <div className="text-[11px] font-semibold uppercase tracking-[0.05em] text-white/30 px-4 pt-4 pb-2">Guides</div>
            {filteredSections.slice(12).map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition ${
                  activeSection === s.id
                    ? "bg-[rgba(102,126,234,0.1)] text-[#a855f7] font-medium"
                    : "text-white/50 hover:bg-white/[0.04] hover:text-white/80"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 max-w-3xl mx-auto px-6 py-12">
          <section id="getting-started">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-lg text-white/50 mb-8">
              Get started with Polyhistor in under 5 minutes. Build location-aware apps that understand context, not just coordinates.
            </p>

            <div className="bg-[rgba(102,126,234,0.05)] border border-[rgba(102,126,234,0.15)] rounded-xl px-5 py-4 mb-8">
              <p className="text-white/70 text-sm">
                <strong>Base URL:</strong> <code className="font-mono text-purple-300 text-sm">https://api.thepolyhistor.com</code> &nbsp;|&nbsp; <strong>Current version:</strong> <code className="font-mono text-purple-300 text-sm">v1</code>
              </p>
            </div>

            <h2 className="text-[28px] font-bold mt-12 mb-4 scroll-mt-20">Getting Started</h2>
            <p className="text-white/60 leading-[1.7] mb-4">
              Polyhistor is a contextual geospatial intelligence API. Unlike traditional place APIs that return raw coordinates and ratings, Polyhistor understands <em>what</em> a place feels like, <em>when</em> it&apos;s best to visit, and <em>who</em> it&apos;s for.
            </p>

            <div className="space-y-6 mt-8">
              {[
                {
                  num: "1",
                  title: "Join the waitlist",
                  text: "Pricing and self-serve API keys launch next week. Join the waitlist to get early access. For now, you can explore the live demo without an API key.",
                },
                {
                  num: "2",
                  title: "Make your first request",
                  text: "Once you have an API key, every request includes it in the X-API-Key header:",
                },
                {
                  num: "3",
                  title: "Integrate into your app",
                  text: "Use the Unified Search endpoint for most use cases. It combines semantic, temporal, and social signals into one ranked result set.",
                },
              ].map((step) => (
                <div key={step.num} className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-white text-black text-[13px] font-bold flex items-center justify-center flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mt-0">{step.title}</h3>
                    <p className="text-white/60 leading-[1.7] mb-0">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <MultiLangExample
              curl={`curl "https://api.thepolyhistor.com/api/v1/unified/search?query=cozy+coffee+shop&city=chicago&limit=5" \\\n  -H "X-API-Key: your_api_key_here"`}
              js={`const res = await fetch(\n  'https://api.thepolyhistor.com/api/v1/unified/search?query=cozy+coffee+shop&city=chicago&limit=5',\n  { headers: { 'X-API-Key': 'your_api_key_here' } }\n);\nconst data = await res.json();\nconsole.log(data.results);`}
              python={`import requests\n\nres = requests.get(\n    'https://api.thepolyhistor.com/api/v1/unified/search',\n    params={'query': 'cozy coffee shop', 'city': 'chicago', 'limit': 5},\n    headers={'X-API-Key': 'your_api_key_here'}\n)\ndata = res.json()\nprint(data['results'])`}
            />
          </section>

          <section id="authentication">
            <h2 className="text-[28px] font-bold mt-12 mb-4 scroll-mt-20">Authentication</h2>
            <p className="text-white/60 leading-[1.7] mb-4">
              All API requests (except the public demo endpoint) require an API key. Include your key in the <code className="font-mono text-sm bg-white/5 px-1.5 py-0.5 rounded">X-API-Key</code> header.
            </p>

            <CodeExample
              lang="curl"
              code="X-API-Key: dgx_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            />

            <h3 className="text-xl font-semibold mt-8 mb-3 scroll-mt-20">Getting an API Key</h3>
            <ol className="list-decimal pl-5 text-white/60 leading-[1.7] space-y-2">
              <li>Sign up at the <Link href="/dashboard" className="text-[#a855f7] hover:underline">Developer Dashboard</Link></li>
              <li>Create a new project</li>
              <li>Copy your API key from the project settings page</li>
              <li>Include the key in every request header</li>
            </ol>

            <div className="bg-[rgba(102,126,234,0.05)] border border-[rgba(102,126,234,0.15)] rounded-xl px-5 py-4 mt-6">
              <p className="text-white/70 text-sm">
                <strong>Security tip:</strong> Never expose your API key in client-side JavaScript. Proxy requests through your backend, or use the demo endpoint for client-side prototypes.
              </p>
            </div>
          </section>

          <section id="rate-limits">
            <h2 className="text-[28px] font-bold mt-12 mb-4 scroll-mt-20">Rate Limits</h2>
            <p className="text-white/60 leading-[1.7] mb-4">Rate limits are enforced per API key. Limits vary by plan tier:</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-white/40 uppercase tracking-[0.03em]">Plan</th>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-white/40 uppercase tracking-[0.03em]">Requests/min</th>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-white/40 uppercase tracking-[0.03em]">Requests/month</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { plan: "Free", min: "30", month: "5,000" },
                    { plan: "Pro", min: "300", month: "100,000" },
                    { plan: "Enterprise", min: "Unlimited", month: "Unlimited" },
                  ].map((row) => (
                    <tr key={row.plan} className="border-b border-white/[0.04] last:border-b-0">
                      <td className="px-4 py-3 text-sm font-semibold">{row.plan}</td>
                      <td className="px-4 py-3 text-sm">{row.min}</td>
                      <td className="px-4 py-3 text-sm">{row.month}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-white/60 leading-[1.7] mt-4">
              When you exceed a limit, the API returns <code className="font-mono text-sm bg-white/5 px-1.5 py-0.5 rounded text-red-400">429 Too Many Requests</code>. Retry after the time specified in the <code className="font-mono text-sm bg-white/5 px-1.5 py-0.5 rounded">Retry-After</code> header.
            </p>
          </section>

          <section id="demo-search">
            <h2 className="text-[28px] font-bold mt-12 mb-4 scroll-mt-20">Demo Search</h2>
            <p className="text-white/60 leading-[1.7] mb-4">
              Public demo endpoint — no API key required. Perfect for prototyping and testing. Rate limited to 30 requests/min per IP.
            </p>

            <EndpointCard
              method="GET"
              path="/api/v1/demo/search"
              description="Public demo search with full contextual response. Returns vibe match scores, temporal states, tribe density, taxonomy, and recommendations."
              params={[
                { name: "query", type: "string", required: true, desc: "Natural language query, e.g. \"cozy coffee shop for working\"" },
                { name: "city", type: "string", required: true, desc: "City name or alias: san_francisco, chicago, nyc, la, etc." },
                { name: "limit", type: "integer", required: false, desc: "Max results. Default: 10, Max: 50" },
              ]}
            />

            <MultiLangExample
              curl={`curl "https://api.thepolyhistor.com/api/v1/demo/search?query=cozy+coffee+shop&city=san_francisco&limit=5"`}
              js={`const res = await fetch(
  'https://api.thepolyhistor.com/api/v1/demo/search?query=cozy+coffee+shop&city=san_francisco&limit=5'
);
const data = await res.json();`}
              python={`import requests

res = requests.get(
    'https://api.thepolyhistor.com/api/v1/demo/search',
    params={'query': 'cozy coffee shop', 'city': 'san_francisco', 'limit': 5}
)
data = res.json()`}
            />

            <CodeExample
              lang="curl"
              code={`{
  "results": [
    {
      "id": "08f...",
      "name": "The Coffee Bar",
      "category": "coffee_shop",
      "main_category": "cafe",
      "taxonomy": {
        "primary": "cafe",
        "hierarchy": ["cafe", "coffee_shop", "restaurant"],
        "alternates": null
      },
      "latitude": 37.7749,
      "longitude": -122.4194,
      "distance_meters": 850,
      "vibe_match_score": 0.92,
      "temporal_state": "PEAK",
      "next_transition": 1716051600,
      "tribe_density": 0.78,
      "tribes": [
        {
          "tribe_id": "FOUNDER",
          "label": "Founder",
          "icon": "🚀",
          "color": "#8B5CF6",
          "rule_score": 0.8,
          "embedding_score": 0.75,
          "final_score": 0.775
        },
        {
          "tribe_id": "CREATIVE",
          "label": "Creative",
          "icon": "🎨",
          "color": "#EC4899",
          "rule_score": 0.65,
          "embedding_score": 0.7,
          "final_score": 0.675
        }
      ],
      "estimated_wait_minutes": 12,
      "recommendation": "GO_NOW"
    }
  ]
}`}
            />
          </section>

          <section id="suggestions">
            <h2 className="text-[28px] font-bold mt-12 mb-4 scroll-mt-20">Suggestions</h2>
            <p className="text-white/60 leading-[1.7] mb-4">
              Category-based query suggestions and random query generation for discovery. No API key required.
            </p>

            <EndpointCard
              method="GET"
              path="/api/v1/suggestions"
              description="Returns categorized query suggestions with icons, descriptions, and example queries per city."
              params={[]}
            />

            <CodeExample
              lang="curl"
              code={`curl "https://api.thepolyhistor.com/api/v1/suggestions"`}
            />

            <CodeExample
              lang="curl"
              code={`{
  "categories": [
    {
      "id": "work",
      "label": "Work",
      "icon": "💻",
      "description": "Quiet spaces to focus",
      "queries": [
        { "query": "quiet workspace with wifi", "city": "san_francisco", "cityLabel": "San Francisco" }
      ]
    }
  ],
  "meta": { "total_categories": 6, "total_queries": 24 }
}`}
            />

            <EndpointCard
              method="GET"
              path="/api/v1/suggestions/random"
              description="Returns a single random query suggestion with city pre-selected."
              params={[]}
            />

            <CodeExample
              lang="curl"
              code={`curl "https://api.thepolyhistor.com/api/v1/suggestions/random"`}
            />

            <CodeExample
              lang="curl"
              code={`{
  "query": "romantic rooftop bar",
  "city": "san_francisco",
  "cityLabel": "San Francisco"
}`}
            />
          </section>

          <section id="unified-search">
            <h2 className="text-[28px] font-bold mt-12 mb-4 scroll-mt-20">API Reference</h2>

            <EndpointCard
              method="GET"
              path="/api/v1/unified/search"
              description="The primary search endpoint. Combines semantic (V-Layer), temporal (T-Layer), and social (Tribe Layer) signals into a single ranked result set."
              params={[
                { name: "query", type: "string", required: true, desc: "Natural language query, e.g. \"cozy coffee shop for working\"" },
                { name: "city", type: "string", required: false, desc: "City name or alias: chicago, nyc, sf, la, etc." },
                { name: "lat", type: "number", required: false, desc: "Latitude (used if city not provided)" },
                { name: "lon", type: "number", required: false, desc: "Longitude (used if city not provided)" },
                { name: "limit", type: "integer", required: false, desc: "Max results. Default: 10, Max: 50" },
              ]}
            />

            <MultiLangExample
              curl={`curl "https://api.thepolyhistor.com/api/v1/unified/search?query=cozy+coffee+shop&city=chicago&limit=10" \\\n  -H "X-API-Key: your_api_key_here"`}
              js={`const res = await fetch(\n  'https://api.thepolyhistor.com/api/v1/unified/search?query=cozy+coffee+shop&city=chicago&limit=10',\n  { headers: { 'X-API-Key': 'your_api_key_here' } }\n);\nconst data = await res.json();`}
              python={`import requests\n\nres = requests.get(\n    'https://api.thepolyhistor.com/api/v1/unified/search',\n    params={'query': 'cozy coffee shop', 'city': 'chicago', 'limit': 10},\n    headers={'X-API-Key': 'your_api_key_here'}\n)\ndata = res.json()`}
            />

            <CodeExample
              lang="curl"
              code={`{\n  "results": [\n    {\n      "id": "08f...",\n      "name": "The Coffee Bar",\n      "category": "coffee_shop",\n      "main_category": "cafe",\n      "taxonomy": {\n        "primary": "cafe",\n        "hierarchy": ["cafe", "coffee_shop", "restaurant"],\n        "alternates": null\n      },\n      "latitude": 41.8781,\n      "longitude": -87.6298,\n      "distance_meters": 420,\n      "vibe_match_score": 0.92,\n      "temporal_state": "PEAK",\n      "next_transition": 1716051600,\n      "tribe_density": 0.78,\n      "tribes": [\n        {\n          "tribe_id": "FOUNDER",\n          "label": "Founder",\n          "icon": "🚀",\n          "color": "#8B5CF6",\n          "rule_score": 0.8,\n          "embedding_score": 0.75,\n          "final_score": 0.775\n        }\n      ],\n      "estimated_wait_minutes": 8,\n      "recommendation": "GO_NOW"\n    }\n  ]\n}`}
            />
          </section>

          <section id="place-details">
            <EndpointCard
              method="GET"
              path="/api/v1/places/:id"
              description="Get details for a specific place by ID."
              params={[
                { name: "id", type: "string", required: true, desc: "Place UUID" },
              ]}
            />
            <EndpointCard
              method="GET"
              path="/api/v1/places/:id/enriched"
              description="Get place details with external enrichment data (photos, reviews, hours) if available."
              params={[]}
            />
          </section>

          <section id="spatial-search">
            <EndpointCard
              method="GET"
              path="/api/v1/places/nearby"
              description="Search for places within a radius of a coordinate."
              params={[
                { name: "lat", type: "number", required: true, desc: "Latitude" },
                { name: "lon", type: "number", required: true, desc: "Longitude" },
                { name: "radius", type: "number", required: false, desc: "Search radius in meters. Default: 1000" },
                { name: "limit", type: "integer", required: false, desc: "Max results. Default: 20" },
              ]}
            />
          </section>

          <section id="vibe-search">
            <EndpointCard
              method="POST"
              path="/api/v1/vibe/search"
              description="Semantic search by natural language description. Uses the V-Layer (semantic plane) only."
              params={[
                { name: "query", type: "string", required: true, desc: "Natural language description" },
                { name: "lat", type: "number", required: false, desc: "Latitude" },
                { name: "lon", type: "number", required: false, desc: "Longitude" },
                { name: "radius", type: "number", required: false, desc: "Search radius in meters. Default: 2000" },
                { name: "limit", type: "integer", required: false, desc: "Max results. Default: 10" },
              ]}
            />
          </section>

          <section id="temporal-state">
            <EndpointCard
              method="GET"
              path="/api/v1/temporal/state"
              description="Get the current temporal state of places in an area. Understands how a place changes character throughout the day."
              params={[
                { name: "placeId", type: "string", required: false, desc: "Specific place ID" },
                { name: "lat", type: "number", required: false, desc: "Latitude (for area query)" },
                { name: "lon", type: "number", required: false, desc: "Longitude (for area query)" },
                { name: "time", type: "string", required: false, desc: "Time in HH:MM format. Default: current time" },
              ]}
            />
          </section>

          <section id="tribe-heatmap">
            <EndpointCard
              method="GET"
              path="/api/v1/tribe/heatmap"
              description="Get social density heatmap for a tribe segment. Uses Uber H3 hexagonal grid (resolution 9, ~0.1 km²)."
              params={[
                { name: "tribe_id", type: "string", required: true, desc: "FOUNDER, STUDENT, CREATIVE, FOODIE, FITNESS, NIGHTLIFE, WELLNESS" },
                { name: "city", type: "string", required: false, desc: "City name" },
                { name: "bounds", type: "string", required: false, desc: "Bounding box: minLat,minLon,maxLat,maxLon" },
                { name: "limit", type: "integer", required: false, desc: "Max heatmap cells. Default: 500" },
              ]}
            />
            <CodeExample
              lang="curl"
              code={`curl "https://api.thepolyhistor.com/api/v1/tribe/heatmap?tribe_id=FOUNDER&city=chicago&limit=100" \\\n  -H "X-API-Key: your_api_key_here"`}
            />
            <EndpointCard
              method="GET"
              path="/api/v1/tribe/profiles"
              description="List all tribe definitions with metadata and category mappings."
              params={[]}
            />
          </section>

          <section id="trip-planner">
            <EndpointCard
              method="GET"
              path="/api/v1/trip/plan"
              description="Multi-stop itinerary planning with nearest-neighbor routing."
              params={[
                { name: "query", type: "string", required: true, desc: "Trip theme: \"food tour\", \"coffee crawl\", \"bar hop\"" },
                { name: "city", type: "string", required: true, desc: "City name" },
                { name: "stops", type: "integer", required: false, desc: "Number of stops. Default: 5" },
                { name: "start", type: "string", required: false, desc: "Start time HH:MM" },
              ]}
            />
            <CodeExample
              lang="curl"
              code={`curl "https://api.thepolyhistor.com/api/v1/trip/plan?query=food+tour&city=nyc&stops=5&start=10:00" \\\n  -H "X-API-Key: your_api_key_here"`}
            />
          </section>

          <section id="waitlist">
            <h2 className="text-[28px] font-bold mt-12 mb-4 scroll-mt-20">Waitlist</h2>
            <p className="text-white/60 leading-[1.7] mb-4">
              Join the waitlist for early access. No API key required.
            </p>

            <EndpointCard
              method="POST"
              path="/api/v1/waitlist"
              description="Subscribe to the waitlist. Returns success confirmation or error if already subscribed."
              params={[
                { name: "name", type: "string", required: true, desc: "Full name" },
                { name: "email", type: "string", required: true, desc: "Email address" },
                { name: "source", type: "string", required: false, desc: "Signup source for analytics (e.g., \"waitlist_page\")" },
              ]}
            />

            <MultiLangExample
              curl={`curl -X POST "https://api.thepolyhistor.com/api/v1/waitlist" \\\
  -H "Content-Type: application/json" \\\
  -d '{"name":"Ada Lovelace","email":"ada@example.com","source":"docs_page"}'`}
              js={`const res = await fetch('https://api.thepolyhistor.com/api/v1/waitlist', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Ada Lovelace',
    email: 'ada@example.com',
    source: 'docs_page'
  })
});
const data = await res.json();`}
              python={`import requests

res = requests.post(
    'https://api.thepolyhistor.com/api/v1/waitlist',
    json={
        'name': 'Ada Lovelace',
        'email': 'ada@example.com',
        'source': 'docs_page'
    }
)
data = res.json()`}
            />

            <CodeExample
              lang="curl"
              code={`{
  "success": true,
  "waitlist_id": "wl_abc123"
}`}
            />
          </section>

          <section id="health">
            <EndpointCard
              method="GET"
              path="/health"
              description="Deep health check — verifies database and Redis connectivity."
              params={[]}
            />
            <CodeExample
              lang="curl"
              code={`{\n  "status": "healthy",\n  "services": {\n    "database": "up",\n    "redis": "up"\n  }\n}`}
            />
            <EndpointCard
              method="GET"
              path="/health/ping"
              description="Instant ping — responds immediately without checking dependencies. Use for load balancer health checks."
              params={[]}
            />
          </section>

          <section id="sdks">
            <h2 className="text-[28px] font-bold mt-12 mb-4 scroll-mt-20">SDKs & Examples</h2>
            <p className="text-white/60 leading-[1.7] mb-4">
              We currently provide REST API access. Official SDKs are on the roadmap. In the meantime, here are copy-paste ready snippets for common patterns.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3 scroll-mt-20">Unified Search</h3>
            <MultiLangExample
              curl={`curl -G "https://api.thepolyhistor.com/api/v1/unified/search" \\\n  -H "X-API-Key: your_api_key_here" \\\n  --data-urlencode "query=romantic rooftop bar" \\\n  --data-urlencode "city=nyc" \\\n  --data-urlencode "limit=5"`}
              js={`const API_KEY = 'your_api_key_here';\nconst BASE_URL = 'https://api.thepolyhistor.com';\n\nasync function searchPlaces(query, city, limit = 10) {\n  const url = new URL(BASE_URL + '/api/v1/unified/search');\n  url.searchParams.set('query', query);\n  url.searchParams.set('city', city);\n  url.searchParams.set('limit', limit);\n\n  const res = await fetch(url, {\n    headers: { 'X-API-Key': API_KEY }\n  });\n\n  if (!res.ok) throw new Error('HTTP ' + res.status);\n  return res.json();\n}\n\n// Usage\nconst data = await searchPlaces('cozy coffee shop', 'chicago', 5);\nconsole.log(data.results);`}
              python={`import requests\n\nAPI_KEY = 'your_api_key_here'\nBASE_URL = 'https://api.thepolyhistor.com'\n\ndef search_places(query, city, limit=10):\n    res = requests.get(\n        f'{BASE_URL}/api/v1/unified/search',\n        params={'query': query, 'city': city, 'limit': limit},\n        headers={'X-API-Key': API_KEY}\n    )\n    res.raise_for_status()\n    return res.json()\n\n# Usage\ndata = search_places('cozy coffee shop', 'chicago', 5)\nprint(data['results'])`}
            />

            <h3 className="text-xl font-semibold mt-8 mb-3 scroll-mt-20">Trip Planner</h3>
            <MultiLangExample
              curl={`curl -G "https://api.thepolyhistor.com/api/v1/trip/plan" \\\n  -H "X-API-Key: your_api_key_here" \\\n  --data-urlencode "query=coffee crawl" \\\n  --data-urlencode "city=sf" \\\n  --data-urlencode "stops=4" \\\n  --data-urlencode "start=09:00"`}
              js={`async function planTrip(query, city, stops = 5, start = '10:00') {\n  const url = new URL(BASE_URL + '/api/v1/trip/plan');\n  url.searchParams.set('query', query);\n  url.searchParams.set('city', city);\n  url.searchParams.set('stops', stops);\n  url.searchParams.set('start', start);\n\n  const res = await fetch(url, {\n    headers: { 'X-API-Key': API_KEY }\n  });\n  return res.json();\n}`}
              python={`def plan_trip(query, city, stops=5, start='10:00'):\n    res = requests.get(\n        f'{BASE_URL}/api/v1/trip/plan',\n        params={'query': query, 'city': city, 'stops': stops, 'start': start},\n        headers={'X-API-Key': API_KEY}\n    )\n    return res.json()`}
            />
          </section>

          <section id="errors">
            <h2 className="text-[28px] font-bold mt-12 mb-4 scroll-mt-20">Error Reference</h2>
            <p className="text-white/60 leading-[1.7] mb-4">Polyhistor uses standard HTTP response codes.</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-white/40 uppercase tracking-[0.03em]">Code</th>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-white/40 uppercase tracking-[0.03em]">Meaning</th>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-white/40 uppercase tracking-[0.03em]">How to fix</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { code: "200", meaning: "OK", fix: "Success — parse the response body" },
                    { code: "400", meaning: "Bad Request", fix: "Check parameter types and required fields" },
                    { code: "401", meaning: "Unauthorized", fix: "Include a valid X-API-Key header" },
                    { code: "429", meaning: "Too Many Requests", fix: "Wait for Retry-After seconds, then retry" },
                    { code: "500", meaning: "Server Error", fix: "Retry with exponential backoff. Contact support if persistent." },
                  ].map((row) => (
                    <tr key={row.code} className="border-b border-white/[0.04] last:border-b-0">
                      <td className="px-4 py-3 text-sm">
                        <code className="font-mono text-[13px] text-[#a855f7]">{row.code}</code>
                      </td>
                      <td className="px-4 py-3 text-sm">{row.meaning}</td>
                      <td className="px-4 py-3 text-sm">{row.fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-3 scroll-mt-20">Error Response Format</h3>
            <CodeExample
              lang="curl"
              code={`{\n  "error": "Unauthorized",\n  "message": "Invalid or missing API key"\n}`}
            />
          </section>

          <div className="mt-16 pt-8 border-t border-white/5 text-center">
            <p className="text-white/40 text-sm mb-4">Still have questions?</p>
            <Link href="/waitlist" className="bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-zinc-200 transition inline-block">Join the Waitlist</Link>
          </div>
        </main>
      </div>
    </main>
  );
}

function EndpointCard({
  method,
  path,
  description,
  params,
}: {
  method: string;
  path: string;
  description: string;
  params: { name: string; type: string; required: boolean; desc: string }[];
}) {
  return (
    <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden mb-6">
      <div className="px-5 py-4 bg-white/[0.02] border-b border-white/[0.06] flex items-center gap-3">
        <span
          className={`px-2.5 py-1 rounded-md text-xs font-bold font-mono ${
            method === "GET"
              ? "bg-white text-black"
              : "bg-white/10 text-white"
          }`}
        >
          {method}
        </span>
        <code className="font-mono text-sm text-white/80">{path}</code>
      </div>
      <div className="p-5">
        <p className="text-white/60 text-sm mb-4">{description}</p>
        {params.length > 0 && (
          <>
            <h3 className="text-base font-semibold text-white/80 mb-3">Parameters</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-white/40 uppercase tracking-[0.03em]">Parameter</th>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-white/40 uppercase tracking-[0.03em]">Type</th>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-white/40 uppercase tracking-[0.03em]">Required</th>
                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-white/40 uppercase tracking-[0.03em]">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {params.map((p) => (
                    <tr key={p.name} className="border-b border-white/[0.04] last:border-b-0">
                      <td className="px-4 py-3">
                        <code className="font-mono text-[13px] text-[#a855f7]">{p.name}</code>
                      </td>
                      <td className="px-4 py-3">
                        <code className="font-mono text-xs text-white/40 bg-white/[0.04] px-2 py-0.5 rounded">{p.type}</code>
                      </td>
                      <td className="px-4 py-3">
                        {p.required ? (
                          <span className="text-[10px] font-semibold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">Required</span>
                        ) : (
                          <span className="text-sm text-white/60">Optional</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-white/60">{p.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

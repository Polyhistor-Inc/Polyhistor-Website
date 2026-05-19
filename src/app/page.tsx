import DemoSection from "@/components/landing/DemoSection";
import HomeAnalytics from "@/components/HomeAnalytics";
import LiveStats from "@/components/LiveStats";
import TrackedLink from "@/components/TrackedLink";
import { FEATURES, PRICING_TIERS, USE_CASES } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://thepolyhistor.com/#organization",
      name: "Polyhistor",
      url: "https://thepolyhistor.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thepolyhistor.com/logo.svg",
      },
      sameAs: [
        "https://www.producthunt.com/posts/polyhistor",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://thepolyhistor.com/#website",
      url: "https://thepolyhistor.com",
      name: "Polyhistor",
      publisher: {
        "@id": "https://thepolyhistor.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://thepolyhistor.com/demo?query={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Polyhistor",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "127",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HomeAnalytics />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[600px] h-[600px] rounded-full bg-radial-gradient pointer-events-none" 
          style={{ background: "radial-gradient(circle, rgba(102,126,234,0.15) 0%, transparent 70%)" }} />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>3.55M places indexed across 50 US metros</span>
            </div>
            <a href="https://www.producthunt.com/posts/polyhistor" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-400 hover:bg-orange-500/15 transition">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.5 2h-7a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5zm-3 7V3h2.5v6H9.5zm-3 0V3h2v6h-2zm9-7h-2v6h2V2zM6 10.5v7a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5zm3 6.5v-5h2.5v5H9zm-3 0v-5h2v5h-2zm6 0v-5h2v5h-2z"/>
              </svg>
              <span>Launching on Product Hunt</span>
            </a>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Location Intelligence<br />
            <span className="bg-gradient-to-r from-[#667eea] via-[#a855f7] to-[#764ba2] bg-clip-text text-transparent">
              for AI Agents
            </span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            A contextual search engine that understands <em>where</em>, <em>when</em>, and <em>what</em> —
            not just coordinates. Built for AI agents that need real-world context.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TrackedLink href="/demo" label="Try the Demo" location="hero" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-8 py-3.5 rounded-xl font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-purple-500/20">
              Try the Demo
            </TrackedLink>
            <TrackedLink href="/waitlist" label="Join the Waitlist" location="hero" className="px-8 py-3.5 rounded-xl font-semibold text-lg border border-white/15 hover:border-white/30 transition text-white">
              Join the Waitlist
            </TrackedLink>
          </div>

          <LiveStats />
        </div>
      </section>

      {/* Interactive Demo */}
      <DemoSection />

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Five Intelligence Layers</h2>
            <p className="text-white/50 max-w-xl mx-auto">No other geospatial API combines semantic, temporal, and social dimensions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <div key={i} data-track-id={feature.title} data-track-type="feature" className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 hover:border-[rgba(102,126,234,0.3)] hover:-translate-y-0.5 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.iconBg || "bg-gradient-to-br from-[#667eea] to-[#764ba2]"}`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Proof */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Performance That Speaks</h2>
            <p className="text-white/50">Benchmarked against commercial location APIs at 1M requests/month.</p>
          </div>
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-sm font-medium text-white/40">Metric</th>
                    <th className="px-6 py-4 text-sm font-medium text-purple-400">Polyhistor</th>
                    <th className="px-6 py-4 text-sm font-medium text-white/40">Commercial APIs</th>
                    <th className="px-6 py-4 text-sm font-medium text-white/40">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: "Monthly Cost (1M requests)", poly: "$297", google: "$22,880", improvement: "98.7% cheaper", highlight: true },
                    { metric: "Repeat Query Latency", poly: "<20ms", google: "~460ms", improvement: "Sub-20ms", highlight: true },
                    { metric: "Cold-Start Latency", poly: "116ms", google: "~460ms", improvement: "4x faster", highlight: true },
                    { metric: "Semantic Recall@1", poly: "0.73", google: "—", improvement: "70-query benchmark", highlight: true },
                    { metric: "Semantic Recall@10", poly: "0.97", google: "—", improvement: "Top-10 retrieval", highlight: true },
                    { metric: "Data Model", poly: "Contextual State Machine", google: "Static Coordinates", improvement: "Agent-native", highlight: false },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-b-0">
                      <td className="px-6 py-4 text-sm">{row.metric}</td>
                      <td className={`px-6 py-4 text-sm font-bold ${row.highlight ? "text-green-400" : "text-purple-400"}`}>{row.poly}</td>
                      <td className="px-6 py-4 text-sm text-white/60">{row.google}</td>
                      <td className={`px-6 py-4 text-sm font-bold ${row.highlight ? "text-green-400" : "text-purple-400"}`}>{row.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Code Preview */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple API. Powerful Results.</h2>
            <p className="text-white/50">One endpoint. All the intelligence. Results in 19ms.</p>
          </div>
          <div className="bg-[#0d0f17] border border-white/[0.06] rounded-xl p-6 overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-white/30">cURL</span>
            </div>
            <pre className="text-sm leading-relaxed">
              <span className="text-purple-400">curl</span> -X GET <span className="text-green-400">&quot;https://Api_URL_Coming_Soon/api/v1/unified/search?query=cozy+coffee+shop&amp;city=sf&quot;</span> \{"\n"}
              {"  "}-H <span className="text-green-400">&quot;X-API-Key: dgx_live_xxxxxxxxxxxxxxxx&quot;</span>
            </pre>
          </div>
          <div className="bg-[#0d0f17] border border-white/[0.06] rounded-xl p-6 overflow-x-auto mt-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-white/30">JSON Response</span>
            </div>
            <pre className="text-sm leading-relaxed">
{`{\n  "query": "cozy coffee shop",\n  "city": "San Francisco",\n  "results": [\n    {\n      "name": "Sightglass Coffee",\n      "category": "coffee_shop",\n      "vibe_match_score": 0.91,\n      "temporal_state": "PEAK",\n      "tribe_density": 0.72,\n      "recommendation": "GO NOW"\n    }\n  ]\n}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-white/50">Pricing launches next week. Join the waitlist for early access.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                data-track-id={tier.name}
                data-track-type="pricing"
                className={`rounded-2xl p-8 ${
                  tier.popular
                    ? "border border-[rgba(102,126,234,0.4)] bg-gradient-to-br from-[rgba(102,126,234,0.06)] to-[rgba(118,75,162,0.06)] relative"
                    : "bg-white/[0.02] border border-white/[0.08]"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-xs font-semibold px-4 py-1 rounded-full">
                      Best Value
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                  <p className="text-sm text-white/40">{tier.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-white/40">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  className={`block text-center w-full py-3 rounded-xl font-medium transition ${
                    tier.ctaStyle === "gradient"
                      ? "bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white hover:opacity-90"
                      : "border border-white/15 hover:border-white/30 text-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {USE_CASES.map((useCase, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 flex gap-4 hover:border-[rgba(102,126,234,0.3)] transition">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${useCase.iconBg}`}>
                  {useCase.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{useCase.title}</h3>
                  <p className="text-sm text-white/50">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-12 shadow-[0_0_40px_rgba(102,126,234,0.15)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build?</h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Get early access to Polyhistor. Join the waitlist and be the first to build with contextual location intelligence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <TrackedLink href="/demo" label="Try the Demo" location="bottom_cta" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-8 py-3.5 rounded-xl font-semibold text-lg hover:opacity-90 transition">
                Try the Demo
              </TrackedLink>
              <TrackedLink href="/heatmap" label="Explore Heatmap" location="bottom_cta" className="px-8 py-3.5 rounded-xl font-semibold text-lg border border-white/15 hover:border-white/30 transition text-white">
                Explore Heatmap
              </TrackedLink>
              <TrackedLink href="/waitlist" label="Join the Waitlist" location="bottom_cta" className="px-8 py-3.5 rounded-xl font-semibold text-lg border border-white/15 hover:border-white/30 transition text-white">
                Join the Waitlist
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import HeroSection from "@/components/landing/HeroSection";
import HomeAnalytics from "@/components/HomeAnalytics";
import TrackedLink from "@/components/TrackedLink";
import { LazyDemoSection, LazyFeatureGrid, LazyInteractiveCodeBlock } from "@/components/landing/ClientSections";
import { PRICING_TIERS, USE_CASES } from "@/lib/constants";
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
      <HeroSection />

      {/* Interactive Demo */}
      <LazyDemoSection />

      {/* Features */}
      <LazyFeatureGrid />

      {/* Performance Proof */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight">Performance That Speaks</h2>
            <p className="text-zinc-400 text-lg">
              Polyhistor is benchmarked against leading commercial location APIs at 1M requests/month. 
              Our geospatial data architecture guarantees unparalleled speed for AI agents.
            </p>
          </div>
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
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
                    <tr key={i} className="border-b border-white/5 last:border-b-0 hover:bg-white/[0.03] transition-colors group">
                      <td className="px-6 py-5 text-sm font-medium text-white/80">{row.metric}</td>
                      <td className="px-6 py-5 text-sm font-bold text-white">{row.poly}</td>
                      <td className="px-6 py-5 text-sm text-zinc-500">{row.google}</td>
                      <td className={`px-6 py-5 text-sm font-medium ${row.highlight ? "text-white" : "text-zinc-400"}`}>{row.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Code Preview */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Simple API. Powerful Results.</h2>
            <p className="text-white/50 text-lg">
              One Polyhistor API endpoint handles all the heavy lifting. Get rich location intelligence and semantic search results in under 19ms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LazyInteractiveCodeBlock 
              title="Request (cURL)"
              language="curl"
              code={'curl -X GET "https://Api_URL_Coming_Soon/api/v1/unified/search?query=cozy+coffee+shop&city=sf" \\\n  -H "X-API-Key: dgx_live_xxxxxxxxxxxxxxxx"'}
              delay={0}
            />
            
            <LazyInteractiveCodeBlock 
              title="Response (JSON)"
              language="json"
              code={'{\n  "query": "cozy coffee shop",\n  "city": "San Francisco",\n  "results": [\n    {\n      "name": "Sightglass Coffee",\n      "category": "coffee_shop",\n      "vibe_match_score": 0.91,\n      "temporal_state": "PEAK",\n      "tribe_density": 0.72,\n      "recommendation": "GO NOW"\n    }\n  ]\n}'}
              delay={0.2}
            />
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
                className={`rounded-2xl p-8 transition-all duration-300 bg-white/[0.02] border ${
                  tier.popular
                    ? "border-white/30"
                    : "border-white/10"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-black text-xs font-bold px-4 py-1 rounded-full">
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
                      <svg aria-hidden="true" className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  className={`block text-center w-full py-3 rounded-xl font-medium transition duration-300 ${
                    tier.ctaStyle === "gradient"
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "border border-white/15 hover:border-white/40 hover:bg-white/5 text-white"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built For Autonomous Agents</h2>
            <p className="text-white/50">Polyhistor provides the geospatial context required for real-world AI reasoning.</p>
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
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-12">
            <h2 className="text-3xl md:text-5xl font-medium mb-4 tracking-tight">Ready to Build?</h2>
            <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
              Get early access to Polyhistor. Join the waitlist and be the first to build with our groundbreaking location intelligence API for AI agents.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <TrackedLink href="/demo" label="Try the Demo" location="bottom_cta" className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-zinc-200 transition-colors">
                Try the Demo
              </TrackedLink>
              <TrackedLink href="/waitlist" label="Join the Waitlist" location="bottom_cta" className="px-8 py-4 rounded-full font-medium text-lg border border-white/10 hover:border-white/30 transition-colors text-white">
                Join the Waitlist
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

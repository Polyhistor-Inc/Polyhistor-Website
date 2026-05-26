import { PRICING_TIERS } from "@/lib/constants";
import Link from "next/link";

export const metadata = {
  title: "Pricing — Polyhistor",
  description: "Simple, transparent pricing for Polyhistor's contextual location intelligence API. Free tier, Pro, and Enterprise plans.",
};

export default function PricingPage() {
  return (
    <main className="flex-1 pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Start free, scale as you grow. No per-request metering — just straightforward tiers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 ${
                tier.popular
                  ? "border border-white/30 bg-white/[0.04] relative"
                  : "bg-white/[0.02] border border-white/[0.08]"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-black text-xs font-semibold px-4 py-1 rounded-full">
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
                className={`block text-center w-full py-3 rounded-xl font-medium transition ${
                  tier.ctaStyle === "gradient"
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "border border-white/15 hover:border-white/30 text-white"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison hint */}
        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm mb-4">
            Compare with commercial location APIs at 1M requests/month:
          </p>
          <div className="inline-flex items-center gap-6 bg-white/[0.02] border border-white/[0.06] rounded-xl px-6 py-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-white/80">$297</p>
              <p className="text-xs text-white/30">Polyhistor self-hosted</p>
            </div>
            <div className="text-white/20">vs</div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white/40">$22,880</p>
              <p className="text-xs text-white/30">Commercial providers</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

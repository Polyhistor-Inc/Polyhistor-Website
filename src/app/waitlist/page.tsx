"use client";

import { trackWaitlistSubmit } from "@/lib/analytics";
import Link from "next/link";
import { useState } from "react";

export default function WaitlistPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [useCase, setUseCase] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          source: useCase ? `waitlist_page_${useCase}` : "waitlist_page",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        trackWaitlistSubmit({ success: true, source: useCase });
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to join waitlist");
      trackWaitlistSubmit({ success: false, source: useCase, error: err instanceof Error ? err.message : "unknown" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-16 min-h-screen">
      <div className="w-full max-w-md">
        {!success ? (
          <div className="animate-[fadeIn_0.4s_ease]">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span>Early access opens next week</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Join the Waitlist</h1>
              <p className="text-white/50">Be the first to get access to Polyhistor. No spam, just early access.</p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ada Lovelace"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/30 focus:outline-none focus:border-[rgba(102,126,234,0.5)] focus:bg-white/[0.05] transition text-[15px]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ada@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-white/30 focus:outline-none focus:border-[rgba(102,126,234,0.5)] focus:bg-white/[0.05] transition text-[15px]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    What are you building? <span className="text-white/30">(optional)</span>
                  </label>
                  <select
                    value={useCase}
                    onChange={(e) => setUseCase(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:border-[rgba(102,126,234,0.5)] transition text-[15px]"
                    style={{ appearance: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='rgba(255,255,255,0.4)' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center", paddingRight: "40px" }}
                  >
                    <option value="">Select one...</option>
                    <option value="ai_agent">AI Agent / Assistant</option>
                    <option value="mobile_app">Mobile App</option>
                    <option value="travel_platform">Travel / Discovery Platform</option>
                    <option value="real_estate">Real Estate / Neighborhood Analysis</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-6 py-3.5 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50 mt-2"
                >
                  {loading ? "Joining..." : "Join Waitlist"}
                </button>
              </form>

              {error && (
                <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                  {error}
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
                {[
                  "Free tier included at launch",
                  "No credit card required",
                  "Unsubscribe anytime",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-[10px] text-sm text-white/50">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center animate-[fadeIn_0.4s_ease]">
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-10">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-3">You&apos;re on the list!</h2>
              <p className="text-white/50 mb-6">We&apos;ll email you as soon as early access opens. In the meantime, try the demo.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/demo" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition">Try the Demo</Link>

              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

type Lang = "curl" | "js" | "python" | "go";

const SNIPPETS: Record<Lang, string> = {
  curl: `curl -X GET "https://api.thepolyhistor.com/api/v1/unified/search?query=cozy+coffee+shop&city=sf&api_key=YOUR_API_KEY" \\\n  -H "X-API-Key: YOUR_API_KEY"`,
  js: `const response = await fetch('https://api.thepolyhistor.com/api/v1/unified/search?query=cozy+coffee+shop&city=sf', {
  headers: { 'X-API-Key': 'YOUR_API_KEY' }
});
const data = await response.json();
console.log(data.results);`,
  python: `import requests

response = requests.get(
    'https://api.thepolyhistor.com/api/v1/unified/search',
    params={'query': 'cozy coffee shop', 'city': 'sf'},
    headers={'X-API-Key': 'YOUR_API_KEY'}
)
data = response.json()
print(data['results'])`,
  go: `package main

import (
    "fmt"
    "net/http"
)

func main() {
    req, _ := http.NewRequest("GET", "https://api.thepolyhistor.com/api/v1/unified/search?query=cozy+coffee+shop&city=sf", nil)
    req.Header.Set("X-API-Key", "YOUR_API_KEY")
    // ...
}`,
};

export default function DashboardPage() {
  const [currentLang, setCurrentLang] = useState<Lang>("curl");
  const [keyName, setKeyName] = useState("");
  const [keyEmail, setKeyEmail] = useState("");
  const [keyTier, setKeyTier] = useState("free");
  const [generatedKey, setGeneratedKey] = useState("");
  const [showKey, setShowKey] = useState(false);

  const generateKey = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/key", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: keyName, email: keyEmail, tier: keyTier }),
      });
      const data = await res.json();
      if (res.ok && data.key) {
        setGeneratedKey(data.key);
        setShowKey(true);
      } else {
        alert(data.message || "Failed to create key");
      }
    } catch (err) {
      alert("Error: " + (err instanceof Error ? err.message : String(err)));
    }
  };

  const copyKey = () => {
    if (generatedKey) navigator.clipboard.writeText(generatedKey);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(SNIPPETS[currentLang]);
  };

  return (
    <main className="min-h-screen pt-20 pb-8">
      {/* Nav */}
      <nav className="border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Polyhistor" width="100" height="32" className="h-8 w-auto" />
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm text-white/60 hover:text-white transition">Home</Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Developer Dashboard</h1>
          <p className="text-white/50">Manage your API keys, monitor usage, and access code snippets.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Generate Key */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg aria-hidden="true" className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                Generate API Key
              </h2>
              <form onSubmit={generateKey} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/60 mb-1">Name</label>
                    <input
                      type="text"
                      value={keyName}
                      onChange={(e) => setKeyName(e.target.value)}
                      placeholder="My App"
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-1">Email</label>
                    <input
                      type="email"
                      value={keyEmail}
                      onChange={(e) => setKeyEmail(e.target.value)}
                      placeholder="dev@example.com"
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-1">Tier</label>
                  <select
                    value={keyTier}
                    onChange={(e) => setKeyTier(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30"
                  >
                    <option value="free">Free — 30 req/min, 5,000/mo</option>
                    <option value="pro">Pro — $29/mo, 300 req/min, 100,000/mo</option>
                    <option value="enterprise">Enterprise — Custom</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-white text-black px-6 py-2.5 rounded-lg font-medium transition hover:bg-zinc-200"
                >
                  Generate Key
                </button>
              </form>

              {showKey && (
                <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                  <p className="text-sm text-emerald-400 mb-2 font-medium">✓ API key created! Copy it now — you won&apos;t see it again.</p>
                  <div className="bg-[#1a1d29] rounded-lg p-3 flex items-center justify-between">
                    <code className="text-emerald-300 break-all text-sm">{generatedKey}</code>
                    <button onClick={copyKey} className="text-white/60 hover:text-white ml-2 flex-shrink-0 cursor-pointer">
                      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Start */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <svg aria-hidden="true" className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Quick Start
              </h2>
              <div className="flex gap-2 mb-3">
                {(["curl", "js", "python", "go"] as Lang[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setCurrentLang(lang)}
                    className={`px-3 py-1 rounded text-sm transition ${
                      currentLang === lang
                        ? "bg-white/10 text-white"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {lang === "curl" ? "cURL" : lang === "js" ? "JavaScript" : lang === "python" ? "Python" : "Go"}
                  </button>
                ))}
              </div>
              <div className="bg-[#1a1d29] rounded-lg p-4 overflow-x-auto relative">
                <button onClick={copyCode} className="absolute top-3 right-3 text-white/40 hover:text-white cursor-pointer">
                  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                <pre className="text-emerald-400 text-sm whitespace-pre">{SNIPPETS[currentLang]}</pre>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Usage Stats */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Your Usage</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-white/50 mb-1">Requests Today</p>
                  <p className="text-[2rem] font-bold text-white">—</p>
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Requests This Month</p>
                  <p className="text-[2rem] font-bold text-white">—</p>
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Quota Remaining</p>
                  <p className="text-[2rem] font-bold text-white">—</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/50">Tier</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-[20px] font-semibold bg-emerald-500/[0.15] text-emerald-500">Free</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-white/50">Rate Limit</span>
                  <span className="text-sm font-medium">30/min</span>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Pricing</h2>
              <div className="space-y-3">
                {[
                  { name: "Free", reqs: "5,000 req/mo", price: "$0", highlight: true },
                  { name: "Pro", reqs: "100,000 req/mo", price: "$29", highlight: false },
                  { name: "Enterprise", reqs: "Unlimited", price: "Custom", highlight: false },
                ].map((tier) => (
                  <div key={tier.name} className={`flex items-center justify-between p-3 bg-white/5 rounded-lg ${tier.highlight ? "border border-emerald-500/20" : ""}`}>
                    <div>
                      <p className="font-medium">{tier.name}</p>
                      <p className="text-xs text-white/40">{tier.reqs}</p>
                    </div>
                    <span className={`text-lg font-bold ${tier.highlight ? "text-emerald-400" : "text-white"}`}>{tier.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

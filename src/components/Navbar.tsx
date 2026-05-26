"use client";

import { trackNavClick } from "@/lib/analytics";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-black/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" onClick={() => trackNavClick({ link: "/", location: "navbar" })}>
          <img src="/logo.svg" alt="Polyhistor" width="120" height="36" className="h-9 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/#features" onClick={() => trackNavClick({ link: "#features", location: "navbar" })} className="text-sm text-white/60 hover:text-white transition">Features</Link>
          <Link href="/demo" onClick={() => trackNavClick({ link: "/demo", location: "navbar" })} className="text-sm text-white/60 hover:text-white transition">Demo</Link>
          <Link href="/heatmap" onClick={() => trackNavClick({ link: "/heatmap", location: "navbar" })} className="text-sm text-white/60 hover:text-white transition">Heatmap</Link>
          <Link href="/pricing" onClick={() => trackNavClick({ link: "/pricing", location: "navbar" })} className="text-sm text-white/60 hover:text-white transition">Pricing</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/waitlist"
            onClick={() => trackNavClick({ link: "/waitlist", location: "navbar" })}
            className="bg-white text-black px-5 py-2 rounded-lg text-sm font-medium hover:bg-zinc-200 transition"
          >
            Join Waitlist
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-3">
            <Link href="/#features" onClick={() => { setIsOpen(false); trackNavClick({ link: "#features", location: "mobile_menu" }); }} className="block text-white/60 hover:text-white py-2">Features</Link>
            <Link href="/demo" onClick={() => { setIsOpen(false); trackNavClick({ link: "/demo", location: "mobile_menu" }); }} className="block text-white/60 hover:text-white py-2">Demo</Link>
            <Link href="/heatmap" onClick={() => { setIsOpen(false); trackNavClick({ link: "/heatmap", location: "mobile_menu" }); }} className="block text-white/60 hover:text-white py-2">Heatmap</Link>
            <Link href="/pricing" onClick={() => { setIsOpen(false); trackNavClick({ link: "/pricing", location: "mobile_menu" }); }} className="block text-white/60 hover:text-white py-2">Pricing</Link>
            <Link
              href="/waitlist"
              onClick={() => { setIsOpen(false); trackNavClick({ link: "/waitlist", location: "mobile_menu" }); }}
              className="block text-center bg-white text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-200"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

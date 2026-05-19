"use client";

import { trackNavClick } from "@/lib/analytics";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-3 text-white">Product</h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li><a href="/#features" onClick={() => trackNavClick({ link: "#features", location: "footer" })} className="hover:text-white transition">Features</a></li>
              <li><a href="/#pricing" onClick={() => trackNavClick({ link: "#pricing", location: "footer" })} className="hover:text-white transition">Pricing</a></li>
              <li><Link href="/demo" onClick={() => trackNavClick({ link: "/demo", location: "footer" })} className="hover:text-white transition">Demo</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition">Research Paper</a></li>
              <li><a href="#" className="hover:text-white transition">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition">Docker Hub</a></li>
              <li><a href="#" className="hover:text-white transition">Status Page</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="mailto:hello@dgix.io" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li><Link href="/privacy-policy" onClick={() => trackNavClick({ link: "/privacy-policy", location: "footer" })} className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" onClick={() => trackNavClick({ link: "/terms-of-service", location: "footer" })} className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/eula" onClick={() => trackNavClick({ link: "/eula", location: "footer" })} className="hover:text-white transition">EULA</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <div className="mb-4 md:mb-0">
            <img src="/logo.svg" alt="Polyhistor" className="h-7 w-auto" />
          </div>
          <p className="text-sm text-white/30">MIT Licensed. Built with care.</p>
        </div>
      </div>
    </footer>
  );
}

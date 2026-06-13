"use client";

import { trackNavClick } from "@/lib/analytics";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-semibold mb-3 text-white">Product</p>
            <ul className="space-y-2 text-sm text-white/40">
              <li><Link href="/#features" onClick={() => trackNavClick({ link: "#features", location: "footer" })} className="hover:text-white transition">Features</Link></li>
              <li><Link href="/heatmap" onClick={() => trackNavClick({ link: "/heatmap", location: "footer" })} className="hover:text-white transition">Heatmap</Link></li>
              <li><Link href="/waitlist" onClick={() => trackNavClick({ link: "/waitlist", location: "footer" })} className="hover:text-white transition">Waitlist</Link></li>
              <li><Link href="/pricing" onClick={() => trackNavClick({ link: "/pricing", location: "footer" })} className="hover:text-white transition">Pricing</Link></li>
              <li><Link href="/demo" onClick={() => trackNavClick({ link: "/demo", location: "footer" })} className="hover:text-white transition">Demo</Link></li>
            </ul>
          </div>
          {/* <div>
            <p className="font-semibold mb-3 text-white">Resources</p>
            <ul className="space-y-2 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition">Research Paper</a></li>
              <li><a href="#" className="hover:text-white transition">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition">Docker Hub</a></li>
              <li><a href="#" className="hover:text-white transition">Status Page</a></li>
            </ul>
          </div> */}
          <div className="md:flex md:justify-center">
            <div>
              <p className="font-semibold mb-3 text-white">Company</p>
              <ul className="space-y-2 text-sm text-white/40">
                {/* <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li> */}
                <li><a href="mailto:naveengali@thepolyhistor.com" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="md:flex md:justify-end">
            <div>
              <p className="font-semibold mb-3 text-white">Legal</p>
              <ul className="space-y-2 text-sm text-white/40">
                <li><Link href="/privacy-policy" onClick={() => trackNavClick({ link: "/privacy-policy", location: "footer" })} className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" onClick={() => trackNavClick({ link: "/terms-of-service", location: "footer" })} className="hover:text-white transition">Terms of Service</Link></li>
                <li><Link href="/eula" onClick={() => trackNavClick({ link: "/eula", location: "footer" })} className="hover:text-white transition">EULA</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <div className="mb-4 md:mb-0">
            <img src="/logo.svg" alt="Polyhistor" width="100" height="28" className="h-7 w-auto" />
          </div>
          <p className="text-sm text-white/30">MIT Licensed. Built with care.</p>
        </div>
      </div>
    </footer>
  );
}

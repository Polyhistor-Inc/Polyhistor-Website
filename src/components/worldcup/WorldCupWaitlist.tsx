"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/**
 * World Cup Waitlist Email Capture Component
 * 
 * Features:
 * - Email capture with validation
 * - Referral code generation
 * - Success/error states
 * - PostHog analytics tracking
 * - Gamification messaging
 */

export default function WorldCupWaitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [waitlistPosition, setWaitlistPosition] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("/api/worldcup/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email, 
          source: "worldcup-page",
          utm_source: getUTMParameter("utm_source"),
          utm_medium: getUTMParameter("utm_medium"),
          utm_campaign: getUTMParameter("utm_campaign"),
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setStatus("success");
        setReferralCode(data.referralCode);
        setWaitlistPosition(data.position);
        
        // Track with PostHog
        if (typeof window !== "undefined" && (window as any).posthog) {
          (window as any).posthog.capture("worldcup_waitlist_signup", {
            email,
            referralCode: data.referralCode,
            position: data.position,
            source: "worldcup-page",
          });
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const getUTMParameter = (param: string): string | null => {
    if (typeof window === "undefined") return null;
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  const copyReferralLink = () => {
    if (referralCode) {
      const link = `${typeof window !== "undefined" ? window.location.origin : "https://thepolyhistor.com"}/worldcup?ref=${referralCode}`;
      navigator.clipboard.writeText(link);
      
      // Track copy event
      if (typeof window !== "undefined" && (window as any).posthog) {
        (window as any).posthog.capture("worldcup_referral_link_copied", {
          referralCode,
        });
      }
    }
  };

  if (status === "success") {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-br from-fifa-blue to-fifa-blue/80 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-fifa-gold/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fifa-red/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="text-6xl mb-6"
          >
            🎉
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
            You&apos;re on the list!
          </h2>
          
          <p className="text-lg text-white/90 mb-8">
            Welcome to the World Cup Fan Pack waitlist. You&apos;re spot #{waitlistPosition} out of {5000 + (waitlistPosition || 0)} fans!
          </p>

          {/* Referral Program */}
          {/* <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              🏆 Want to move up the list?
            </h3>
            <p className="text-white/90 mb-6">
              Invite friends and earn rewards:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">🥉</div>
                <div className="text-white font-bold text-sm">3 Referrals</div>
                <div className="text-white/70 text-xs mt-1">Jump to TOP 10%</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">🥈</div>
                <div className="text-white font-bold text-sm">5 Referrals</div>
                <div className="text-white/70 text-xs mt-1">LIFETIME PREMIUM FREE</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl mb-2">🥇</div>
                <div className="text-white font-bold text-sm">10 Referrals</div>
                <div className="text-white/70 text-xs mt-1">Pioneer Badge + 5K coins</div>
              </div>
            </div>

            <div className="bg-white/20 rounded-xl p-4 mb-4">
              <div className="text-white/80 text-sm mb-2">Your referral link:</div>
              <div className="flex flex-col sm:flex-row gap-2">
                <code className="flex-1 bg-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm break-all">
                  {typeof window !== "undefined" ? window.location.origin : "https://thepolyhistor.com"}/worldcup?ref={referralCode}
                </code>
                <button
                  onClick={copyReferralLink}
                  className="px-6 py-3 bg-fifa-gold text-fifa-blue font-bold rounded-lg hover:bg-fifa-gold/90 transition-colors whitespace-nowrap"
                >
                  Copy Link
                </button>
              </div>
            </div>

            <p className="text-white/70 text-sm">
              Each friend who signs up earns you 1,000 coins (worth $10)!
            </p>
          </div> */}

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* <a
              href="https://tiktok.com/@thepolyhistor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold hover:bg-white/20 transition-colors"
            >
              Follow on TikTok
            </a> */}
            <a
              href="https://instagram.com/polyhistorapp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold hover:bg-white/20 transition-colors"
            >
              Follow on Instagram
            </a>
            <a
              href="https://x.com/polyhistor_app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white font-semibold hover:bg-white/20 transition-colors"
            >
              Follow on Twitter
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-fifa-blue to-fifa-blue/80 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-fifa-gold/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fifa-red/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
            Get Early Access to the World Cup Fan Pack
          </h2>
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Stay Tuned! Be the first to know when we launch. Plus, get exclusive World Cup travel tips in our newsletter.
          </p>

          {/* Social Proof */}
          {/* <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-fifa-gold to-fifa-gold/70 border-2 border-white flex items-center justify-center text-white font-bold text-xs"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-white/80 text-sm">
              <span className="font-bold text-white">5,047</span> fans joined
            </div>
          </div> */}

          {/* Email Form */}
          {/* <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-4 rounded-xl border-0 focus:ring-2 focus:ring-fifa-gold text-gray-900 placeholder-gray-500"
              required
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-4 bg-fifa-gold text-fifa-blue font-bold rounded-xl hover:bg-fifa-gold/90 transition-colors disabled:opacity-50 whitespace-nowrap shadow-lg hover:shadow-xl"
            >
              {status === "loading" ? "Joining..." : "Join Waitlist"}
            </button>
          </form> */}

          {/* Incentives */}
          <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm mb-8">
            <div className="flex items-center gap-2">
              <span className="text-fifa-gold">✓</span>
              <span>Early access 48hrs before launch</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-fifa-gold">✓</span>
              <span>$6.99 early bird pricing (reg. $9.99)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-fifa-gold">✓</span>
              <span>1,000 bonus coins for first 100</span>
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-white/60 text-sm">
            No spam. Unsubscribe anytime. See our{" "}
            <a href="/privacy" className="text-white underline hover:text-white/80">
              Privacy Policy
            </a>
            .
          </p>
        </motion.div>

        {/* Error State */}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-red-500/20 border border-red-500/50 rounded-xl p-4 text-white"
          >
            Something went wrong. Please try again or email us at hello@polyhistor.app
          </motion.div>
        )}
      </div>
    </section>
  );
}

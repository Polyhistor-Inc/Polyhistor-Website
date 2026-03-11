"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Building2, Shield } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function TrojanHorseSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-50 via-slate-100 to-white relative overflow-hidden"
    >
      {/* Background gradient shift */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-coral/[0.03] via-transparent to-brand-blue/[0.05]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Bridge Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Consumer */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-brand-coral/10 to-notification-orange/10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white mb-6">
                  <Shield className="w-5 h-5 text-brand-coral" />
                  <span className="text-sm font-semibold text-slate-700">
                    For Travelers
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Fun, Social & Free
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Track friends, split bills, find meet-up spots. Everything
                  you need for stress-free group travel.
                </p>
              </div>

              {/* Right Side - Enterprise */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-brand-blue/10 to-viral-purple/10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white mb-6">
                  <Building2 className="w-5 h-5 text-brand-blue" />
                  <span className="text-sm font-semibold text-slate-700">
                    For Agencies
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Safety & Compliance
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Real-time visibility, liability protection, FERPA compliance.
                  Peace of mind for every trip.
                </p>
              </div>
            </div>

            {/* Center Bridge */}
            <div className="relative py-12 px-8 md:px-12 bg-gradient-to-r from-brand-coral/5 via-white to-brand-blue/5 text-center border-t border-slate-200">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                  Organizing a Trip?
                </h2>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                  The same tech that connects friends is trusted by top agencies to keep groups safe.
                </p>

                <Link
                  href="/enterprise"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue to-viral-purple text-white font-bold hover:shadow-2xl hover:scale-105 transition-all duration-200"
                >
                  See Enterprise Solutions
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

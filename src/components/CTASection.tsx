"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import HashtagAnimation from "@/components/HashtagAnimation";

export default function CTASection({
  onJoinWaitlistClick,
}: {
  onJoinWaitlistClick: () => void;
}) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-brand-blue rounded-[3rem] overflow-hidden shadow-2xl relative">
          {/* Abstract Gradient Background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-coral rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-full h-full bg-blue-400 rounded-full blur-3xl transform -translate-y-1/2"></div>
          </div>

          <div className="relative z-10 py-20 px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for the <span className="text-fifa-gold">World Cup</span>?
              </h2>
              <p className="text-lg text-blue-100 max-w-xl mx-auto mb-10">
                Download Polyhistor now and get the Fan Pack when we launch. Don't miss out!
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <a
                  href="https://apps.apple.com/us/app/polyhistor/id6759064328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-blue text-lg font-bold rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-xs">Download on the</span>
                    <span className="text-lg">App Store</span>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.thepolyhistor.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-blue text-lg font-bold rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-xs">GET IT ON</span>
                    <span className="text-lg">Google Play</span>
                  </div>
                </a>
              </div>

              {/* Social Proof */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm text-blue-200"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                  Join 100+ travelers already exploring stress-free
                </span>
              </motion.p>

              {/* Hashtag Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-12"
              >
                <HashtagAnimation variant="homepage" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

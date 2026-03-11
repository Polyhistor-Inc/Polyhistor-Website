"use client";

import { animate, motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TrustBadge from "./TrustBadge";

function CountUp({ to, suffix = "", inView }: { to: number; suffix?: string; inView: boolean }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView) return;
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = Math.round(value).toString() + suffix;
      },
    });

    return () => controls.stop();
  }, [to, suffix, inView]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

const testimonials = [
  {
    text: "This app literally saved our Spring Break trip! No more awkward venmo requests. 🙌",
    author: "Adithya",
    platform: "App Store",
    color: "bg-blue-50 border-blue-200",
  },
  {
    text: "Finally, an app that actually splits group expenses seamlessly.",
    author: "Ajay Ippala",
    platform: "Google Play",
    color: "bg-pink-50 border-pink-200",
  },
  {
    text: "This was a game changer for our study abroad group. We never lost each other once 💯",
    author: "Josh",
    platform: "Instagram",
    color: "bg-purple-50 border-purple-200",
  },
  {
    text: "The middle point feature is GENIUS. Found the perfect cafe in seconds.",
    author: "Bhavya",
    platform: "App Store",
    color: "bg-green-50 border-green-200",
  },
  {
    text: "Our group loved using this for our summer trip. Made everything stress-free.",
    author: "Jon",
    platform: "Linkedin",
    color: "bg-orange-50 border-orange-200",
  },
  {
    text: "Just hit 15 countries using this with my friends. Absolutely essential!",
    author: "Vamsi Maguluri",
    platform: "Google Play",
    color: "bg-red-50 border-red-200",
  },
];

export default function SocialProofSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-coral/10 text-brand-coral font-bold tracking-wide uppercase text-sm mb-4">
            Travel Tested
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-viral-purple">
              100+ Active Travelers.
            </span>{" "}
            2 Pilot Programs in talks.
          </h2>
          <div className="flex items-center justify-center gap-2 text-notification-orange">
            <Sparkles className="w-6 h-6 fill-current" />
            <span className="text-lg font-semibold text-slate-700">
              Used by Gen Z across the globe
            </span>
          </div>
        </motion.div>

        {/* Wall of Excitement - Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.15 }}
              className={`
                ${testimonial.color} 
                bg-white/60 
                backdrop-blur-md 
                border-2 
                rounded-2xl 
                p-6 
                shadow-glass 
                hover:shadow-glass-lg 
                transition-all 
                duration-300
                hover:scale-[1.02]
              `}
            >
              {/* Quote */}
              <p className="text-slate-800 font-medium text-lg mb-4">
                "{testimonial.text}"
              </p>

              {/* Author with Trust Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-semibold text-slate-700">
                        {testimonial.author}
                      </p>
                      <TrustBadge size="sm" />
                    </div>
                    <p className="text-xs text-slate-500">
                      via {testimonial.platform}
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-viral-red to-viral-purple" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: 100, suffix: "+", label: "Active Travelers" },
            { number: 2, suffix: "", label: "Pilot Programs in talks" },
            { number: 15, suffix: "+", label: "Countries Explored" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-md border border-slate-100"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-coral mb-2">
                <CountUp to={stat.number} suffix={stat.suffix} inView={isInView} />
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

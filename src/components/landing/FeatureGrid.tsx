"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  iconBg?: string;
  icon: React.ReactNode;
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 30,
        delay: index * 0.05 
      }}
      data-track-id={feature.title} 
      data-track-type="feature" 
      className={`relative overflow-hidden bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 h-full flex flex-col group ${index === 0 ? "md:col-span-2" : index === 5 ? "lg:col-span-3" : "md:col-span-1"}`}
    >
      {/* Subtle Spotlight overlay */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10 ${feature.iconBg || "bg-white/5"}`}>
          {feature.icon}
        </div>
        <h3 className="text-xl font-medium mb-3 text-white tracking-tight">{feature.title}</h3>
        <p className="text-base text-zinc-400 leading-relaxed font-light">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Five Intelligence Layers</h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">No other geospatial API combines semantic, temporal, and social dimensions in a single request.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

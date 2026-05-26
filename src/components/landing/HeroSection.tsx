"use client";

import TrackedLink from "@/components/TrackedLink";
import LiveStats from "@/components/LiveStats";
import AnimatedBackground from "./AnimatedBackground";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 30,
    } 
  },
};

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center justify-center">
      <AnimatedBackground />
      
      <motion.div 
        className="max-w-5xl mx-auto text-center relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-sm font-medium text-white/80 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            <span>Polyhistor V1.0 is live with 2000 + Api calls in last 3 days</span>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 leading-[1.1] text-white">
          Location Intelligence<br />
          <span className="text-zinc-400">
            for AI Agents
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed font-normal tracking-tight">
          <strong className="text-white font-medium">Polyhistor</strong> is a contextual search engine that understands <span className="text-white">where</span>, <span className="text-white">when</span>, and <span className="text-white">what</span> —
          not just coordinates. Built for AI agents that need real-world context.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <TrackedLink href="/demo" label="Try the Demo" location="hero" className="relative bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-zinc-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)] duration-300 w-full sm:w-auto text-center">
            Try the Demo
          </TrackedLink>
          <TrackedLink href="/waitlist" label="Join the Waitlist" location="hero" className="px-8 py-4 rounded-full font-medium text-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-colors text-white w-full sm:w-auto text-center">
            Join the Waitlist
          </TrackedLink>
        </motion.div>

        <motion.div variants={itemVariants}>
          <LiveStats />
        </motion.div>
      </motion.div>
    </section>
  );
}

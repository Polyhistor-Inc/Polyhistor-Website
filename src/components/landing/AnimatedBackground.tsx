"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
      {/* Subtle top spotlight */}
      <div 
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-40"
        style={{
          background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      
      {/* Clean elegant grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 10%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 10%, transparent 80%)",
        }}
      />

      {/* Very faint ambient animation to keep it alive but not distracting */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full mix-blend-screen opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(102, 126, 234, 0.05) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}

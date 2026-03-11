"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const chaosProblems = [
  {
    image: "/whatsapp-chaos.png",
    title: "\"Where are u??\"",
    description: "Endless texts trying to find each other in a new city.",
  },
  {
    image: "/messy-spreadsheet.png",
    title: "Who Paid What?",
    description: "Spreadsheet nightmares and awkward money conversations.",
  },
  {
    emoji: "😰",
    title: "Lost & Alone",
    description: "That sinking feeling when your phone dies and you're separated.",
    color: "bg-gradient-to-br from-red-50 to-orange-50",
  },
];

export default function ChaosSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 font-bold tracking-wide uppercase text-sm mb-4">
            The Problem
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Group Travel is Usually a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Nightmare.
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            We've all been there. The chaos, the confusion, the drama.
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {chaosProblems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateZ: index % 2 === 0 ? -5 : 5, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, rotateZ: 0, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image or Emoji Background */}
              {item.image ? (
                <div className="relative w-full h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  className={`w-full h-64 flex items-center justify-center ${item.color}`}
                >
                  <div className="text-8xl">{item.emoji}</div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition to Solution */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-brand-coral/10 to-brand-blue/10 rounded-full border border-brand-coral/20">
            <span className="text-lg font-semibold text-slate-700">
              But it doesn't have to be this way
            </span>
            <span className="text-2xl">👇</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

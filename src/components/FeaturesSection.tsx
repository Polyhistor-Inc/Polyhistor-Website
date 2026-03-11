"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { MapPin, Receipt, Users } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const features = [
  {
    id: "friend-map",
    icon: Users,
    title: "The \"Squad Map\"",
    subtitle: "Never lose track of your crew",
    description:
      "See who's awake, who's nearby, and who needs a ride. Real-time location, battery levels, and status updates keep everyone connected.",
    visual: "/friend-map-mockup.png",
    gradient: "from-brand-blue to-viral-purple",
  },
  {
    id: "expense-splitting",
    icon: Receipt,
    title: "Social Spending",
    subtitle: "No more awkward money talks",
    description:
      "Settle up in seconds. Split Ubers, dinners, and drinks without the awkward math. Scan receipts and split instantly.",
    visual: "/split-bill-mockup.png",
    gradient: "from-notification-orange to-brand-coral",
    hasScanner: true,
  },
  {
    id: "itinerary-voting",
    icon: MapPin,
    title: "The \"Middle Point\" Engine",
    subtitle: "AI finds the perfect meeting spot",
    description:
      "Can't decide where to meet? Select 3 friends, and our AI finds the perfect cafe exactly in the middle. No more endless group chats.",
    visual: "/meet-middle-mockup.png",
    gradient: "from-brand-coral to-viral-purple",
    hasAnimation: true,
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      id={feature.id}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center py-16 ${!isEven ? "md:flex-row-reverse" : ""
        }`}
    >
      {/* Text Content */}
      <div className={`space-y-6 ${!isEven ? "md:order-2" : ""}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100">
          <feature.icon className="w-5 h-5 text-brand-coral" />
          <span className="text-sm font-semibold text-slate-700">
            Feature {index + 1}
          </span>
        </div>

        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          {feature.title}
        </h3>

        <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}">
          {feature.subtitle}
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Visual */}
      <div className={`relative ${!isEven ? "md:order-1" : ""}`}>
        <div
          className={`absolute -inset-4 bg-gradient-to-r ${feature.gradient} rounded-[3rem] blur-2xl opacity-20`}
        />
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05, rotate: isEven ? 2 : -2 }}
          transition={{ duration: 0.3 }}
        >
          {feature.hasAnimation && (
            <ConvergenceAnimation />
          )}
          {feature.hasScanner && (
            <div className="absolute inset-0 z-20 pointer-events-none rounded-[2.5rem] overflow-hidden">
                <motion.div
                  animate={{ y: ["-10%", "110%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                  className="w-full h-8 bg-gradient-to-b from-transparent via-green-400/30 to-green-500/50 border-b border-green-400 blur-[2px]"
                />
            </div>
          )}
          <div className="relative w-full max-w-[320px] mx-auto aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
              src={feature.visual}
              alt={feature.title}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Convergence Animation for "Meet in the Middle"
function ConvergenceAnimation() {
  const svgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: svgRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      viewBox="0 0 320 640"
    >
      {/* Three animated paths converging to center */}
      {[
        "M 50 100 Q 160 200, 160 320",
        "M 270 100 Q 160 200, 160 320",
        "M 160 500 Q 160 400, 160 320",
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="#FF2D55"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      ))}
      {/* Pulsing center point */}
      <motion.circle
        cx="160"
        cy="320"
        r="10"
        fill="#FF2D55"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.svg>
  );
}

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-coral/10 text-brand-coral font-bold tracking-wide uppercase text-sm mb-4">
            The Solution
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Everything You Need.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-viral-purple">
              Nothing You Don't.
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            Three powerful features that make group travel feel effortless.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="space-y-12 md:space-y-24">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

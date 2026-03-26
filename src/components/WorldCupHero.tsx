"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import AppStoreBadges from "./AppStoreBadges";
import ComingSoonCountdown from "./ComingSoonCountdown";

export default function WorldCupHero() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100/50 flex flex-col items-center justify-center pt-20 pb-10">
            {/* Floating background elements - subtle FIFA colors */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-fifa-blue/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-fifa-gold/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-fifa-red/5 rounded-full blur-3xl animate-blob animation-delay-4000" />

            {/* Stadium pattern overlay - very subtle */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        #0033A0 2px,
                        #0033A0 4px
                    )`,
                    backgroundSize: '100% 4px'
                }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* World Cup Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-fifa-blue/10 border border-fifa-blue/20 backdrop-blur-md mb-8"
                >
                    <Trophy className="w-5 h-5 text-fifa-blue" />
                    <span className="text-sm font-bold text-fifa-blue uppercase tracking-wider">
                        FIFA World Cup 2026
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 font-montserrat"
                >
                    Don&apos;t Lose Your{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fifa-blue via-fifa-red to-fifa-blue">
                        Squad
                    </span>{" "}
                    at the World Cup
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-4 max-w-3xl mx-auto text-xl md:text-2xl text-gray-600 leading-relaxed"
                >
                    The all-in-one app for stadium navigation, expense splitting, and squad coordination. Your ultimate World Cup companion.
                </motion.p>

                {/* Countdown Timer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 mb-12"
                >
                    <ComingSoonCountdown />
                </motion.div>

                {/* App Store Badges - Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 flex justify-center"
                >
                    <AppStoreBadges />
                </motion.div>

                {/* Social Proof */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fifa-blue/5 backdrop-blur-md border border-fifa-blue/10"
                >
                    <span className="flex h-2 w-2 rounded-full bg-fifa-gold mr-2 animate-pulse" />
                    <span className="text-sm font-medium text-gray-600">
                        Join 5,000+ fans getting ready for the World Cup
                    </span>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-2 text-gray-400"
                    >
                        <span className="text-xs uppercase tracking-wider">Discover More</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

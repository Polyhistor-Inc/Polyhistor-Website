"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";

export default function WorldCupBanner() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-r from-fifa-blue via-fifa-blue/90 to-fifa-blue/80 border-b border-fifa-gold/30 overflow-hidden"
        >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 10px,
                        #D4AF37 10px,
                        #D4AF37 20px
                    )`,
                }} />
            </div>

            {/* Glow effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-fifa-gold/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fifa-red/20 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left side - Message */}
                    <Link href="/worldcup" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
                        <div className="flex items-center gap-2">
                            <Trophy className="w-6 h-6 text-fifa-gold animate-pulse" />
                            <span className="text-sm md:text-base font-bold text-fifa-white uppercase tracking-wider">
                                FIFA World Cup 2026
                            </span>
                        </div>
                        <div className="hidden sm:block w-px h-6 bg-fifa-white/30" />
                        <p className="text-sm md:text-base text-fifa-white/90">
                            <span className="font-semibold text-fifa-gold">New:</span> World Cup Fan Pack coming soon!
                        </p>
                    </Link>

                    {/* Right side - CTA */}
                    <Link
                        href="/worldcup"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-fifa-gold hover:bg-fifa-gold/90 text-fifa-blue font-bold rounded-full transition-all group whitespace-nowrap shadow-lg hover:shadow-xl"
                    >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Top border glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fifa-gold to-transparent" />
        </motion.div>
    );
}

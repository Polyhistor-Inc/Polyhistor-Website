"use client";

import { motion } from "framer-motion";
import { Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WorldCupHomepageBanner() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden sm:block relative bg-gradient-to-r from-fifa-blue via-fifa-blue/95 to-fifa-blue border-b border-fifa-gold/30 overflow-hidden"
        >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    style={{
                        backgroundImage: `repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 10px,
                            #D4AF37 10px,
                            #D4AF37 20px
                        )`,
                    }}
                    className="w-full h-full"
                />
            </div>

            {/* Glow Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-fifa-gold/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fifa-red/20 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex items-center justify-between gap-4">
                    {/* Left Side - World Cup Message */}
                    <Link href="/worldcup" className="flex items-center gap-3 group">
                        <Trophy className="w-5 h-5 text-fifa-gold flex-shrink-0" />
                        <div>
                            <p className="text-xs font-bold text-fifa-white uppercase tracking-wider whitespace-nowrap">
                                FIFA World Cup 2026
                            </p>
                            <p className="text-xs text-fifa-white/90 leading-tight">
                                <span className="font-semibold text-fifa-gold">New:</span> Fan Pack coming soon!
                            </p>
                        </div>
                    </Link>

                    {/* Right Side - CTA */}
                    <Link
                        href="/worldcup"
                        className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-fifa-gold to-yellow-500 hover:from-fifa-gold/90 hover:to-yellow-500/90 text-fifa-blue font-bold rounded-full transition-all group shadow-lg hover:shadow-xl whitespace-nowrap text-sm flex-shrink-0"
                    >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Top Border Glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fifa-gold to-transparent" />

            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-fifa-blue via-fifa-gold/50 to-fifa-blue" />
        </motion.div>
    );
}

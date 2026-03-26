"use client";

import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";

export default function SquadSizeVisualizer() {
    return (
        <div className="relative p-6 md:p-8 bg-gradient-to-br from-fifa-blue/5 via-white to-fifa-gold/5 rounded-3xl border border-gray-200">
            {/* Header */}
            <div className="text-center mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Group Expansion</h4>
                <p className="text-sm text-gray-600">Bring the entire fan club</p>
            </div>

            {/* Before/After Comparison */}
            <div className="flex items-center justify-center gap-4 md:gap-8 mb-8">
                {/* Before: 8 users */}
                <div className="text-center">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-full flex items-center justify-center mb-3 mx-auto">
                        <Users className="w-10 h-10 md:w-12 md:h-12 text-gray-400" />
                    </div>
                    <span className="text-4xl md:text-5xl font-bold text-gray-400">8</span>
                    <p className="text-xs text-gray-500 mt-1">Original Limit</p>
                </div>

                {/* Arrow */}
                <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ArrowRight className="w-8 h-8 text-fifa-gold" />
                </motion.div>

                {/* After: 50 users */}
                <div className="text-center">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-fifa-gold to-yellow-500 rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg">
                        <Users className="w-10 h-10 md:w-12 md:h-12 text-white" />
                        {/* Glow effect */}
                        <div className="absolute -inset-2 bg-fifa-gold/30 rounded-full blur-md animate-pulse" />
                    </div>
                    <span className="text-4xl md:text-5xl font-bold text-fifa-gold">50</span>
                    <p className="text-xs text-gray-500 mt-1">New Limit</p>
                </div>
            </div>

            {/* User Grid Visualization */}
            <div className="grid grid-cols-10 gap-1 md:gap-2 max-w-lg mx-auto">
                {Array.from({ length: 50 }).map((_, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.02,
                            duration: 0.3,
                        }}
                        className={`aspect-square rounded-full ${
                            index < 8
                                ? "bg-gray-300"
                                : "bg-gradient-to-br from-fifa-gold to-yellow-500"
                        }`}
                        title={`User ${index + 1}`}
                    />
                ))}
            </div>

            {/* Stats */}
            <div className="mt-6 flex items-center justify-center gap-6 text-center">
                <div>
                    <p className="text-2xl md:text-3xl font-bold text-fifa-blue">6x</p>
                    <p className="text-xs text-gray-600">Larger Groups</p>
                </div>
                <div className="w-px h-10 bg-gray-300" />
                <div>
                    <p className="text-2xl md:text-3xl font-bold text-fifa-blue">50</p>
                    <p className="text-xs text-gray-600">Max Members</p>
                </div>
                <div className="w-px h-10 bg-gray-300" />
                <div>
                    <p className="text-2xl md:text-3xl font-bold text-fifa-blue">100%</p>
                    <p className="text-xs text-gray-600">Connected</p>
                </div>
            </div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { Check, X, Sparkles, Clock } from "lucide-react";

const basicFeatures = [
    { name: "Stadium Map Markers", included: true },
    { name: "Team Color Themes", included: true },
    { name: "Group Expansion (50)", included: true },
    { name: "Match Countdown Widget", included: true },
    { name: "Offline Map Downloads", included: false },
    { name: "Expense Calculator", included: false },
    { name: "Referral Rewards", included: false },
];

const premiumFeatures = [
    { name: "Stadium Map Markers", included: true },
    { name: "Team Color Themes", included: true },
    { name: "Group Expansion (50)", included: true },
    { name: "Match Countdown Widget", included: true },
    { name: "Offline Map Downloads", included: true },
    { name: "Expense Calculator", included: true },
    { name: "Referral Rewards", included: true },
];

export default function PricingTierCards() {
    return (
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Basic Tier */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative p-6 md:p-8 bg-white rounded-3xl shadow-xl border-2 border-fifa-red overflow-hidden"
            >
                {/* Coming Soon Badge */}
                <div className="absolute top-0 right-0 px-6 py-3 bg-gradient-to-r from-fifa-blue to-blue-600 text-white font-bold text-sm rounded-bl-2xl flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    COMING SOON
                </div>

                {/* Header */}
                <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Basic Fan Pack
                    </h3>
                    <p className="text-gray-600">Essential features for the World Cup</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-5xl md:text-6xl font-bold text-fifa-red">$6.99</span>
                    <div className="flex flex-col">
                        <span className="text-lg text-gray-400 line-through">$9.99</span>
                        <span className="text-sm text-green-600 font-semibold">Save 30%</span>
                    </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                    {basicFeatures.map((feature) => (
                        <li key={feature.name} className="flex items-center gap-3">
                            {feature.included ? (
                                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                            ) : (
                                <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                            )}
                            <span
                                className={
                                    feature.included
                                        ? "text-gray-700"
                                        : "text-gray-400 line-through"
                                }
                            >
                                {feature.name}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* CTA Button - Coming Soon */}
                <button disabled className="w-full py-4 bg-gray-300 text-gray-500 rounded-full font-bold cursor-not-allowed flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5" />
                    Coming Soon
                </button>

                {/* Notify Me Link */}
                <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                        Get notified when available →
                    </p>
                </div>
            </motion.div>

            {/* Premium Tier */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative p-6 md:p-8 bg-gradient-to-br from-fifa-gold via-yellow-500 to-yellow-600 rounded-3xl shadow-xl overflow-hidden"
            >
                {/* Best Value Badge */}
                <div className="absolute top-0 right-0 px-6 py-3 bg-white text-fifa-gold font-bold text-sm rounded-bl-2xl flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    BEST VALUE
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-fifa-gold to-yellow-300 rounded-3xl blur opacity-30" />

                {/* Header */}
                <div className="relative mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Premium Fan Pack
                    </h3>
                    <p className="text-white/80">Complete World Cup experience</p>
                </div>

                {/* Price */}
                <div className="relative flex items-baseline gap-3 mb-6">
                    <span className="text-5xl md:text-6xl font-bold text-white">$9.99</span>
                    <div className="flex flex-col">
                        <span className="text-lg text-white/70 line-through">$14.99</span>
                        <span className="text-sm text-white font-semibold">Save 33%</span>
                    </div>
                </div>

                {/* Features List */}
                <ul className="relative space-y-3 mb-8">
                    {premiumFeatures.map((feature) => (
                        <li key={feature.name} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-white flex-shrink-0" />
                            <span className="text-white font-medium">{feature.name}</span>
                        </li>
                    ))}
                </ul>

                {/* CTA Button - Coming Soon */}
                <button disabled className="relative w-full py-4 bg-white/90 text-gray-500 rounded-full font-bold cursor-not-allowed flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5" />
                    Coming Soon
                </button>

                {/* Premium Highlight */}
                <div className="relative mt-4 text-center">
                    <p className="text-xs text-white/80">
                        🔥 Most popular choice for World Cup travelers
                    </p>
                    <p className="text-xs text-white/60 mt-2">
                        Get notified when available
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

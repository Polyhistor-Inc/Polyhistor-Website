"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trophy, Users, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";

export default function WorldCupSection() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-fifa-blue via-blue-900 to-fifa-blue relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-72 h-72 bg-fifa-gold rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-fifa-red rounded-full blur-3xl" />
            </div>

            {/* Stadium Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    style={{
                        backgroundImage: `radial-gradient(circle, #FFFFFF 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }}
                    className="w-full h-full"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    {/* Trophy Badge */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-fifa-gold/20 border border-fifa-gold/40 backdrop-blur-md mb-6">
                        <Trophy className="w-6 h-6 text-fifa-gold" />
                        <span className="text-sm font-bold text-fifa-gold uppercase tracking-wider">
                            FIFA World Cup 2026
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-montserrat">
                        Don't Lose Your{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fifa-gold via-fifa-red to-fifa-gold">
                            Squad
                        </span>{" "}
                        at the World Cup
                    </h2>

                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                        Get the exclusive Fan Pack with 19 powerful features for stadium navigation, 
                        expense splitting, and squad coordination.
                    </p>
                </motion.div>

                {/* Feature Highlights Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                >
                    {[
                        {
                            icon: MapPin,
                            title: "Stadium Maps",
                            description: "Offline navigation for 8 host cities",
                            color: "from-fifa-red to-red-600",
                        },
                        {
                            icon: Users,
                            title: "Group of 50",
                            description: "Bring the entire fan club",
                            color: "from-fifa-gold to-yellow-500",
                        },
                        {
                            icon: Trophy,
                            title: "32 Team Themes",
                            description: "Rep your national team",
                            color: "from-fifa-blue to-blue-600",
                        },
                        {
                            icon: Sparkles,
                            title: "AI Meetups",
                            description: "Smart halftime coordination",
                            color: "from-viral-purple to-purple-600",
                        },
                    ].map((feature) => (
                        <div
                            key={feature.title}
                            className="group p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all hover:scale-105"
                        >
                            <div
                                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                            >
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-sm text-blue-100">{feature.description}</p>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <Link
                        href="/worldcup"
                        className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-fifa-gold to-yellow-500 hover:from-fifa-gold/90 hover:to-yellow-500/90 text-fifa-blue font-bold rounded-full transition-all shadow-2xl hover:shadow-fifa-gold hover:scale-105 group"
                    >
                        <span className="text-lg">Explore Fan Pack</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </Link>

                    <p className="mt-6 text-sm text-blue-200">
                        ✨ Early bird pricing: $6.99 Basic | $9.99 Premium
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

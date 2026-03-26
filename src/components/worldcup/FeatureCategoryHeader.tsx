"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCategoryHeaderProps {
    icon: ReactNode;
    title: string;
    description: string;
    categoryNumber: number;
}

export default function FeatureCategoryHeader({
    icon,
    title,
    description,
    categoryNumber,
}: FeatureCategoryHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
        >
            {/* Category Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-fifa-blue/10 border border-fifa-blue/20 backdrop-blur-md mb-6">
                <span className="text-2xl">{icon}</span>
                <span className="text-sm font-bold text-fifa-blue uppercase tracking-wider">
                    Category {categoryNumber}
                </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-montserrat">
                {title}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                {description}
            </p>
        </motion.div>
    );
}

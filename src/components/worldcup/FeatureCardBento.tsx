"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardBentoProps {
    icon: LucideIcon;
    title: string;
    description: string;
    size?: "small" | "medium" | "large" | "full";
    gradientFrom?: string;
    gradientTo?: string;
    badge?: string;
    children?: ReactNode;
    delay?: number;
}

export default function FeatureCardBento({
    icon: Icon,
    title,
    description,
    size = "medium",
    gradientFrom = "from-fifa-blue",
    gradientTo = "to-fifa-blue/80",
    badge,
    children,
    delay = 0,
}: FeatureCardBentoProps) {
    const sizeClasses = {
        small: "md:col-span-1",
        medium: "md:col-span-1",
        large: "md:col-span-2",
        full: "md:col-span-3",
    };

    const IconComponent = Icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`${sizeClasses[size]} group relative`}
        >
            {/* Glow effect on hover */}
            <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-300`}
            />

            {/* Card */}
            <div className="relative h-full bg-white backdrop-blur-md border border-gray-200 rounded-3xl p-6 md:p-8 hover:shadow-xl hover:border-gray-300 transition duration-300 overflow-hidden">
                {/* Badge */}
                {badge && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-fifa-gold/20 text-fifa-gold text-xs font-bold rounded-full">
                        {badge}
                    </div>
                )}

                {/* Icon */}
                <div
                    className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} mb-4 shadow-md`}
                >
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 font-montserrat">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

                {/* Children (interactive elements) */}
                {children && <div className="mt-4">{children}</div>}
            </div>
        </motion.div>
    );
}

"use client";

import { motion } from "framer-motion";
import { MapPin, Palette, Users, Map, Receipt, Timer } from "lucide-react";

const features = [
    {
        icon: MapPin,
        title: "Stadium Map Markers",
        description: "Navigate to matches with your squad. Find entry points, meet-up spots, and nearby amenities at all 8 host city stadiums.",
        accentColor: "text-fifa-blue",
        bgColor: "bg-fifa-blue",
        gradientFrom: "from-fifa-blue",
        gradientTo: "to-fifa-blue/80",
    },
    {
        icon: Palette,
        title: "Team Color Themes",
        description: "Rep your team with 32 national team color schemes. Customize your app UI with Brazil, Argentina, Germany, France, and more.",
        accentColor: "text-fifa-gold",
        bgColor: "bg-fifa-gold",
        gradientFrom: "from-fifa-gold",
        gradientTo: "to-fifa-gold/80",
    },
    {
        icon: Users,
        title: "Group Expansion",
        description: "Scale from 8 to 50 members. Bring the entire fan club - coordinate with your whole squad seamlessly.",
        accentColor: "text-fifa-red",
        bgColor: "bg-fifa-red",
        gradientFrom: "from-fifa-red",
        gradientTo: "to-fifa-red/80",
    },
    {
        icon: Map,
        title: "Offline Map Downloads",
        description: "No data roaming? No problem. Download host city maps and navigate without internet connection.",
        accentColor: "text-fifa-blue",
        bgColor: "bg-fifa-blue",
        gradientFrom: "from-fifa-blue",
        gradientTo: "to-fifa-blue/80",
    },
    {
        icon: Receipt,
        title: "Expense Calculator",
        description: "Split Airbnb and hotel costs by room, not equally. Upload receipts and allocate costs fairly among your squad.",
        accentColor: "text-fifa-gold",
        bgColor: "bg-fifa-gold",
        gradientFrom: "from-fifa-gold",
        gradientTo: "to-fifa-gold/80",
    },
    {
        icon: Timer,
        title: "Match Countdown Widget",
        description: "Know exactly when kickoff is. Add home screen widgets showing time until your team's next match.",
        accentColor: "text-fifa-red",
        bgColor: "bg-fifa-red",
        gradientFrom: "from-fifa-red",
        gradientTo: "to-fifa-red/80",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function FeaturePreview() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden">
            {/* Background decoration - subtle */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-fifa-blue/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-fifa-gold/5 rounded-full blur-3xl animation-delay-2000" />
                <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-fifa-red/5 rounded-full blur-3xl animation-delay-4000" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-montserrat">
                        Everything You Need for the <span className="text-fifa-blue">World Cup</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        6 powerful features to keep your squad connected, organized, and ready for the tournament.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative"
                        >
                            {/* Glow effect on hover - subtle */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300`} />

                            {/* Card - White background with subtle shadow */}
                            <div className="relative h-full bg-white backdrop-blur-md border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-gray-300 transition duration-300">
                                {/* Icon */}
                                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} mb-4 shadow-md`}>
                                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 font-montserrat">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

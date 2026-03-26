"use client";

import { motion } from "framer-motion";
import { MapPin, WifiOff, GraduationCap } from "lucide-react";

const stadiums = [
    { id: 1, name: "MetLife Stadium", city: "New York", x: 70, y: 30 },
    { id: 2, name: "SoFi Stadium", city: "Los Angeles", x: 15, y: 45 },
    { id: 3, name: "AT&T Stadium", city: "Dallas", x: 45, y: 60 },
    { id: 4, name: "Hard Rock Stadium", city: "Miami", x: 75, y: 80 },
    { id: 5, name: "Mercedes-Benz Stadium", city: "Atlanta", x: 65, y: 70 },
    { id: 6, name: "Lumen Field", city: "Seattle", x: 12, y: 20 },
    { id: 7, name: "NRG Stadium", city: "Houston", x: 50, y: 75 },
    { id: 8, name: "Levi's Stadium", city: "San Francisco", x: 10, y: 38 },
];

const practiceAreas = [
    { id: 1, name: "UCLA", city: "Los Angeles", x: 18, y: 48 },
    { id: 2, name: "UT Dallas", city: "Dallas", x: 48, y: 63 },
    { id: 3, name: "University of Miami", city: "Miami", x: 78, y: 83 },
];

export default function InteractiveStadiumMap({ showPracticeAreas = false }) {
    const data = showPracticeAreas ? practiceAreas : stadiums;
    const Icon = showPracticeAreas ? GraduationCap : MapPin;
    const title = showPracticeAreas ? "Practice Areas" : "Host Cities";

    return (
        <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50 rounded-2xl overflow-hidden shadow-inner border border-blue-300">
            {/* Background Pattern - Map Grid */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                            radial-gradient(circle, #0033A0 1px, transparent 1px),
                            linear-gradient(to right, #0033A0 1px, transparent 1px),
                            linear-gradient(to bottom, #0033A0 1px, transparent 1px)
                        `,
                        backgroundSize: "30px 30px, 100px 100px, 100px 100px",
                    }}
                />
            </div>

            {/* Faint continent outlines (simplified) */}
            <div className="absolute inset-0 opacity-5">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                    <ellipse cx="80" cy="100" rx="60" ry="80" fill="#0033A0" />
                    <ellipse cx="200" cy="150" rx="80" ry="100" fill="#0033A0" />
                    <ellipse cx="320" cy="120" rx="50" ry="70" fill="#0033A0" />
                </svg>
            </div>

            {/* Offline Badge */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-md">
                <WifiOff className="w-3 h-3 text-fifa-blue" />
                <span className="text-xs font-bold text-fifa-blue">Offline Mode</span>
            </div>

            {/* Map Title */}
            <div className="absolute top-3 right-3 z-20 px-3 py-1.5 bg-fifa-red/95 backdrop-blur-md rounded-full shadow-md">
                <span className="text-xs font-bold text-white">{title}</span>
            </div>

            {/* Animated Markers */}
            {data.map((location, index) => (
                <motion.div
                    key={location.id}
                    className="absolute z-10"
                    style={{
                        left: `${location.x}%`,
                        top: `${location.y}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        delay: index * 0.15,
                        duration: 0.4,
                    }}
                    whileHover={{ scale: 1.3, zIndex: 30 }}
                >
                    {/* Pulsing Effect */}
                    <motion.div
                        className="absolute -inset-3 bg-fifa-red/30 rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    />

                    {/* Marker */}
                    <div className="relative w-10 h-10 bg-gradient-to-br from-fifa-red to-red-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                        <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Tooltip */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity"
                    >
                        <p className="font-bold">{location.name}</p>
                        <p className="text-gray-300">{location.city}</p>
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900" />
                    </motion.div>
                </motion.div>
            ))}

            {/* Legend */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-4 py-2 bg-white/95 backdrop-blur-md rounded-full shadow-md">
                <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 bg-fifa-red rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-gray-600">
                        {showPracticeAreas ? "Practice" : "Stadiums"}
                    </span>
                </div>
                <div className="w-px h-3 bg-gray-300" />
                <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-2.5 h-2.5 text-fifa-gold" />
                    <span className="text-xs font-medium text-gray-600">Universities</span>
                </div>
                <div className="w-px h-3 bg-gray-300" />
                <div className="flex items-center gap-1.5">
                    <WifiOff className="w-2.5 h-2.5 text-gray-600" />
                    <span className="text-xs font-medium text-gray-600">Offline</span>
                </div>
            </div>
        </div>
    );
}

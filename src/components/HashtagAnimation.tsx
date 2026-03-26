"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// 32 World Cup team colors with country info
const teamColors = [
    { country: "Brazil", flag: "🇧🇷", primary: "#FFDF00", secondary: "#009C3B" },
    { country: "Argentina", flag: "🇦🇷", primary: "#75AADB", secondary: "#FFFFFF" },
    { country: "Germany", flag: "🇩🇪", primary: "#000000", secondary: "#FFCE00" },
    { country: "France", flag: "🇫🇷", primary: "#002395", secondary: "#ED2939" },
    { country: "Spain", flag: "🇪🇸", primary: "#AA151B", secondary: "#F1BF00" },
    { country: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", primary: "#FFFFFF", secondary: "#C8102E" },
    { country: "Portugal", flag: "🇵🇹", primary: "#FF0000", secondary: "#006600" },
    { country: "Netherlands", flag: "🇳🇱", primary: "#F36C21", secondary: "#FFFFFF" },
    { country: "Belgium", flag: "🇧🇪", primary: "#ED2939", secondary: "#FAE042" },
    { country: "Croatia", flag: "🇭🇷", primary: "#FF0000", secondary: "#FFFFFF" },
    { country: "Uruguay", flag: "🇺🇾", primary: "#0038A8", secondary: "#FFFFFF" },
    { country: "Mexico", flag: "🇲🇽", primary: "#006847", secondary: "#FFFFFF" },
    { country: "Japan", flag: "🇯🇵", primary: "#BC002D", secondary: "#FFFFFF" },
    { country: "South Korea", flag: "🇰🇷", primary: "#CD2E3A", secondary: "#FFFFFF" },
    { country: "USA", flag: "🇺🇸", primary: "#3C3B6E", secondary: "#BF0D3E" },
    { country: "Canada", flag: "🇨🇦", primary: "#FF0000", secondary: "#FFFFFF" },
    { country: "Morocco", flag: "🇲🇦", primary: "#C1272D", secondary: "#006233" },
    { country: "Senegal", flag: "🇸🇳", primary: "#00853F", secondary: "#FDEF42" },
    { country: "Poland", flag: "🇵🇱", primary: "#DC143C", secondary: "#FFFFFF" },
    { country: "Denmark", flag: "🇩🇰", primary: "#C8102E", secondary: "#FFFFFF" },
    { country: "Switzerland", flag: "🇨🇭", primary: "#FF0000", secondary: "#FFFFFF" },
    { country: "Serbia", flag: "🇷🇸", primary: "#C6363C", secondary: "#0C4076" },
    { country: "Cameroon", flag: "🇨🇲", primary: "#007A5E", secondary: "#CE1126" },
    { country: "Ghana", flag: "🇬🇭", primary: "#CE1126", secondary: "#FCD116" },
    { country: "Australia", flag: "🇦🇺", primary: "#FFD700", secondary: "#00843D" },
    { country: "Ecuador", flag: "🇪🇨", primary: "#FFD100", secondary: "#0033A0" },
    { country: "Qatar", flag: "🇶🇦", primary: "#8A1538", secondary: "#FFFFFF" },
    { country: "Saudi Arabia", flag: "🇸🇦", primary: "#165D31", secondary: "#FFFFFF" },
    { country: "Iran", flag: "🇮🇷", primary: "#DA0000", secondary: "#FFFFFF" },
    { country: "Tunisia", flag: "🇹🇳", primary: "#E70013", secondary: "#FFFFFF" },
    { country: "Wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", primary: "#C8102E", secondary: "#FFFFFF" },
    { country: "Costa Rica", flag: "🇨🇷", primary: "#002B7F", secondary: "#CE1126" },
];

const hashtagText = "#DontLoseYourSquad";

// Helper function to detect light colors
function isLightColor(hexColor: string): boolean {
    // Remove # if present
    const hex = hexColor.replace("#", "");
    
    // Convert to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Return true if luminance is greater than 0.5 (light color)
    return luminance > 0.5;
}

export default function HashtagAnimation({ variant = "worldcup" }: { variant?: "worldcup" | "homepage" }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Get all characters with their indices
    const letters = hashtagText.split("").map((char, index) => ({
        char,
        index,
        isLetter: /[a-zA-Z]/.test(char),
    }));

    return (
        <div className={`flex flex-wrap justify-center ${variant === "homepage" ? "scale-75 md:scale-100" : ""}`}>
            {letters.map(({ char, index, isLetter }) => {
                const teamIndex = index % teamColors.length;
                const team = teamColors[teamIndex];

                return (
                    <motion.span
                        key={index}
                        className="relative cursor-pointer inline-block"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                        whileHover={{
                            scale: 1.2,
                            y: -15,
                            zIndex: 50,
                        }}
                    >
                        {/* Character with team color */}
                        <span
                            className="text-3xl md:text-5xl font-black transition-all duration-300 block"
                            style={{
                                color: isLetter ? team.primary : "#9CA3AF",
                                // Add text shadow for light colors (white, light gray, etc.)
                                textShadow: hoveredIndex === index 
                                    ? `0 0 12px ${team.primary}80` 
                                    : isLightColor(team.primary)
                                        ? "0 0 2px rgba(0,0,0,0.5), 0 0 4px rgba(0,0,0,0.3)"
                                        : "none",
                            }}
                        >
                            {char}
                        </span>

                        {/* Tooltip on hover - only for letters */}
                        <AnimatePresence>
                            {hoveredIndex === index && isLetter && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                    animate={{ opacity: 1, y: -60, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                                >
                                    <div
                                        className="px-4 py-2.5 rounded-xl shadow-2xl backdrop-blur-md border border-white/30 whitespace-nowrap"
                                        style={{
                                            background: `linear-gradient(135deg, ${team.primary}, ${team.secondary})`,
                                        }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl">{team.flag}</span>
                                            <span className="text-xs font-bold text-white drop-shadow-md">
                                                {team.country}
                                            </span>
                                        </div>
                                        {/* Arrow */}
                                        <div
                                            className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent"
                                            style={{ borderTopColor: team.secondary }}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.span>
                );
            })}
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import { useState } from "react";

// 32 World Cup team colors
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

export default function TeamThemePreview() {
    const [selectedTeam, setSelectedTeam] = useState(0);
    const team = teamColors[selectedTeam];

    return (
        <div className="space-y-6">
            {/* Team Color Grid */}
            <div className="grid grid-cols-8 gap-2 md:gap-3">
                {teamColors.slice(0, 16).map((t, index) => (
                    <motion.button
                        key={t.country}
                        className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        style={{
                            background: `linear-gradient(135deg, ${t.primary}, ${t.secondary})`,
                        }}
                        whileHover={{ scale: 1.15, zIndex: 10 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedTeam(index)}
                        title={t.country}
                    >
                        {selectedTeam === index && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute inset-0 bg-black/20 flex items-center justify-center"
                            >
                                <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-xs md:text-sm">{t.flag}</span>
                                </div>
                            </motion.div>
                        )}
                    </motion.button>
                ))}
            </div>

            {/* Preview Card */}
            <motion.div
                key={selectedTeam}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl border-2 shadow-lg"
                style={{
                    background: `linear-gradient(135deg, ${team.primary}, ${team.secondary})`,
                    borderColor: team.primary,
                }}
            >
                <div className="flex items-center gap-3 mb-4">
                    <Palette className="w-6 h-6 text-white" />
                    <h4 className="text-lg font-bold text-white">{team.country}</h4>
                    <span className="text-2xl">{team.flag}</span>
                </div>

                {/* UI Preview */}
                <div className="space-y-3">
                    <div className="h-12 bg-white/20 backdrop-blur-md rounded-lg" />
                    <div className="h-8 bg-white/20 backdrop-blur-md rounded-lg w-3/4" />
                    <div className="h-8 bg-white/20 backdrop-blur-md rounded-lg w-1/2" />
                </div>

                <p className="text-xs text-white/80 mt-4 text-center">
                    UI theme preview
                </p>
            </motion.div>

            {/* Info */}
            <div className="text-center">
                <p className="text-sm text-gray-600">
                    <span className="font-bold text-fifa-blue">32</span> national team themes available
                </p>
            </div>
        </div>
    );
}

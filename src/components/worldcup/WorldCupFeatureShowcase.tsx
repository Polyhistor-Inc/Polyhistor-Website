"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Users,
    Receipt,
    Trophy,
    Plane,
    WifiOff,
    Camera,
    Clock,
    Map,
    AlertTriangle,
    Beer,
    ShoppingBag,
    Calendar,
    Navigation,
    Target,
    ArrowRight,
} from "lucide-react";

import FeatureCategoryHeader from "./FeatureCategoryHeader";
import FeatureCardBento from "./FeatureCardBento";
import InteractiveStadiumMap from "./InteractiveStadiumMap";
import SquadSizeVisualizer from "./SquadSizeVisualizer";
import TeamThemePreview from "./TeamThemePreview";
import PricingTierCards from "./PricingTierCards";

export default function WorldCupFeatureShowcase() {
    return (
        <div className="w-full">
            {/* Category Intro */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="py-20 bg-gradient-to-br from-fifa-blue via-blue-50 to-white"
            >
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-montserrat">
                        Everything You Need for the{" "}
                        <span className="text-fifa-gold">World Cup</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                        19 powerful features across 5 categories to keep your squad connected,
                        organized, and ready for the tournament.
                    </p>

                    {/* Category Pills */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { icon: "📍", name: "Mapping" },
                            { icon: "🛡️", name: "Safety" },
                            { icon: "💰", name: "Spending" },
                            { icon: "🎉", name: "Fan Culture" },
                            { icon: "🗺️", name: "Planning" },
                        ].map((cat) => (
                            <div
                                key={cat.name}
                                className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all cursor-default"
                            >
                                <span className="text-sm font-bold text-gray-700">
                                    {cat.icon} {cat.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Section 1: 📍 Mapping, Navigation & Logistics */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <FeatureCategoryHeader
                        icon={<MapPin className="w-6 h-6" />}
                        title="Mapping, Navigation & Logistics"
                        description="Navigate stadiums, find your squad, and never get lost in the World Cup chaos"
                        categoryNumber={1}
                    />

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
                        {/* Interactive Stadium Map - Full Width */}
                        <div className="md:col-span-2">
                            <FeatureCardBento
                                icon={WifiOff}
                                title="Stadium Mode (Offline)"
                                description="Download maps up to 50MB to navigate when cell networks jam. Works completely offline."
                                size="large"
                                gradientFrom="from-fifa-blue"
                                gradientTo="to-fifa-blue/80"
                                badge="ESSENTIAL"
                            >
                                <div className="mt-6">
                                    <InteractiveStadiumMap showPracticeAreas={false} />
                                </div>
                            </FeatureCardBento>
                        </div>

                        {/* Practice Area Locators with Map */}
                        <FeatureCardBento
                            icon={Map}
                            title="Practice Area Locators"
                            description="Track university stadiums where national teams practice. See training schedules."
                            size="medium"
                            gradientFrom="from-fifa-blue"
                            gradientTo="to-fifa-blue/80"
                        >
                            <div className="mt-4">
                                <InteractiveStadiumMap showPracticeAreas={true} />
                            </div>
                        </FeatureCardBento>

                        {/* Map Markers */}
                        <FeatureCardBento
                            icon={Target}
                            title="Map Markers"
                            description="Custom icons for official stadiums, Fan Fests, and partner bars."
                            size="medium"
                            gradientFrom="from-notification-orange"
                            gradientTo="to-notification-orange/80"
                        />

                        {/* Transit & Commuting */}
                        <FeatureCardBento
                            icon={Navigation}
                            title="Transit & Commuting"
                            description="Integrated details for parking, public transit, and getting to/from venues."
                            size="medium"
                            gradientFrom="from-viral-purple"
                            gradientTo="to-viral-purple/80"
                        />

                        {/* Seat-Finder View */}
                        <FeatureCardBento
                            icon={MapPin}
                            title="Seat-Finder View"
                            description="Input your section/row/seat to see where scattered squad members are sitting."
                            size="medium"
                            gradientFrom="from-fifa-red"
                            gradientTo="to-fifa-red/80"
                            badge="NEW"
                        />
                    </div>
                </div>
            </section>

            {/* Section 2: 🛡️ Squad Coordination & Safety */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-fifa-blue via-blue-900 to-fifa-blue">
                <div className="max-w-7xl mx-auto px-4">
                    <FeatureCategoryHeader
                        icon={<Users className="w-6 h-6 text-fifa-white" />}
                        title="Squad Coordination & Safety"
                        description="Keep your entire crew connected and safe, even when networks fail"
                        categoryNumber={2}
                    />

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {/* Group Expansion - 2 columns */}
                        <div className="md:col-span-3">
                            <FeatureCardBento
                                icon={Users}
                                title="Group Expansion: 8 → 50 People"
                                description="Increase group limits with a 'God View' dashboard. Bring the entire fan club."
                                size="large"
                                gradientFrom="from-fifa-gold"
                                gradientTo="to-fifa-gold/80"
                                badge="GAME CHANGER"
                            >
                                <div className="mt-6">
                                    <SquadSizeVisualizer />
                                </div>
                            </FeatureCardBento>
                        </div>

                        {/* Halftime Meetup AI with Visual */}
                        <FeatureCardBento
                            icon={Target}
                            title="Halftime Meetup AI"
                            description="Calculates the most central concourse, gate, or merch stand to meet at during breaks."
                            size="medium"
                            gradientFrom="from-fifa-gold"
                            gradientTo="to-fifa-gold/80"
                        >
                            {/* Meetup Point Visual */}
                            <div className="mt-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="text-center">
                                        <div className="w-10 h-10 bg-fifa-gold/30 rounded-full flex items-center justify-center mx-auto mb-1">
                                            <span className="text-lg">👥</span>
                                        </div>
                                        <p className="text-xs text-white/70">You</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-10 h-10 bg-fifa-red/30 rounded-full flex items-center justify-center mx-auto mb-1">
                                            <Target className="w-5 h-5 text-white" />
                                        </div>
                                        <p className="text-xs text-white/70">Meet</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-10 h-10 bg-fifa-gold/30 rounded-full flex items-center justify-center mx-auto mb-1">
                                            <span className="text-lg">👥</span>
                                        </div>
                                        <p className="text-xs text-white/70">Friend</p>
                                    </div>
                                </div>
                                <div className="text-center py-2 bg-fifa-gold/20 rounded-lg">
                                    <p className="text-xs font-bold text-white">Gate C - Central</p>
                                    <p className="text-[10px] text-white/60">2 min walk</p>
                                </div>
                            </div>
                        </FeatureCardBento>

                        {/* Last Ping SOS with Visual */}
                        <FeatureCardBento
                            icon={AlertTriangle}
                            title="Last Ping SOS"
                            description="Automatically broadcasts final location and emergency meeting spot if battery drops below 5%."
                            size="medium"
                            gradientFrom="from-fifa-red"
                            gradientTo="to-fifa-red/80"
                            badge="SAFETY"
                        >
                            {/* Battery SOS Visual */}
                            <div className="mt-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 bg-red-500/30 rounded-full flex items-center justify-center animate-pulse">
                                        <AlertTriangle className="w-6 h-6 text-red-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white">Battery Critical</p>
                                        <p className="text-xs text-white/60">Last ping sent</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 bg-red-500/30 rounded-full overflow-hidden">
                                        <div className="h-full w-[5%] bg-red-500" />
                                    </div>
                                    <div className="flex items-center justify-between text-[10px] text-white/70">
                                        <span>📍 Main Entrance</span>
                                        <span>📡 Broadcast</span>
                                    </div>
                                </div>
                            </div>
                        </FeatureCardBento>
                    </div>
                </div>
            </section>

            {/* Section 3: 💰 Social Spending */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <FeatureCategoryHeader
                        icon={<Receipt className="w-6 h-6" />}
                        title="Social Spending"
                        description="Split costs fairly, from Airbnb rooms to concourse food runs"
                        categoryNumber={3}
                    />

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* Airbnb Room-by-Room */}
                        <FeatureCardBento
                            icon={Camera}
                            title="Airbnb Room-by-Room Split"
                            description="Advanced splitting logic for accommodations. Scan receipts and allocate costs by room, not equally."
                            size="large"
                            gradientFrom="from-fifa-gold"
                            gradientTo="to-fifa-gold/80"
                            badge="MOST REQUESTED"
                        >
                            {/* Receipt Scanner Animation */}
                            <div className="mt-6 p-4 bg-gray-50 rounded-2xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-fifa-blue rounded-full flex items-center justify-center">
                                        <Camera className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Scan Receipt</p>
                                        <p className="text-sm text-gray-500">AI-powered splitting</p>
                                    </div>
                                </div>
                                <div className="relative h-24 bg-white rounded-lg overflow-hidden border border-gray-200">
                                    <motion.div
                                        className="absolute top-0 left-0 right-0 h-1 bg-fifa-red"
                                        animate={{ y: [0, 96, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                    />
                                    <div className="p-4 space-y-2">
                                        <div className="h-2 bg-gray-200 rounded w-3/4" />
                                        <div className="h-2 bg-gray-200 rounded w-1/2" />
                                        <div className="h-2 bg-gray-200 rounded w-5/6" />
                                    </div>
                                </div>
                            </div>
                        </FeatureCardBento>

                        {/* Concourse Run Splitter */}
                        <FeatureCardBento
                            icon={Beer}
                            title="Concourse Run Splitter"
                            description="Quick-action splitting for when one person does a food/drink run at the game. One-tap split."
                            size="large"
                            gradientFrom="from-notification-orange"
                            gradientTo="to-notification-orange/80"
                        >
                            {/* Quick Action Buttons */}
                            <div className="mt-6 grid grid-cols-3 gap-3">
                                {["🍺 $12", "🌭 $8", "🍕 $15"].map((item) => (
                                    <button
                                        key={item}
                                        className="py-3 bg-fifa-blue/10 hover:bg-fifa-blue/20 rounded-xl font-bold text-fifa-blue transition-all"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </FeatureCardBento>
                    </div>
                </div>
            </section>

            {/* Section 4: 🎉 Fan Culture & Experiences */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-white via-fifa-gold/5 to-fifa-red/5">
                <div className="max-w-7xl mx-auto px-4">
                    <FeatureCategoryHeader
                        icon={<Trophy className="w-6 h-6" />}
                        title="Fan Culture & Experiences"
                        description="Immerse yourself in World Cup culture with team themes, events, and fan zones"
                        categoryNumber={4}
                    />

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {/* Team Themes & Widgets */}
                        <FeatureCardBento
                            icon={Trophy}
                            title="Team Themes & Widgets"
                            description="32 national team color schemes for the UI. Live match countdown widgets."
                            size="large"
                            gradientFrom="from-fifa-blue"
                            gradientTo="to-fifa-blue/80"
                        >
                            <div className="mt-6">
                                <TeamThemePreview />
                            </div>
                        </FeatureCardBento>

                        {/* Bandwagon Pivot with Visual */}
                        <FeatureCardBento
                            icon={Clock}
                            title="Bandwagon Pivot"
                            description="Automatically switches UI theme and recommendations to your backup team if your primary team gets knocked out."
                            size="medium"
                            gradientFrom="from-fifa-gold"
                            gradientTo="to-fifa-gold/80"
                            badge="FUN"
                        >
                            {/* Team Switch Visual */}
                            <div className="mt-4 p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl border border-gray-200">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="text-center">
                                        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-1">
                                            <span className="text-lg">🇭🇷</span>
                                        </div>
                                        <p className="text-[10px] font-bold text-gray-600">Croatia</p>
                                        <p className="text-[9px] text-red-500 font-semibold">Eliminated</p>
                                    </div>
                                    <div className="flex items-center">
                                        <ArrowRight className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <div className="text-center">
                                        <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-1">
                                            <span className="text-lg">🇦🇷</span>
                                        </div>
                                        <p className="text-[10px] font-bold text-gray-600">Argentina</p>
                                        <p className="text-[9px] text-green-600 font-semibold">Active</p>
                                    </div>
                                </div>
                                <div className="text-center py-2 bg-gradient-to-r from-blue-400/20 to-blue-400/20 rounded-lg border border-blue-200">
                                    <p className="text-[10px] font-bold text-blue-600">✨ Theme Switched!</p>
                                </div>
                            </div>
                        </FeatureCardBento>

                        {/* Cultural Hubs & Fan Zones */}
                        <FeatureCardBento
                            icon={Beer}
                            title="Cultural Hubs & Fan Zones"
                            description="Pinpoints team-specific cultural pubs (Irish, Spanish) and large IPL-style Fan Zones."
                            size="medium"
                            gradientFrom="from-fifa-red"
                            gradientTo="to-fifa-red/80"
                        />

                        {/* FIFA Events */}
                        <FeatureCardBento
                            icon={Calendar}
                            title="FIFA Events"
                            description="Track official activities, countdown timers, and World Cup trophy meets."
                            size="medium"
                            gradientFrom="from-viral-purple"
                            gradientTo="to-viral-purple/80"
                        />

                        {/* Merch Finders */}
                        <FeatureCardBento
                            icon={ShoppingBag}
                            title="Merch Finders"
                            description="Map overlays for official team jerseys and pop-up shops near you."
                            size="medium"
                            gradientFrom="from-notification-orange"
                            gradientTo="to-notification-orange/80"
                        />
                    </div>
                </div>
            </section>

            {/* Section 5: 🗺️ Pre-Trip Planning */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <FeatureCategoryHeader
                        icon={<Plane className="w-6 h-6" />}
                        title="Pre-Trip Planning"
                        description="Plan your World Cup adventure before you even land"
                        categoryNumber={5}
                    />

                    <div className="grid md:grid-cols-1 gap-6 md:gap-8">
                        {/* Host City Itineraries - Full Width */}
                        <FeatureCardBento
                            icon={Map}
                            title="Host City Itineraries"
                            description="Pre-built, customizable templates for the 16 major host cities and surrounding supporting cities. Land and go!"
                            size="full"
                            gradientFrom="from-fifa-blue"
                            gradientTo="to-fifa-blue/80"
                            badge="TIME SAVER"
                        >
                            {/* City Grid Preview */}
                            <div className="mt-6 grid grid-cols-4 md:grid-cols-8 gap-3">
                                {[
                                    { city: "NYC", flag: "🗽" },
                                    { city: "LA", flag: "🌴" },
                                    { city: "Miami", flag: "🏖️" },
                                    { city: "Dallas", flag: "🤠" },
                                    { city: "Atlanta", flag: "🍑" },
                                    { city: "Seattle", flag: "☕" },
                                    { city: "Boston", flag: "🦞" },
                                    { city: "Mexico", flag: "🇲🇽" },
                                ].map((city) => (
                                    <div
                                        key={city.city}
                                        className="aspect-square bg-gradient-to-br from-fifa-blue/10 to-fifa-gold/10 rounded-2xl flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                                    >
                                        <span className="text-2xl mb-1">{city.flag}</span>
                                        <span className="text-xs font-bold text-gray-700">
                                            {city.city}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </FeatureCardBento>
                    </div>
                </div>
            </section>

            {/* Section 6: Pricing & CTA */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-fifa-blue via-blue-900 to-fifa-blue relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-fifa-gold rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-fifa-red rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-montserrat">
                            Get Your <span className="text-fifa-gold">Fan Pack</span>
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                            Early bird pricing ends soon. Don't miss out!
                        </p>
                    </motion.div>

                    {/* Pricing Cards */}
                    <PricingTierCards />

                    {/* Urgency Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl">
                            <Clock className="w-6 h-6 text-fifa-gold animate-pulse" />
                            <span className="text-white font-bold">
                                Fan Pack launching soon - Get notified!
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

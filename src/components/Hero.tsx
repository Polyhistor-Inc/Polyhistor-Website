"use client";

import { getPersonalizedHeadline, getUserLocation } from "@/lib/geolocation";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Building2, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Floating notification bubble component
const NotificationBubble = ({
    text,
    delay,
    x,
    y,
}: {
    text: string;
    delay: number;
    x: string;
    y: string;
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: delay,
        }}
        className={`absolute ${x} ${y} z-20`}
    >
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white/50 flex items-center gap-2"
        >
            <span className="text-sm font-semibold text-slate-800">{text}</span>
        </motion.div>
    </motion.div>
);

export default function Hero({
    onJoinWaitlistClick,
}: {
    onJoinWaitlistClick: () => void;
}) {
    const { scrollY: fScrollY } = useScroll();

    // Fallback for SSR
    const scrollYValue = typeof window !== 'undefined' ? window.scrollY : 0;
    const [city, setCity] = useState<string>();
    const [headlineText, setHeadlineText] = useState("Never Lose Your Friends");
    
    const yPhone1 = useTransform(fScrollY, [0, 1000], [0, -150]);
    const rotateYPhone1 = useTransform(fScrollY, [0, 1000], [5, 15]);
    
    const yPhone2 = useTransform(fScrollY, [0, 1000], [0, -100]);
    const rotateYPhone2 = useTransform(fScrollY, [0, 1000], [-5, -15]);

    useEffect(() => {
        // Fetch user's city for personalization
        getUserLocation().then((location) => {
            setCity(location.city);
            setHeadlineText(getPersonalizedHeadline(location.city));
        });
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 flex flex-col pt-20 pb-10">
            {/* Floating background blobs - FIFA colors */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-fifa-blue/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-fifa-gold/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-fifa-red/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
                {/* Badges Container - Centered with proper spacing */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                    {/* World Cup Badge */}
                    <Link
                        href="/worldcup"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fifa-blue/10 to-fifa-gold/10 border border-fifa-blue/20 backdrop-blur-md hover:shadow-lg transition-all group"
                    >
                        <Trophy className="w-4 h-4 text-fifa-gold" />
                        <span className="text-sm font-bold text-fifa-blue">
                            New: World Cup Fan Pack with 19 features
                        </span>
                        <ArrowRight className="w-4 h-4 text-fifa-blue group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Divider */}
                    <div className="hidden sm:block w-px h-6 bg-slate-300" />

                    {/* Social Proof Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-viral-red mr-2 animate-pulse" />
                        <span className="text-sm font-medium text-slate-600">
                            Join 100+ travelers already exploring stress-free.
                        </span>
                    </motion.div>
                </div>

                {/* Main Headline - Consumer Focused */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6"
                >
                    {headlineText} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-viral-red via-notification-orange to-viral-purple">
                        (Or Your Money) Again.
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-4 max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed"
                >
                    The all-in-one app to track your squad, split costs instantly, and
                    find the perfect middle point to meet.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
                >
                    <Link
                        href="https://apps.apple.com/us/app/polyhistor/id6759064328"
                        className="group px-8 py-4 rounded-xl bg-slate-900 text-white font-bold hover:shadow-glow transition-all flex items-center justify-center gap-2 hover:scale-105 duration-200"
                    >
                        <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                        </svg>
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[10px] text-slate-300">Download on the</span>
                            <span className="text-lg">App Store</span>
                        </div>
                    </Link>
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.thepolyhistor.app"
                        className="group px-8 py-4 rounded-xl bg-slate-900 text-white font-bold hover:shadow-glow transition-all flex items-center justify-center gap-2 hover:scale-105 duration-200"
                    >
                        <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                        </svg>
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[10px] text-slate-300">GET IT ON</span>
                            <span className="text-lg">Google Play</span>
                        </div>
                    </Link>
                </motion.div>
            </div>

            {/* Phone Mockups with Parallax */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.8 }}
                className="mt-16 md:mt-24 relative max-w-6xl mx-auto w-full px-4 perspective-[2000px]"
            >
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative">
                    {/* Notification Bubbles */}
                    <NotificationBubble
                        text="🎉 Sarah joined the trip"
                        delay={1.2}
                        x="left-[5%] md:left-[10%]"
                        y="top-[10%] md:top-[15%]"
                    />
                    <NotificationBubble
                        text="💰 $15 received"
                        delay={1.6}
                        x="right-[5%] md:right-[15%]"
                        y="top-[20%]"
                    />
                    <NotificationBubble
                        text="📍 Mike is nearby"
                        delay={2.0}
                        x="left-[2%] md:left-[5%]"
                        y="bottom-[20%] md:bottom-[25%]"
                    />

                    {/* Left Phone - Friend Map */}
                    <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{
                            y: yPhone1,
                            rotateY: rotateYPhone1,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-viral-red to-notification-orange rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-500" />
                        <div className="relative w-[280px] h-[560px] rounded-[2rem] overflow-hidden shadow-2xl bg-white border-4 border-slate-100">
                            <Image
                                src="/friend-map-mockup.png"
                                alt="Friend Map showing real-time location tracking"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right Phone - Split Bill */}
                    <motion.div
                        className="relative group mt-12 md:mt-0 md:translate-y-12"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{
                            y: yPhone2,
                            rotateY: rotateYPhone2,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-viral-purple to-brand-blue rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-500" />
                        <div className="relative w-[280px] h-[560px] rounded-[2rem] overflow-hidden shadow-2xl bg-white border-4 border-slate-100">
                            <Image
                                src="/split-bill-mockup.png"
                                alt="Split bill notification showing Sagar requested $15 for Pizza"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
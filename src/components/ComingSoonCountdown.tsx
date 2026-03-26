"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function ComingSoonCountdown() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Set launch date to June 11, 2026 (FIFA World Cup 2026 start)
    const launchDate = new Date("2026-06-11T00:00:00").getTime();

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = launchDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeBox = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center">
            <div className="relative">
                {/* Subtle gold glow effect */}
                <div className="absolute -inset-2 bg-fifa-gold/20 rounded-lg blur-md" />
                <div className="relative bg-white backdrop-blur-sm px-4 py-3 md:px-6 md:py-4 rounded-lg shadow-xl min-w-[60px] md:min-w-[80px] border border-gray-200">
                    <span className="text-2xl md:text-4xl font-bold text-fifa-blue font-mono">
                        {String(value).padStart(2, "0")}
                    </span>
                </div>
            </div>
            <span className="text-xs md:text-sm font-semibold text-gray-600 mt-2 uppercase tracking-wider">
                {label}
            </span>
        </div>
    );

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <TimeBox value={timeLeft.days} label="Days" />
                <TimeBox value={timeLeft.hours} label="Hours" />
                <TimeBox value={timeLeft.minutes} label="Minutes" />
                <TimeBox value={timeLeft.seconds} label="Seconds" />
            </div>
            <div className="relative">
                <div className="absolute -inset-4 bg-fifa-blue/10 rounded-full blur-xl animate-pulse" />
                <div className="relative inline-flex items-center gap-2 px-6 py-3 bg-fifa-blue/5 backdrop-blur-sm rounded-full shadow-lg border border-fifa-blue/20">
                    <span className="flex h-3 w-3 rounded-full bg-fifa-blue animate-pulse" />
                    <span className="text-sm md:text-base font-bold text-gray-700">
                        World Cup Fan Pack Dropping Soon
                    </span>
                </div>
            </div>
        </div>
    );
}

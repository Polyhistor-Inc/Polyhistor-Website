import FeaturePreview from "@/components/FeaturePreview";
import WorldCupHero from "@/components/WorldCupHero";
import HashtagAnimation from "@/components/HashtagAnimation";
import WorldCupFeatureShowcase from "@/components/worldcup/WorldCupFeatureShowcase";
import WorldCupStructuredData from "@/components/worldcup/WorldCupStructuredData";
import WorldCupWaitlist from "@/components/worldcup/WorldCupWaitlist";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FIFA World Cup Fan Pack 2026 | Polyhistor - Don't Lose Your Squad",
    description:
        "The official World Cup 2026 companion app. 19 features for stadium navigation, squad tracking, expense splitting & fan culture. Free update for Polyhistor users. iOS & Android.",
    keywords: [
        "World Cup 2026 app",
        "FIFA World Cup companion",
        "stadium navigation app",
        "group travel World Cup",
        "split expenses World Cup",
        "squad tracker app",
        "Fan Fest locator",
        "World Cup 2026 USA",
        "World Cup group travel",
        "Polyhistor World Cup",
        "offline stadium maps",
        "World Cup expense splitter",
        "FIFA World Cup",
        "World Cup 2026",
        "group travel app",
        "stadium navigation",
        "travel app",
        "Polyhistor",
    ],
    authors: [{ name: "Polyhistor Team" }],
    creator: "Polyhistor",
    publisher: "Polyhistor",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://thepolyhistor.com/worldcup",
        title: "FIFA World Cup Fan Pack 2026 | Polyhistor",
        description:
            "19 powerful features across 5 categories: Mapping, Safety, Spending, Fan Culture & Pre-Trip Planning. Never lose your squad at the World Cup.",
        siteName: "Polyhistor",
        images: [
            {
                url: "https://thepolyhistor.com/worldcup-og.png",
                alt: "Polyhistor World Cup Fan Pack - Stadium map with squad tracking features",
                width: 1200,
                height: 630,
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "FIFA World Cup Fan Pack 2026 | Polyhistor",
        description:
            "19 features for World Cup 2026: offline maps, squad tracking, expense splitting & more.",
        creator: "@ThePolyHistor",
        images: ["https://thepolyhistor.com/worldcup-og.png"],
        site: "@ThePolyHistor",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function WorldCupPage() {
    return (
        <>
            {/* Structured Data for AI Discovery */}
            <WorldCupStructuredData />
            
            <main className="min-h-screen bg-white">
                <WorldCupHero />
                <FeaturePreview />

                {/* World Cup Feature Showcase - All 19 Features */}
                <WorldCupFeatureShowcase />

                {/* Email Waitlist Capture */}
                <WorldCupWaitlist />

                {/* CTA Section - Clean White Background */}
                <section className="py-20 md:py-32 bg-white relative overflow-hidden">
                {/* Subtle background decoration */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-fifa-blue/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-fifa-gold/5 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
                        Ready to Experience the <span className="text-fifa-blue">World Cup</span> Like Never Before?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Download Polyhistor now and get the World Cup Fan Pack as a free update when we launch. Don&apos;t miss out!
                    </p>

                    {/* App Store Badges */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="https://apps.apple.com/us/app/polyhistor/id6759064328"
                            className="group px-8 py-4 rounded-xl bg-fifa-blue text-white font-bold hover:bg-fifa-blue/90 transition-all flex items-center justify-center gap-3 hover:scale-105 duration-200 shadow-lg hover:shadow-xl"
                        >
                            <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                            </svg>
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[10px] text-white/90">Download on the</span>
                                <span className="text-lg">App Store</span>
                            </div>
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.thepolyhistor.app"
                            className="group px-8 py-4 rounded-xl bg-fifa-blue text-white font-bold hover:bg-fifa-blue/90 transition-all flex items-center justify-center gap-3 hover:scale-105 duration-200 shadow-lg hover:shadow-xl"
                        >
                            <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                            </svg>
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[10px] text-white/90">GET IT ON</span>
                                <span className="text-lg">Google Play</span>
                            </div>
                        </a>
                    </div>

                    {/* Hashtag Animation */}
                    <div className="mt-12">
                        <HashtagAnimation variant="worldcup" />
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}

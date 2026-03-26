"use client";

import { useModal } from "@/context/ModalContext";

// Components
import CTASection from "@/components/CTASection";
import ChaosSection from "@/components/ChaosSection";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import SocialProofSection from "@/components/SocialProofSection";
import TrojanHorseSection from "@/components/TrojanHorseSection";
import WorldCupHomepageBanner from "@/components/WorldCupHomepageBanner";
import WorldCupSection from "@/components/WorldCupSection";

export default function HomePageClient() {
    const { openModal } = useModal();

    return (
        <>
            {/* FIFA World Cup Banner */}
            <WorldCupHomepageBanner />
            
            <main className="antialiased font-sans text-slate-900 pt-0">
                {/* Consumer-First Hero */}
                <Hero onJoinWaitlistClick={openModal} />

                {/* The Chaos - Problem Section */}
                <ChaosSection />

                {/* The Solution - Consumer Features */}
                <FeaturesSection />

                {/* Social Proof & Testimonials */}
                <SocialProofSection />

                {/* Bridge to Enterprise */}
                <TrojanHorseSection />

                {/* FAQ Section */}
                <FAQSection />

                {/* World Cup Fan Pack Section */}
                <WorldCupSection />

                {/* Final Call to Action */}
                <CTASection onJoinWaitlistClick={openModal} />
            </main>
        </>
    );
}
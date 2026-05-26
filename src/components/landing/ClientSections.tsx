"use client";

import dynamic from "next/dynamic";
import { FEATURES } from "@/lib/constants";

const DemoSection = dynamic(() => import("@/components/landing/DemoSection"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[800px] flex items-center justify-center">
      <div className="text-white/20 text-sm animate-pulse">Loading interactive demo...</div>
    </div>
  ),
});

const FeatureGrid = dynamic(() => import("@/components/landing/FeatureGrid"), {
  ssr: false,
  loading: () => <div className="min-h-[400px]" />,
});

const InteractiveCodeBlock = dynamic(
  () => import("@/components/landing/InteractiveCodeBlock"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[300px] bg-[#0d0f17] rounded-xl border border-white/10" />
    ),
  }
);

export function LazyDemoSection() {
  return <DemoSection />;
}

export function LazyFeatureGrid() {
  return <FeatureGrid features={FEATURES} />;
}

export function LazyInteractiveCodeBlock({
  title,
  language,
  code,
  delay,
}: {
  title: string;
  language: string;
  code: string;
  delay: number;
}) {
  return (
    <InteractiveCodeBlock
      title={title}
      language={language}
      code={code}
      delay={delay}
    />
  );
}

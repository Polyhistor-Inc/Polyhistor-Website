import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Waitlist — Early Access to Polyhistor",
  description:
    "Get early access to Polyhistor's contextual location intelligence API. Join the waitlist for beta access, pricing updates, and launch announcements.",
  openGraph: {
    title: "Join the Waitlist — Early Access to Polyhistor",
    description:
      "Get early access to Polyhistor's contextual location intelligence API. Join the waitlist for beta access, pricing updates, and launch announcements.",
  },
};

export default function WaitlistLayout({ children }: { children: React.ReactNode }) {
  return children;
}

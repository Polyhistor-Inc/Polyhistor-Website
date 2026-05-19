"use client";

import { trackCTAClick } from "@/lib/analytics";
import Link from "next/link";
import type { ReactNode } from "react";

export default function TrackedLink({
  href,
  label,
  location,
  className,
  children,
}: {
  href: string;
  label: string;
  location: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackCTAClick({ label, location, href })}
    >
      {children}
    </Link>
  );
}

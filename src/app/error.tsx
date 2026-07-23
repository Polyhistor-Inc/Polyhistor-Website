"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <img src="/logo.svg" alt="Polyhistor" className="h-10 w-auto mx-auto mb-8 opacity-50" />
          <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
          <p className="text-white/50 mb-2">An unexpected error occurred.</p>
          <p className="text-sm text-white/30 mb-6">We&apos;ve logged the issue and will look into it.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-zinc-200 transition w-full sm:w-auto text-center"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2.5 rounded-lg font-medium border border-white/10 hover:border-white/30 transition text-white w-full sm:w-auto text-center"
          >
            Reload Page
          </button>
          <Link
            href="/"
            className="px-6 py-2.5 rounded-lg font-medium border border-white/10 hover:border-white/30 transition text-white w-full sm:w-auto text-center"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}

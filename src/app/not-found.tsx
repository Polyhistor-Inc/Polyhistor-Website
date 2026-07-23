import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <img src="/logo.svg" alt="Polyhistor" className="h-10 w-auto mx-auto mb-8 opacity-50" />
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-xl text-white/50 mb-2">Page not found</p>
          <p className="text-sm text-white/30">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-zinc-200 transition w-full sm:w-auto text-center"
          >
            Go Home
          </Link>
          <Link
            href="/demo"
            className="px-6 py-2.5 rounded-lg font-medium border border-white/10 hover:border-white/30 transition text-white w-full sm:w-auto text-center"
          >
            Try the Demo
          </Link>
        </div>
      </div>
    </main>
  );
}

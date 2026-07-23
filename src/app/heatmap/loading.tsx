export default function HeatmapLoading() {
  return (
    <main className="h-screen flex flex-col pt-20">
      <div className="bg-black/80 backdrop-blur-md border-b border-white/[0.06] px-4 md:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-4 h-4 bg-white/10 rounded animate-pulse" />
            <div className="h-5 w-32 bg-white/10 rounded animate-pulse" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-36 bg-white/[0.03] rounded-lg animate-pulse" />
            <div className="h-8 w-36 bg-white/[0.03] rounded-lg animate-pulse" />
            <div className="h-8 w-16 bg-white/[0.03] rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white/[0.02] animate-pulse" />
    </main>
  );
}

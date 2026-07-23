export default function DemoLoading() {
  return (
    <main className="flex-1 pt-24 pb-8 px-4 md:px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/30 mb-4">
            <span className="w-2 h-2 bg-white/20 rounded-full animate-pulse" />
            <span>Loading demo...</span>
          </div>
          <div className="h-10 w-64 bg-white/5 rounded-lg mx-auto mb-2 animate-pulse" />
          <div className="h-5 w-96 bg-white/5 rounded-lg mx-auto animate-pulse" />
        </div>

        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 md:p-5 mb-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 h-12 bg-white/[0.03] rounded-xl animate-pulse" />
            <div className="md:w-48 h-12 bg-white/[0.03] rounded-xl animate-pulse" />
            <div className="w-28 h-12 bg-white/[0.03] rounded-xl animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 min-h-[480px]">
          <div className="lg:col-span-2 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4">
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5 animate-pulse">
                  <div className="flex justify-between mb-2">
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-white/10 rounded w-2/3" />
                      <div className="h-3 bg-white/5 rounded w-1/2" />
                    </div>
                    <div className="h-6 w-12 bg-white/10 rounded ml-4" />
                  </div>
                  <div className="flex gap-2 mt-3">
                    <div className="h-3 bg-white/5 rounded w-16" />
                    <div className="h-3 bg-white/5 rounded w-12" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4">
            <div className="h-[400px] bg-white/[0.03] rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
    </main>
  );
}

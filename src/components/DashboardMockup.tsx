export default function DashboardMockup() {
  const zones = [
    { name: "Freezer A", temp: "-18.2°C", status: "ok", color: "teal" },
    { name: "Cooler B", temp: "3.8°C", status: "ok", color: "teal" },
    { name: "Loading Dock", temp: "7.1°C", status: "warn", color: "amber" },
    { name: "Blast Freeze", temp: "-22.0°C", status: "ok", color: "teal" },
    { name: "Dry Store", temp: "14.2°C", status: "ok", color: "teal" },
    { name: "Pharma Vault", temp: "4.0°C", status: "ok", color: "teal" },
  ];

  const sparkPoints = [40, 38, 42, 39, 37, 40, 38, 36, 38, 40, 37, 38];
  const h = 40;
  const w = 120;
  const min = Math.min(...sparkPoints);
  const max = Math.max(...sparkPoints);
  const toY = (v: number) => h - ((v - min) / (max - min + 1)) * (h - 8) - 4;
  const sparkPath = sparkPoints
    .map((v, i) => `${i === 0 ? "M" : "L"} ${(i / (sparkPoints.length - 1)) * w} ${toY(v)}`)
    .join(" ");

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/60">
      {/* Window chrome */}
      <div className="bg-[#0f1929] border-b border-white/6 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-amber-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <div className="mx-auto flex items-center gap-2 bg-white/5 border border-white/8 rounded-md px-3 py-1 text-xs text-slate-400">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" stroke="#64748b" strokeWidth="1"/><path d="M5 3v2l1.5 1" stroke="#64748b" strokeWidth="1" strokeLinecap="round"/></svg>
          app.kelvex.io
        </div>
        <div className="w-12" />
      </div>

      {/* App shell */}
      <div className="bg-[#111827] flex" style={{ minHeight: 420 }}>
        {/* Sidebar */}
        <div className="w-48 bg-[#0d1520] border-r border-white/5 p-3 flex flex-col gap-1 shrink-0 hidden sm:flex">
          <div className="flex items-center gap-2 px-2 py-2 mb-2">
            <div className="w-6 h-6 rounded bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L13 5V11L8 14L3 11V5L8 2Z" stroke="#14b8a6" strokeWidth="1.5" strokeLinejoin="round"/>
                <circle cx="8" cy="8" r="2" fill="#14b8a6"/>
              </svg>
            </div>
            <span className="text-white text-sm font-semibold">Kelvex</span>
          </div>
          {[
            { icon: "⬡", label: "Fleet", active: true },
            { icon: "◎", label: "Live Monitor", active: false },
            { icon: "⚠", label: "Alerts", active: false },
            { icon: "📋", label: "Compliance", active: false },
            { icon: "⚡", label: "Energy", active: false },
            { icon: "📊", label: "Reports", active: false },
          ].map(({ icon, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2.5 px-2 py-1.5 rounded-md text-xs cursor-pointer ${
                active ? "bg-teal-500/10 text-teal-400" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              <span className="text-xs">{icon}</span>
              {label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-white text-sm font-semibold">Fleet Overview</h2>
              <p className="text-slate-500 text-xs">6 zones · 3 facilities · Last updated just now</p>
            </div>
            <div className="flex items-center gap-1.5 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
              Live
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
            {[
              { label: "Zones monitored", value: "6", sub: "All online", color: "teal" },
              { label: "Active alerts", value: "1", sub: "1 warning", color: "amber" },
              { label: "Peak demand", value: "847 kW", sub: "−12% vs last month", color: "teal" },
              { label: "Compliance", value: "100%", sub: "FSMA ready", color: "teal" },
            ].map(({ label, value, sub, color }) => (
              <div key={label} className="bg-white/3 border border-white/6 rounded-lg p-3">
                <div className="text-slate-400 text-xs mb-1">{label}</div>
                <div className={`text-lg font-bold ${color === "amber" ? "text-amber-400" : "text-white"} mb-0.5`}>{value}</div>
                <div className={`text-xs ${color === "amber" ? "text-amber-500/70" : "text-teal-500/70"}`}>{sub}</div>
              </div>
            ))}
          </div>

          {/* Zone grid + sparkline */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {/* Zone list */}
            <div className="lg:col-span-2 bg-white/3 border border-white/6 rounded-lg overflow-hidden">
              <div className="px-3 py-2 border-b border-white/5 text-xs text-slate-400 font-medium">Zones</div>
              <div className="divide-y divide-white/4">
                {zones.map(({ name, temp, status, color }) => (
                  <div key={name} className="px-3 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        color === "amber" ? "bg-amber-400" : "bg-teal-400"
                      }`} />
                      <span className="text-xs text-slate-300">{name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono font-semibold ${
                        color === "amber" ? "text-amber-400" : "text-white"
                      }`}>{temp}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                        status === "warn"
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : "bg-teal-500/10 text-teal-400 border border-teal-500/20"
                      }`}>
                        {status === "warn" ? "Warning" : "Normal"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini chart */}
            <div className="bg-white/3 border border-white/6 rounded-lg p-3 flex flex-col">
              <div className="text-xs text-slate-400 mb-1">Freezer A — 24h trend</div>
              <div className="text-white text-lg font-bold mb-3">−18.2°C</div>
              <div className="flex-1 flex items-end">
                <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#14b8a6" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d={`${sparkPath} L ${w} ${h} L 0 ${h} Z`} fill="url(#tg)"/>
                  <path d={sparkPath} stroke="#14b8a6" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-[10px] text-slate-500 mt-2">Setpoint: −18°C · ±0.5°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

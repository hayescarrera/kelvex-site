import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl w-full mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
          Now available for pharma & food production
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] max-w-4xl mb-6">
          Cold chain monitoring{" "}
          <span className="gradient-text">built for every industry</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
          Real-time temperature and humidity monitoring across your entire cold chain.
          Automated alerts, compliance reporting, and energy optimization — all in one platform.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <a
            href="#demo"
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-400/30"
          >
            Request a demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 text-slate-300 hover:text-white font-medium px-7 py-3.5 rounded-xl text-base border border-white/10 hover:border-white/20 transition-all"
          >
            See how it works
          </a>
        </div>

        {/* Trust line */}
        <p className="text-xs text-slate-500 mb-12">
          Built for food processors, 3PLs, pharmaceutical distributors, and biotech labs
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 mb-16">
          {[
            { value: "<2min", label: "Alert response time" },
            { value: "99.9%", label: "Platform uptime SLA" },
            { value: "FDA/FSMA", label: "Compliance ready" },
            { value: "±0.1°C", label: "Sensor accuracy" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-white mb-1">{value}</div>
              <div className="text-xs text-slate-500">{label}</div>
            </div>
          ))}
        </div>

        {/* Dashboard mockup */}
        <DashboardMockup />
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/6 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L13 5V11L8 14L3 11V5L8 2Z" stroke="#14b8a6" strokeWidth="1.5" strokeLinejoin="round"/>
                  <circle cx="8" cy="8" r="2" fill="#14b8a6"/>
                </svg>
              </div>
              <span className="text-white font-semibold">Kelvex</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Cold chain monitoring for every industry. Real-time, compliant, and built for operations teams.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Product</h4>
            <ul className="flex flex-col gap-2.5">
              {["Features", "Industries", "Pricing", "Security", "Changelog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Compliance</h4>
            <ul className="flex flex-col gap-2.5">
              {["FDA 21 CFR Part 11", "FSMA 204", "HACCP", "EU GDP", "USP 1079", "CLIA / CAP"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {["About", "Blog", "Docs", "Contact", "Privacy", "Terms"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">© 2026 Kelvex. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

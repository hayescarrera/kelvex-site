const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="#14b8a6" strokeWidth="1.5"/>
        <path d="M11 7v4l3 2" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Real-time monitoring",
    description:
      "Temperature, humidity, door state, and pressure — updated every 30 seconds from sensors in your facility. No polling delays, no data gaps.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L4 7v8l7 4 7-4V7L11 3Z" stroke="#14b8a6" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 3v12M4 7l7 4 7-4" stroke="#14b8a6" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Smart alert escalation",
    description:
      "Threshold breach → notify operator. No response in 5 minutes → page the supervisor. Still no response → call the on-call manager. Fully configurable chains.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="12" rx="2" stroke="#14b8a6" strokeWidth="1.5"/>
        <path d="M7 9h8M7 13h5" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Compliance reporting",
    description:
      "One-click FDA 21 CFR Part 11, FSMA 204, and HACCP reports. Signed audit trails with timestamps, sensor calibration records, and deviation summaries.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 16L8 10l4 3 3-5 3 3" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="3" width="16" height="16" rx="2" stroke="#14b8a6" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Energy optimization",
    description:
      "Demand charge analysis from utility bills, compressor health tracking, and pre-cool scheduling. Typical customers cut demand charges by 12–18%.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="8" r="4" stroke="#14b8a6" strokeWidth="1.5"/>
        <path d="M4 19c0-3.866 3.134-7 7-7h0c3.866 0 7 3.134 7 7" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Multi-tenant, multi-site",
    description:
      "One login shows you every facility, every zone. Role-based access so operators see their floor, managers see the fleet, and executives see the portfolio.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="11" width="4" height="8" rx="1" stroke="#14b8a6" strokeWidth="1.5"/>
        <rect x="9" y="7" width="4" height="12" rx="1" stroke="#14b8a6" strokeWidth="1.5"/>
        <rect x="15" y="3" width="4" height="16" rx="1" stroke="#14b8a6" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Works with your hardware",
    description:
      "Modbus TCP, BACnet/IP, and direct integrations with Danfoss, Emerson, Honeywell, JCI, and Schneider. No rip-and-replace — your existing controllers work.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block text-xs font-medium text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1.5 rounded-full mb-4">
            Platform capabilities
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Everything in one place
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Stop stitching together spreadsheets, loggers, and manual checks.
            Kelvex replaces all of it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="card-border bg-[#0f172a] rounded-xl p-6 transition-all hover:bg-[#1a2540]"
            >
              <div className="w-10 h-10 bg-teal-500/10 border border-teal-500/20 rounded-lg flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

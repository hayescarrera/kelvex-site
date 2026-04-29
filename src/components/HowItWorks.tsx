const steps = [
  {
    number: "01",
    title: "Connect your equipment",
    description:
      "Install the Kelvex edge agent on-site. It autodiscovers compatible controllers over Modbus or BACnet. For standalone sensors, pair via our gateway hardware. Most sites are live in under a day.",
    detail: "Supports Danfoss, Emerson, Honeywell, JCI, Schneider, Modbus TCP, BACnet/IP",
  },
  {
    number: "02",
    title: "Configure your rules",
    description:
      "Set temperature setpoints and alert thresholds for each zone. Define escalation chains — who gets paged, when, and how. Map your HACCP critical control points. Takes about 30 minutes.",
    detail: "Email, SMS, Slack, webhook — your team gets notified however they prefer",
  },
  {
    number: "03",
    title: "Monitor from anywhere",
    description:
      "Live dashboard shows every zone across every facility. Operators get alerts the moment something drifts. Managers get daily digests. Compliance reports are one click when an auditor calls.",
    detail: "Web dashboard + mobile-optimized — works on the floor or from the office",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block text-xs font-medium text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1.5 rounded-full mb-4">
            Simple setup
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            From zero to monitored in one day
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No lengthy implementation projects. No consultants. You can do
            this yourself — or we'll help you set it up on a call.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-8 bottom-8 w-px bg-gradient-to-b from-teal-500/40 via-teal-500/20 to-transparent" />

          <div className="flex flex-col gap-8">
            {steps.map(({ number, title, description, detail }, i) => (
              <div
                key={number}
                className={`flex flex-col lg:flex-row items-start gap-8 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-[calc(50%-3rem)]">
                  <div
                    className={`card-border bg-[#1e293b]/60 rounded-xl p-6 hover:bg-[#1e293b]/90 transition-all ${
                      i % 2 === 1 ? "lg:ml-12" : "lg:mr-12"
                    }`}
                  >
                    <div className="text-teal-500/60 text-xs font-mono font-bold mb-3">{number}</div>
                    <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
                    <div className="flex items-start gap-2 bg-teal-500/5 border border-teal-500/15 rounded-lg px-3 py-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
                        <path d="M2 7l3 3 7-7" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-teal-400/80 text-xs">{detail}</span>
                    </div>
                  </div>
                </div>

                {/* Center node */}
                <div className="hidden lg:flex w-12 shrink-0 justify-center pt-6">
                  <div className="w-8 h-8 rounded-full bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 text-xs font-bold">
                    {i + 1}
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

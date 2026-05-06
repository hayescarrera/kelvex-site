const plans = [
  {
    name: "Starter",
    price: "$149",
    period: "/mo",
    description: "Perfect for a single facility getting started with monitoring.",
    features: [
      "Up to 25 sensors / zones",
      "1 facility",
      "Email & SMS alerts",
      "30-day data history",
      "Basic compliance reports",
      "Email support",
    ],
    cta: "Request a demo",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$449",
    period: "/mo",
    description: "For operations that need real compliance coverage and integrations.",
    features: [
      "Up to 150 sensors / zones",
      "Up to 5 facilities",
      "Full alert escalation chains",
      "1-year data history",
      "FDA / FSMA / HACCP reports",
      "Modbus & BACnet integrations",
      "Energy demand analysis",
      "Priority support",
    ],
    cta: "Request a demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For multi-site portfolios with advanced compliance and SLA requirements.",
    features: [
      "Unlimited sensors & zones",
      "Unlimited facilities",
      "Custom escalation & on-call",
      "Unlimited data retention",
      "21 CFR Part 11 audit trails",
      "All protocol integrations",
      "Dedicated customer success",
      "SLA & uptime guarantee",
      "SSO / SAML",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-block text-xs font-medium text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1.5 rounded-full mb-4">
            Transparent pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Simple, predictable pricing
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No per-sensor fees. No surprise charges.
            Talk to us about the right plan for your operation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map(({ name, price, period, description, features, cta, highlighted }) => (
            <div
              key={name}
              className={`relative rounded-2xl p-6 flex flex-col ${
                highlighted
                  ? "bg-teal-500/10 border border-teal-500/40 shadow-xl shadow-teal-500/10"
                  : "bg-[#1e293b]/50 border border-white/8"
              }`}
            >
              {highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                  Most popular
                </div>
              )}

              <div className="mb-6">
                <div className="text-slate-300 font-semibold text-sm mb-1">{name}</div>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-bold text-white">{price}</span>
                  {period && <span className="text-slate-400 text-sm mb-1">{period}</span>}
                </div>
                <p className="text-slate-400 text-sm">{description}</p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
                      <circle cx="8" cy="8" r="7" fill={highlighted ? "rgba(20,184,166,0.2)" : "rgba(20,184,166,0.1)"}/>
                      <path d="M5 8l2 2 4-4" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`w-full text-center text-sm font-semibold py-3 rounded-xl transition-all ${
                  highlighted
                    ? "bg-teal-500 hover:bg-teal-400 text-white shadow-lg shadow-teal-500/20"
                    : "bg-white/8 hover:bg-white/15 text-white border border-white/10"
                }`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-500 mt-8">
          All plans include SSL encryption, 99.9% uptime SLA, and GDPR-compliant data handling.
        </p>
      </div>
    </section>
  );
}

const industries = [
  {
    icon: "🥩",
    name: "Food & Beverage",
    description:
      "FSMA 204 traceability, automated HACCP logs, and shelf-life optimization for processors, distributors, and retailers.",
    tags: ["FSMA 204", "HACCP", "3PL"],
  },
  {
    icon: "💊",
    name: "Pharmaceutical",
    description:
      "GDP-compliant monitoring with 21 CFR Part 11 audit trails. Qualify storage conditions and generate deviation reports automatically.",
    tags: ["21 CFR Part 11", "GDP", "USP 1079"],
  },
  {
    icon: "🧬",
    name: "Biotech & Labs",
    description:
      "Monitor cell culture rooms, ULT freezers, and reagent storage with alarm escalation to on-call staff in under 2 minutes.",
    tags: ["ULT Freezers", "Lab Grade", "CAP/CLIA"],
  },
  {
    icon: "🚛",
    name: "Cold Chain Logistics",
    description:
      "End-to-end visibility from warehouse to last mile. Real-time reefer monitoring with geofenced excursion alerts.",
    tags: ["Reefer", "Last Mile", "Carrier Compliance"],
  },
  {
    icon: "🌾",
    name: "Agriculture",
    description:
      "Protect harvest value in post-harvest storage. Monitor produce coolers and controlled-atmosphere rooms by variety and lot.",
    tags: ["CA Storage", "Produce", "Lot Tracking"],
  },
  {
    icon: "🏭",
    name: "Industrial Cold Storage",
    description:
      "Fleet-wide visibility across multi-site operations. Demand charge optimization and compressor health monitoring built in.",
    tags: ["Multi-site", "Energy Mgmt", "Compressors"],
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block text-xs font-medium text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1.5 rounded-full mb-4">
            Built for your vertical
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            One platform. Every cold chain.
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Whether you're storing vaccines or frozen pizza, the compliance
            requirements are serious. Kelvex handles all of it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map(({ icon, name, description, tags }) => (
            <div
              key={name}
              className="card-border bg-[#1e293b]/50 rounded-xl p-6 transition-all hover:bg-[#1e293b]/80 group cursor-default"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-white font-semibold text-base mb-2">{name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-teal-400/80 bg-teal-500/8 border border-teal-500/15 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

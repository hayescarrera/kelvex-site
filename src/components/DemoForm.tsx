"use client";
import { useState } from "react";

export default function DemoForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", industry: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="demo" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-block text-xs font-medium text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1.5 rounded-full mb-6">
              Book a demo
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
              See Kelvex in your facility
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              30-minute live walkthrough with a real dataset from your industry.
              We'll answer your compliance and integration questions directly.
            </p>
            <div className="flex flex-col gap-4">
              {[
                "Live demo with data from your industry vertical",
                "Integration assessment for your existing controllers",
                "Compliance gap analysis (FSMA, GDP, HACCP)",
                "14-day free trial starts same day",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-teal-500/15 border border-teal-500/30 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-slate-300 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="card-border bg-[#1e293b]/60 rounded-2xl p-8">
            {status === "error" && (
              <div className="mb-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg px-4 py-3">
                Something went wrong — please email us directly at{" "}
                <a href="mailto:ben@kelvex.io" className="underline">ben@kelvex.io</a>
              </div>
            )}
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-14 h-14 bg-teal-500/15 border border-teal-500/30 rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4 10-10" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-xl">We'll be in touch</h3>
                <p className="text-slate-400 text-sm">
                  Expect a calendar invite within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-400 font-medium">Full name</label>
                    <input
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-400 font-medium">Work email</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-slate-400 font-medium">Company</label>
                  <input
                    required
                    placeholder="Acme Cold Storage"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-slate-400 font-medium">Industry</label>
                  <select
                    value={form.industry}
                    onChange={(e) => setForm({ ...form, industry: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500/50 transition-colors appearance-none"
                  >
                    <option value="" className="bg-slate-900">Select your industry</option>
                    <option value="food" className="bg-slate-900">Food & Beverage</option>
                    <option value="pharma" className="bg-slate-900">Pharmaceutical</option>
                    <option value="biotech" className="bg-slate-900">Biotech / Labs</option>
                    <option value="logistics" className="bg-slate-900">Cold Chain Logistics</option>
                    <option value="agriculture" className="bg-slate-900">Agriculture</option>
                    <option value="industrial" className="bg-slate-900">Industrial Cold Storage</option>
                    <option value="other" className="bg-slate-900">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-slate-400 font-medium">
                    Tell us about your setup{" "}
                    <span className="text-slate-600">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="How many locations? Current monitoring setup? Compliance requirements?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-teal-500 hover:bg-teal-400 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-teal-500/20 mt-2"
                >
                  {status === "sending" ? "Sending..." : "Request a demo →"}
                </button>

                <p className="text-center text-xs text-slate-500">
                  No sales pressure. We'll show you the product and answer your questions.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import Reveal from "@/components/Reveal";
import WideCard from "@/components/WideCard";
import MiniCard from "@/components/MiniCard";
import InsightsFeed from "@/components/InsightsFeed";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div id="top">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[580px] h-[580px] rounded-full bg-[#64b8c0]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-24 w-[380px] h-[380px] rounded-full bg-[#112b50]/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            {/* Left copy */}
            <Reveal>
              <div>
                <span className="inline-block rounded-full bg-[#64b8c0]/10 px-4 py-1.5 text-xs font-semibold text-[#64b8c0] mb-5">
                  Inventory analytics for modern retailers
                </span>
                <h1 className="text-4xl font-semibold tracking-tight text-[#112b50] md:text-5xl leading-tight">
                  Never lose{" "}
                  <span className="text-[#ef9f38]">track</span>
                  <br />
                  of your inventory again
                </h1>

                <p className="mt-6 max-w-md text-base text-neutral-600">
                  We help small and mid-sized retailers improve inventory
                  decisions using analytics, automation, and scalable cloud
                  data infrastructure.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="rounded-full bg-[#64b8c0] px-7 py-3 text-sm font-semibold text-white hover:opacity-90 transition shadow-sm"
                  >
                    Contact us
                  </a>
                  <a
                    href="#how-it-works"
                    className="rounded-full border border-[#112b50]/25 px-7 py-3 text-sm font-semibold text-[#112b50] hover:bg-[#112b50]/5 transition"
                  >
                    See How it works
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Right — live insights feed */}
            <Reveal delay={0.1}>
              <InsightsFeed light />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHO IS THIS FOR ──────────────────────────────── */}
      <section id="who-its-for" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-sm font-semibold text-[#ef9f38]">Who is this for</p>
            <h2 className="mt-2 text-3xl font-bold text-neutral-900">
              Built for teams drowning in inventory complexity
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Retail teams",
                desc: "Managing hundreds of SKUs across locations.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#64b8c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                ),
              },
              {
                title: "Lean teams",
                desc: "No dedicated data engineer or analytics team.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#64b8c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
              {
                title: "Inventory getting harder",
                desc: "More SKUs, seasonality, suppliers, and stockouts.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#64b8c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#112b50] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#64b8c0]">{item.title}</h3>
                    <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section id="how-it-works" className="bg-[#f0f7f8] py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-sm font-semibold text-[#ef9f38]">How it works</p>
            <h2 className="mt-2 text-3xl font-bold text-neutral-900">
              Three steps from messy data to clear decisions
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              We&apos;re onboarding a limited number of retailers
            </p>
          </Reveal>

          <div className="mt-12 grid gap-0 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect your systems",
                body: "We securely ingest sales, inventory, and POS data from your existing tools. No disruption to your operations.",
                label: "Examples:",
                sub: "POS · Inventory · Sales exports",
              },
              {
                step: "02",
                title: "Clean & analyze",
                body: "We validate, standardize, and model your data using automated analytics pipelines built for accuracy and scale.",
                label: "Keywords:",
                sub: "Validation · Trends · Forecast-ready",
              },
              {
                step: "03",
                title: "Act with confidence",
                body: "You receive clear, actionable insights to improve stock health, optimize reordering, and understand product performance.",
                label: "Outcomes:",
                sub: "Fewer stockouts · Reduced overstock · Better cash flow",
              },
            ].map((card, i, arr) => (
              <Reveal key={card.step} delay={i * 0.08}>
                <div className="relative flex flex-col">
                  {/* Connector line between steps */}
                  {i < arr.length - 1 && (
                    <div className="hidden md:block absolute top-[2.15rem] left-1/2 w-full h-[2px] bg-gradient-to-r from-[#64b8c0] to-[#64b8c0]/20 z-0" />
                  )}

                  <div className="relative z-10 flex flex-col items-center text-center px-6">
                    {/* Step circle */}
                    <div className="w-16 h-16 rounded-full bg-[#112b50] border-4 border-white shadow-md flex items-center justify-center mb-5">
                      <span className="text-lg font-bold text-[#64b8c0]">{card.step}</span>
                    </div>

                    <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-6 shadow-sm w-full">
                      <h3 className="text-base font-semibold text-neutral-900">{card.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral-600">{card.body}</p>
                    </div>

                    <div className="mt-4">
                      <span className="text-xs font-semibold text-[#64b8c0]">{card.label}</span>
                      <p className="mt-0.5 text-xs text-neutral-500">{card.sub}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE ─────────────────────────────────── */}
      <section id="architecture" className="bg-[#f0f7f8] py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-3xl font-bold text-neutral-900">Architecture</h2>
            <p className="mt-2 text-sm text-[#112b50] italic">
              A modular, cloud-ready analytics architecture designed for reliable inventory decision-making.
            </p>
            <p className="text-sm text-[#112b50] italic">
              The architecture reflects a reusable analytical framework developed to address recurring inventory
              decision challenges across different retail environments
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            {/* Flow diagram */}
            <div className="mt-10 relative">
              {/* Horizontal connector line (desktop) */}
              <div className="hidden md:block absolute top-[28px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#112b50] via-[#64b8c0] to-[#64b8c0]/40" />

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    label: "Data Sources",
                    sub: "POS · Inventory · Sales",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
                        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
                      </svg>
                    ),
                    desc: "POS, inventory, and sales data ingested through standardized exports — no disruption to operations.",
                  },
                  {
                    label: "Ingestion & Validation",
                    sub: "",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                      </svg>
                    ),
                    desc: "Rule-based checks ensure schema consistency and data quality before any analysis runs.",
                  },
                  {
                    label: "Analytics & Modeling",
                    sub: "",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
                        <line x1="6" y1="20" x2="6" y2="14"/>
                      </svg>
                    ),
                    desc: "Standardized models support trend analysis, inventory health scoring, and forecast-ready outputs.",
                  },
                  {
                    label: "Insights Layer",
                    sub: "",
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                    ),
                    desc: "Clear outputs for reordering decisions, performance monitoring, and cash-flow visibility.",
                  },
                ].map((item, i) => (
                  <div key={item.label} className="relative flex flex-col items-center text-center">
                    {/* Node circle */}
                    <div className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-4 border-2 shadow-sm ${i === 0 ? "bg-[#112b50] border-[#112b50] text-white" : "bg-white border-[#64b8c0] text-[#64b8c0]"}`}>
                      {item.icon}
                    </div>
                    {/* Label pill */}
                    <div className={`rounded-full px-4 py-2 text-center w-full ${i === 0 ? "bg-[#112b50]" : "bg-[#f0f9fa] border border-[#64b8c0]/30"}`}>
                      <div className={`text-xs font-semibold leading-tight ${i === 0 ? "text-white" : "text-[#112b50]"}`}>{item.label}</div>
                      {item.sub && <div className="mt-0.5 text-[10px] text-neutral-400">{item.sub}</div>}
                    </div>
                    {/* Description */}
                    <p className="mt-4 text-xs leading-relaxed text-[#112b50] italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EARLY ACCESS ─────────────────────────────────── */}
      <section id="early-access" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-sm font-semibold text-[#ef9f38]">Early Access</p>
            <h2 className="mt-2 text-3xl font-bold text-neutral-900">
              Be among the first retailers to pilot Clearpath
            </h2>
            <p className="mt-2 text-sm text-[#112b50] italic">
              We&apos;re onboarding a limited number of retailers to validate the MVP
              in real environments and shape the product roadmap.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3 text-left">
            <Reveal delay={0.0}>
              <MiniCard title="Pilot participants">
                Work directly with us to implement and validate the MVP in a
                real retail environment.
              </MiniCard>
            </Reveal>

            <Reveal delay={0.08}>
              <MiniCard title="Lean teams">
                No dedicated data engineer or analytics team required to get
                started.
              </MiniCard>
            </Reveal>

            <Reveal delay={0.16}>
              <MiniCard title="Inventory getting harder">
                More SKUs, seasonality, suppliers, and stockouts — we handle
                the complexity.
              </MiniCard>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex rounded-full bg-[#64b8c0] px-10 py-4 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition"
              >
                Request Early Access
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHY IT MATTERS ───────────────────────────────── */}
      <section id="why-it-matters" className="bg-[#f0f7f8] py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="text-sm font-semibold text-[#ef9f38]">Why it matters</p>
            <h2 className="mt-2 text-3xl font-bold text-[#112b50]">
              Inventory problems are cash-flow problems
            </h2>
            <p className="mt-3 text-sm text-[#112b50] italic max-w-2xl">
              Small and mid-sized retailers operate without the data infrastructure that large chains take for granted. Clearpath closes that gap — without needing an internal analytics team.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64b8c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                ),
                stat: "Cash flow",
                body: "Inventory inefficiency is a major source of cash-flow instability for small and mid-sized retailers.",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64b8c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                ),
                stat: "Less volatility",
                body: "Data-driven inventory decisions reduce operational volatility without requiring large internal analytics teams.",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64b8c0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                ),
                stat: "Stronger supply chains",
                body: "More resilient retail operations strengthen local economies and supply-chain reliability.",
              },
            ].map((item, i) => (
              <Reveal key={item.stat} delay={i * 0.08}>
                <div className="rounded-2xl border border-[#64b8c0]/20 bg-white px-7 py-8 flex flex-col gap-4 hover:border-[#64b8c0]/50 hover:shadow-sm transition-all">
                  <div className="w-11 h-11 rounded-full bg-[#f0f7f8] border border-[#64b8c0]/30 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-[#112b50]">{item.stat}</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section id="contact" className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <p className="text-sm font-semibold text-[#ef9f38]">Contact Us</p>
            <h2 className="mt-2 text-3xl font-bold text-neutral-900">
              Interested in piloting Clearpath Data or learning more about our approach? Get in touch.
            </h2>
            <p className="mt-4 text-sm text-neutral-500">
              Response time: Typically within 12–24 hours
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              Or email us directly at{" "}
              <a href="mailto:clearpathdata@gmail.com" className="text-[#64b8c0] hover:underline font-medium">
                clearpathdata@gmail.com
              </a>
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </section>

    </div>
  );
}

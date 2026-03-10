"use client";

import { useEffect, useRef, useState } from "react";

const tools = [
  { name: "Patreon", cost: 150, display: "$50-200+/mo", note: "5-12% revenue cut on everything you earn" },
  { name: "Ko-fi", cost: 8, display: "$6-9/mo", note: "Limited CRM, no real subscriber management" },
  { name: "Mailchimp", cost: 80, display: "$13-350/mo", note: "Separate subscriber list to maintain" },
  { name: "Discord Bots", cost: 12, display: "$5-20/mo", note: "Fragmented data across multiple bots" },
  { name: "Spreadsheets", cost: 0, display: "Free", note: "Hours of manual tracking every week" },
  { name: "Analytics Tools", cost: 30, display: "$10-50/mo", note: "Yet another dashboard to check" },
];

export function Comparison() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const items = ref.current.querySelectorAll(".reveal");
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        item.classList.add("visible");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            setInView(true);
          }
        });
      },
      { threshold: 0.1 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const runningTotal = tools.reduce((acc, t) => acc + t.cost, 0);

  return (
    <section ref={ref} className="relative py-32 bg-brand-darker overflow-hidden">
      <div className="absolute inset-0 bg-glow-purple opacity-20" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 reveal lg:sticky lg:top-32">
            <p className="text-sm text-accent-primary font-medium tracking-widest uppercase mb-3">
              The Problem
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-white tracking-wide mb-4">
              STOP PAYING
              <br />
              FOR 6 TOOLS.
            </h2>
            <p className="text-brand-muted text-lg mb-8">
              The average streamer spends $84-$629/month on fragmented tools
              that don&apos;t talk to each other. GuildKit replaces them all.
            </p>

            {/* Running total */}
            <div className="bg-brand-card border border-brand-border rounded-sm p-5 mb-4">
              <p className="text-[10px] text-brand-muted uppercase tracking-widest mb-1">
                Your current stack costs
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-4xl text-red-400 tracking-wide line-through opacity-60">
                  ~${runningTotal}/mo
                </span>
              </div>
              <p className="text-[11px] text-brand-muted mt-1">
                Plus hours of manual work switching between tabs
              </p>
            </div>

            <div className="bg-brand-card border border-neon-green/30 rounded-sm p-5 glow-purple-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-brand-muted uppercase tracking-widest mb-1">
                    GuildKit Pro — Everything included
                  </p>
                  <p className="font-heading text-5xl text-neon-green tracking-wide">
                    $19/mo
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-brand-muted">You save</p>
                  <p className="font-heading text-2xl text-neon-green tracking-wide">
                    ~${runningTotal - 19}/mo
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal" style={{ transitionDelay: "150ms" }}>
            <div className="space-y-3">
              {tools.map((tool, i) => {
                const cumulativeCost = tools
                  .slice(0, i + 1)
                  .reduce((a, t) => a + t.cost, 0);

                return (
                  <div
                    key={tool.name}
                    className="group relative"
                  >
                    <div className="flex items-center justify-between bg-brand-card/60 border border-brand-border rounded-sm p-4 hover:border-red-500/30 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-sm bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                            <span className="font-heading text-lg text-red-400/70">{tool.name[0]}</span>
                          </div>
                          {/* Strikethrough line */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[140%] h-[1px] bg-red-500/50 rotate-45" />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-white">{tool.name}</p>
                          <p className="text-[11px] text-brand-muted">{tool.note}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-red-400/70 line-through">
                          {tool.display}
                        </span>
                        <svg
                          className="w-5 h-5 text-neon-green"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    {/* Running total badge */}
                    {cumulativeCost > 0 && (
                      <div className="absolute -right-2 -top-2 bg-red-500/20 border border-red-500/30 rounded-sm px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[9px] text-red-400">${cumulativeCost}/mo wasted</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Arrow down to GuildKit */}
            <div className="flex flex-col items-center my-6">
              <svg className="w-6 h-6 text-accent-primary animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            <div className="bg-brand-card border border-neon-green/30 rounded-sm p-5 text-center glow-purple-sm">
              <p className="text-[10px] text-brand-muted uppercase tracking-widest mb-1">
                All replaced by
              </p>
              <p className="font-heading text-3xl text-white tracking-wide">
                GUILDKIT <span className="text-neon-green">$19/mo</span>
              </p>
              <p className="text-xs text-brand-muted mt-1">
                Zero revenue cuts. Zero fragmentation. One dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

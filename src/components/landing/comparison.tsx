"use client";

import { useEffect, useRef } from "react";

const tools = [
  { name: "Patreon", cost: "$50-200+/mo", note: "5-12% revenue cut", replaced: true },
  { name: "Ko-fi", cost: "$6-9/mo", note: "Limited CRM", replaced: true },
  { name: "Mailchimp", cost: "$13-350/mo", note: "Separate subscriber list", replaced: true },
  { name: "Discord Bots", cost: "$5-20/mo", note: "Fragmented data", replaced: true },
  { name: "Spreadsheets", cost: "Free", note: "Manual tracking, no automation", replaced: true },
  { name: "Analytics tools", cost: "$10-50/mo", note: "Yet another dashboard", replaced: true },
];

export function Comparison() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const items = ref.current.querySelectorAll(".reveal");
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        item.classList.add("visible");
        return;
      }
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-32 bg-brand-darker overflow-hidden">
      <div className="absolute inset-0 bg-glow-purple opacity-30" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 reveal">
            <p className="text-sm text-accent-primary font-medium tracking-widest uppercase mb-3">
              The Problem
            </p>
            <h2 className="font-heading text-5xl text-white tracking-wide mb-4">
              STOP PAYING
              <br />
              FOR 6 TOOLS.
            </h2>
            <p className="text-brand-muted text-lg mb-6">
              The average streamer spends $84-$629/month on fragmented tools
              that don&apos;t talk to each other. GuildKit replaces them all for $19/mo flat.
            </p>
            <div className="bg-brand-card border border-neon-green/30 rounded-sm p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-brand-muted uppercase tracking-wider">
                    GuildKit Pro
                  </p>
                  <p className="font-heading text-3xl text-neon-green tracking-wide">
                    $19/mo
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-brand-muted">replaces</p>
                  <p className="text-sm text-white line-through opacity-50">
                    $84-$629/mo
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal" style={{ transitionDelay: "150ms" }}>
            <div className="space-y-3">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-between bg-brand-card/50 border border-brand-border rounded-sm p-4 group hover:border-red-500/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div>
                      <p className="text-sm text-white">{tool.name}</p>
                      <p className="text-[11px] text-brand-muted">{tool.note}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-red-400/70 line-through">
                      {tool.cost}
                    </span>
                    <svg
                      className="w-4 h-4 text-neon-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    title: "GUILD MANAGER",
    subtitle: "Your subscriber CRM",
    description:
      "Create tiered memberships with custom perks. Track every fan's journey from first follow to loyal supporter. Tag, segment, and understand your community like never before.",
    color: "neon-purple",
    gradient: "from-neon-purple/20 to-transparent",
    mockup: (
      <div className="space-y-3">
        <div className="flex items-center justify-between bg-brand-dark/80 border border-brand-border rounded-sm p-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-neon-purple/20 flex items-center justify-center text-neon-purple text-xs font-bold">L</div>
            <div>
              <p className="text-xs text-white">Legendary Guild</p>
              <p className="text-[10px] text-brand-muted">$29/mo — 847 members</p>
            </div>
          </div>
          <div className="text-[10px] text-neon-green">+18 this week</div>
        </div>
        <div className="flex items-center justify-between bg-brand-dark/80 border border-brand-border rounded-sm p-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-neon-blue/20 flex items-center justify-center text-neon-blue text-xs font-bold">E</div>
            <div>
              <p className="text-xs text-white">Epic Guild</p>
              <p className="text-[10px] text-brand-muted">$14/mo — 1,203 members</p>
            </div>
          </div>
          <div className="text-[10px] text-neon-green">+32 this week</div>
        </div>
        <div className="flex items-center justify-between bg-brand-dark/80 border border-brand-border rounded-sm p-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-neon-cyan/20 flex items-center justify-center text-neon-cyan text-xs font-bold">R</div>
            <div>
              <p className="text-xs text-white">Rare Guild</p>
              <p className="text-[10px] text-brand-muted">Free — 3,415 members</p>
            </div>
          </div>
          <div className="text-[10px] text-brand-muted">+89 this week</div>
        </div>
      </div>
    ),
  },
  {
    title: "REVENUE HUB",
    subtitle: "Every dollar, tracked",
    description:
      "Stripe-powered subscriptions with zero revenue cuts. Track MRR, churn, LTV, and growth in real time. Manage sponsor deals and brand partnerships from one place.",
    color: "neon-green",
    gradient: "from-neon-green/20 to-transparent",
    mockup: (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-3">
            <p className="text-[10px] text-brand-muted uppercase">MRR</p>
            <p className="text-lg font-heading text-neon-green">$8,420</p>
          </div>
          <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-3">
            <p className="text-[10px] text-brand-muted uppercase">LTV</p>
            <p className="text-lg font-heading text-neon-cyan">$142</p>
          </div>
        </div>
        <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-3">
          <p className="text-[10px] text-brand-muted mb-2">Revenue Breakdown</p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-brand-border rounded-full h-2 overflow-hidden">
                <div className="h-full bg-neon-purple rounded-full" style={{ width: "60%" }} />
              </div>
              <span className="text-[10px] text-brand-muted w-20 text-right">Subs $5,052</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-brand-border rounded-full h-2 overflow-hidden">
                <div className="h-full bg-neon-blue rounded-full" style={{ width: "25%" }} />
              </div>
              <span className="text-[10px] text-brand-muted w-20 text-right">Tips $2,105</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-brand-border rounded-full h-2 overflow-hidden">
                <div className="h-full bg-neon-cyan rounded-full" style={{ width: "15%" }} />
              </div>
              <span className="text-[10px] text-brand-muted w-20 text-right">Sponsors $1,263</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "STREAM DASHBOARD",
    subtitle: "Know your numbers",
    description:
      "Track subscriber growth, peak engagement hours, and content performance. See what's working and double down. Built-in heatmaps show when your audience is most active.",
    color: "neon-cyan",
    gradient: "from-neon-cyan/20 to-transparent",
    mockup: (
      <div className="space-y-3">
        <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-3">
          <p className="text-[10px] text-brand-muted mb-2">Peak Hours Heatmap</p>
          <div className="grid grid-cols-12 gap-0.5">
            {[2, 1, 1, 0, 0, 1, 2, 3, 4, 5, 4, 3, 5, 6, 5, 4, 3, 4, 7, 8, 9, 8, 6, 4].map(
              (intensity, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-[2px]"
                  style={{
                    backgroundColor: `rgba(6, 182, 212, ${intensity * 0.1 + 0.05})`,
                  }}
                />
              ),
            )}
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[8px] text-brand-muted">12am</span>
            <span className="text-[8px] text-brand-muted">12pm</span>
            <span className="text-[8px] text-brand-muted">11pm</span>
          </div>
        </div>
        <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] text-brand-muted">Growth Trend</p>
            <p className="text-[10px] text-neon-green">+23% vs last month</p>
          </div>
          <div className="flex items-end gap-0.5 h-12">
            {[40, 35, 50, 45, 55, 60, 52, 65, 70, 68, 75, 82, 78, 85, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  backgroundColor: `rgba(6, 182, 212, ${0.3 + (i / 15) * 0.5})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "FAN MESSENGER",
    subtitle: "Reach every subscriber",
    description:
      "Email campaigns to subscriber segments. Automated welcome sequences when fans join your guild. Announcement broadcasts for new content, stream schedules, and drops.",
    color: "neon-pink",
    gradient: "from-neon-pink/20 to-transparent",
    mockup: (
      <div className="space-y-3">
        <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-white">New Season Announcement</p>
            <span className="text-[10px] px-2 py-0.5 bg-neon-green/10 text-neon-green rounded-sm">Sent</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <p className="text-[10px] text-brand-muted">Delivered</p>
              <p className="text-xs text-white">2,847</p>
            </div>
            <div>
              <p className="text-[10px] text-brand-muted">Opened</p>
              <p className="text-xs text-white">68%</p>
            </div>
            <div>
              <p className="text-[10px] text-brand-muted">Clicked</p>
              <p className="text-xs text-white">24%</p>
            </div>
          </div>
        </div>
        <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-3 opacity-70">
          <div className="flex items-center justify-between">
            <p className="text-xs text-white">Welcome Sequence</p>
            <span className="text-[10px] px-2 py-0.5 bg-neon-purple/10 text-neon-purple rounded-sm">Auto</span>
          </div>
          <p className="text-[10px] text-brand-muted mt-1">3 emails — triggers on guild join</p>
        </div>
      </div>
    ),
  },
];

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const items = sectionRef.current.querySelectorAll(".reveal");
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
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-32 bg-brand-darker"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl mb-20 reveal">
          <p className="text-sm text-accent-primary font-medium tracking-widest uppercase mb-3">
            Everything You Need
          </p>
          <h2 className="font-heading text-5xl md:text-6xl text-white tracking-wide mb-4">
            ONE PLATFORM.
            <br />
            ZERO COMPROMISES.
          </h2>
          <p className="text-brand-muted text-lg">
            Replace your fragmented stack of Patreon, Ko-fi, Mailchimp, and
            spreadsheets with a single, purpose-built dashboard.
          </p>
        </div>

        <div className="space-y-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal grid lg:grid-cols-12 gap-8 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <h3
                  className={`font-heading text-4xl tracking-wide text-${feature.color} mb-1`}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-brand-muted uppercase tracking-wider mb-4">
                  {feature.subtitle}
                </p>
                <p className="text-brand-text leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div
                className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div
                  className={`bg-brand-card border border-brand-border rounded-sm p-5 relative overflow-hidden`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} pointer-events-none`}
                  />
                  <div className="relative z-10">{feature.mockup}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

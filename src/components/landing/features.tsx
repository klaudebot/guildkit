"use client";

import { useEffect, useRef, useState } from "react";

interface FeatureTab {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  borderColor: string;
  description: string;
  mockup: React.ReactNode;
}

const features: FeatureTab[] = [
  {
    id: "guild",
    title: "GUILD MANAGER",
    subtitle: "Your subscriber CRM",
    color: "text-neon-purple",
    borderColor: "border-neon-purple/40",
    description:
      "Create tiered memberships with custom perks. Track every fan's journey from first follow to loyal supporter. Tag, segment, and understand your community like never before.",
    mockup: (
      <div className="space-y-3">
        {/* Tier overview */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: "Legendary", members: "847", price: "$29/mo", color: "neon-purple", trend: "+18" },
            { name: "Epic", members: "1,203", price: "$14/mo", color: "neon-blue", trend: "+32" },
            { name: "Rare", members: "3,415", price: "Free", color: "neon-cyan", trend: "+89" },
          ].map((tier) => (
            <div key={tier.name} className={`bg-brand-dark/80 border border-${tier.color}/20 rounded-sm p-3`}>
              <div className={`w-6 h-6 rounded-sm bg-${tier.color}/20 flex items-center justify-center mb-2`}>
                <span className={`text-[10px] text-${tier.color} font-bold`}>{tier.name[0]}</span>
              </div>
              <p className="text-xs text-white">{tier.name}</p>
              <p className="text-[10px] text-brand-muted">{tier.price}</p>
              <p className={`text-lg font-heading text-${tier.color} tracking-wide`}>{tier.members}</p>
              <p className="text-[9px] text-neon-green">+{tier.trend} this week</p>
            </div>
          ))}
        </div>
        {/* Member list */}
        <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-brand-muted">Recent Activity</p>
            <div className="flex gap-1">
              <span className="text-[9px] px-2 py-0.5 bg-brand-border rounded-sm text-brand-muted">All</span>
              <span className="text-[9px] px-2 py-0.5 bg-accent-primary/20 rounded-sm text-accent-primary">New</span>
              <span className="text-[9px] px-2 py-0.5 bg-brand-border rounded-sm text-brand-muted">Upgraded</span>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { name: "NightBlade_99", action: "upgraded to Legendary", time: "2m ago", color: "neon-purple" },
              { name: "xStormRaider", action: "joined Epic tier", time: "8m ago", color: "neon-blue" },
              { name: "PixelQueen_", action: "renewed Legendary", time: "15m ago", color: "neon-purple" },
              { name: "GhostRunner", action: "joined Rare tier", time: "23m ago", color: "neon-cyan" },
              { name: "ShadowMerc", action: "upgraded to Epic", time: "31m ago", color: "neon-blue" },
            ].map((m) => (
              <div key={m.name} className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <div className={`w-5 h-5 rounded-sm bg-${m.color}/20 flex items-center justify-center`}>
                    <span className={`text-[9px] text-${m.color}`}>{m.name[0]}</span>
                  </div>
                  <span className="text-[11px] text-white">{m.name}</span>
                  <span className="text-[10px] text-brand-muted">{m.action}</span>
                </div>
                <span className="text-[9px] text-brand-muted">{m.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "revenue",
    title: "REVENUE HUB",
    subtitle: "Every dollar, tracked",
    color: "text-neon-green",
    borderColor: "border-neon-green/40",
    description:
      "Stripe-powered subscriptions with zero revenue cuts. Track MRR, churn, LTV, and growth in real time. Manage sponsor deals and brand partnerships from one place.",
    mockup: (
      <div className="space-y-3">
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: "MRR", value: "$8,420", change: "+23%", color: "text-neon-green" },
            { label: "LTV", value: "$142", change: "+8%", color: "text-neon-cyan" },
            { label: "Churn", value: "2.1%", change: "-0.4%", color: "text-neon-blue" },
            { label: "Net Rev.", value: "$7,840", change: "+19%", color: "text-neon-purple" },
          ].map((s) => (
            <div key={s.label} className="bg-brand-dark/80 border border-brand-border rounded-sm p-2.5">
              <p className="text-[9px] text-brand-muted uppercase">{s.label}</p>
              <p className={`text-base font-heading ${s.color} tracking-wide`}>{s.value}</p>
              <p className="text-[9px] text-neon-green">{s.change}</p>
            </div>
          ))}
        </div>
        <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-4">
          <p className="text-[10px] text-brand-muted mb-2">Revenue Breakdown</p>
          <div className="space-y-2">
            {[
              { label: "Subscriptions", value: "$5,052", pct: 60, color: "bg-neon-purple" },
              { label: "One-time Tips", value: "$2,105", pct: 25, color: "bg-neon-blue" },
              { label: "Sponsor Deals", value: "$1,263", pct: 15, color: "bg-neon-cyan" },
            ].map((r) => (
              <div key={r.label} className="flex items-center gap-2">
                <span className="text-[10px] text-brand-text w-24">{r.label}</span>
                <div className="flex-1 bg-brand-border rounded-full h-2 overflow-hidden">
                  <div className={`h-full ${r.color} rounded-full`} style={{ width: `${r.pct}%` }} />
                </div>
                <span className="text-[10px] text-brand-muted w-14 text-right">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] text-brand-muted">12-Month Revenue</p>
            <p className="text-[10px] text-neon-green">+147% YoY</p>
          </div>
          <div className="flex items-end gap-[3px] h-16">
            {[18, 22, 28, 32, 38, 42, 48, 55, 62, 70, 80, 92].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: `linear-gradient(to top, rgba(16, 185, 129, 0.6), rgba(6, 182, 212, 0.3))`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "analytics",
    title: "STREAM ANALYTICS",
    subtitle: "Know your numbers",
    color: "text-neon-cyan",
    borderColor: "border-neon-cyan/40",
    description:
      "Track subscriber growth, peak engagement hours, and content performance. See what works and double down. Built-in heatmaps show when your audience is most active.",
    mockup: (
      <div className="space-y-3">
        <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-4">
          <p className="text-[10px] text-brand-muted mb-2">Peak Hours Heatmap</p>
          <div className="grid grid-cols-24 gap-[2px]">
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
            <span className="text-[8px] text-brand-muted">6am</span>
            <span className="text-[8px] text-brand-muted">12pm</span>
            <span className="text-[8px] text-brand-muted">6pm</span>
            <span className="text-[8px] text-brand-muted">11pm</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] text-brand-muted">Growth Trend</p>
              <p className="text-[9px] text-neon-green">+23%</p>
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
          <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-3">
            <p className="text-[10px] text-brand-muted mb-2">Top Content</p>
            <div className="space-y-1.5">
              {[
                { name: "Ranked Grind", views: "14.2K" },
                { name: "Viewer Games", views: "11.8K" },
                { name: "Tutorial Series", views: "9.4K" },
              ].map((c) => (
                <div key={c.name} className="flex items-center justify-between">
                  <span className="text-[10px] text-brand-text">{c.name}</span>
                  <span className="text-[10px] text-neon-cyan">{c.views}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-brand-muted">Avg Watch Time</p>
              <p className="text-lg font-heading text-neon-cyan">2h 34m</p>
            </div>
            <div>
              <p className="text-[10px] text-brand-muted">Peak Concurrent</p>
              <p className="text-lg font-heading text-neon-cyan">4,812</p>
            </div>
            <div>
              <p className="text-[10px] text-brand-muted">Chat Rate</p>
              <p className="text-lg font-heading text-neon-cyan">142/min</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "messenger",
    title: "FAN MESSENGER",
    subtitle: "Reach every subscriber",
    color: "text-neon-pink",
    borderColor: "border-neon-pink/40",
    description:
      "Email campaigns to subscriber segments. Automated welcome sequences when fans join your guild. Announcement broadcasts for new content, stream schedules, and drops.",
    mockup: (
      <div className="space-y-3">
        <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-white font-medium">Recent Campaigns</p>
            <span className="text-[9px] px-2 py-0.5 bg-neon-pink/10 text-neon-pink rounded-sm">3 Active</span>
          </div>
          {[
            { name: "New Season Announcement", status: "Sent", statusColor: "neon-green", delivered: "2,847", opened: "68%", clicked: "24%" },
            { name: "Exclusive Merch Drop", status: "Scheduled", statusColor: "neon-blue", delivered: "--", opened: "--", clicked: "--" },
          ].map((c) => (
            <div key={c.name} className="bg-brand-darker/50 border border-brand-border rounded-sm p-3 mb-2">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[11px] text-white">{c.name}</p>
                <span className={`text-[9px] px-2 py-0.5 bg-${c.statusColor}/10 text-${c.statusColor} rounded-sm`}>
                  {c.status}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <p className="text-[9px] text-brand-muted">Delivered</p>
                  <p className="text-[11px] text-white">{c.delivered}</p>
                </div>
                <div>
                  <p className="text-[9px] text-brand-muted">Opened</p>
                  <p className="text-[11px] text-white">{c.opened}</p>
                </div>
                <div>
                  <p className="text-[9px] text-brand-muted">Clicked</p>
                  <p className="text-[11px] text-white">{c.clicked}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] text-brand-muted">Automations</p>
            <span className="text-[9px] text-neon-green">All Running</span>
          </div>
          <div className="space-y-1.5">
            {[
              { name: "Welcome Sequence", emails: "3 emails", trigger: "On guild join" },
              { name: "Win-back Flow", emails: "2 emails", trigger: "On churn risk" },
              { name: "Upgrade Nudge", emails: "1 email", trigger: "After 30 days" },
            ].map((a) => (
              <div key={a.name} className="flex items-center justify-between py-1 border-b border-brand-border/50 last:border-0">
                <div>
                  <p className="text-[11px] text-white">{a.name}</p>
                  <p className="text-[9px] text-brand-muted">{a.emails} / {a.trigger}</p>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 bg-neon-purple/10 text-neon-purple rounded-sm">Auto</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "support",
    title: "SUPPORT BASE",
    subtitle: "Help without the headache",
    color: "text-neon-blue",
    borderColor: "border-neon-blue/40",
    description:
      "Built-in help desk for your community. FAQ pages, ticket management, and quick replies. Keep your subscribers happy without juggling another tool.",
    mockup: (
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Open Tickets", value: "12", color: "text-neon-blue" },
            { label: "Avg Response", value: "14m", color: "text-neon-green" },
            { label: "Satisfaction", value: "98%", color: "text-neon-cyan" },
          ].map((s) => (
            <div key={s.label} className="bg-brand-dark/80 border border-brand-border rounded-sm p-2.5 text-center">
              <p className="text-[9px] text-brand-muted uppercase">{s.label}</p>
              <p className={`text-lg font-heading ${s.color} tracking-wide`}>{s.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-brand-muted">Recent Tickets</p>
            <div className="flex gap-1">
              <span className="text-[9px] px-2 py-0.5 bg-neon-blue/10 text-neon-blue rounded-sm">Open</span>
              <span className="text-[9px] px-2 py-0.5 bg-brand-border rounded-sm text-brand-muted">Closed</span>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { user: "DragonSlayer", subject: "Cannot access Legendary perks", priority: "High", time: "5m ago", priorityColor: "text-red-400" },
              { user: "NovaStar_", subject: "Billing question about upgrade", priority: "Medium", time: "12m ago", priorityColor: "text-yellow-400" },
              { user: "FrostByte", subject: "Feature request: Discord roles", priority: "Low", time: "1h ago", priorityColor: "text-neon-cyan" },
              { user: "ThunderKat", subject: "Stream embed not loading", priority: "High", time: "2h ago", priorityColor: "text-red-400" },
            ].map((t) => (
              <div key={t.user} className="flex items-center justify-between py-1.5 border-b border-brand-border/30 last:border-0">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="w-5 h-5 rounded-sm bg-neon-blue/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[9px] text-neon-blue">{t.user[0]}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-white truncate">{t.subject}</p>
                    <p className="text-[9px] text-brand-muted">{t.user} / {t.time}</p>
                  </div>
                </div>
                <span className={`text-[9px] ${t.priorityColor} flex-shrink-0 ml-2`}>{t.priority}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const switchTab = (index: number) => {
    if (index === activeTab) return;
    setActiveTab(index);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    if (!sectionRef.current) return;
    const items = sectionRef.current.querySelectorAll(".reveal");
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        item.classList.add("visible");
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

  const active = features[activeTab];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-32 bg-brand-darker"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl mb-16 reveal">
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

        <div className="reveal" style={{ transitionDelay: "100ms" }}>
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-brand-border pb-4">
            {features.map((f, i) => (
              <button
                key={f.id}
                onClick={() => switchTab(i)}
                className={`px-4 py-2.5 rounded-sm text-sm font-medium tracking-wide transition-all duration-200 ${
                  i === activeTab
                    ? `bg-brand-card ${f.borderColor} border ${f.color}`
                    : "text-brand-muted hover:text-white hover:bg-brand-card/50 border border-transparent"
                }`}
              >
                {f.title}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: description */}
            <div className="lg:col-span-4" key={`desc-${animKey}`}>
              <div className="tab-panel-enter">
                <h3 className={`font-heading text-4xl tracking-wide ${active.color} mb-1`}>
                  {active.title}
                </h3>
                <p className="text-sm text-brand-muted uppercase tracking-wider mb-4">
                  {active.subtitle}
                </p>
                <p className="text-brand-text leading-relaxed text-base">
                  {active.description}
                </p>
              </div>
            </div>

            {/* Right: mockup panel */}
            <div className="lg:col-span-8" key={`mockup-${animKey}`}>
              <div className="tab-panel-enter">
                <div className={`bg-brand-card border ${active.borderColor} rounded-sm overflow-hidden`}>
                  {/* Mockup title bar */}
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-brand-border bg-brand-dark/50">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/60" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                      <div className="w-2 h-2 rounded-full bg-green-500/60" />
                    </div>
                    <span className="text-[10px] text-brand-muted ml-2">
                      GuildKit / {active.title}
                    </span>
                    <div className="ml-auto flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-green live-dot" />
                      <span className="text-[9px] text-neon-green">LIVE</span>
                    </div>
                  </div>
                  <div className="p-5">
                    {active.mockup}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

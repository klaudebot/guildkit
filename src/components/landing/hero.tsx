"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function useCountUp(end: number, duration: number, startCounting: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, startCounting]);

  return value;
}

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 13) % 100}%`,
  delay: `${(i * 0.7) % 8}s`,
  duration: `${8 + (i % 6) * 2}s`,
  size: i % 3 === 0 ? 3 : 2,
  opacity: 0.15 + (i % 4) * 0.08,
}));

export function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const rect = glowRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glowRef.current.style.setProperty("--mouse-x", `${x}px`);
      glowRef.current.style.setProperty("--mouse-y", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const streamers = useCountUp(12847, 2000, mounted);
  const revenue = useCountUp(24, 2200, mounted);
  const uptime = useCountUp(999, 2400, mounted);

  return (
    <section
      ref={glowRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at var(--mouse-x, 50%) var(--mouse-y, 30%), rgba(168, 85, 247, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 40%),
          radial-gradient(ellipse at 80% 20%, rgba(6, 182, 212, 0.06) 0%, transparent 40%),
          #06060A
        `,
      }}
    >
      {/* Particle field */}
      <div className="particle-field">
        {particles.map((p) => (
          <span
            key={p.id}
            style={{
              left: p.left,
              bottom: "-10px",
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-dot-grid opacity-40" />

      {/* Large ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-glow-purple rounded-full blur-3xl opacity-30 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-glow-blue rounded-full blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left side -- text */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 bg-accent-primary/10 border border-accent-primary/20 px-3 py-1 rounded-sm mb-6">
            <span className="relative w-2 h-2 rounded-full bg-neon-green">
              <span className="absolute inset-0 rounded-full bg-neon-green animate-ping opacity-75" />
            </span>
            <span className="text-xs text-accent-primary font-medium tracking-wide uppercase">
              Now in Public Beta
            </span>
          </div>

          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-white mb-6 tracking-wide">
            YOUR
            <br />
            GUILD.
            <br />
            <span className="text-gradient">YOUR RULES.</span>
          </h1>

          <p className="text-lg text-brand-muted max-w-md mb-8 leading-relaxed">
            The all-in-one membership platform built for game streamers.
            Subscribers, revenue, community, and analytics — unified in one
            dashboard.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/sign-up">
              <Button size="lg" className="w-full sm:w-auto shimmer">
                Start Free — No Card Required
              </Button>
            </Link>
            <a href="#features">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                See Features
              </Button>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-brand-muted">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Free up to 50 members
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              0% revenue cut
            </div>
          </div>

          {/* Animated counters */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="border-l-2 border-neon-purple/40 pl-3">
              <p className="font-heading text-2xl md:text-3xl text-white tracking-wide">
                {mounted ? streamers.toLocaleString() : "12,847"}
              </p>
              <p className="text-xs text-brand-muted uppercase tracking-wider">Streamers</p>
            </div>
            <div className="border-l-2 border-neon-green/40 pl-3">
              <p className="font-heading text-2xl md:text-3xl text-white tracking-wide">
                ${mounted ? `${revenue / 10}.${revenue % 10}M` : "2.4M"}
              </p>
              <p className="text-xs text-brand-muted uppercase tracking-wider">Processed</p>
            </div>
            <div className="border-l-2 border-neon-cyan/40 pl-3">
              <p className="font-heading text-2xl md:text-3xl text-white tracking-wide">
                {mounted ? `${Math.floor(uptime / 10)}.${uptime % 10}%` : "99.9%"}
              </p>
              <p className="text-xs text-brand-muted uppercase tracking-wider">Uptime</p>
            </div>
          </div>
        </div>

        {/* Right side -- floating dashboard mockup */}
        <div className="lg:col-span-7 relative">
          <div className="relative animate-float">
            {/* Dashboard mockup */}
            <div className="bg-brand-card border border-brand-border rounded-sm overflow-hidden glow-purple-intense shimmer">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-brand-border bg-brand-dark/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-brand-muted ml-2">
                  GuildKit Dashboard
                </span>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="relative w-1.5 h-1.5 rounded-full bg-neon-green live-dot" />
                  <span className="text-[10px] text-neon-green">LIVE</span>
                </div>
              </div>
              {/* Mock content */}
              <div className="p-5 space-y-4">
                {/* Stats row */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: "Total Members", value: "2,847", change: "+12%", color: "text-neon-purple", borderColor: "border-neon-purple/20" },
                    { label: "MRR", value: "$8,420", change: "+23%", color: "text-neon-green", borderColor: "border-neon-green/20" },
                    { label: "Engagement", value: "89%", change: "+5%", color: "text-neon-cyan", borderColor: "border-neon-cyan/20" },
                    { label: "New Subs", value: "142", change: "+34%", color: "text-neon-blue", borderColor: "border-neon-blue/20" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className={`bg-brand-dark/60 border ${stat.borderColor} rounded-sm p-3`}
                    >
                      <p className="text-[9px] text-brand-muted uppercase tracking-wider">
                        {stat.label}
                      </p>
                      <p className={`text-lg font-heading tracking-wide ${stat.color} value-tick`}>
                        {stat.value}
                      </p>
                      <p className="text-[9px] text-neon-green">{stat.change} this month</p>
                    </div>
                  ))}
                </div>
                {/* Two-column row */}
                <div className="grid grid-cols-5 gap-3">
                  {/* Revenue chart */}
                  <div className="col-span-3 bg-brand-dark/60 border border-brand-border rounded-sm p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs text-brand-muted">Revenue Growth</p>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
                        <span className="text-[9px] text-brand-muted mr-2">Subs</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                        <span className="text-[9px] text-brand-muted">Tips</span>
                      </div>
                    </div>
                    <div className="flex items-end gap-[3px] h-20">
                      {[30, 45, 38, 52, 48, 65, 58, 72, 68, 85, 78, 92, 88, 95].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm bar-animate"
                            style={{
                              height: `${h}%`,
                              background: `linear-gradient(to top, rgba(168, 85, 247, 0.7), rgba(59, 130, 246, 0.3))`,
                              animationDelay: `${i * 0.05}s`,
                            }}
                          />
                        ),
                      )}
                    </div>
                  </div>
                  {/* Top tiers */}
                  <div className="col-span-2 bg-brand-dark/60 border border-brand-border rounded-sm p-4">
                    <p className="text-xs text-brand-muted mb-2">Top Tiers</p>
                    <div className="space-y-2">
                      {[
                        { name: "Legendary", pct: 72, color: "bg-neon-purple" },
                        { name: "Epic", pct: 58, color: "bg-neon-blue" },
                        { name: "Rare", pct: 35, color: "bg-neon-cyan" },
                      ].map((tier) => (
                        <div key={tier.name}>
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="text-[10px] text-brand-text">{tier.name}</span>
                            <span className="text-[10px] text-brand-muted">{tier.pct}%</span>
                          </div>
                          <div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
                            <div className={`h-full ${tier.color} rounded-full`} style={{ width: `${tier.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Member list preview */}
                <div className="bg-brand-dark/60 border border-brand-border rounded-sm p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-brand-muted">Recent Members</p>
                    <p className="text-[9px] text-accent-primary">View All</p>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { name: "NightBlade_99", tier: "Legendary", color: "bg-neon-purple", amount: "$29/mo", joined: "2m ago" },
                      { name: "xStormRaider", tier: "Epic", color: "bg-neon-blue", amount: "$14/mo", joined: "8m ago" },
                      { name: "PixelQueen_", tier: "Legendary", color: "bg-neon-purple", amount: "$29/mo", joined: "12m ago" },
                      { name: "DarkMatter42", tier: "Rare", color: "bg-neon-cyan", amount: "Free", joined: "1h ago" },
                    ].map((m) => (
                      <div key={m.name} className="flex items-center justify-between py-1">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-sm ${m.color}/20 flex items-center justify-center`}>
                            <span className={`text-[10px] ${m.color.replace("bg-", "text-")}`}>
                              {m.name[0]}
                            </span>
                          </div>
                          <div>
                            <span className="text-xs text-brand-text">{m.name}</span>
                            <span className="text-[9px] text-brand-muted ml-2">{m.joined}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] text-brand-muted">{m.amount}</span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded-sm ${m.color}/10 ${m.color.replace("bg-", "text-")}`}>
                            {m.tier}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating accent elements */}
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-glow-purple rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-glow-blue rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>
      </div>

      {/* Trusted by bar */}
      <div className="relative z-10 border-t border-brand-border/50 bg-brand-darker/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-[10px] text-brand-muted uppercase tracking-[0.2em] text-center mb-4">
            Trusted by creators on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {[
              { name: "TWITCH PARTNERS", color: "text-[#9146FF]/60" },
              { name: "KICK CREATORS", color: "text-neon-green/60" },
              { name: "YOUTUBE GAMING", color: "text-red-500/60" },
              { name: "DISCORD COMMUNITIES", color: "text-[#5865F2]/60" },
              { name: "RUMBLE STREAMERS", color: "text-neon-cyan/60" },
            ].map((brand) => (
              <span
                key={brand.name}
                className={`font-heading text-sm md:text-base tracking-[0.15em] ${brand.color} select-none`}
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      ref={glowRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
      style={{
        background: `
          radial-gradient(ellipse at var(--mouse-x, 50%) var(--mouse-y, 30%), rgba(168, 85, 247, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 20% 80%, rgba(59, 130, 246, 0.06) 0%, transparent 40%),
          radial-gradient(ellipse at 80% 20%, rgba(6, 182, 212, 0.04) 0%, transparent 40%),
          #06060A
        `,
      }}
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left side — text */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 bg-accent-primary/10 border border-accent-primary/20 px-3 py-1 rounded-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
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
              <Button size="lg" className="w-full sm:w-auto">
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
              Free up to 50 members
            </div>
            <div className="flex items-center gap-2">
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
              0% revenue cut
            </div>
          </div>
        </div>

        {/* Right side — floating dashboard mockup */}
        <div className="lg:col-span-7 relative">
          <div className="relative animate-float">
            {/* Dashboard mockup */}
            <div className="bg-brand-card border border-brand-border rounded-sm overflow-hidden glow-purple">
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
              </div>
              {/* Mock content */}
              <div className="p-6 space-y-4">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      label: "Total Members",
                      value: "2,847",
                      change: "+12%",
                      color: "text-neon-purple",
                    },
                    {
                      label: "MRR",
                      value: "$8,420",
                      change: "+23%",
                      color: "text-neon-green",
                    },
                    {
                      label: "Engagement",
                      value: "89%",
                      change: "+5%",
                      color: "text-neon-cyan",
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-brand-dark/60 border border-brand-border rounded-sm p-3"
                    >
                      <p className="text-[10px] text-brand-muted uppercase tracking-wider">
                        {stat.label}
                      </p>
                      <p className={`text-xl font-heading tracking-wide ${stat.color}`}>
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-neon-green">{stat.change} this month</p>
                    </div>
                  ))}
                </div>
                {/* Mock chart */}
                <div className="bg-brand-dark/60 border border-brand-border rounded-sm p-4">
                  <p className="text-xs text-brand-muted mb-3">Revenue Growth</p>
                  <div className="flex items-end gap-1 h-20">
                    {[30, 45, 38, 52, 48, 65, 58, 72, 68, 85, 78, 92].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm transition-all"
                          style={{
                            height: `${h}%`,
                            background: `linear-gradient(to top, rgba(168, 85, 247, 0.6), rgba(59, 130, 246, 0.3))`,
                          }}
                        />
                      ),
                    )}
                  </div>
                </div>
                {/* Member list preview */}
                <div className="bg-brand-dark/60 border border-brand-border rounded-sm p-4">
                  <p className="text-xs text-brand-muted mb-2">Recent Members</p>
                  <div className="space-y-2">
                    {[
                      { name: "NightBlade_99", tier: "Legendary", color: "bg-neon-purple" },
                      { name: "xStormRaider", tier: "Epic", color: "bg-neon-blue" },
                      { name: "PixelQueen", tier: "Rare", color: "bg-neon-cyan" },
                    ].map((m) => (
                      <div
                        key={m.name}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-sm ${m.color}/20 flex items-center justify-center`}>
                            <span className={`text-[10px] ${m.color.replace('bg-', 'text-')}`}>
                              {m.name[0]}
                            </span>
                          </div>
                          <span className="text-xs text-brand-text">{m.name}</span>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded-sm ${m.color}/10 ${m.color.replace('bg-', 'text-')}`}>
                          {m.tier}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating accent elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-glow-purple rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-glow-blue rounded-full blur-3xl animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
}

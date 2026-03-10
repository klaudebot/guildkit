"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    phase: "01",
    title: "CREATE YOUR GUILD",
    description:
      "Sign up, name your guild, and set up membership tiers in under 5 minutes. Connect your Stripe account to start accepting payments immediately.",
    visual: (
      <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-sm bg-accent-primary/20 flex items-center justify-center">
            <span className="text-accent-primary font-heading text-lg">G</span>
          </div>
          <div>
            <div className="h-3 w-32 bg-brand-border rounded-sm" />
            <div className="h-2 w-20 bg-brand-border/50 rounded-sm mt-1" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-8 bg-brand-border/30 rounded-sm flex items-center px-3">
            <span className="text-[10px] text-brand-muted">Guild name: StormRaiders</span>
          </div>
          <div className="h-8 bg-brand-border/30 rounded-sm flex items-center px-3">
            <span className="text-[10px] text-brand-muted">Game: Valorant</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    phase: "02",
    title: "INVITE YOUR COMMUNITY",
    description:
      "Share your unique guild link with your audience. Embed the signup widget on your existing site, share on Twitch panels, or add to your Discord server.",
    visual: (
      <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-4">
        <p className="text-[10px] text-brand-muted mb-2">Share your guild link</p>
        <div className="flex items-center gap-2 bg-brand-darker border border-brand-border rounded-sm p-2">
          <span className="text-[11px] text-neon-cyan flex-grow truncate">
            guildkit.app/join/stormraiders
          </span>
          <div className="px-2 py-1 bg-accent-primary/20 text-accent-primary text-[10px] rounded-sm">
            Copy
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <div className="flex-1 h-8 bg-[#5865F2]/20 border border-[#5865F2]/30 rounded-sm flex items-center justify-center">
            <span className="text-[10px] text-[#5865F2]">Discord</span>
          </div>
          <div className="flex-1 h-8 bg-[#9146FF]/20 border border-[#9146FF]/30 rounded-sm flex items-center justify-center">
            <span className="text-[10px] text-[#9146FF]">Twitch</span>
          </div>
          <div className="flex-1 h-8 bg-red-500/20 border border-red-500/30 rounded-sm flex items-center justify-center">
            <span className="text-[10px] text-red-400">YouTube</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    phase: "03",
    title: "GROW & MONETIZE",
    description:
      "Watch your community grow with real-time analytics. Send targeted campaigns, manage sponsors, and scale your revenue — all from one dashboard.",
    visual: (
      <div className="bg-brand-dark/80 border border-brand-border rounded-sm p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-brand-muted">This Month</span>
          <span className="text-[10px] text-neon-green">+34% growth</span>
        </div>
        <div className="flex items-end gap-1 h-16 mb-2">
          {[25, 30, 35, 28, 40, 45, 50, 48, 55, 60, 65, 72].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background: `linear-gradient(to top, rgba(16, 185, 129, 0.5), rgba(6, 182, 212, 0.3))`,
              }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-neon-green">847 new members</span>
          <span className="text-neon-cyan">$3,420 revenue</span>
        </div>
      </div>
    ),
  },
];

export function HowItWorks() {
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
    <section id="how" ref={ref} className="relative py-32 bg-brand-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <p className="text-sm text-accent-primary font-medium tracking-widest uppercase mb-3">
            Get Started in Minutes
          </p>
          <h2 className="font-heading text-5xl md:text-6xl text-white tracking-wide">
            THREE STEPS TO LAUNCH
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary/50 via-neon-cyan/30 to-neon-green/50 hidden lg:block" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <div
                key={step.phase}
                className="reveal grid lg:grid-cols-12 gap-8 items-center"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="lg:col-span-1 flex lg:flex-col items-center gap-4">
                  <div className="w-14 h-14 rounded-sm bg-brand-card border border-accent-primary/30 flex items-center justify-center relative z-10">
                    <span className="font-heading text-2xl text-accent-primary tracking-wide">
                      {step.phase}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="font-heading text-3xl text-white tracking-wide mb-3">
                    {step.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="lg:col-span-6">{step.visual}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

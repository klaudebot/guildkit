"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for getting started with your first guild",
    features: [
      "Up to 50 guild members",
      "1 membership tier",
      "Basic analytics",
      "Email notifications",
      "Community support",
    ],
    cta: "Start Free",
    href: "/sign-up",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For established streamers growing their community",
    features: [
      "Unlimited guild members",
      "Unlimited tiers",
      "Full analytics suite",
      "Email campaigns & automations",
      "Support desk & help center",
      "Sponsor deal tracker",
      "Custom branding",
      "Priority support",
    ],
    cta: "Go Pro",
    href: "/sign-up?plan=pro",
    highlight: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/month",
    description: "For esports orgs and multi-streamer teams",
    features: [
      "Everything in Pro",
      "5 team member seats",
      "Multi-streamer dashboard",
      "Team permissions & roles",
      "White-label branding",
      "API access",
      "Dedicated support",
    ],
    cta: "Contact Us",
    href: "/sign-up?plan=team",
    highlight: false,
  },
];

export function Pricing() {
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
      id="pricing"
      ref={sectionRef}
      className="relative py-32 bg-brand-dark"
    >
      {/* Top accent band */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-sm text-accent-primary font-medium tracking-widest uppercase mb-3">
            Simple Pricing
          </p>
          <h2 className="font-heading text-5xl md:text-6xl text-white tracking-wide mb-4">
            FLAT RATE. ZERO CUTS.
          </h2>
          <p className="text-brand-muted text-lg max-w-lg mx-auto">
            Unlike Patreon&apos;s 5-12% revenue cut, GuildKit charges a flat monthly
            fee. Keep 100% of what your community pays you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-brand-card border rounded-sm p-8 flex flex-col transition-all duration-300 hover:translate-y-[-4px] ${
                plan.highlight
                  ? "border-accent-primary/50 glow-purple"
                  : "border-brand-border hover:border-accent-primary/30"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-primary text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-sm">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading text-2xl text-white tracking-wide mb-1">
                  {plan.name.toUpperCase()}
                </h3>
                <p className="text-sm text-brand-muted">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="font-heading text-5xl text-white tracking-wide">
                  {plan.price}
                </span>
                <span className="text-brand-muted text-sm ml-1">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.highlight ? "text-accent-primary" : "text-neon-green"
                      }`}
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
                    <span className="text-sm text-brand-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={plan.href}>
                <Button
                  variant={plan.highlight ? "primary" : "secondary"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

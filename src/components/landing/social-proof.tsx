"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const testimonials = [
  {
    name: "VoidHunter_X",
    game: "Valorant",
    viewers: "12.4K avg viewers",
    avatar: "https://i.pravatar.cc/150?img=12",
    quote:
      "I switched from Patreon and saved $800/month in platform fees. GuildKit pays for itself 40x over. The tier management is leagues ahead of anything else I have used.",
    revenue: "$4,200/mo",
  },
  {
    name: "LunarWraith",
    game: "League of Legends",
    viewers: "8.2K avg viewers",
    avatar: "https://i.pravatar.cc/150?img=32",
    quote:
      "The fan messenger alone replaced Mailchimp for me. Being able to segment by tier and send targeted campaigns to my guild members changed my entire content strategy.",
    revenue: "$2,800/mo",
  },
  {
    name: "CrimsonTide_GG",
    game: "Apex Legends",
    viewers: "22.1K avg viewers",
    avatar: "https://i.pravatar.cc/150?img=51",
    quote:
      "My community grew 3x in 2 months after launching my guild. The analytics showed me exactly when to stream and what content my paying members actually wanted.",
    revenue: "$9,100/mo",
  },
];

const stats = [
  { value: 12847, label: "Guilds Created", prefix: "", suffix: "" },
  { value: 24, label: "Revenue Processed", prefix: "$", suffix: "M" },
  { value: 89, label: "Avg Retention", prefix: "", suffix: "%" },
  { value: 49, label: "Rating", prefix: "", suffix: "/5" },
];

function AnimatedNumber({
  value,
  prefix,
  suffix,
  inView,
}: {
  value: number;
  prefix: string;
  suffix: string;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf: number;

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / 2000, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, inView]);

  const formatted =
    value >= 1000 ? display.toLocaleString() : display.toString();

  return (
    <span>
      {prefix}
      {value === 49 ? `4.${display >= 49 ? 9 : Math.floor((display / 49) * 9)}` : formatted}
      {suffix}
    </span>
  );
}

export function SocialProof() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

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

  useEffect(() => {
    if (!statsRef.current) return;
    const rect = statsRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setStatsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStatsInView(true);
        });
      },
      { threshold: 0.2 },
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-brand-dark overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Stats bar */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 reveal"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-brand-card/50 border border-brand-border rounded-sm p-6 hover:border-accent-primary/30 transition-colors"
            >
              <p className="font-heading text-4xl md:text-5xl text-white tracking-wide mb-1">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={statsInView}
                />
              </p>
              <p className="text-xs text-brand-muted uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-8 reveal">
          <p className="text-sm text-accent-primary font-medium tracking-widest uppercase mb-3 text-center">
            From The Community
          </p>
          <h2 className="font-heading text-5xl md:text-6xl text-white tracking-wide text-center mb-4">
            STREAMERS SPEAK
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 reveal" style={{ transitionDelay: "150ms" }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-brand-card border border-brand-border rounded-sm p-6 hover:border-accent-primary/30 transition-all duration-300 hover:translate-y-[-2px] group"
            >
              <div className="flex items-start gap-3 mb-4">
                <img
                  src={t.avatar}
                  alt=""
                  className="w-12 h-12 rounded-sm object-cover border border-brand-border group-hover:border-accent-primary/30 transition-colors"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm text-white font-medium">{t.name}</p>
                  <p className="text-[11px] text-brand-muted">
                    {t.game} / {t.viewers}
                  </p>
                </div>
              </div>
              <p className="text-sm text-brand-text leading-relaxed mb-4">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-brand-border">
                <span className="text-[10px] text-brand-muted uppercase tracking-wider">
                  Guild Revenue
                </span>
                <span className="font-heading text-lg text-neon-green tracking-wide">
                  {t.revenue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

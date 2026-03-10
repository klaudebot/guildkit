"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "How much does GuildKit cost?",
    answer:
      "GuildKit has a free Starter plan (up to 50 members, 1 tier). Our Pro plan is $19/month flat and includes unlimited members, unlimited tiers, full analytics, email campaigns, support desk, and more. For esports orgs and multi-streamer teams, the Team plan is $49/month with 5 seats and white-label branding. Unlike Patreon, we never take a cut of your revenue.",
  },
  {
    question: "Can I migrate from Patreon or Ko-fi?",
    answer:
      "Yes. We have a one-click migration tool that imports your existing subscriber list, tier structure, and payment history. Your subscribers receive an automated email with instructions to reconnect their payment method. Most creators complete the migration in under 30 minutes with zero subscriber loss.",
  },
  {
    question: "How does payment processing work?",
    answer:
      "GuildKit uses Stripe for all payment processing. You connect your own Stripe account and receive payments directly — we never hold your funds. Stripe's standard processing fee applies (2.9% + 30 cents per transaction), but GuildKit charges zero platform fees on top of that. You keep 100% of your revenue minus standard card processing.",
  },
  {
    question: "Which streaming platforms are supported?",
    answer:
      "GuildKit works with Twitch, YouTube Gaming, Kick, Rumble, and any platform that supports embedded links or panel customization. We integrate with Twitch and YouTube APIs for real-time viewer data and stream status. Our embed widgets work anywhere you can paste HTML — including your own website, Discord, and social media link pages.",
  },
  {
    question: "Who owns my data?",
    answer:
      "You do. Your subscriber list, payment history, analytics data, and all content belongs entirely to you. You can export everything at any time as CSV or JSON. If you ever leave GuildKit, your data goes with you — no lock-in, no hostage situations. We store data in SOC 2 compliant infrastructure with end-to-end encryption.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, cancel anytime with no penalties or fees. Your account stays active until the end of your billing period. After cancellation, you retain read-only access to your data for 90 days and can export everything. Your subscribers are notified and can be redirected to any alternative you choose.",
  },
];

export function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section ref={sectionRef} className="relative py-32 bg-brand-dark">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-sm text-accent-primary font-medium tracking-widest uppercase mb-3">
            Questions
          </p>
          <h2 className="font-heading text-5xl md:text-6xl text-white tracking-wide">
            FREQUENTLY ASKED
          </h2>
        </div>

        <div className="space-y-3 reveal" style={{ transitionDelay: "100ms" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-brand-card border rounded-sm transition-colors duration-200 ${
                openIndex === i
                  ? "border-accent-primary/30"
                  : "border-brand-border hover:border-brand-muted/30"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-sm text-white font-medium pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-brand-muted flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
              <div className={`accordion-content ${openIndex === i ? "open" : ""}`}>
                <div className="accordion-inner">
                  <div className="px-6 pb-5">
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

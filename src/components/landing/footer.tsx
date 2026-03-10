"use client";

import { useState } from "react";
import Link from "next/link";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-brand-darker border-t border-brand-border">
      {/* Newsletter section */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-brand-border">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <h3 className="font-heading text-3xl text-white tracking-wide mb-2">
              STAY IN THE LOOP
            </h3>
            <p className="text-sm text-brand-muted">
              Get product updates, creator tips, and early access to new features.
              No spam — unsubscribe anytime.
            </p>
          </div>
          <div className="md:col-span-6">
            {submitted ? (
              <div className="flex items-center gap-2 bg-neon-green/10 border border-neon-green/20 rounded-sm px-4 py-3">
                <svg className="w-4 h-4 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-neon-green">You are in. Watch your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-brand-card border border-brand-border rounded-sm px-4 py-2.5 text-sm text-white placeholder:text-brand-muted focus:outline-none focus:border-accent-primary/50 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-accent-primary text-white text-sm font-semibold px-6 py-2.5 rounded-sm hover:bg-accent-hover transition-colors glow-purple-sm hover:glow-purple"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-sm bg-accent-primary flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-heading text-xl tracking-wide text-white">
                GUILDKIT
              </span>
            </Link>
            <p className="text-sm text-brand-muted max-w-xs leading-relaxed mb-4">
              The all-in-one membership platform built for game streamers and
              content creators. Manage your guild, grow your revenue.
            </p>
            <p className="text-xs text-brand-muted italic">
              Built for streamers, by streamers.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-heading text-sm tracking-widest text-white mb-4">
              PRODUCT
            </h4>
            <ul className="space-y-2.5">
              {["Features", "Pricing", "Changelog", "Roadmap", "API Docs"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-brand-muted hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-heading text-sm tracking-widest text-white mb-4">
              RESOURCES
            </h4>
            <ul className="space-y-2.5">
              {["Help Center", "Blog", "Creator Guide", "Migration Tool", "Status Page"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-brand-muted hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-heading text-sm tracking-widest text-white mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2.5">
              {["About", "Careers", "Contact", "Press Kit", "Brand Assets"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-brand-muted hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-heading text-sm tracking-widest text-white mb-4">
              LEGAL
            </h4>
            <ul className="space-y-2.5">
              {["Privacy", "Terms", "Security", "GDPR"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-brand-muted hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-heading text-sm tracking-widest text-white mb-4">
              CONNECT
            </h4>
            <ul className="space-y-2.5">
              {["Twitter / X", "Discord", "GitHub", "YouTube", "Twitch"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-brand-muted hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">
            &copy; {new Date().getFullYear()} GuildKit. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-brand-muted hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-brand-muted hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-brand-muted hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

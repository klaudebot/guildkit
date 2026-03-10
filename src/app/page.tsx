import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { SocialProof } from "@/components/landing/social-proof";
import { Features } from "@/components/landing/features";
import { Comparison } from "@/components/landing/comparison";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />

      <div className="section-divider" />
      <SocialProof />

      <div className="section-divider" />
      <Features />

      <div className="section-divider" />
      <Comparison />

      <div className="section-divider" />
      <HowItWorks />

      <div className="section-divider" />
      <Pricing />

      <div className="section-divider" />
      <FAQ />

      {/* CTA Band */}
      <div className="section-divider" />
      <section className="relative py-32 bg-brand-darker overflow-hidden">
        <div className="absolute inset-0 bg-glow-purple opacity-40" />
        <div className="absolute inset-0 bg-dot-grid opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-5xl md:text-7xl text-white tracking-wide mb-4">
            READY TO BUILD
            <br />
            <span className="text-gradient">YOUR GUILD?</span>
          </h2>
          <p className="text-brand-muted text-lg mb-10 max-w-lg mx-auto">
            Join thousands of streamers who manage their entire creator business
            from one dashboard. Free to start, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/sign-up"
              className="inline-flex items-center justify-center bg-accent-primary text-white font-semibold px-8 py-3.5 rounded-sm glow-purple hover:bg-accent-hover transition-all text-base shimmer"
            >
              Start Free Today
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center border border-brand-border text-brand-text font-semibold px-8 py-3.5 rounded-sm hover:border-accent-primary/50 transition-all text-base"
            >
              View Pricing
            </a>
          </div>
          <p className="text-xs text-brand-muted mt-6">
            No credit card required. Free plan includes up to 50 members.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

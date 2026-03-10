import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Comparison } from "@/components/landing/comparison";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Comparison />
      <Features />
      <HowItWorks />
      <Pricing />

      {/* CTA Band */}
      <section className="relative py-24 bg-brand-darker overflow-hidden">
        <div className="absolute inset-0 bg-glow-purple opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-5xl md:text-6xl text-white tracking-wide mb-4">
            READY TO BUILD
            <br />
            YOUR GUILD?
          </h2>
          <p className="text-brand-muted text-lg mb-8">
            Join thousands of streamers who manage their entire creator business
            from one dashboard. Free to start, no credit card required.
          </p>
          <a
            href="/sign-up"
            className="inline-flex items-center justify-center bg-accent-primary text-white font-semibold px-8 py-3.5 rounded-sm glow-purple hover:glow-purple hover:bg-accent-hover transition-all text-base"
          >
            Start Free Today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

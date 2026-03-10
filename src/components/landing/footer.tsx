import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-darker border-t border-brand-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
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
            <p className="text-sm text-brand-muted max-w-xs leading-relaxed">
              The all-in-one membership platform built for game streamers and
              content creators.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-heading text-sm tracking-widest text-white mb-4">
              PRODUCT
            </h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "Changelog"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
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
              COMPANY
            </h4>
            <ul className="space-y-2">
              {["About", "Blog", "Contact"].map((item) => (
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
              LEGAL
            </h4>
            <ul className="space-y-2">
              {["Privacy", "Terms", "Security"].map((item) => (
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
            <ul className="space-y-2">
              {["Twitter", "Discord", "GitHub"].map((item) => (
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

        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">
            &copy; {new Date().getFullYear()} GuildKit. All rights reserved.
          </p>
          <p className="text-xs text-brand-muted">
            Built for streamers, by streamers.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { Card } from "@/components/ui/card";

const stats = [
  { label: "Total Members", value: "0", change: null, color: "text-neon-purple" },
  { label: "Monthly Revenue", value: "$0", change: null, color: "text-neon-green" },
  { label: "Active Guilds", value: "0", change: null, color: "text-neon-cyan" },
  { label: "Engagement Rate", value: "0%", change: null, color: "text-neon-pink" },
];

export default function Dashboard() {
  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="font-heading text-4xl text-white tracking-wide">
          DASHBOARD
        </h1>
        <p className="text-sm text-brand-muted mt-1">
          Welcome back. Here&apos;s your guild overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label} className="relative overflow-hidden">
            <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">
              {stat.label}
            </p>
            <p className={`font-heading text-3xl tracking-wide ${stat.color}`}>
              {stat.value}
            </p>
            {stat.change && (
              <p className="text-xs text-neon-green mt-1">{stat.change}</p>
            )}
            <div className="absolute top-0 right-0 w-24 h-24 bg-glow-purple opacity-20 rounded-full -translate-y-1/2 translate-x-1/2" />
          </Card>
        ))}
      </div>

      {/* Main content area */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Revenue chart placeholder */}
        <div className="lg:col-span-8">
          <Card className="h-80">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-heading text-xl text-white tracking-wide">
                  REVENUE OVERVIEW
                </h2>
                <p className="text-xs text-brand-muted">Last 30 days</p>
              </div>
              <div className="flex gap-2">
                <button className="text-[10px] px-3 py-1 bg-accent-primary/10 text-accent-primary border border-accent-primary/20 rounded-sm">
                  30D
                </button>
                <button className="text-[10px] px-3 py-1 text-brand-muted hover:text-white transition-colors rounded-sm">
                  90D
                </button>
                <button className="text-[10px] px-3 py-1 text-brand-muted hover:text-white transition-colors rounded-sm">
                  1Y
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center h-48 text-brand-muted text-sm">
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-3 text-brand-border"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
                <p>Revenue data will appear once you have subscribers</p>
                <p className="text-xs text-brand-muted mt-1">
                  Create your first guild tier to get started
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent activity */}
        <div className="lg:col-span-4">
          <Card className="h-80">
            <h2 className="font-heading text-xl text-white tracking-wide mb-4">
              RECENT ACTIVITY
            </h2>
            <div className="flex items-center justify-center h-48 text-brand-muted text-sm">
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-3 text-brand-border"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>No activity yet</p>
                <p className="text-xs text-brand-muted mt-1">
                  Member signups and events will show here
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6">
        <Card>
          <h2 className="font-heading text-xl text-white tracking-wide mb-4">
            QUICK START
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="/guilds"
              className="bg-brand-dark border border-brand-border rounded-sm p-4 hover:border-accent-primary/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-sm bg-neon-purple/10 flex items-center justify-center mb-3 group-hover:glow-purple-sm transition-all">
                <svg
                  className="w-5 h-5 text-neon-purple"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <p className="text-sm text-white font-medium">Create a Guild Tier</p>
              <p className="text-xs text-brand-muted mt-1">
                Set up membership levels with custom perks
              </p>
            </a>
            <a
              href="/fans"
              className="bg-brand-dark border border-brand-border rounded-sm p-4 hover:border-accent-primary/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-sm bg-neon-cyan/10 flex items-center justify-center mb-3 group-hover:glow-purple-sm transition-all">
                <svg
                  className="w-5 h-5 text-neon-cyan"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
              </div>
              <p className="text-sm text-white font-medium">Invite Your Fans</p>
              <p className="text-xs text-brand-muted mt-1">
                Share your guild link with your audience
              </p>
            </a>
            <a
              href="/settings"
              className="bg-brand-dark border border-brand-border rounded-sm p-4 hover:border-accent-primary/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-sm bg-neon-green/10 flex items-center justify-center mb-3 group-hover:glow-purple-sm transition-all">
                <svg
                  className="w-5 h-5 text-neon-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
              </div>
              <p className="text-sm text-white font-medium">Connect Stripe</p>
              <p className="text-xs text-brand-muted mt-1">
                Wire up payments to start earning
              </p>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}

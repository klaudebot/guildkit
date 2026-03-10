"use client";

import { Card } from "@/components/ui/card";

export default function Revenue() {
  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="font-heading text-4xl text-white tracking-wide">
          REVENUE HUB
        </h1>
        <p className="text-sm text-brand-muted mt-1">
          Track your earnings, subscriptions, and sponsor deals
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "MRR", value: "$0", color: "text-neon-green" },
          { label: "Total Revenue", value: "$0", color: "text-neon-purple" },
          { label: "Avg LTV", value: "$0", color: "text-neon-cyan" },
          { label: "Churn Rate", value: "0%", color: "text-neon-pink" },
        ].map((stat) => (
          <Card key={stat.label}>
            <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">
              {stat.label}
            </p>
            <p className={`font-heading text-3xl tracking-wide ${stat.color}`}>
              {stat.value}
            </p>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <Card className="h-72">
            <h2 className="font-heading text-xl text-white tracking-wide mb-4">
              REVENUE BREAKDOWN
            </h2>
            <div className="flex items-center justify-center h-44 text-brand-muted text-sm">
              <div className="text-center">
                <p>Connect Stripe to see revenue data</p>
                <p className="text-xs text-brand-muted mt-1">
                  Subscriptions, tips, and sponsor income will appear here
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-4">
          <Card className="h-72">
            <h2 className="font-heading text-xl text-white tracking-wide mb-4">
              SPONSOR DEALS
            </h2>
            <div className="flex items-center justify-center h-44 text-brand-muted text-sm">
              <div className="text-center">
                <p>No active deals</p>
                <p className="text-xs text-brand-muted mt-1">
                  Track brand partnerships here
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Messages() {
  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-4xl text-white tracking-wide">
            FAN MESSENGER
          </h1>
          <p className="text-sm text-brand-muted mt-1">
            Send campaigns, announcements, and automated sequences
          </p>
        </div>
        <Button>
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          New Campaign
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {[
          { label: "Emails Sent", value: "0", color: "text-neon-purple" },
          { label: "Open Rate", value: "0%", color: "text-neon-cyan" },
          { label: "Click Rate", value: "0%", color: "text-neon-green" },
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

      <Card className="text-center py-16">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-brand-border"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={0.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
        <h2 className="font-heading text-2xl text-white tracking-wide mb-2">
          NO CAMPAIGNS YET
        </h2>
        <p className="text-sm text-brand-muted mb-6 max-w-md mx-auto">
          Create email campaigns to keep your guild members engaged.
          Set up automated welcome sequences for new subscribers.
        </p>
        <Button>Create First Campaign</Button>
      </Card>
    </div>
  );
}

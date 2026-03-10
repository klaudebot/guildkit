"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Support() {
  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-4xl text-white tracking-wide">
            SUPPORT BASE
          </h1>
          <p className="text-sm text-brand-muted mt-1">
            Manage support tickets and build your help center
          </p>
        </div>
        <Button variant="secondary">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          Manage Help Center
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {[
          { label: "Open Tickets", value: "0", color: "text-neon-purple" },
          { label: "Avg Response", value: "—", color: "text-neon-cyan" },
          { label: "Resolved Today", value: "0", color: "text-neon-green" },
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
            d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796l-3.448 4.138m5.716-.37l-4.138 3.448M7.288 19.67a9.014 9.014 0 01-2.982-2.982m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0l-4.138-3.448m8.576 5.976l-3.448 4.138m0 0a9.027 9.027 0 01-1.306-1.652"
          />
        </svg>
        <h2 className="font-heading text-2xl text-white tracking-wide mb-2">
          NO TICKETS YET
        </h2>
        <p className="text-sm text-brand-muted mb-6 max-w-md mx-auto">
          When guild members submit support requests, they&apos;ll appear here.
          Build a help center to reduce common questions.
        </p>
        <Button>Build Help Center</Button>
      </Card>
    </div>
  );
}

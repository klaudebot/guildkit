"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Fans() {
  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-4xl text-white tracking-wide">
            FAN CRM
          </h1>
          <p className="text-sm text-brand-muted mt-1">
            Manage and understand your community members
          </p>
        </div>
        <div className="flex gap-3">
          <Input placeholder="Search fans..." className="w-48" />
          <Button variant="secondary">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            Import
          </Button>
        </div>
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
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <h2 className="font-heading text-2xl text-white tracking-wide mb-2">
          NO FANS YET
        </h2>
        <p className="text-sm text-brand-muted mb-6 max-w-md mx-auto">
          Share your guild link with your audience to start growing your
          community. Import existing subscribers from Patreon or Ko-fi.
        </p>
        <div className="flex gap-3 justify-center">
          <Button>Share Guild Link</Button>
          <Button variant="secondary">Import from Patreon</Button>
        </div>
      </Card>
    </div>
  );
}

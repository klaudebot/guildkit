"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Settings() {
  const [guildName, setGuildName] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    setSaving(true);
    setTimeout(() => setSaving(false), 1000);
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="font-heading text-4xl text-white tracking-wide">
          SETTINGS
        </h1>
        <p className="text-sm text-brand-muted mt-1">
          Manage your guild profile, billing, and integrations
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <h2 className="font-heading text-xl text-white tracking-wide mb-4">
            GUILD PROFILE
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-brand-muted block mb-1.5">
                Guild Name
              </label>
              <Input
                value={guildName}
                onChange={(e) => setGuildName(e.target.value)}
                placeholder="Your guild name"
              />
            </div>
            <div>
              <label className="text-xs text-brand-muted block mb-1.5">
                Guild URL
              </label>
              <div className="flex items-center gap-2">
                <span className="text-xs text-brand-muted">guildkit.app/join/</span>
                <Input placeholder="your-guild" className="flex-grow" />
              </div>
            </div>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </Card>

        <Card>
          <h2 className="font-heading text-xl text-white tracking-wide mb-4">
            BILLING
          </h2>
          <div className="bg-brand-dark border border-brand-border rounded-sm p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-white">Current Plan</p>
              <p className="text-xs text-brand-muted">
                Free — up to 50 guild members
              </p>
            </div>
            <Button variant="secondary" size="sm">
              Upgrade to Pro
            </Button>
          </div>
        </Card>

        <Card>
          <h2 className="font-heading text-xl text-white tracking-wide mb-4">
            INTEGRATIONS
          </h2>
          <div className="space-y-3">
            {[
              {
                name: "Stripe",
                description: "Accept payments from guild members",
                connected: false,
              },
              {
                name: "Discord",
                description: "Auto-assign roles to guild members",
                connected: false,
              },
              {
                name: "Twitch",
                description: "Import subscriber data",
                connected: false,
              },
            ].map((integration) => (
              <div
                key={integration.name}
                className="bg-brand-dark border border-brand-border rounded-sm p-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm text-white">{integration.name}</p>
                  <p className="text-xs text-brand-muted">
                    {integration.description}
                  </p>
                </div>
                <Button
                  variant={integration.connected ? "ghost" : "secondary"}
                  size="sm"
                >
                  {integration.connected ? "Connected" : "Connect"}
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="border-red-500/20">
          <h2 className="font-heading text-xl text-red-400 tracking-wide mb-4">
            DANGER ZONE
          </h2>
          <div className="bg-brand-dark border border-red-500/20 rounded-sm p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-white">Delete Guild</p>
              <p className="text-xs text-brand-muted">
                Permanently delete your guild and all data
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
            >
              Delete
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

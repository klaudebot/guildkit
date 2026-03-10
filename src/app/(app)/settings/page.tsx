"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Settings() {
  const [guildName, setGuildName] = useState("NightBlade Guild");
  const [guildSlug, setGuildSlug] = useState("nightblade-guild");
  const [description, setDescription] = useState(
    "The ultimate gaming community for competitive players. Join raids, tournaments, and exclusive streams."
  );
  const [brandColor, setBrandColor] = useState("#A855F7");
  const [saving, setSaving] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("https://hooks.example.com/guildkit/events");

  async function handleSave() {
    setSaving(true);
    setTimeout(() => setSaving(false), 1000);
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="font-heading text-4xl text-white tracking-wide">SETTINGS</h1>
        <p className="text-sm text-brand-muted mt-1">
          Manage your guild profile, billing, and integrations
        </p>
      </div>

      <div className="space-y-6">
        {/* Guild Profile */}
        <Card>
          <h2 className="font-heading text-xl text-white tracking-wide mb-4">GUILD PROFILE</h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-brand-muted block mb-1.5">Guild Name</label>
              <Input value={guildName} onChange={(e) => setGuildName(e.target.value)} />
            </div>
            <div>
              <label className="text-xs text-brand-muted block mb-1.5">Guild URL</label>
              <div className="flex items-center gap-2">
                <span className="text-xs text-brand-muted">guildkit.app/join/</span>
                <Input value={guildSlug} onChange={(e) => setGuildSlug(e.target.value)} className="flex-grow" />
              </div>
            </div>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </Card>

        {/* Guild Branding */}
        <Card>
          <h2 className="font-heading text-xl text-white tracking-wide mb-4">GUILD BRANDING</h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-brand-muted block mb-1.5">Brand Color</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={brandColor}
                  onChange={(e) => setBrandColor(e.target.value)}
                  className="w-10 h-10 rounded-sm border border-brand-border cursor-pointer bg-transparent"
                />
                <Input
                  value={brandColor}
                  onChange={(e) => setBrandColor(e.target.value)}
                  className="w-32"
                />
                <div
                  className="flex-grow h-10 rounded-sm border border-brand-border"
                  style={{ backgroundColor: brandColor + "20" }}
                >
                  <div className="h-full flex items-center justify-center text-xs" style={{ color: brandColor }}>
                    Preview
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label className="text-xs text-brand-muted block mb-1.5">Guild Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full bg-brand-dark border border-brand-border text-brand-text px-4 py-2.5 rounded-sm text-sm placeholder:text-brand-muted focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/30 transition-colors duration-200 resize-none"
              />
            </div>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Update Branding"}
            </Button>
          </div>
        </Card>

        {/* Billing */}
        <Card>
          <h2 className="font-heading text-xl text-white tracking-wide mb-4">BILLING</h2>
          <div className="bg-brand-dark border border-brand-border rounded-sm p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-white">Pro Plan</p>
              <p className="text-xs text-brand-muted">Unlimited guild members, all features</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs px-2 py-0.5 rounded-sm bg-neon-green/20 text-neon-green">Active</span>
              <Button variant="secondary" size="sm">Manage</Button>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            <div className="bg-brand-dark border border-brand-border rounded-sm p-3">
              <p className="text-[10px] text-brand-muted uppercase">Next Invoice</p>
              <p className="text-sm text-white font-medium">$29.00</p>
              <p className="text-[10px] text-brand-muted">Apr 1, 2026</p>
            </div>
            <div className="bg-brand-dark border border-brand-border rounded-sm p-3">
              <p className="text-[10px] text-brand-muted uppercase">This Period</p>
              <p className="text-sm text-white font-medium">$8,420</p>
              <p className="text-[10px] text-brand-muted">Revenue earned</p>
            </div>
            <div className="bg-brand-dark border border-brand-border rounded-sm p-3">
              <p className="text-[10px] text-brand-muted uppercase">Payout</p>
              <p className="text-sm text-neon-green font-medium">$8,168</p>
              <p className="text-[10px] text-brand-muted">After 3% fee</p>
            </div>
          </div>
        </Card>

        {/* Webhooks */}
        <Card>
          <h2 className="font-heading text-xl text-white tracking-wide mb-4">WEBHOOKS</h2>
          <p className="text-xs text-brand-muted mb-3">
            Receive real-time notifications when events happen in your guild.
          </p>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-brand-muted block mb-1.5">Webhook URL</label>
              <Input value={webhookUrl} onChange={(e) => setWebhookUrl(e.target.value)} />
            </div>
            <div className="flex items-center gap-4 text-xs text-brand-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-neon-green" />
                Connected
              </span>
              <span>Last ping: 2 min ago</span>
              <span>Events: member.joined, payment.completed, tier.upgraded</span>
            </div>
            <Button variant="secondary" size="sm" onClick={handleSave}>
              {saving ? "Saving..." : "Update Webhook"}
            </Button>
          </div>
        </Card>

        {/* API Key */}
        <Card>
          <h2 className="font-heading text-xl text-white tracking-wide mb-4">API KEY</h2>
          <p className="text-xs text-brand-muted mb-3">
            Use your API key to integrate GuildKit with external tools.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex-grow bg-brand-dark border border-brand-border rounded-sm px-4 py-2.5 text-sm font-mono">
              {showApiKey ? (
                <span className="text-brand-text">gk_live_a8f2c9d1e4b7f3a6c8d0e2f5a7b9c1d3</span>
              ) : (
                <span className="text-brand-muted">gk_live_****************************c1d3</span>
              )}
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowApiKey(!showApiKey)}
            >
              {showApiKey ? "Hide" : "Reveal"}
            </Button>
            <Button variant="secondary" size="sm">
              Regenerate
            </Button>
          </div>
        </Card>

        {/* Integrations */}
        <Card>
          <h2 className="font-heading text-xl text-white tracking-wide mb-4">INTEGRATIONS</h2>
          <div className="space-y-3">
            {[
              {
                name: "Stripe",
                description: "Accept payments from guild members",
                connected: true,
                detail: "Connected as acct_1N4k2s... Last sync: 5 min ago",
              },
              {
                name: "Discord",
                description: "Auto-assign roles to guild members",
                connected: false,
                detail: null,
              },
              {
                name: "Twitch",
                description: "Import subscriber data and stream alerts",
                connected: false,
                detail: null,
              },
            ].map((integration) => (
              <div
                key={integration.name}
                className="bg-brand-dark border border-brand-border rounded-sm p-4 flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-white">{integration.name}</p>
                    {integration.connected && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-neon-green/20 text-neon-green">
                        Connected
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-brand-muted">{integration.description}</p>
                  {integration.detail && (
                    <p className="text-[10px] text-brand-muted mt-1">{integration.detail}</p>
                  )}
                </div>
                <Button
                  variant={integration.connected ? "ghost" : "secondary"}
                  size="sm"
                >
                  {integration.connected ? "Manage" : "Connect"}
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-500/20">
          <h2 className="font-heading text-xl text-red-400 tracking-wide mb-4">DANGER ZONE</h2>
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

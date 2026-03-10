"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface GuildTier {
  id: string;
  name: string;
  price: number;
  perks: string[];
  color: string;
  bgColor: string;
  borderColor: string;
  members: number;
  revenue: string;
  growth: string;
  recentJoins: { name: string; avatar: number; time: string }[];
}

const defaultTiers: GuildTier[] = [
  {
    id: "legendary",
    name: "Legendary",
    price: 2900,
    perks: [
      "Private 1-on-1 coaching sessions",
      "Exclusive Discord channel + voice",
      "Early access to all content",
      "Monthly merch drop",
      "Name in stream credits",
      "Custom in-game guild tag",
    ],
    color: "text-neon-purple",
    bgColor: "bg-neon-purple",
    borderColor: "border-neon-purple/30",
    members: 847,
    revenue: "$24,563",
    growth: "+18%",
    recentJoins: [
      { name: "NightBlade_99", avatar: 1, time: "2 min ago" },
      { name: "VoidWalker", avatar: 3, time: "1 hr ago" },
      { name: "PixelQueen", avatar: 5, time: "3 hr ago" },
    ],
  },
  {
    id: "epic",
    name: "Epic",
    price: 1400,
    perks: [
      "Exclusive Discord role + channels",
      "Early access to videos (24hr)",
      "Monthly game night invites",
      "Subscriber-only streams",
      "Custom emotes pack",
    ],
    color: "text-neon-blue",
    bgColor: "bg-neon-blue",
    borderColor: "border-neon-blue/30",
    members: 1203,
    revenue: "$16,842",
    growth: "+12%",
    recentJoins: [
      { name: "xStormRaider", avatar: 8, time: "5 min ago" },
      { name: "GlitchHunter", avatar: 11, time: "22 min ago" },
      { name: "DragonSlayer_X", avatar: 14, time: "1 hr ago" },
    ],
  },
  {
    id: "rare",
    name: "Rare",
    price: 0,
    perks: [
      "Access to community Discord",
      "Weekly newsletter",
      "Public stream chat badge",
      "Community game nights",
    ],
    color: "text-neon-cyan",
    bgColor: "bg-neon-cyan",
    borderColor: "border-neon-cyan/30",
    members: 3415,
    revenue: "Free",
    growth: "+34%",
    recentJoins: [
      { name: "CyberNinja420", avatar: 20, time: "22 min ago" },
      { name: "FrostByte", avatar: 25, time: "45 min ago" },
      { name: "ShadowFox", avatar: 30, time: "2 hr ago" },
    ],
  },
];

export default function Guilds() {
  const [showCreate, setShowCreate] = useState(false);
  const [tiers, setTiers] = useState<GuildTier[]>(defaultTiers);
  const [newTier, setNewTier] = useState({ name: "", price: "", perks: "" });
  const [copied, setCopied] = useState(false);

  function handleCreate() {
    if (!newTier.name || !newTier.price) return;
    const colors = [
      { color: "text-neon-green", bgColor: "bg-neon-green", borderColor: "border-neon-green/30" },
      { color: "text-neon-pink", bgColor: "bg-neon-pink", borderColor: "border-neon-pink/30" },
    ];
    const c = colors[tiers.length % colors.length];
    setTiers([
      ...tiers,
      {
        id: Date.now().toString(),
        name: newTier.name,
        price: parseInt(newTier.price) * 100,
        perks: newTier.perks.split(",").map((p) => p.trim()).filter(Boolean),
        ...c,
        members: 0,
        revenue: "$0",
        growth: "New",
        recentJoins: [],
      },
    ]);
    setNewTier({ name: "", price: "", perks: "" });
    setShowCreate(false);
  }

  function handleCopy() {
    navigator.clipboard.writeText("https://guildkit.app/join/nightblade-guild");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-4xl text-white tracking-wide">GUILD TIERS</h1>
          <p className="text-sm text-brand-muted mt-1">
            Create and manage membership levels for your community
          </p>
        </div>
        <Button onClick={() => setShowCreate(true)}>
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          New Tier
        </Button>
      </div>

      {/* Guild Link Section */}
      <Card className="mb-6 border-accent-primary/20">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="font-heading text-lg text-white tracking-wide mb-1">GUILD LINK</h2>
            <p className="text-xs text-brand-muted">Share this link with your audience to grow your guild</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-brand-dark border border-brand-border rounded-sm px-4 py-2">
              <span className="text-sm text-brand-muted mr-2">guildkit.app/join/</span>
              <span className="text-sm text-accent-primary">nightblade-guild</span>
            </div>
            <Button size="sm" onClick={handleCopy}>
              {copied ? "Copied" : "Copy"}
            </Button>
            <Button variant="secondary" size="sm">Share</Button>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-brand-border">
          <div className="flex items-center gap-2 text-xs text-brand-muted">
            <span className="w-2 h-2 rounded-full bg-neon-green" />
            <span>Link active</span>
          </div>
          <span className="text-xs text-brand-muted">1,247 clicks this month</span>
          <span className="text-xs text-brand-muted">38% conversion rate</span>
        </div>
      </Card>

      {showCreate && (
        <Card className="mb-6 border-accent-primary/30">
          <h2 className="font-heading text-2xl text-white tracking-wide mb-4">CREATE TIER</h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-brand-muted block mb-1.5">Tier Name</label>
              <Input
                value={newTier.name}
                onChange={(e) => setNewTier({ ...newTier, name: e.target.value })}
                placeholder="e.g. Legendary, Epic, Rare"
              />
            </div>
            <div>
              <label className="text-xs text-brand-muted block mb-1.5">Monthly Price (USD)</label>
              <Input
                type="number"
                value={newTier.price}
                onChange={(e) => setNewTier({ ...newTier, price: e.target.value })}
                placeholder="e.g. 9"
                min="0"
              />
            </div>
            <div>
              <label className="text-xs text-brand-muted block mb-1.5">Perks (comma-separated)</label>
              <Input
                value={newTier.perks}
                onChange={(e) => setNewTier({ ...newTier, perks: e.target.value })}
                placeholder="e.g. Exclusive streams, Discord role, Monthly merch"
              />
            </div>
            <div className="flex gap-3">
              <Button onClick={handleCreate}>Create Tier</Button>
              <Button variant="ghost" onClick={() => setShowCreate(false)}>Cancel</Button>
            </div>
          </div>
        </Card>
      )}

      {/* Tier Cards */}
      <div className="space-y-6">
        {tiers.map((tier) => (
          <Card key={tier.id} className={`${tier.borderColor} overflow-hidden`}>
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              {/* Tier info */}
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-sm ${tier.bgColor}/10 flex items-center justify-center`}>
                    <span className={`font-heading text-xl ${tier.color} tracking-wide`}>
                      {tier.name[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className={`font-heading text-2xl tracking-wide ${tier.color}`}>
                      {tier.name.toUpperCase()}
                    </h3>
                    <p className="text-xs text-brand-muted">
                      {tier.price > 0 ? `$${tier.price / 100}/mo` : "Free tier"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-brand-dark border border-brand-border rounded-sm px-3 py-2">
                    <p className="text-[10px] text-brand-muted uppercase tracking-wider">Members</p>
                    <p className="font-heading text-xl text-white">{tier.members.toLocaleString()}</p>
                  </div>
                  <div className="bg-brand-dark border border-brand-border rounded-sm px-3 py-2">
                    <p className="text-[10px] text-brand-muted uppercase tracking-wider">Revenue</p>
                    <p className="font-heading text-xl text-white">{tier.revenue}</p>
                  </div>
                  <div className="bg-brand-dark border border-brand-border rounded-sm px-3 py-2">
                    <p className="text-[10px] text-brand-muted uppercase tracking-wider">Growth</p>
                    <p className="font-heading text-xl text-neon-green">{tier.growth}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-[10px] text-brand-muted uppercase tracking-wider mb-2">Perks</p>
                  <div className="grid sm:grid-cols-2 gap-1.5">
                    {tier.perks.map((perk, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-brand-text">
                        <svg className={`w-3 h-3 ${tier.color} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {perk}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent joins */}
              {tier.recentJoins.length > 0 && (
                <div className="lg:w-56 shrink-0">
                  <p className="text-[10px] text-brand-muted uppercase tracking-wider mb-2">Recent Joins</p>
                  <div className="space-y-2">
                    {tier.recentJoins.map((join, i) => (
                      <div key={i} className="flex items-center gap-2 bg-brand-dark border border-brand-border rounded-sm px-3 py-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://i.pravatar.cc/24?img=${join.avatar}`}
                          alt=""
                          className="w-6 h-6 rounded-full"
                          width={24}
                          height={24}
                        />
                        <div className="min-w-0">
                          <p className="text-xs text-brand-text truncate">{join.name}</p>
                          <p className="text-[10px] text-brand-muted">{join.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full mt-2 text-xs">
                    View all members
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

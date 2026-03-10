"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Fan {
  id: number;
  avatar: number;
  username: string;
  email: string;
  tier: string;
  tierColor: string;
  joined: string;
  status: string;
  statusColor: string;
  tags: { label: string; color: string }[];
  ltv: string;
  lastActive: string;
}

const fans: Fan[] = [
  {
    id: 1, avatar: 1, username: "NightBlade_99", email: "nightblade@proton.me", tier: "Legendary",
    tierColor: "bg-neon-purple/10 text-neon-purple", joined: "Jan 12, 2025", status: "Active",
    statusColor: "text-neon-green", tags: [{ label: "VIP", color: "bg-neon-purple/20 text-neon-purple" }, { label: "Whale", color: "bg-neon-green/20 text-neon-green" }],
    ltv: "$348", lastActive: "2 min ago",
  },
  {
    id: 2, avatar: 3, username: "xStormRaider", email: "storm@gmail.com", tier: "Epic",
    tierColor: "bg-neon-blue/10 text-neon-blue", joined: "Mar 5, 2025", status: "Active",
    statusColor: "text-neon-green", tags: [{ label: "VIP", color: "bg-neon-purple/20 text-neon-purple" }],
    ltv: "$196", lastActive: "5 min ago",
  },
  {
    id: 3, avatar: 5, username: "PixelQueen", email: "pixel.queen@outlook.com", tier: "Legendary",
    tierColor: "bg-neon-purple/10 text-neon-purple", joined: "Feb 20, 2025", status: "Active",
    statusColor: "text-neon-green", tags: [{ label: "Whale", color: "bg-neon-green/20 text-neon-green" }],
    ltv: "$412", lastActive: "8 min ago",
  },
  {
    id: 4, avatar: 8, username: "ShadowFox", email: "shadowfox@hey.com", tier: "Epic",
    tierColor: "bg-neon-blue/10 text-neon-blue", joined: "Apr 1, 2025", status: "Active",
    statusColor: "text-neon-green", tags: [{ label: "New", color: "bg-neon-cyan/20 text-neon-cyan" }],
    ltv: "$42", lastActive: "15 min ago",
  },
  {
    id: 5, avatar: 11, username: "CyberNinja420", email: "cyberninja@pm.me", tier: "Rare",
    tierColor: "bg-neon-cyan/10 text-neon-cyan", joined: "Dec 8, 2024", status: "Active",
    statusColor: "text-neon-green", tags: [],
    ltv: "$0", lastActive: "22 min ago",
  },
  {
    id: 6, avatar: 14, username: "DragonSlayer_X", email: "dragonx@gmail.com", tier: "Legendary",
    tierColor: "bg-neon-purple/10 text-neon-purple", joined: "Nov 15, 2024", status: "Active",
    statusColor: "text-neon-green", tags: [{ label: "VIP", color: "bg-neon-purple/20 text-neon-purple" }, { label: "Whale", color: "bg-neon-green/20 text-neon-green" }],
    ltv: "$580", lastActive: "1 hr ago",
  },
  {
    id: 7, avatar: 17, username: "NeonWraith", email: "neonwraith@proton.me", tier: "Epic",
    tierColor: "bg-neon-blue/10 text-neon-blue", joined: "Jun 22, 2025", status: "At Risk",
    statusColor: "text-neon-pink", tags: [{ label: "At Risk", color: "bg-neon-pink/20 text-neon-pink" }],
    ltv: "$84", lastActive: "5 days ago",
  },
  {
    id: 8, avatar: 20, username: "FrostByte", email: "frostbyte@mail.com", tier: "Legendary",
    tierColor: "bg-neon-purple/10 text-neon-purple", joined: "Aug 3, 2024", status: "Active",
    statusColor: "text-neon-green", tags: [{ label: "VIP", color: "bg-neon-purple/20 text-neon-purple" }],
    ltv: "$464", lastActive: "3 hr ago",
  },
  {
    id: 9, avatar: 25, username: "VoidWalker", email: "void@walker.gg", tier: "Epic",
    tierColor: "bg-neon-blue/10 text-neon-blue", joined: "Sep 18, 2025", status: "Churned",
    statusColor: "text-brand-muted", tags: [{ label: "At Risk", color: "bg-neon-pink/20 text-neon-pink" }],
    ltv: "$56", lastActive: "14 days ago",
  },
  {
    id: 10, avatar: 30, username: "GlitchHunter", email: "glitch@hunter.io", tier: "Rare",
    tierColor: "bg-neon-cyan/10 text-neon-cyan", joined: "Oct 5, 2025", status: "Active",
    statusColor: "text-neon-green", tags: [{ label: "New", color: "bg-neon-cyan/20 text-neon-cyan" }],
    ltv: "$0", lastActive: "30 min ago",
  },
];

const quickStats = [
  { label: "Total Fans", value: "5,465", color: "text-neon-purple" },
  { label: "Active", value: "5,108", color: "text-neon-green" },
  { label: "Churned", value: "312", color: "text-neon-pink" },
  { label: "Avg LTV", value: "$127", color: "text-neon-cyan" },
];

export default function Fans() {
  const [search, setSearch] = useState("");
  const [filterTier, setFilterTier] = useState("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = fans.filter((f) => {
    const matchSearch = f.username.toLowerCase().includes(search.toLowerCase()) ||
      f.email.toLowerCase().includes(search.toLowerCase());
    const matchTier = filterTier === "All" || f.tier === filterTier;
    return matchSearch && matchTier;
  });

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-4xl text-white tracking-wide">FAN CRM</h1>
          <p className="text-sm text-brand-muted mt-1">
            Manage and understand your community members
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            Import
          </Button>
          <Button variant="secondary">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Export
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {quickStats.map((stat) => (
          <Card key={stat.label}>
            <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">{stat.label}</p>
            <p className={`font-heading text-3xl tracking-wide ${stat.color}`}>{stat.value}</p>
          </Card>
        ))}
      </div>

      {/* Search and Filter */}
      <Card className="mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex-grow min-w-[200px]">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by username or email..."
            />
          </div>
          <div className="flex gap-2">
            {["All", "Legendary", "Epic", "Rare"].map((tier) => (
              <button
                key={tier}
                onClick={() => setFilterTier(tier)}
                className={`text-xs px-3 py-1.5 rounded-sm transition-colors ${
                  filterTier === tier
                    ? "bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
                    : "text-brand-muted hover:text-white border border-brand-border hover:border-brand-muted"
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {/* Fan Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left text-[10px] text-brand-muted uppercase tracking-wider pb-3">Fan</th>
                <th className="text-left text-[10px] text-brand-muted uppercase tracking-wider pb-3">Tier</th>
                <th className="text-left text-[10px] text-brand-muted uppercase tracking-wider pb-3">Joined</th>
                <th className="text-left text-[10px] text-brand-muted uppercase tracking-wider pb-3">Status</th>
                <th className="text-left text-[10px] text-brand-muted uppercase tracking-wider pb-3">Tags</th>
                <th className="text-right text-[10px] text-brand-muted uppercase tracking-wider pb-3">LTV</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((fan) => (
                <>
                  <tr
                    key={fan.id}
                    className="border-b border-brand-border/50 hover:bg-brand-dark/50 transition-colors cursor-pointer"
                    onClick={() => setExpandedId(expandedId === fan.id ? null : fan.id)}
                  >
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://i.pravatar.cc/40?img=${fan.avatar}`}
                          alt=""
                          className="w-8 h-8 rounded-full"
                          width={32}
                          height={32}
                        />
                        <div>
                          <p className="text-brand-text font-medium">{fan.username}</p>
                          <p className="text-[10px] text-brand-muted">{fan.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-sm ${fan.tierColor}`}>
                        {fan.tier}
                      </span>
                    </td>
                    <td className="py-3 text-brand-muted">{fan.joined}</td>
                    <td className={`py-3 ${fan.statusColor}`}>{fan.status}</td>
                    <td className="py-3">
                      <div className="flex gap-1">
                        {fan.tags.map((tag) => (
                          <span key={tag.label} className={`text-[10px] px-1.5 py-0.5 rounded-sm ${tag.color}`}>
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 text-right text-white font-medium">{fan.ltv}</td>
                  </tr>
                  {expandedId === fan.id && (
                    <tr key={`${fan.id}-detail`} className="border-b border-brand-border/50">
                      <td colSpan={6} className="py-4 px-6">
                        <div className="grid grid-cols-4 gap-4 bg-brand-dark border border-brand-border rounded-sm p-4">
                          <div>
                            <p className="text-[10px] text-brand-muted uppercase tracking-wider mb-1">Lifetime Value</p>
                            <p className="text-sm text-white font-medium">{fan.ltv}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-brand-muted uppercase tracking-wider mb-1">Last Active</p>
                            <p className="text-sm text-brand-text">{fan.lastActive}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-brand-muted uppercase tracking-wider mb-1">Current Tier</p>
                            <p className="text-sm text-brand-text">{fan.tier}</p>
                          </div>
                          <div>
                            <p className="text-[10px] text-brand-muted uppercase tracking-wider mb-1">Actions</p>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">Message</Button>
                              <Button variant="ghost" size="sm">View Profile</Button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

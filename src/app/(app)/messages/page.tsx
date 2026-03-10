"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const campaignStats = [
  { label: "Emails Sent", value: "12,847", color: "text-neon-purple" },
  { label: "Open Rate", value: "42.3%", color: "text-neon-cyan" },
  { label: "Click Rate", value: "8.7%", color: "text-neon-green" },
];

const campaigns = [
  {
    id: 1,
    subject: "Raid Night This Saturday - Legendary Members Only",
    status: "Sent",
    statusColor: "bg-neon-green/20 text-neon-green",
    sentAt: "Mar 8, 2026",
    stats: { sent: 847, delivered: 839, opened: 412, clicked: 89 },
  },
  {
    id: 2,
    subject: "New Epic Perk: Monthly Game Night Invites",
    status: "Sent",
    statusColor: "bg-neon-green/20 text-neon-green",
    sentAt: "Mar 5, 2026",
    stats: { sent: 2050, delivered: 2031, opened: 894, clicked: 156 },
  },
  {
    id: 3,
    subject: "March Community Update - New Features Dropping",
    status: "Scheduled",
    statusColor: "bg-neon-blue/20 text-neon-blue",
    sentAt: "Mar 15, 2026 9:00 AM",
    stats: { sent: 0, delivered: 0, opened: 0, clicked: 0 },
  },
  {
    id: 4,
    subject: "Exclusive: SteelSeries Giveaway for Guild Members",
    status: "Draft",
    statusColor: "bg-brand-muted/20 text-brand-muted",
    sentAt: "—",
    stats: { sent: 0, delivered: 0, opened: 0, clicked: 0 },
  },
  {
    id: 5,
    subject: "Win-back: We Miss You - Here is 20% Off",
    status: "Sending",
    statusColor: "bg-neon-purple/20 text-neon-purple",
    sentAt: "Mar 10, 2026",
    stats: { sent: 124, delivered: 118, opened: 0, clicked: 0 },
  },
];

const automations = [
  {
    name: "Welcome Sequence",
    status: "Active",
    statusColor: "bg-neon-green/20 text-neon-green",
    emails: 3,
    description: "Onboards new members over 7 days: Welcome, Getting Started, First Perk Guide",
    triggered: 1247,
    completed: 1089,
  },
  {
    name: "Win-back Campaign",
    status: "Active",
    statusColor: "bg-neon-green/20 text-neon-green",
    emails: 2,
    description: "Re-engages churned members: We Miss You (day 3), Special Offer (day 7)",
    triggered: 312,
    completed: 198,
  },
];

export default function Messages() {
  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-4xl text-white tracking-wide">FAN MESSENGER</h1>
          <p className="text-sm text-brand-muted mt-1">
            Send campaigns, announcements, and automated sequences
          </p>
        </div>
        <Button>
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          New Campaign
        </Button>
      </div>

      {/* Stats */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {campaignStats.map((stat) => (
          <Card key={stat.label}>
            <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">{stat.label}</p>
            <p className={`font-heading text-3xl tracking-wide ${stat.color}`}>{stat.value}</p>
          </Card>
        ))}
      </div>

      {/* Campaigns */}
      <Card className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading text-xl text-white tracking-wide">CAMPAIGNS</h2>
          <div className="flex gap-2">
            {["All", "Sent", "Scheduled", "Draft"].map((filter) => (
              <button
                key={filter}
                className={`text-[10px] px-3 py-1 rounded-sm transition-colors ${
                  filter === "All"
                    ? "bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
                    : "text-brand-muted hover:text-white border border-transparent"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-brand-dark border border-brand-border rounded-sm p-4 hover:border-accent-primary/20 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] px-2 py-0.5 rounded-sm shrink-0 ${campaign.statusColor}`}>
                    {campaign.status}
                  </span>
                  <h3 className="text-sm text-brand-text font-medium">{campaign.subject}</h3>
                </div>
                <span className="text-xs text-brand-muted shrink-0 ml-4">{campaign.sentAt}</span>
              </div>

              {campaign.stats.sent > 0 && (
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <p className="text-[10px] text-brand-muted uppercase">Sent</p>
                    <p className="text-sm text-white font-medium">{campaign.stats.sent.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-muted uppercase">Delivered</p>
                    <p className="text-sm text-white font-medium">{campaign.stats.delivered.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-muted uppercase">Opened</p>
                    <p className="text-sm text-neon-cyan font-medium">
                      {campaign.stats.opened.toLocaleString()}
                      {campaign.stats.delivered > 0 && (
                        <span className="text-[10px] text-brand-muted ml-1">
                          ({((campaign.stats.opened / campaign.stats.delivered) * 100).toFixed(1)}%)
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-muted uppercase">Clicked</p>
                    <p className="text-sm text-neon-green font-medium">
                      {campaign.stats.clicked.toLocaleString()}
                      {campaign.stats.delivered > 0 && (
                        <span className="text-[10px] text-brand-muted ml-1">
                          ({((campaign.stats.clicked / campaign.stats.delivered) * 100).toFixed(1)}%)
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              )}

              {campaign.stats.sent === 0 && campaign.status !== "Sending" && (
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">Edit</Button>
                  {campaign.status === "Scheduled" && (
                    <Button variant="ghost" size="sm">Reschedule</Button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Automations */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading text-xl text-white tracking-wide">AUTOMATIONS</h2>
          <Button variant="ghost" size="sm">Create Automation</Button>
        </div>
        <div className="space-y-3">
          {automations.map((auto) => (
            <div
              key={auto.name}
              className="bg-brand-dark border border-brand-border rounded-sm p-4 hover:border-accent-primary/20 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-sm text-white font-medium">{auto.name}</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-sm ${auto.statusColor}`}>
                    {auto.status}
                  </span>
                  <span className="text-[10px] text-brand-muted">
                    {auto.emails} emails in sequence
                  </span>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
              <p className="text-xs text-brand-muted mb-3">{auto.description}</p>
              <div className="flex gap-6">
                <div>
                  <span className="text-[10px] text-brand-muted uppercase">Triggered</span>
                  <p className="text-sm text-white">{auto.triggered.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-[10px] text-brand-muted uppercase">Completed</span>
                  <p className="text-sm text-neon-green">{auto.completed.toLocaleString()}</p>
                </div>
                <div>
                  <span className="text-[10px] text-brand-muted uppercase">Completion Rate</span>
                  <p className="text-sm text-neon-cyan">
                    {((auto.completed / auto.triggered) * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

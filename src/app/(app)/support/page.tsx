"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Ticket {
  id: string;
  subject: string;
  from: string;
  avatar: number;
  status: string;
  statusColor: string;
  priority: string;
  priorityColor: string;
  created: string;
  lastReply: string;
  preview: string;
}

const tickets: Ticket[] = [
  {
    id: "TK-1847",
    subject: "Cannot access Legendary Discord channel",
    from: "NeonWraith",
    avatar: 17,
    status: "Open",
    statusColor: "bg-neon-green/20 text-neon-green",
    priority: "High",
    priorityColor: "bg-neon-pink/20 text-neon-pink",
    created: "1 hr ago",
    lastReply: "Awaiting response",
    preview: "I upgraded to Legendary tier yesterday but still cannot see the private Discord channels. I tried re-linking my Discord account but it did not work.",
  },
  {
    id: "TK-1846",
    subject: "Billing shows wrong amount charged",
    from: "FrostByte",
    avatar: 20,
    status: "Open",
    statusColor: "bg-neon-green/20 text-neon-green",
    priority: "High",
    priorityColor: "bg-neon-pink/20 text-neon-pink",
    created: "3 hr ago",
    lastReply: "Awaiting response",
    preview: "My invoice shows $29.00 but I am on the Epic tier at $14/mo. Please check and correct this. I have attached a screenshot.",
  },
  {
    id: "TK-1845",
    subject: "When is the next merch drop?",
    from: "DragonSlayer_X",
    avatar: 14,
    status: "Pending",
    statusColor: "bg-neon-blue/20 text-neon-blue",
    priority: "Low",
    priorityColor: "bg-brand-muted/20 text-brand-muted",
    created: "6 hr ago",
    lastReply: "You replied 2 hr ago",
    preview: "Hey, just wondering when the next monthly merch drop is happening? The last one was awesome.",
  },
  {
    id: "TK-1842",
    subject: "Stream VOD not appearing in member area",
    from: "PixelQueen",
    avatar: 5,
    status: "Resolved",
    statusColor: "bg-brand-muted/20 text-brand-muted",
    priority: "Medium",
    priorityColor: "bg-neon-cyan/20 text-neon-cyan",
    created: "1 day ago",
    lastReply: "Resolved 4 hr ago",
    preview: "The latest raid night VOD is not showing up in my member dashboard. Other members are reporting the same issue.",
  },
  {
    id: "TK-1840",
    subject: "How to change my display name",
    from: "CyberNinja420",
    avatar: 11,
    status: "Resolved",
    statusColor: "bg-brand-muted/20 text-brand-muted",
    priority: "Low",
    priorityColor: "bg-brand-muted/20 text-brand-muted",
    created: "2 days ago",
    lastReply: "Resolved 1 day ago",
    preview: "I want to change my display name from CyberNinja420 to something else. Where can I do that?",
  },
  {
    id: "TK-1838",
    subject: "Cancel subscription request",
    from: "VoidWalker",
    avatar: 25,
    status: "Resolved",
    statusColor: "bg-brand-muted/20 text-brand-muted",
    priority: "Medium",
    priorityColor: "bg-neon-cyan/20 text-neon-cyan",
    created: "3 days ago",
    lastReply: "Resolved 2 days ago",
    preview: "I need to cancel my Epic subscription. I tried from the settings page but the button seems broken.",
  },
];

const helpArticles = [
  { title: "Getting Started with Your Guild Membership", views: 1247 },
  { title: "How to Link Your Discord Account", views: 892 },
  { title: "Managing Your Subscription and Billing", views: 634 },
  { title: "Accessing Exclusive Content and Perks", views: 521 },
];

export default function Support() {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  const openCount = tickets.filter((t) => t.status === "Open").length;
  const pendingCount = tickets.filter((t) => t.status === "Pending").length;
  const resolvedCount = tickets.filter((t) => t.status === "Resolved").length;

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-4xl text-white tracking-wide">SUPPORT BASE</h1>
          <p className="text-sm text-brand-muted mt-1">
            Manage support tickets and build your help center
          </p>
        </div>
        <Button variant="secondary">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          Manage Help Center
        </Button>
      </div>

      {/* Stats */}
      <div className="grid lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">Open Tickets</p>
          <p className="font-heading text-3xl tracking-wide text-neon-purple">{openCount}</p>
        </Card>
        <Card>
          <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">Pending</p>
          <p className="font-heading text-3xl tracking-wide text-neon-blue">{pendingCount}</p>
        </Card>
        <Card>
          <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">Avg Response</p>
          <p className="font-heading text-3xl tracking-wide text-neon-cyan">2.4h</p>
        </Card>
        <Card>
          <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">Resolved This Week</p>
          <p className="font-heading text-3xl tracking-wide text-neon-green">{resolvedCount}</p>
        </Card>
      </div>

      {/* Tickets */}
      <Card className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading text-xl text-white tracking-wide">TICKETS</h2>
          <div className="flex gap-2">
            {["All", "Open", "Pending", "Resolved"].map((filter) => (
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

        <div className="space-y-2">
          {tickets.map((ticket) => (
            <div key={ticket.id}>
              <div
                className={`bg-brand-dark border rounded-sm p-4 cursor-pointer transition-colors ${
                  selectedTicket === ticket.id
                    ? "border-accent-primary/30"
                    : "border-brand-border hover:border-accent-primary/20"
                }`}
                onClick={() => setSelectedTicket(selectedTicket === ticket.id ? null : ticket.id)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.pravatar.cc/32?img=${ticket.avatar}`}
                      alt=""
                      className="w-7 h-7 rounded-full shrink-0"
                      width={28}
                      height={28}
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-brand-muted">{ticket.id}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-sm ${ticket.statusColor}`}>
                          {ticket.status}
                        </span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-sm ${ticket.priorityColor}`}>
                          {ticket.priority}
                        </span>
                      </div>
                      <h3 className="text-sm text-brand-text font-medium mt-0.5">{ticket.subject}</h3>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <p className="text-[10px] text-brand-muted">{ticket.created}</p>
                    <p className="text-[10px] text-brand-muted">{ticket.from}</p>
                  </div>
                </div>
                <p className="text-xs text-brand-muted line-clamp-1 ml-10">{ticket.preview}</p>
              </div>

              {/* Expanded ticket detail */}
              {selectedTicket === ticket.id && (
                <div className="bg-brand-dark/50 border border-brand-border border-t-0 rounded-b-sm p-4 space-y-4">
                  <div className="bg-brand-card border border-brand-border rounded-sm p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-brand-text font-medium">{ticket.from}</span>
                      <span className="text-[10px] text-brand-muted">{ticket.created}</span>
                    </div>
                    <p className="text-sm text-brand-muted leading-relaxed">{ticket.preview}</p>
                  </div>

                  {ticket.status !== "Resolved" && (
                    <div className="flex gap-3">
                      <Input
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Type a quick reply..."
                        className="flex-grow"
                      />
                      <Button size="sm">Reply</Button>
                      {ticket.status === "Open" && (
                        <Button variant="secondary" size="sm">Mark Pending</Button>
                      )}
                      <Button variant="ghost" size="sm">Resolve</Button>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-[10px] text-brand-muted">
                    <span>{ticket.lastReply}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Help Center Articles */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading text-xl text-white tracking-wide">HELP CENTER</h2>
          <Button variant="ghost" size="sm">Add Article</Button>
        </div>
        <div className="space-y-2">
          {helpArticles.map((article) => (
            <div
              key={article.title}
              className="flex items-center justify-between bg-brand-dark border border-brand-border rounded-sm px-4 py-3 hover:border-accent-primary/20 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-brand-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <span className="text-sm text-brand-text">{article.title}</span>
              </div>
              <span className="text-xs text-brand-muted">{article.views.toLocaleString()} views</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

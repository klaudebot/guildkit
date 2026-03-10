"use client";

import { Card } from "@/components/ui/card";

const stats = [
  {
    label: "Total Members",
    value: "2,847",
    change: "+12%",
    color: "text-neon-purple",
    sparkline: [20, 25, 22, 30, 28, 35, 32, 40, 38, 45, 50, 48],
    sparkColor: "#A855F7",
  },
  {
    label: "MRR",
    value: "$8,420",
    change: "+23%",
    color: "text-neon-green",
    sparkline: [10, 15, 18, 22, 20, 28, 35, 40, 45, 50, 55, 62],
    sparkColor: "#10B981",
  },
  {
    label: "Engagement",
    value: "89%",
    change: "+5%",
    color: "text-neon-cyan",
    sparkline: [60, 65, 62, 70, 75, 72, 78, 80, 82, 85, 88, 89],
    sparkColor: "#06B6D4",
  },
  {
    label: "New Today",
    value: "34",
    change: "+8%",
    color: "text-neon-pink",
    sparkline: [8, 12, 15, 10, 18, 22, 20, 25, 28, 30, 32, 34],
    sparkColor: "#EC4899",
  },
];

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 80;
  const h = 28;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={w} height={h} className="overflow-visible">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Revenue chart data — 30 data points
const revenueData = [
  180, 220, 200, 260, 240, 300, 280, 320, 310, 350,
  330, 370, 360, 400, 380, 420, 410, 450, 440, 470,
  460, 500, 490, 520, 510, 540, 550, 570, 580, 620,
];

function RevenueChart() {
  const max = Math.max(...revenueData);
  const min = Math.min(...revenueData) * 0.8;
  const range = max - min;
  const w = 700;
  const h = 200;
  const padding = 0;

  const points = revenueData.map((v, i) => {
    const x = padding + (i / (revenueData.length - 1)) * (w - padding * 2);
    const y = h - ((v - min) / range) * (h - 20) - 10;
    return { x, y };
  });

  // Build smooth path using cardinal spline
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpx = (prev.x + curr.x) / 2;
    d += ` C ${cpx} ${prev.y}, ${cpx} ${curr.y}, ${curr.x} ${curr.y}`;
  }

  const last = points[points.length - 1];
  const first = points[0];
  const fillD = `${d} L ${last.x} ${h} L ${first.x} ${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A855F7" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fillD} fill="url(#revGrad)" />
      <path d={d} fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
      {/* Current value dot */}
      <circle cx={last.x} cy={last.y} r="4" fill="#A855F7" />
      <circle cx={last.x} cy={last.y} r="8" fill="#A855F7" opacity="0.2" />
    </svg>
  );
}

const activity = [
  { text: "NightBlade_99 joined Legendary Guild", time: "2 min ago", color: "bg-neon-purple" },
  { text: "xStormRaider upgraded to Epic tier", time: "5 min ago", color: "bg-neon-blue" },
  { text: "$29.00 payment received from PixelQueen", time: "8 min ago", color: "bg-neon-green" },
  { text: "ShadowFox completed Welcome Sequence", time: "15 min ago", color: "bg-neon-cyan" },
  { text: "CyberNinja420 joined Rare Guild", time: "22 min ago", color: "bg-neon-cyan" },
  { text: "$14.00 payment received from DragonSlayer_X", time: "35 min ago", color: "bg-neon-green" },
  { text: "NeonWraith opened support ticket", time: "1 hr ago", color: "bg-neon-pink" },
  { text: "FrostByte shared guild link (12 clicks)", time: "1 hr ago", color: "bg-neon-blue" },
  { text: "VoidWalker upgraded to Legendary tier", time: "2 hr ago", color: "bg-neon-purple" },
  { text: "GlitchHunter resubscribed to Epic", time: "3 hr ago", color: "bg-neon-blue" },
];

const topTiers = [
  { name: "Legendary", members: 847, revenue: "$24,563", growth: "+18%", color: "text-neon-purple" },
  { name: "Epic", members: 1203, revenue: "$16,842", growth: "+12%", color: "text-neon-blue" },
  { name: "Rare", members: 3415, revenue: "$0", growth: "+34%", color: "text-neon-cyan" },
];

const upcoming = [
  { title: "Raid Night Live Stream", date: "Mar 11, 8:00 PM", type: "Stream", typeColor: "bg-neon-purple/20 text-neon-purple" },
  { title: "SteelSeries Sponsor Review", date: "Mar 12, 2:00 PM", type: "Sponsor", typeColor: "bg-neon-green/20 text-neon-green" },
  { title: "Guild Q&A Session", date: "Mar 13, 6:00 PM", type: "Stream", typeColor: "bg-neon-purple/20 text-neon-purple" },
  { title: "Razer Deal Finalization", date: "Mar 14, 10:00 AM", type: "Sponsor", typeColor: "bg-neon-green/20 text-neon-green" },
];

export default function Dashboard() {
  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="font-heading text-4xl text-white tracking-wide">DASHBOARD</h1>
        <p className="text-sm text-brand-muted mt-1">
          Welcome back. Here&apos;s your guild overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label} className="relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">
                  {stat.label}
                </p>
                <p className={`font-heading text-3xl tracking-wide ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-xs text-neon-green mt-1">{stat.change} vs last month</p>
              </div>
              <div className="mt-2">
                <Sparkline data={stat.sparkline} color={stat.sparkColor} />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-glow-purple opacity-20 rounded-full -translate-y-1/2 translate-x-1/2" />
          </Card>
        ))}
      </div>

      {/* Main content area */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Revenue chart */}
        <div className="lg:col-span-8">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-heading text-xl text-white tracking-wide">
                  REVENUE OVERVIEW
                </h2>
                <p className="text-xs text-brand-muted">Last 30 days</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="font-heading text-2xl text-white">$8,420</p>
                  <p className="text-xs text-neon-green">+$1,580 vs last period</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-[10px] px-3 py-1 bg-accent-primary/10 text-accent-primary border border-accent-primary/20 rounded-sm">
                    30D
                  </button>
                  <button className="text-[10px] px-3 py-1 text-brand-muted hover:text-white transition-colors rounded-sm">
                    90D
                  </button>
                  <button className="text-[10px] px-3 py-1 text-brand-muted hover:text-white transition-colors rounded-sm">
                    1Y
                  </button>
                </div>
              </div>
            </div>
            <div className="h-48">
              <RevenueChart />
            </div>
          </Card>
        </div>

        {/* Recent activity */}
        <div className="lg:col-span-4">
          <Card className="h-full">
            <h2 className="font-heading text-xl text-white tracking-wide mb-4">
              RECENT ACTIVITY
            </h2>
            <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
              {activity.map((item, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className={`w-2 h-2 rounded-full ${item.color} mt-1.5 shrink-0`} />
                  <div className="min-w-0">
                    <p className="text-xs text-brand-text leading-relaxed">{item.text}</p>
                    <p className="text-[10px] text-brand-muted">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid lg:grid-cols-12 gap-6 mt-6">
        {/* Top Performing Tiers */}
        <div className="lg:col-span-5">
          <Card>
            <h2 className="font-heading text-xl text-white tracking-wide mb-4">
              TOP PERFORMING TIERS
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-brand-border">
                    <th className="text-left text-[10px] text-brand-muted uppercase tracking-wider pb-2">Tier</th>
                    <th className="text-right text-[10px] text-brand-muted uppercase tracking-wider pb-2">Members</th>
                    <th className="text-right text-[10px] text-brand-muted uppercase tracking-wider pb-2">Revenue</th>
                    <th className="text-right text-[10px] text-brand-muted uppercase tracking-wider pb-2">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {topTiers.map((tier) => (
                    <tr key={tier.name} className="border-b border-brand-border/50 last:border-0">
                      <td className={`py-3 font-medium ${tier.color}`}>{tier.name}</td>
                      <td className="py-3 text-right text-brand-text">{tier.members.toLocaleString()}</td>
                      <td className="py-3 text-right text-brand-text">{tier.revenue}</td>
                      <td className="py-3 text-right text-neon-green">{tier.growth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Upcoming */}
        <div className="lg:col-span-7">
          <Card>
            <h2 className="font-heading text-xl text-white tracking-wide mb-4">
              UPCOMING
            </h2>
            <div className="space-y-3">
              {upcoming.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-brand-dark border border-brand-border rounded-sm px-4 py-3 hover:border-accent-primary/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] px-2 py-0.5 rounded-sm ${item.typeColor}`}>
                      {item.type}
                    </span>
                    <span className="text-sm text-brand-text">{item.title}</span>
                  </div>
                  <span className="text-xs text-brand-muted">{item.date}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

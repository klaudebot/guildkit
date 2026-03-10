"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mrrData = [3200, 3800, 4100, 4500, 4300, 5100, 5600, 5900, 6400, 6800, 7500, 8420];
const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

function MrrChart() {
  const max = Math.max(...mrrData) * 1.1;
  const min = 0;
  const range = max - min;
  const w = 700;
  const h = 220;
  const padBottom = 30;
  const padLeft = 50;
  const chartW = w - padLeft;
  const chartH = h - padBottom;

  const points = mrrData.map((v, i) => {
    const x = padLeft + (i / (mrrData.length - 1)) * chartW;
    const y = chartH - ((v - min) / range) * chartH;
    return { x, y, v };
  });

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpx = (prev.x + curr.x) / 2;
    d += ` C ${cpx} ${prev.y}, ${cpx} ${curr.y}, ${curr.x} ${curr.y}`;
  }

  const last = points[points.length - 1];
  const first = points[0];
  const fillD = `${d} L ${last.x} ${chartH} L ${first.x} ${chartH} Z`;

  // Grid lines
  const gridLines = [0, 2000, 4000, 6000, 8000];

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="mrrGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Grid */}
      {gridLines.map((val) => {
        const y = chartH - ((val - min) / range) * chartH;
        return (
          <g key={val}>
            <line x1={padLeft} y1={y} x2={w} y2={y} stroke="#1E1E2A" strokeWidth="1" />
            <text x={padLeft - 8} y={y + 4} textAnchor="end" fill="#8888A0" fontSize="10">
              ${(val / 1000).toFixed(0)}k
            </text>
          </g>
        );
      })}
      {/* Month labels */}
      {months.map((m, i) => {
        const x = padLeft + (i / (months.length - 1)) * chartW;
        return (
          <text key={m} x={x} y={h - 8} textAnchor="middle" fill="#8888A0" fontSize="10">
            {m}
          </text>
        );
      })}
      <path d={fillD} fill="url(#mrrGrad)" />
      <path d={d} fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      {/* Data points */}
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={i === points.length - 1 ? 5 : 3} fill="#10B981" opacity={i === points.length - 1 ? 1 : 0.6} />
      ))}
    </svg>
  );
}

const breakdownData = [
  { source: "Subscriptions", amount: "$5,052", pct: 60, color: "bg-neon-purple" },
  { source: "Tips & Donations", amount: "$2,105", pct: 25, color: "bg-neon-blue" },
  { source: "Sponsor Deals", amount: "$1,263", pct: 15, color: "bg-neon-green" },
];

const transactions = [
  { name: "NightBlade_99", amount: "$29.00", type: "Subscription", date: "Mar 10, 2026", status: "Completed", statusColor: "text-neon-green" },
  { name: "xStormRaider", amount: "$14.00", type: "Subscription", date: "Mar 10, 2026", status: "Completed", statusColor: "text-neon-green" },
  { name: "PixelQueen", amount: "$50.00", type: "Tip", date: "Mar 10, 2026", status: "Completed", statusColor: "text-neon-green" },
  { name: "ShadowFox", amount: "$14.00", type: "Subscription", date: "Mar 9, 2026", status: "Completed", statusColor: "text-neon-green" },
  { name: "CyberNinja420", amount: "$29.00", type: "Subscription", date: "Mar 9, 2026", status: "Completed", statusColor: "text-neon-green" },
  { name: "DragonSlayer_X", amount: "$25.00", type: "Tip", date: "Mar 9, 2026", status: "Completed", statusColor: "text-neon-green" },
  { name: "NeonWraith", amount: "$14.00", type: "Subscription", date: "Mar 8, 2026", status: "Completed", statusColor: "text-neon-green" },
  { name: "FrostByte", amount: "$29.00", type: "Subscription", date: "Mar 8, 2026", status: "Completed", statusColor: "text-neon-green" },
  { name: "VoidWalker", amount: "$14.00", type: "Subscription", date: "Mar 7, 2026", status: "Refunded", statusColor: "text-neon-pink" },
  { name: "GlitchHunter", amount: "$100.00", type: "Tip", date: "Mar 7, 2026", status: "Completed", statusColor: "text-neon-green" },
];

const sponsors = [
  {
    brand: "SteelSeries",
    value: "$2,500",
    status: "Active",
    statusColor: "bg-neon-green/20 text-neon-green",
    deliverables: "2 dedicated streams, 4 social posts",
    due: "Mar 31, 2026",
  },
  {
    brand: "Razer",
    value: "$1,800",
    status: "Negotiating",
    statusColor: "bg-neon-blue/20 text-neon-blue",
    deliverables: "1 review video, 3 mentions",
    due: "Apr 15, 2026",
  },
  {
    brand: "G-FUEL",
    value: "$1,200",
    status: "Completed",
    statusColor: "bg-brand-muted/20 text-brand-muted",
    deliverables: "3 streams with product placement",
    due: "Feb 28, 2026",
  },
];

export default function Revenue() {
  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-4xl text-white tracking-wide">REVENUE HUB</h1>
          <p className="text-sm text-brand-muted mt-1">
            Track your earnings, subscriptions, and sponsor deals
          </p>
        </div>
        <Button variant="secondary">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Export CSV
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "MRR", value: "$8,420", change: "+23%", color: "text-neon-green" },
          { label: "Total Revenue", value: "$68,340", change: "+18% YoY", color: "text-neon-purple" },
          { label: "Avg LTV", value: "$127", change: "+$12", color: "text-neon-cyan" },
          { label: "Churn Rate", value: "3.2%", change: "-0.5%", color: "text-neon-pink" },
        ].map((stat) => (
          <Card key={stat.label} className="relative overflow-hidden">
            <p className="text-xs text-brand-muted uppercase tracking-wider mb-1">{stat.label}</p>
            <p className={`font-heading text-3xl tracking-wide ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-neon-green mt-1">{stat.change}</p>
          </Card>
        ))}
      </div>

      {/* MRR Chart */}
      <Card className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-heading text-xl text-white tracking-wide">MRR TREND</h2>
            <p className="text-xs text-brand-muted">12-month rolling monthly recurring revenue</p>
          </div>
          <div className="text-right">
            <p className="font-heading text-2xl text-neon-green">$8,420</p>
            <p className="text-xs text-brand-muted">Mar 2026</p>
          </div>
        </div>
        <div className="h-56">
          <MrrChart />
        </div>
      </Card>

      <div className="grid lg:grid-cols-12 gap-6 mb-6">
        {/* Revenue Breakdown */}
        <div className="lg:col-span-5">
          <Card className="h-full">
            <h2 className="font-heading text-xl text-white tracking-wide mb-4">REVENUE BY SOURCE</h2>
            <div className="space-y-4">
              {breakdownData.map((item) => (
                <div key={item.source}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-brand-text">{item.source}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-white font-medium">{item.amount}</span>
                      <span className="text-xs text-brand-muted">{item.pct}%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-brand-dark rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Monthly comparison */}
            <div className="mt-6 pt-6 border-t border-brand-border">
              <h3 className="text-xs text-brand-muted uppercase tracking-wider mb-3">MONTHLY COMPARISON</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-dark border border-brand-border rounded-sm p-3">
                  <p className="text-[10px] text-brand-muted uppercase">This Month</p>
                  <p className="font-heading text-xl text-neon-green">$8,420</p>
                  <p className="text-xs text-neon-green">+23%</p>
                </div>
                <div className="bg-brand-dark border border-brand-border rounded-sm p-3">
                  <p className="text-[10px] text-brand-muted uppercase">Last Month</p>
                  <p className="font-heading text-xl text-white">$6,840</p>
                  <p className="text-xs text-brand-muted">baseline</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Sponsor Deals */}
        <div className="lg:col-span-7">
          <Card className="h-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-xl text-white tracking-wide">SPONSOR DEALS</h2>
              <Button variant="ghost" size="sm">Add Deal</Button>
            </div>
            <div className="space-y-3">
              {sponsors.map((deal) => (
                <div
                  key={deal.brand}
                  className="bg-brand-dark border border-brand-border rounded-sm p-4 hover:border-accent-primary/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-heading text-lg text-white tracking-wide">{deal.brand}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-sm ${deal.statusColor}`}>
                        {deal.status}
                      </span>
                    </div>
                    <span className="font-heading text-lg text-neon-green">{deal.value}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-brand-muted">
                    <span>{deal.deliverables}</span>
                    <span>Due: {deal.due}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Transaction History */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading text-xl text-white tracking-wide">TRANSACTION HISTORY</h2>
          <Button variant="ghost" size="sm">View All</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="text-left text-[10px] text-brand-muted uppercase tracking-wider pb-3">Subscriber</th>
                <th className="text-left text-[10px] text-brand-muted uppercase tracking-wider pb-3">Amount</th>
                <th className="text-left text-[10px] text-brand-muted uppercase tracking-wider pb-3">Type</th>
                <th className="text-left text-[10px] text-brand-muted uppercase tracking-wider pb-3">Date</th>
                <th className="text-right text-[10px] text-brand-muted uppercase tracking-wider pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr key={i} className="border-b border-brand-border/50 last:border-0 hover:bg-brand-dark/50 transition-colors">
                  <td className="py-3 text-brand-text">{tx.name}</td>
                  <td className="py-3 text-white font-medium">{tx.amount}</td>
                  <td className="py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-sm ${
                      tx.type === "Subscription"
                        ? "bg-neon-purple/10 text-neon-purple"
                        : "bg-neon-cyan/10 text-neon-cyan"
                    }`}>
                      {tx.type}
                    </span>
                  </td>
                  <td className="py-3 text-brand-muted">{tx.date}</td>
                  <td className={`py-3 text-right ${tx.statusColor}`}>{tx.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

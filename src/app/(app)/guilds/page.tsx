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
  members: number;
}

export default function Guilds() {
  const [showCreate, setShowCreate] = useState(false);
  const [tiers, setTiers] = useState<GuildTier[]>([]);
  const [newTier, setNewTier] = useState({ name: "", price: "", perks: "" });

  function handleCreate() {
    if (!newTier.name || !newTier.price) return;
    const colors = ["neon-purple", "neon-blue", "neon-cyan", "neon-green", "neon-pink"];
    setTiers([
      ...tiers,
      {
        id: Date.now().toString(),
        name: newTier.name,
        price: parseInt(newTier.price) * 100,
        perks: newTier.perks.split(",").map((p) => p.trim()).filter(Boolean),
        color: colors[tiers.length % colors.length],
        members: 0,
      },
    ]);
    setNewTier({ name: "", price: "", perks: "" });
    setShowCreate(false);
  }

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-4xl text-white tracking-wide">
            GUILD TIERS
          </h1>
          <p className="text-sm text-brand-muted mt-1">
            Create and manage membership levels for your community
          </p>
        </div>
        <Button onClick={() => setShowCreate(true)}>
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          New Tier
        </Button>
      </div>

      {showCreate && (
        <Card className="mb-6 border-accent-primary/30">
          <h2 className="font-heading text-2xl text-white tracking-wide mb-4">
            CREATE TIER
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-brand-muted block mb-1.5">
                Tier Name
              </label>
              <Input
                value={newTier.name}
                onChange={(e) =>
                  setNewTier({ ...newTier, name: e.target.value })
                }
                placeholder="e.g. Legendary, Epic, Rare"
              />
            </div>
            <div>
              <label className="text-xs text-brand-muted block mb-1.5">
                Monthly Price (USD)
              </label>
              <Input
                type="number"
                value={newTier.price}
                onChange={(e) =>
                  setNewTier({ ...newTier, price: e.target.value })
                }
                placeholder="e.g. 9"
                min="0"
              />
            </div>
            <div>
              <label className="text-xs text-brand-muted block mb-1.5">
                Perks (comma-separated)
              </label>
              <Input
                value={newTier.perks}
                onChange={(e) =>
                  setNewTier({ ...newTier, perks: e.target.value })
                }
                placeholder="e.g. Exclusive streams, Discord role, Monthly merch"
              />
            </div>
            <div className="flex gap-3">
              <Button onClick={handleCreate}>Create Tier</Button>
              <Button variant="ghost" onClick={() => setShowCreate(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      )}

      {tiers.length === 0 && !showCreate ? (
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
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
          <h2 className="font-heading text-2xl text-white tracking-wide mb-2">
            NO GUILD TIERS YET
          </h2>
          <p className="text-sm text-brand-muted mb-6 max-w-md mx-auto">
            Create your first membership tier to start building your guild.
            Each tier can have different pricing and exclusive perks.
          </p>
          <Button onClick={() => setShowCreate(true)}>Create Your First Tier</Button>
        </Card>
      ) : (
        <div className="space-y-4">
          {tiers.map((tier) => (
            <Card
              key={tier.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-sm bg-${tier.color}/10 flex items-center justify-center`}
                >
                  <span
                    className={`font-heading text-xl text-${tier.color} tracking-wide`}
                  >
                    {tier.name[0]}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-white tracking-wide">
                    {tier.name.toUpperCase()}
                  </h3>
                  <p className="text-xs text-brand-muted">
                    ${tier.price / 100}/mo — {tier.members} members
                  </p>
                  {tier.perks.length > 0 && (
                    <p className="text-xs text-brand-muted mt-1">
                      {tier.perks.join(" · ")}
                    </p>
                  )}
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

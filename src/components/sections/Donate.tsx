"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const tiers = [
  { amount: "£25", period: "per month" },
  { amount: "£50", period: "per month" },
  { amount: "£100", period: "per month" },
  { amount: "£500", period: "one-time" },
];

export function Donate() {
  const [activeTier, setActiveTier] = useState("£25");

  return (
    <section id="donate" className="bg-terra px-8 py-20 text-center md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white/65">
          Make a difference
        </div>
        <h2 className="mb-6 font-serif text-[2.2rem] font-bold text-white md:text-[2.8rem]">
          Your support changes lives
        </h2>
        <p className="mx-auto mb-12 max-w-[560px] text-[1rem] leading-[1.75] text-white/75">
          Every contribution — no matter the size — funds programmes that protect girls, empower communities, and drive real, lasting change.
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {tiers.map((tier) => (
            <Button
              key={tier.amount}
              onClick={() => setActiveTier(tier.amount)}
              aria-pressed={activeTier === tier.amount}
              className={`h-auto flex flex-col items-center gap-1 rounded-sm border px-7 py-4 font-sans transition-all duration-200 ${
                activeTier === tier.amount
                  ? "border-white bg-white/25 text-white"
                  : "border-white/25 bg-white/12 text-white hover:bg-white/25"
              }`}
            >
              <span className="text-[1.1rem] font-medium leading-none">{tier.amount}</span>
              <span className="text-[0.65rem] uppercase tracking-widest opacity-65">
                {tier.period}
              </span>
            </Button>
          ))}
        </div>

        <Button className="h-auto rounded-sm bg-white px-12 py-4 text-[1rem] font-medium uppercase tracking-wider text-terra transition-transform duration-150 hover:scale-105 hover:bg-white">
          Donate Now ↗
        </Button>

        <p className="mt-8 text-[0.78rem] text-white/40">
          Registered charity · Secure giving · 100% goes to programme work
        </p>
      </div>
    </section>
  );
}

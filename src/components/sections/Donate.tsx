"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const tiers = [
  { amount: "£25", period: "per month", impact: "Supports peer education for adolescent girls" },
  { amount: "£50", period: "per month", impact: "Funds community dialogue and family engagement" },
  { amount: "£100", period: "per month", impact: "Helps expand protection and referral pathways" },
  { amount: "£500", period: "one-time", impact: "Strengthens programme delivery where it is needed most" },
];

export function Donate() {
  const [activeTier, setActiveTier] = useState(tiers[0].amount);
  const selected = tiers.find((tier) => tier.amount === activeTier) ?? tiers[0];

  const donateHref = `mailto:hello@billisaction.org?subject=${encodeURIComponent(
    `Donation enquiry — ${selected.amount} ${selected.period}`
  )}&body=${encodeURIComponent(
    `Hello Bilis Initiative,\n\nI would like to support your work with a gift of ${selected.amount} ${selected.period}.\n\nPlease send me secure giving instructions.\n\nThank you.`
  )}`;

  return (
    <section id="donate" className="relative overflow-hidden bg-terra px-6 py-20 text-white sm:px-8 md:px-12 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,191,104,0.18),transparent_42%)]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
        <div>
          <div className="mb-5 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Support the work
          </div>
          <h2 className="max-w-[12ch] font-serif text-[clamp(2.5rem,4.4vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.025em]">
            Your support protects futures.
          </h2>
          <p className="mt-6 max-w-xl text-[1.03rem] leading-[1.75] text-white/82">
            Every gift helps fund programmes that protect girls, strengthen community leadership, and drive lasting change.
          </p>
          <p className="mt-8 text-[0.78rem] uppercase tracking-[0.12em] text-white/70">
            Registered charity · Secure giving instructions by email
          </p>
        </div>

        <div className="border border-white/20 bg-white/10 p-7 backdrop-blur-sm md:p-9">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-gold">Choose a gift</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2" role="group" aria-label="Choose a gift amount">
            {tiers.map((tier) => {
              const isActive = activeTier === tier.amount;
              return (
                <button
                  key={tier.amount}
                  type="button"
                  onClick={() => setActiveTier(tier.amount)}
                  aria-pressed={isActive}
                  className={`min-h-20 rounded-sm border px-5 py-4 text-left transition-all duration-200 ${
                    isActive
                      ? "border-gold bg-white text-terra shadow-sm"
                      : "border-white/25 bg-transparent text-white hover:border-white/55 hover:bg-white/10"
                  }`}
                >
                  <span className="block font-serif text-[1.55rem] font-bold leading-none">{tier.amount}</span>
                  <span className={`mt-2 block text-[0.68rem] uppercase tracking-[0.12em] ${isActive ? "text-terra/70" : "text-white/70"}`}>
                    {tier.period}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-6 text-[0.9rem] leading-[1.65] text-white/82">{selected.impact}</p>

          <Button
            render={<a href={donateHref} />}
            nativeButton={false}
            className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-white px-8 py-4 text-[0.82rem] font-semibold uppercase tracking-[0.1em] text-terra transition-colors duration-200 hover:bg-gold hover:text-earth"
          >
            Continue by email →
          </Button>
        </div>
      </div>
    </section>
  );
}

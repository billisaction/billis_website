import { Badge } from "@/components/ui/badge";

const regionalStats = [
  {
    region: "Somalia",
    impact: "Behavioral Change",
    stats: [
      { label: "Villages", value: "25+" },
      { label: "Leaders Engaged", value: "150+" },
      { label: "Community Commitments", value: "1,200+" },
    ],
  },
  {
    region: "Kenya",
    impact: "Girl Empowerment",
    stats: [
      { label: "Schools Partnered", value: "15" },
      { label: "Girls Mentored", value: "450+" },
      { label: "Support Groups", value: "20" },
    ],
  },
  {
    region: "United Kingdom",
    impact: "Policy & Awareness",
    stats: [
      { label: "Awareness Campaigns", value: "10+" },
      { label: "Policy Dialogues", value: "5" },
      { label: "Survivor Networks", value: "12" },
    ],
  },
];

export function RegionalImpact() {
  return (
    <section className="bg-sand py-20 px-8 md:px-12 md:py-24 border-y border-earth/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
            Local Engagement
          </div>
          <h2 className="font-serif text-[2.2rem] font-bold text-earth md:text-[2.8rem] mb-6">
            Impact across our regions
          </h2>
          <p className="mx-auto max-w-2xl text-[1rem] leading-relaxed text-earth-mid">
            A detailed look at the progress we've made in our target areas through local leadership and survivor voices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regionalStats.map((region) => (
            <div key={region.region} className="bg-cream p-8 rounded-sm border border-earth/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 text-[0.7rem] font-bold uppercase tracking-widest text-terra">
                {region.impact}
              </div>
              <h3 className="font-serif text-[1.5rem] font-bold text-earth mb-8 leading-tight">
                {region.region}
              </h3>
              
              <div className="space-y-6">
                {region.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between border-b border-earth/5 pb-4">
                    <div className="text-[0.85rem] text-earth-mid">{stat.label}</div>
                    <div className="font-serif text-[1.2rem] font-black text-terra">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

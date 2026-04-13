const milestones = [
  {
    year: "2018",
    title: "The First Dialogue",
    desc: "Bilis Initiative was founded with a single community dialogue session in Goday, Somali Regional State.",
  },
  {
    year: "2020",
    title: "Regional Expansion",
    desc: "We expanded our operations to Kenya, establishing support networks for adolescent girls in Nairobi.",
  },
  {
    year: "2022",
    title: "Policy Breakthrough",
    desc: "Successfully advocated for the enforcement of local anti-FGM laws in 5 target districts.",
  },
  {
    year: "2024",
    title: "1,000 Girls Supported",
    desc: "Reached a major milestone of providing direct support and education to over 1,000 girls.",
  },
];

export function Milestones() {
  return (
    <section className="bg-cream py-20 px-8 md:px-12 md:py-24 border-y border-earth/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
            Our Journey
          </div>
          <h2 className="font-serif text-[2.2rem] font-bold text-earth md:text-[2.8rem] mb-6">
            Milestones of change
          </h2>
          <p className="mx-auto max-w-2xl text-[1rem] leading-relaxed text-earth-mid">
            A timeline of our progress and the key moments that have shaped our mission over the years.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line (Mobile) */}
          <div className="absolute left-4 top-0 h-full w-px bg-terra/20 md:hidden"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, idx) => (
              <div key={milestone.year} className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right'}`}>
                <div className="flex-1 md:w-1/2">
                  <div className={`bg-sand/30 p-8 rounded-sm border border-earth/5 shadow-sm hover:shadow-md transition-shadow ${idx % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                    <div className="font-serif text-[2.5rem] font-black text-terra/30 mb-2 leading-none">
                      {milestone.year}
                    </div>
                    <h3 className="font-serif text-[1.5rem] font-bold text-earth mb-4">{milestone.title}</h3>
                    <p className="text-[0.95rem] leading-relaxed text-earth-mid">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
                
                {/* Center Dot */}
                <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-terra shrink-0 relative z-10">
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

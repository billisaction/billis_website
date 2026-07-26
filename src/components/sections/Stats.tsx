export function Stats() {
  const stats = [
    { num: "200M", label: "Girls and women living with FGM", desc: "Across more than 30 countries" },
    { num: "3M", label: "Girls at risk every year", desc: "Most are under the age of 15" },
    { num: "90%", label: "Prevalence in Somali Regional State", desc: "Among the highest rates globally" },
    { num: "0", label: "Acceptable cases", desc: "No benefit. No justification." },
  ];

  return (
    <section id="stats" className="bg-terra-dark px-6 py-20 text-white sm:px-8 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/20 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              The urgency
            </div>
            <h2 className="max-w-[11ch] font-serif text-[clamp(2.4rem,4vw,4rem)] font-bold leading-[1.02] tracking-[-0.025em]">
              This work cannot wait.
            </h2>
          </div>
          <p className="max-w-2xl text-[1rem] leading-[1.75] text-white/78 lg:justify-self-end">
            FGM remains a global crisis, but every number represents a girl whose safety, health, and future can still be protected.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-b border-white/15 py-9 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <div className="font-serif text-[clamp(3.2rem,5vw,5rem)] font-black leading-none text-gold">{stat.num}</div>
              <h3 className="mt-5 max-w-[18rem] text-[0.86rem] font-semibold uppercase leading-[1.45] tracking-[0.1em] text-white">{stat.label}</h3>
              <p className="mt-3 text-[0.84rem] leading-relaxed text-white/65">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

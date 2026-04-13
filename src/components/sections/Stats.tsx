export function Stats() {
  const stats = [
    {
      num: "200M",
      label: "Girls & women living with FGM",
      desc: "Across 30+ countries worldwide",
    },
    {
      num: "3M",
      label: "Girls at risk every year",
      desc: "Most under age 15",
    },
    {
      num: "90%",
      label: "Prevalence in Somali Regional State",
      desc: "One of the highest rates globally",
    },
    {
      num: "0",
      label: "Acceptable cases",
      desc: "No medical benefit. No justification.",
    },
  ];

  return (
    <section id="stats" className="bg-earth px-8 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra-light">
            The scale of this
          </div>
          <h2 className="font-serif text-[2.2rem] font-bold text-sand md:text-[2.8rem]">
            Why this work cannot wait
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`border-white/8 p-10 text-center md:border-r ${
                idx === stats.length - 1 ? "md:border-r-0" : ""
              }`}
            >
              <div className="font-serif text-[3.2rem] font-black leading-none text-terra-light">
                {stat.num}
              </div>
              <div className="mt-4 text-[0.78rem] uppercase tracking-widest text-sand-dark/55">
                {stat.label}
              </div>
              <div className="mt-2 text-[0.85rem] text-sand-dark/40">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

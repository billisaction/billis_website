const steps = [
  {
    num: "01",
    title: "Community Assessment",
    desc: "We begin by understanding the cultural and social dynamics of each village through local leadership.",
  },
  {
    num: "02",
    title: "Survivor-Led Dialogue",
    desc: "Honest conversations led by survivors focus on shared values of health, safety, and empowerment.",
  },
  {
    num: "03",
    title: "Youth Empowerment",
    desc: "Adolescent girls receive life-skills training and support that builds confidence and agency.",
  },
  {
    num: "04",
    title: "Public Declaration",
    desc: "Communities declare their commitment to ending FGM and establish new norms of protection.",
  },
];

export function Process() {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-terra">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Our method
          </div>
          <h2 className="font-serif text-[clamp(2.4rem,4vw,4rem)] font-bold leading-[1.03] tracking-[-0.025em] text-earth">
            How we drive community change
          </h2>
          <p className="mt-6 max-w-2xl text-[1rem] leading-[1.75] text-earth-mid">
            Change is built from within. Our approach is designed for trust, participation, and long-term sustainability.
          </p>
        </div>

        <div className="grid gap-0 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={`border-t border-earth/15 py-8 md:border-t-0 md:border-l md:px-7 md:first:border-l-0 md:first:pl-0 ${index === 0 ? "" : ""}`}
            >
              <div className="font-serif text-[2rem] font-black leading-none text-terra">{step.num}</div>
              <h3 className="mt-5 font-serif text-[1.3rem] font-bold text-earth">{step.title}</h3>
              <p className="mt-4 text-[0.9rem] leading-[1.7] text-earth-mid">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

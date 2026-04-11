const steps = [
  {
    num: "01",
    title: "Community Assessment",
    desc: "We begin by understanding the specific cultural and social dynamics of each village through local leadership engagement.",
  },
  {
    num: "02",
    title: "Survivor-Led Dialogue",
    desc: "We facilitate honest conversations led by survivors, focusing on shared values of health, safety, and empowerment.",
  },
  {
    num: "03",
    title: "Youth Empowerment",
    desc: "We provide adolescent girls with life-skills training and vocational support to build their confidence and future.",
  },
  {
    num: "04",
    title: "Public Declaration",
    desc: "Communities collectively declare their commitment to ending FGM, establishing new social norms of protection.",
  },
];

export function Process() {
  return (
    <section className="bg-earth py-20 px-8 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra-light">
            Our Method
          </div>
          <h2 className="font-serif text-[2.2rem] font-bold text-sand md:text-[2.8rem] mb-6">
            How we drive community change
          </h2>
          <p className="mx-auto max-w-2xl text-[1rem] leading-relaxed text-[#B8A898]">
            Our systematic approach ensures that change is built from within the community, ensuring long-term sustainability.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden md:block -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-all duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-terra text-white font-serif text-xl font-bold">
                  {step.num}
                </div>
                <h3 className="font-serif text-[1.25rem] font-bold text-sand mb-4">{step.title}</h3>
                <p className="text-[0.85rem] leading-relaxed text-sand/60">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

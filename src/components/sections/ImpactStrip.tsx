export function ImpactStrip() {
  const items = [
    "Awareness & behaviour change",
    "Adolescent girl empowerment",
    "Community & family engagement",
    "Protection & referral systems",
    "Legal advocacy & policy",
  ];

  return (
    <div
      className="flex items-center justify-center gap-8 overflow-x-auto bg-terra-dark px-8 py-5 md:gap-12 md:px-12"
      aria-label="Our focus areas"
    >
      {items.map((item) => (
        <div key={item} className="flex shrink-0 items-center gap-2.5">
          <div className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
          <span className="text-[0.78rem] uppercase tracking-widest text-sand">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

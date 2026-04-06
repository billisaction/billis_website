export function ImpactStrip() {
  const items = [
    "Awareness & behaviour change",
    "Adolescent girl empowerment",
    "Community & family engagement",
    "Protection & referral systems",
    "Legal advocacy & policy",
  ];

  return (
    <div className="flex items-center justify-center gap-12 overflow-x-auto bg-terra-dark px-12 py-5 scrollbar-hide">
      {items.map((item) => (
        <div key={item} className="flex shrink-0 items-center gap-2.5">
          <div className="h-1.5 w-1.5 rounded-full bg-terra-light"></div>
          <span className="text-[0.78rem] uppercase tracking-widest text-sand/75">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

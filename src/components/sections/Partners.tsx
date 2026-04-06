import { Badge } from "@/components/ui/badge";

export function Partners() {
  const partners = [
    "UNICEF Partner",
    "UN Women",
    "Comic Relief",
    "UK Gov't",
    "EU Funded",
  ];

  return (
    <section className="bg-cream px-8 py-14 md:px-12 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-12 md:flex-nowrap md:justify-start">
        <span className="shrink-0 text-[0.72rem] uppercase tracking-[0.12em] text-earth-mid">
          Trusted by
        </span>
        <div className="flex flex-wrap items-center justify-center gap-8 md:justify-start">
          {partners.map((partner) => (
            <Badge
              key={partner}
              variant="secondary"
              className="h-auto rounded-[3px] bg-sand px-5 py-2.5 text-[0.8rem] font-medium tracking-wide text-earth-mid hover:bg-sand"
            >
              {partner}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

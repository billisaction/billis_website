import Image from "next/image";
import Link from "next/link";

const principles = [
  {
    num: "01",
    title: "Survivor-centred",
    desc: "Lived experience guides every programme and decision.",
  },
  {
    num: "02",
    title: "Community-led",
    desc: "We work through local language, relationships, and trust.",
  },
  {
    num: "03",
    title: "Focused on lasting change",
    desc: "We address the beliefs and systems behind harmful practices.",
  },
  {
    num: "04",
    title: "Safe for every girl",
    desc: "We strengthen the support around girls at home and in school.",
  },
];

export function Mission() {
  return (
    <section id="mission" className="bg-cream px-6 py-20 sm:px-8 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-terra">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Who we are
            </div>
            <h2 className="max-w-[12ch] font-serif text-[clamp(2.4rem,4.5vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.025em] text-earth">
              Change grows from within a community.
            </h2>
            <p className="mt-7 max-w-[610px] text-[1.04rem] leading-[1.8] text-earth-mid">
              Bilis Initiative is a community-driven organisation dedicated to ending FGM and advancing the rights, dignity, and empowerment of women and girls in Somali communities.
            </p>
            <p className="mt-5 max-w-[610px] text-[1.04rem] leading-[1.8] text-earth-mid">
              We listen first, centre survivor voices, and build the trust required for change that lasts across generations.
            </p>
            <Link
              href="/about/"
              className="group mt-8 inline-flex min-h-11 items-center border-b border-gold pb-1 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-terra transition-colors hover:text-terra-dark"
            >
              Read our story <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/IMG_0996.JPG.jpeg"
                alt="Somali community members gathering for a Bilis Initiative session"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
            <div className="grid sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle.num} className="border-b border-earth/12 py-6 sm:odd:pr-6 sm:even:pl-6">
                  <div className="mb-3 font-serif text-[1.15rem] font-bold text-terra">{principle.num}</div>
                  <h3 className="text-[0.92rem] font-semibold text-earth">{principle.title}</h3>
                  <p className="mt-2 text-[0.86rem] leading-[1.65] text-earth-mid">{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

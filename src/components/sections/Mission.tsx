import Image from "next/image";

export function Mission() {
  const pillars = [
    {
      title: "Survivor-centred approach",
      desc: "Every programme, every decision, starts with those who have lived experience. Their voice is our compass.",
    },
    {
      title: "Cultural understanding",
      desc: "We engage communities from within — using language, relationships, and respect to create genuine dialogue.",
    },
    {
      title: "Transforming social norms",
      desc: "Awareness alone doesn't change behaviour. We work on the beliefs and conversations that drive lasting transformation.",
    },
    {
      title: "Safe environments for girls",
      desc: "We build support systems — in schools, families, and communities — where girls can grow up protected and empowered.",
    },
  ];

  return (
    <section id="mission" className="bg-sand px-8 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2">
          {/* Text Content */}
          <div className="flex flex-col">
            <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
              Who we are
            </div>
            <h2 className="mb-6 font-serif text-[2.2rem] font-bold leading-tight text-earth md:text-[2.8rem]">
              A community that believes in every girl's right to be whole
            </h2>
            <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-sm shadow-md md:hidden">
              <Image
                src="/IMG_0996.JPG.jpeg"
                alt="Somali community gathering"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 text-[1rem] leading-[1.85] text-earth-mid">
              <p>
                Bilis Initiative is a community-driven organisation dedicated to ending Female Genital Mutilation and advancing the <strong className="font-medium text-earth">rights, dignity, and empowerment</strong> of women and girls in Somali communities.
              </p>
              <p>
                We don't work from the outside in. We work from the inside out — with cultural understanding, survivor voices, and deep-rooted trust built over years of relationship.
              </p>
              <p>
                Because lasting change doesn't happen through pressure. It happens through <strong className="font-medium text-earth">belonging, conversation, and courage.</strong>
              </p>
            </div>
          </div>

          {/* Pillars and Image Grid */}
          <div className="grid gap-6">
            <div className="relative hidden h-[250px] w-full overflow-hidden rounded-sm shadow-md md:block">
              <Image
                src="/IMG_0996.JPG.jpeg"
                alt="Somali community gathering"
                fill
                className="object-cover"
              />
            </div>
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-sm border-l-4 border-terra bg-cream p-5 shadow-sm"
              >
                <h4 className="mb-1 text-[0.9rem] font-medium text-earth">
                  {pillar.title}
                </h4>
                <p className="text-[0.82rem] leading-relaxed text-earth-mid">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

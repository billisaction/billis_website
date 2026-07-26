import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export function Programs() {
  const programs = [
    {
      title: "Girl Power Programme",
      tag: "Education",
      desc: "Equipping adolescent girls with life skills, knowledge of their rights, and the confidence to speak up — in school, at home, and in their communities.",
      bg: "bg-gradient-to-br from-terra-dark to-terra",
      image: "/IMG_0994.JPG.jpeg",
    },
    {
      title: "Community & Family Dialogue",
      tag: "Engagement",
      desc: "Bringing together families, religious leaders, and men to open honest conversations about FGM — and to build shared commitments to end it.",
      bg: "bg-gradient-to-br from-terra to-terra-light",
      image: "/IMG_0989.JPG.jpeg",
    },
    {
      title: "Policy & Legal Advocacy",
      tag: "Advocacy",
      desc: "Pushing for the enforcement of laws and policies against FGM, and amplifying survivor voices at local, national, and international levels.",
      bg: "bg-gradient-to-br from-terra-dark to-terra",
      image: "/IMG_0995.JPG.jpeg",
    },
  ];

  return (
    <section id="programs" className="bg-sand px-6 py-20 sm:px-8 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="flex flex-col">
            <div className="mb-4 flex items-center gap-2.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
              <span className="h-px w-7 bg-gold"></span>
              What we do
            </div>
            <h2 className="font-serif text-[2.2rem] font-bold text-earth md:text-[2.8rem]">
              Our programmes
            </h2>
          </div>
          <Button
            render={<Link href="/what-we-do/" />}
            nativeButton={false}
            className="group h-auto rounded-sm bg-terra px-6 py-3 text-[0.82rem] font-semibold uppercase tracking-[0.1em] text-white hover:bg-terra-dark"
          >
            View all programmes <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <Card
              key={program.title}
              className="group overflow-hidden border border-earth/10 bg-white shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-terra/25 hover:shadow-md"
            >
              <div className={`h-[230px] w-full p-6 flex items-end relative overflow-hidden`}>
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className={`absolute inset-0 opacity-15 mix-blend-multiply ${program.bg}`}></div>
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent"></div>
                <Badge className="rounded-sm bg-terra text-[0.68rem] uppercase tracking-widest text-white hover:bg-terra relative z-10">
                  {program.tag}
                </Badge>
              </div>
              <CardContent className="p-6 md:p-8">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-serif text-[1.35rem] font-bold text-earth">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <p className="text-[0.92rem] leading-relaxed text-earth-mid">
                  {program.desc}
                </p>
                <Link
                  href="/what-we-do/#programs"
                  className="mt-6 inline-flex min-h-11 items-center text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-terra"
                >
                  Learn more <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { MapPin, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-earth">
      <div className="grid h-full grid-cols-1 md:grid-cols-2">
        {/* Hero Content */}
        <div className="z-10 flex flex-col justify-center px-8 py-20 md:px-14 md:py-24">
          <div className="mb-6 flex items-center gap-2.5 text-[0.75rem] font-medium uppercase tracking-[0.15em] text-terra-light">
            <span className="h-px w-7 bg-terra-light"></span>
            Ending FGM. Empowering Girls.
          </div>
          <h1 className="mb-6 font-serif text-[2.6rem] font-black leading-[1.1] text-sand md:text-[3.8rem]">
            Every girl deserves to grow up <em className="not-italic text-terra-light">whole.</em>
          </h1>
          <p className="mb-10 max-w-[460px] text-[1.05rem] leading-[1.75] text-[#B8A898]">
            Bilis Initiative works with Somali communities to end Female Genital Mutilation — through education, empowerment, and lasting cultural change.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="h-auto rounded-sm bg-terra px-8 py-3.5 text-[0.9rem] font-medium uppercase tracking-wider hover:bg-terra-light">
              Support Our Work ↗
            </Button>
            <Button
              variant="outline"
            
              className="h-auto rounded-sm border-white/30 bg-transparent px-8 py-3.5 text-[0.9rem] font-normal uppercase tracking-wider text-sand hover:border-sand hover:bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative overflow-hidden bg-gradient-to-br from-terra-dark to-black">
          <Image
            src="/IMG_0988.JPG.jpeg"
            alt="Girls in a Somali community"
            fill
            className="object-cover opacity-60 mix-blend-overlay"
            priority
          />
          {/* Decorative Pattern */}
          <svg className="absolute inset-0 h-full w-full opacity-15" viewBox="0 0 400 500" fill="none">
            <circle cx="320" cy="80" r="180" stroke="white" strokeWidth="0.5" />
            <circle cx="320" cy="80" r="130" stroke="white" strokeWidth="0.5" />
            <circle cx="320" cy="80" r="80" stroke="white" strokeWidth="0.5" />
            <circle cx="80" cy="400" r="120" stroke="white" strokeWidth="0.5" />
            <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeWidth="0.3" />
            <path d="M160 0 L160 500" stroke="white" strokeWidth="0.3" />
            <path d="M0 0 L400 500" stroke="white" strokeWidth="0.25" />
          </svg>

          {/* Floating Cards */}
          <div className="absolute inset-8 flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-6">
              {/* <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full border border-terra/40 bg-terra/25"> */}
                {/* <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-terra">
                  <MapPin className="h-[22px] w-[22px] text-white" />
                </div> */}
              {/* </div> */}
              {/* <div className="max-w-[200px] rounded-sm border border-white/12 bg-white/7 p-4 md:p-5">
                <p className="mb-1 text-[0.75rem] uppercase tracking-wider text-sand/50">Our reach</p>
                <p className="font-serif text-[1.3rem] font-bold text-sand">3 countries</p>
                <p className="text-[0.75rem] text-sand/40">Somali Reginal State </p>
              </div> */}
            </div>
            {/* <div className="rounded-sm border border-white/10 bg-white/6 p-5 md:p-6">
              <p className="mb-2 text-[0.72rem] uppercase tracking-widest text-sand/45">Survivor-centred since day one</p>
              <p className="text-[0.9rem] leading-relaxed text-sand/75">
                Rooted in cultural understanding, guided by those who know it most.
              </p>
            </div> */}
          </div>

          {/* Hero Stat Bar */}
          <div className="absolute bottom-0 left-0 right-0 flex gap-8 bg-terra px-8 py-6 md:px-10">
            {[
              { num: "200M+", label: "Girls at risk globally" },
              { num: "1000+", label: "Girls supported" },
              { num: "5+", label: "Years of impact" },
            ].map((stat) => (
              <div key={stat.label} className="flex-1 text-center">
                <div className="font-serif text-[1.8rem] font-bold text-white">{stat.num}</div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-widest text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-[0.65rem] uppercase tracking-widest">Explore</span>
        <ChevronDown className="h-5 w-5" />
      </div>
    </section>
  );
}

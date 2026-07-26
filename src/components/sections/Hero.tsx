import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[82dvh] items-end overflow-hidden bg-cream md:min-h-[86dvh] md:items-center">
      <Image
        src="/hero-workshop.jpg"
        alt="Young people in a Bilis Initiative community workshop holding Xaqiiq and Been cards"
        fill
        priority
        sizes="100vw"
        className="animate-[hero-image-in_1.2s_ease-out_both] object-cover object-[62%_35%] md:object-[center_35%]"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.96)_43%,rgba(255,255,255,0.28)_75%,rgba(255,255,255,0.04)_100%)] md:bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_34%,rgba(255,255,255,0.68)_49%,rgba(255,255,255,0.12)_67%,rgba(255,255,255,0)_82%)]"
      />

      <div className="relative z-10 w-full px-6 pb-14 pt-28 sm:px-8 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-[620px] animate-[hero-rise_0.8s_ease-out_both]">
            <div className="mb-5 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-terra">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Ending FGM. Empowering girls.
            </div>

            <h1 className="max-w-[11ch] font-serif text-[clamp(3rem,6vw,5.4rem)] font-black leading-[0.98] tracking-[-0.035em] text-earth">
              Every girl deserves to grow up <em className="not-italic text-terra">whole.</em>
            </h1>

            <p className="mt-7 max-w-[520px] text-[1.02rem] leading-[1.7] text-earth-mid md:text-[1.12rem]">
              Bilis Initiative works with Somali communities to end Female Genital Mutilation through education, empowerment, and lasting cultural change.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                render={<Link href="/#donate" />}
                nativeButton={false}
                className="group inline-flex min-h-12 items-center justify-center rounded-sm bg-terra px-8 py-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-terra-dark"
              >
                Support our work <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Button>
              <Button
                variant="outline"
                render={<Link href="/what-we-do/" />}
                nativeButton={false}
                className="inline-flex min-h-12 items-center justify-center rounded-sm border-earth/25 bg-white/80 px-8 py-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.1em] text-earth backdrop-blur-sm transition-colors duration-200 hover:border-earth hover:bg-white"
              >
                Explore our work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[82dvh] items-end overflow-hidden bg-earth md:min-h-[86dvh] md:items-center">
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
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,7,10,0.94)_0%,rgba(10,7,10,0.88)_45%,rgba(10,7,10,0.42)_74%,rgba(10,7,10,0.12)_100%)] md:bg-[linear-gradient(90deg,rgba(10,7,10,0.9)_0%,rgba(10,7,10,0.84)_34%,rgba(10,7,10,0.54)_49%,rgba(10,7,10,0.18)_67%,rgba(10,7,10,0.04)_82%)]"
      />

      <div className="relative z-10 w-full px-6 pb-14 pt-28 sm:px-8 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-155 animate-[hero-rise_0.8s_ease-out_both]">
            <div className="mb-5 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Ending FGM. Empowering girls.
            </div>

            <h1 className="max-w-[14ch] font-serif text-[clamp(2.25rem,4.2vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
              Every girl deserves to grow up <em className="not-italic text-gold">whole.</em>
            </h1>

            <p className="mt-6 max-w-520px text-[1.02rem] leading-[1.7] text-white/75 md:text-[1.08rem]">
              Bilis Initiative works with Somali communities to end Female Genital Mutilation through education, empowerment, and lasting cultural change.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                render={<Link href="/#donate" />}
                nativeButton={false}
                className="group inline-flex min-h-12 items-center justify-center rounded-sm bg-terra px-8 py-3.5 text-[0.82rem] font-semibold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-terra-dark"
              >
                Support our work <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Button>
              <Button
                variant="outline"
                render={<Link href="/what-we-do/" />}
                nativeButton={false}
                className="inline-flex min-h-12 items-center justify-center rounded-sm border-white/40 bg-black/20 px-8 py-3.5 text-[0.82rem] font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-colors duration-200 hover:border-white hover:bg-white hover:text-earth"
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

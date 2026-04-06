import { Button } from "@/components/ui/button";

export function Story() {
  return (
    <section id="stories" className="bg-terra-dark px-8 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra-light">
          Survivor voices
        </div>
        <h2 className="mb-12 font-serif text-[2.2rem] font-bold text-sand md:text-[2.8rem]">
          Real change, real people
        </h2>

        <div className="relative mb-12 px-8 py-4 text-center italic md:px-12">
          <span className="absolute left-0 top-0 font-serif text-[6rem] leading-none text-terra opacity-40">
            "
          </span>
          <p className="font-serif text-[1.2rem] leading-relaxed text-sand/90 md:text-[1.7rem]">
            I used to think it was just what happened to all girls. Now I know my daughter has a choice — and she knows she has a voice. That is everything.
          </p>
        </div>

        <div className="text-[0.82rem] uppercase tracking-widest text-sand-dark/45">
          — Community member, supported by Bilis Initiative
        </div>

        <div className="mt-14">
          <Button
            variant="outline"
            className="h-auto rounded-sm border-white/30 bg-transparent px-8 py-3.5 text-[0.9rem] font-normal uppercase tracking-wider text-sand hover:border-sand hover:bg-transparent"
          >
            Read more stories ↗
          </Button>
        </div>
      </div>
    </section>
  );
}

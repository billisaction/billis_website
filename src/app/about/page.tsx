import { Mission } from "@/components/sections/Mission";
import { Values } from "@/components/sections/Values";
import { Stats } from "@/components/sections/Stats";
import { WhereWeWork } from "@/components/sections/WhereWeWork";
// import { Leadership } from "@/components/sections/Leadership";
import { Story } from "@/components/sections/Story";
import { Partners } from "@/components/sections/Partners";
import { Donate } from "@/components/sections/Donate";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the Bilis Initiative, our mission, our history, and our commitment to ending FGM in Somali communities.",
};

export default function AboutPage() {
  return (
    <div>
      {/* About Hero */}
      <section className="relative flex min-h-[55vh] items-center overflow-hidden bg-earth md:min-h-[65vh]">
        <Image
          src="/hero-workshop-2.png"
          alt="Bilis Initiative facilitators leading a community session"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_25%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,7,10,0.94)_0%,rgba(10,7,10,0.88)_45%,rgba(10,7,10,0.42)_74%,rgba(10,7,10,0.12)_100%)] md:bg-[linear-gradient(90deg,rgba(10,7,10,0.9)_0%,rgba(10,7,10,0.84)_34%,rgba(10,7,10,0.54)_49%,rgba(10,7,10,0.18)_67%,rgba(10,7,10,0.04)_82%)]"
        />
        <div className="relative z-10 w-full px-8 py-20 md:px-12 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-[660px]">
              <div className="mb-4 flex items-center gap-2.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-gold">
                <span className="h-px w-7 bg-gold"></span>
                Our Story
              </div>
              <h1 className="font-serif text-[2.8rem] font-black text-white md:text-[4rem] leading-[1.08]">
                Ending FGM. Advancing rights. <em className="not-italic text-gold">Building community.</em>
              </h1>
              <p className="mt-8 text-[1.1rem] leading-relaxed text-white/75 max-w-xl">
                Bilis Initiative was born out of a deep-seated belief that every girl in Somali communities deserves to grow up whole, protected, and empowered to reach her full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <Mission />
      <Values />
      <Stats />
      <WhereWeWork />

      {/* History Section */}
      <section className="bg-cream py-20 px-8 md:px-12 md:py-24 border-y border-earth/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/IMG_0989.JPG.jpeg"
                alt="Our movement in action"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="mb-4 flex items-center gap-2.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
                <span className="h-px w-7 bg-gold"></span>
                Our History
              </div>
              <h2 className="font-serif text-[2.2rem] font-bold text-earth md:text-[2.8rem] mb-6 leading-tight">
                From a small dialogue to a regional movement
              </h2>
              <div className="flex flex-col gap-6 text-[1rem] leading-relaxed text-earth-mid">
                <p>
                  What started as a single conversation in a community hall has grown into a multi-country initiative spanning the Somali Regional State and Ethiopia.
                </p>
                <p>
                  Our work has always been about more than just stopping a practice; it's about reclaiming the narrative of empowerment and dignity that has always been present in our culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Leadership /> */}
      <Story />
      <Partners />
      <Donate />
    </div>
  );
}

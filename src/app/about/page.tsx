import { Mission } from "@/components/sections/Mission";
import { Stats } from "@/components/sections/Stats";
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
    <main>
      {/* About Hero */}
      <section className="bg-earth py-20 px-8 md:px-12 md:py-32 relative overflow-hidden">
        <Image
          src="/IMG_0997.JPG.jpeg"
          alt="Community leadership"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="mx-auto max-w-7xl text-center relative z-10">
          <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra-light">
            Our Story
          </div>
          <h1 className="font-serif text-[2.8rem] font-black text-sand md:text-[4rem] leading-tight max-w-4xl mx-auto">
            Ending FGM. Advancing rights. <em className="not-italic text-terra-light">Building community.</em>
          </h1>
          <p className="mt-8 text-[1.1rem] leading-relaxed text-[#B8A898] max-w-2xl mx-auto">
            Bilis Initiative was born out of a deep-seated belief that every girl in Somali communities deserves to grow up whole, protected, and empowered to reach her full potential.
          </p>
        </div>
      </section>

      {/* Main Sections */}
      <Mission />
      <Stats />

      {/* Founder/Team Section */}
      <section className="bg-cream py-20 px-8 md:px-12 md:py-24 border-y border-earth/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/IMG_0994.JPG.jpeg"
                alt="Our movement in action"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
                Our History
              </div>
              <h2 className="font-serif text-[2.2rem] font-bold text-earth md:text-[2.8rem] mb-6 leading-tight">
                From a small dialogue to a regional movement
              </h2>
              <div className="flex flex-col gap-6 text-[1rem] leading-relaxed text-earth-mid">
                <p>
                  What started as a single conversation in a community hall has grown into a multi-country initiative spanning the UK, Somalia, and Kenya.
                </p>
                <p>
                  Our work has always been about more than just stopping a practice; it's about reclaiming the narrative of empowerment and dignity that has always been present in our culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Story />
      <Partners />
      <Donate />
    </main>
  );
}

import { Stats } from "@/components/sections/Stats";
import { Story } from "@/components/sections/Story";
import { ImpactStrip } from "@/components/sections/ImpactStrip";
import { Partners } from "@/components/sections/Partners";
import { Donate } from "@/components/sections/Donate";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact",
  description: "See the tangible results of Bilis Initiative's work in ending FGM and the lives transformed through our community-led initiatives.",
};

export default function ImpactPage() {
  return (
    <main>
      {/* Impact Hero */}
      <section className="bg-earth py-20 px-8 md:px-12 md:py-32 relative overflow-hidden">
        <Image
          src="/IMG_0995.JPG.jpeg"
          alt="Impact background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra-light">
            Our Results
          </div>
          <h1 className="font-serif text-[2.8rem] font-black text-sand md:text-[4rem] leading-tight max-w-4xl">
            Measuring the change we build <em className="not-italic text-terra-light">together.</em>
          </h1>
          <p className="mt-8 text-[1.1rem] leading-relaxed text-[#B8A898] max-w-2xl">
            From individual lives to community-wide transformations, our impact is measured in the safety, health, and empowerment of girls and women.
          </p>
        </div>
      </section>

      <ImpactStrip />
      <Stats />

      {/* Case Study Section */}
      <section className="bg-sand py-20 px-8 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
                Success Stories
              </div>
              <h2 className="font-serif text-[2.2rem] font-bold text-earth md:text-[2.8rem] mb-6 leading-tight">
                How community dialogue transformed one village
              </h2>
              <div className="flex flex-col gap-6 text-[1rem] leading-relaxed text-earth-mid">
                <p>
                  In a village where FGM prevalence was near 90%, our 12-month community dialogue program led to a unanimous commitment by elders and families to protect their daughters.
                </p>
                <div className="relative h-[250px] w-full overflow-hidden rounded-sm shadow-lg md:hidden">
                  <Image
                    src="/IMG_0994.JPG.jpeg"
                    alt="Community dialogue in action"
                    fill
                    className="object-cover"
                  />
                </div>
                <p>
                  This wasn't just about stopping a practice; it was about replacing it with a celebration of a girl's wholeness and her right to education. Today, every girl in that village is in school, and the community has become a model for surrounding areas.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative h-[300px] w-full overflow-hidden rounded-sm shadow-xl hidden md:block">
                <Image
                  src="/IMG_0994.JPG.jpeg"
                  alt="Community dialogue in action"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Girls Protected", value: "150+" },
                  { label: "Leaders Engaged", value: "12" },
                  { label: "Families Committed", value: "85" },
                  { label: "Villages Impacted", value: "1" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-cream p-6 rounded-sm border border-earth/5 text-center">
                    <div className="font-serif text-2xl font-black text-terra mb-1">{stat.value}</div>
                    <div className="text-[0.7rem] uppercase tracking-widest text-earth-mid">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Story />
      
      {/* Long-term impact visualization placeholder */}
      <section className="bg-cream py-20 px-8 md:px-12 md:py-24 border-y border-earth/5">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
            Long-term Vision
          </div>
          <h2 className="font-serif text-[2.2rem] font-bold text-earth md:text-[2.8rem] mb-12">
            Our goal for 2030
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Zero Prevalence", desc: "Working towards a complete end to FGM in our target regions." },
              { title: "100% Enrollment", desc: "Ensuring every girl we protect completes her secondary education." },
              { title: "Regional Policy", desc: "Securing enforceable legal protections at the regional government level." },
            ].map((goal) => (
              <div key={goal.title} className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-terra/10 flex items-center justify-center mb-4">
                  <div className="h-2 w-2 rounded-full bg-terra"></div>
                </div>
                <h3 className="font-serif text-[1.2rem] font-bold text-earth mb-2">{goal.title}</h3>
                <p className="text-[0.85rem] text-earth-mid leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Partners />
      <Donate />
    </main>
  );
}

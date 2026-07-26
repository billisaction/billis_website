import { Stats } from "@/components/sections/Stats";
import { Milestones } from "@/components/sections/Milestones";
import { RegionalImpact } from "@/components/sections/RegionalImpact";
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
    <div>
      {/* Impact Hero */}
      <section className="relative flex min-h-[55vh] items-center overflow-hidden bg-cream md:min-h-[65vh]">
        <Image
          src="/IMG_0995.JPG.jpeg"
          alt="Community members at a Bilis Initiative event"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.94)_36%,rgba(255,255,255,0.72)_52%,rgba(255,255,255,0.15)_72%,rgba(255,255,255,0)_90%)]"
        />
        <div className="relative z-10 w-full px-8 py-20 md:px-12 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-[660px]">
              <div className="mb-4 flex items-center gap-2.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
                <span className="h-px w-7 bg-gold"></span>
                Our Results
              </div>
              <h1 className="font-serif text-[2.8rem] font-black text-earth md:text-[4rem] leading-[1.08]">
                Measuring the change we build <em className="not-italic text-terra">together.</em>
              </h1>
              <p className="mt-8 text-[1.1rem] leading-relaxed text-earth-mid max-w-xl">
                From individual lives to community-wide transformations, our impact is measured in the safety, health, and empowerment of girls and women.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImpactStrip />
      <Stats />
      
      <Milestones />

      {/* Case Study Section */}
      <section className="bg-sand py-20 px-8 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-4 flex items-center gap-2.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
                <span className="h-px w-7 bg-gold"></span>
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

      <RegionalImpact />

      <Story />
      
      {/* Long-term impact visualization */}
      <section className="bg-cream py-20 px-8 md:px-12 md:py-24 border-y border-earth/5">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
            <span className="h-px w-7 bg-gold"></span>
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
                <div className="h-12 w-12 rounded-full bg-earth flex items-center justify-center mb-4">
                  <div className="h-2 w-2 rounded-full bg-gold"></div>
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
    </div>
  );
}

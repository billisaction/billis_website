import { Programs } from "@/components/sections/Programs";
import { Objectives } from "@/components/sections/Objectives";
import { Donate } from "@/components/sections/Donate";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do",
  description: "Explore the programs and initiatives run by Bilis Initiative to end FGM and empower girls through education and advocacy.",
};

export default function WhatWeDoPage() {
  return (
    <main>
      {/* Subpage Hero */}
      <section className="bg-earth py-20 px-8 md:px-12 md:py-32 relative overflow-hidden">
        <Image
          src="/IMG_0996.JPG.jpeg"
          alt="Community empowerment"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra-light">
            Our Impact
          </div>
          <h1 className="font-serif text-[2.8rem] font-black text-sand md:text-[4rem] leading-tight max-w-3xl">
            Building a future where every girl is <em className="not-italic text-terra-light">safe and empowered.</em>
          </h1>
          <p className="mt-8 text-[1.1rem] leading-relaxed text-[#B8A898] max-w-2xl">
            Our work is rooted in community trust and survivor voices. We focus on long-term systemic change through education, dialogue, and advocacy.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <Programs />
      
      {/* Detailed Approach */}
      <section className="bg-sand py-20 px-8 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
                Our Approach
              </div>
              <h2 className="font-serif text-[2.2rem] font-bold text-earth md:text-[2.8rem] mb-6">
                How we create lasting change
              </h2>
              <div className="flex flex-col gap-6 text-[1rem] leading-relaxed text-earth-mid">
                <p>
                  We believe that ending FGM requires more than just awareness; it requires a fundamental shift in social norms and community beliefs.
                </p>
                <p>
                  Our strategy is built on four pillars: engagement with traditional and religious leaders, empowerment of the next generation, strengthening legal protections, and providing safe referral paths for girls at risk.
                </p>
              </div>
            </div>
            <div className="bg-cream p-8 md:p-12 rounded-sm border border-earth/5 shadow-sm">
              <h3 className="font-serif text-[1.5rem] font-bold text-earth mb-6">Why our method works</h3>
              <ul className="flex flex-col gap-6">
                {[
                  { title: "Internal Dialogue", desc: "We facilitate conversations within families, not just external lectures." },
                  { title: "Religious Alignment", desc: "We work with religious leaders to clarify that FGM has no basis in faith." },
                  { title: "Youth Leadership", desc: "We train young girls to be the primary advocates in their own schools." },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="mt-1 h-2 w-2 rounded-full bg-terra shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-earth text-[0.95rem] mb-1">{item.title}</h4>
                      <p className="text-[0.85rem] text-earth-mid leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Objectives />
      <Donate />
    </main>
  );
}

import { Hero } from "@/components/sections/Hero";
import { ImpactStrip } from "@/components/sections/ImpactStrip";
import { Mission } from "@/components/sections/Mission";
import { Stats } from "@/components/sections/Stats";
import { Programs } from "@/components/sections/Programs";
import { Story } from "@/components/sections/Story";
import { Objectives } from "@/components/sections/Objectives";
import { Donate } from "@/components/sections/Donate";
import { Partners } from "@/components/sections/Partners";

export default function Home() {
  return (
    <article>
      <Hero />
      <ImpactStrip />
      <Mission />
      <Stats />
      <Programs />
      <Story />
      <Objectives />
      <Donate />
      <Partners />
    </article>
  );
}

import { Hero } from "@/components/sections/Hero";
import { ImpactStrip } from "@/components/sections/ImpactStrip";
import { Mission } from "@/components/sections/Mission";
import { Stats } from "@/components/sections/Stats";
import { Programs } from "@/components/sections/Programs";
import { LatestNews } from "@/components/sections/LatestNews";
import { Story } from "@/components/sections/Story";
import { Objectives } from "@/components/sections/Objectives";
import { HowYouCanHelp } from "@/components/sections/HowYouCanHelp";
import { Donate } from "@/components/sections/Donate";
import { Newsletter } from "@/components/sections/Newsletter";
import { Partners } from "@/components/sections/Partners";

export default function Home() {
  return (
    <article>
      <Hero />
      <ImpactStrip />
      <Mission />
      <Stats />
      <Programs />
      <LatestNews />
      <Story />
      <Objectives />
      <HowYouCanHelp />
      <Donate />
      <Newsletter />
      <Partners />
    </article>
  );
}

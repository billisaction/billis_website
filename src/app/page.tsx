import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Stats } from "@/components/sections/Stats";
import { Programs } from "@/components/sections/Programs";
import { LatestNews } from "@/components/sections/LatestNews";
import { HowYouCanHelp } from "@/components/sections/HowYouCanHelp";
import { Donate } from "@/components/sections/Donate";
import { Newsletter } from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <article>
      <Hero />
      <Mission />
      <Stats />
      <Programs />
      <LatestNews />
      <HowYouCanHelp />
      <Donate />
      <Newsletter />
    </article>
  );
}

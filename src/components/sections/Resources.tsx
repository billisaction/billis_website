import { Download, BookOpen, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: <BookOpen className="h-6 w-6 text-terra" />,
    title: "Community Training Toolkit",
    desc: "A comprehensive guide for community leaders to facilitate dialogue on FGM and social norms.",
  },
  {
    icon: <Download className="h-6 w-6 text-terra" />,
    title: "Annual Impact Report 2024",
    desc: "Detailed insights into our programs, reach, and the measurable impact of our community initiatives.",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-terra" />,
    title: "Survivor Voices Series",
    desc: "A collection of stories and perspectives from survivors leading behavioral change in their villages.",
  },
];

export function Resources() {
  return (
    <section className="bg-sand py-20 px-8 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
            Empowerment Tools
          </div>
          <h2 className="font-serif text-[2.2rem] font-bold text-earth md:text-[2.8rem] mb-6">
            Resources for our communities
          </h2>
          <p className="mx-auto max-w-2xl text-[1rem] leading-relaxed text-earth-mid">
            We provide a variety of resources to help our communities build safe and empowering environments for girls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div key={resource.title} className="bg-cream p-8 rounded-sm border border-earth/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-terra/10">
                {resource.icon}
              </div>
              <h3 className="font-serif text-[1.25rem] font-bold text-earth mb-4">{resource.title}</h3>
              <p className="text-[0.85rem] leading-relaxed text-earth-mid mb-6">
                {resource.desc}
              </p>
              <Button variant="outline" className="w-full rounded-sm border-terra text-terra hover:bg-terra hover:text-white transition-colors">
                Download Resource
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

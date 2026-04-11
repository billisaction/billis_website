import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const newsItems = [
  {
    title: "Bilis Initiative at the UN General Assembly",
    date: "Oct 12, 2025",
    category: "Advocacy",
    image: "/IMG_0997.JPG.jpeg",
    excerpt: "Our team presented survivor-led solutions to end FGM at the 80th session of the UNGA, advocating for policy change.",
  },
  {
    title: "New Training Centre Opened in Galkayo",
    date: "Sep 28, 2025",
    category: "Community",
    image: "/IMG_0989.JPG.jpeg",
    excerpt: "The centre will serve as a safe space for adolescent girls to receive life-skills training and vocational support.",
  },
  {
    title: "Voices of Courage: 2025 Impact Report",
    date: "Aug 15, 2025",
    category: "Report",
    image: "/IMG_0995.JPG.jpeg",
    excerpt: "Our latest annual report highlights the progress made in community dialogue and behavioral change in 15 new villages.",
  },
];

export function LatestNews() {
  return (
    <section className="bg-cream py-20 px-8 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-terra">
              Stay Updated
            </div>
            <h2 className="font-serif text-[2.2rem] font-bold text-earth md:text-[2.8rem]">
              Latest News & Stories
            </h2>
          </div>
          <Link href="#" className="text-terra hover:text-terra-light font-medium uppercase tracking-widest text-[0.8rem] transition-colors border-b border-terra pb-1">
            View All Updates ↗
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {newsItems.map((item) => (
            <Card key={item.title} className="group border-none bg-sand/30 shadow-none hover:shadow-sm transition-all duration-300 overflow-hidden">
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-4 left-4 bg-white/90 text-earth hover:bg-white border-none rounded-none text-[0.65rem] uppercase tracking-widest">
                  {item.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="mb-3 text-[0.7rem] uppercase tracking-widest text-earth-mid/60">
                  {item.date}
                </div>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-serif text-[1.25rem] font-bold text-earth leading-tight group-hover:text-terra transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <p className="text-[0.85rem] leading-relaxed text-earth-mid mb-4">
                  {item.excerpt}
                </p>
                <Link href="#" className="inline-block text-[0.75rem] font-bold uppercase tracking-widest text-terra hover:text-terra-light">
                  Read Story →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    title: "Bilis Initiative at the UN General Assembly",
    date: "October 2025",
    category: "Advocacy",
    image: "/IMG_0997.JPG.jpeg",
    excerpt: "Bringing survivor-led solutions and community perspectives into global conversations on ending FGM.",
  },
  {
    title: "A new training centre for girls in Goday",
    date: "September 2025",
    category: "Community",
    image: "/IMG_0989.JPG.jpeg",
    excerpt: "A dedicated space for life-skills training, peer support, and pathways to opportunity.",
  },
  {
    title: "Voices of courage: our impact in 2025",
    date: "August 2025",
    category: "Impact",
    image: "/IMG_0995.JPG.jpeg",
    excerpt: "Community dialogue and youth leadership are helping new villages build safer futures for girls.",
  },
];

export function LatestNews() {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-7 border-b border-earth/12 pb-9 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-terra">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              From the field
            </div>
            <h2 className="font-serif text-[clamp(2.4rem,4vw,4rem)] font-bold leading-[1.03] tracking-[-0.025em] text-earth">
              Stories of change
            </h2>
          </div>
          <Link
            href="/impact/"
            className="group inline-flex min-h-11 items-center text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-terra"
          >
            Explore our impact <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {stories.map((story, index) => (
            <article key={story.title} className="group">
              <div className={`relative overflow-hidden ${index === 0 ? "aspect-[5/4]" : "aspect-[4/3]"}`}>
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="pt-6">
                <div className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-terra">
                  <span>{story.category}</span>
                  <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                  <span className="text-earth-mid/75">{story.date}</span>
                </div>
                <h3 className="mt-4 font-serif text-[1.45rem] font-bold leading-[1.18] text-earth">{story.title}</h3>
                <p className="mt-4 text-[0.9rem] leading-[1.7] text-earth-mid">{story.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

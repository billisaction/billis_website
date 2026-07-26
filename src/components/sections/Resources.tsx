import { BookOpen, Download, MessageCircle } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Community Training Toolkit",
    desc: "A practical guide for community leaders facilitating dialogue on FGM and social norms.",
    href: "mailto:hello@billisaction.org?subject=Request%20Community%20Training%20Toolkit",
  },
  {
    icon: Download,
    title: "Annual Impact Report 2024",
    desc: "Insights into our programmes, reach, and the measurable progress communities are making.",
    href: "mailto:hello@billisaction.org?subject=Request%20Annual%20Impact%20Report%202024",
  },
  {
    icon: MessageCircle,
    title: "Survivor Voices Series",
    desc: "Stories and perspectives from survivors leading behavioural change in their villages.",
    href: "mailto:hello@billisaction.org?subject=Request%20Survivor%20Voices%20Series",
  },
];

export function Resources() {
  return (
    <section className="bg-sand px-6 py-20 sm:px-8 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-terra">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Resources
          </div>
          <h2 className="font-serif text-[clamp(2.4rem,4vw,4rem)] font-bold leading-[1.03] tracking-[-0.025em] text-earth">
            Tools for communities
          </h2>
          <p className="mt-6 max-w-2xl text-[1rem] leading-[1.75] text-earth-mid">
            Practical materials that help communities build safer, more empowering environments for girls.
          </p>
        </div>

        <div className="grid gap-0 md:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div key={resource.title} className="border-t border-earth/15 py-8 md:border-t-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terra text-gold">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-serif text-[1.4rem] font-bold text-earth">{resource.title}</h3>
                <p className="mt-4 text-[0.9rem] leading-[1.7] text-earth-mid">{resource.desc}</p>
                <a
                  href={resource.href}
                  className="group mt-6 inline-flex min-h-11 items-center text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-terra"
                >
                  Request access <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

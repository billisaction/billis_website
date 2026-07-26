import { HandHeart, Mail, Share2, Users } from "lucide-react";

const ways = [
  {
    icon: Share2,
    title: "Share our mission",
    desc: "Help more people understand why community-led action to end FGM matters.",
    cta: "Share by email",
    href: "mailto:?subject=Support%20Bilis%20Initiative&body=Learn%20about%20Bilis%20Initiative%27s%20community-led%20work%20to%20end%20FGM%3A%20https%3A%2F%2Fbillisaction.org%2F",
  },
  {
    icon: Users,
    title: "Volunteer your skills",
    desc: "Contribute your time and experience to programmes, communications, or operations.",
    cta: "Volunteer with us",
    href: "mailto:hello@billisaction.org?subject=Volunteer%20with%20Bilis%20Initiative",
  },
  {
    icon: Mail,
    title: "Stay informed",
    desc: "Receive occasional updates about our work, impact, and community priorities.",
    cta: "Join the newsletter",
    href: "#newsletter",
  },
  {
    icon: HandHeart,
    title: "Build a partnership",
    desc: "Work with us on programmes that protect girls and strengthen local leadership.",
    cta: "Start a conversation",
    href: "mailto:hello@billisaction.org?subject=Partnership%20with%20Bilis%20Initiative",
  },
];

export function HowYouCanHelp() {
  return (
    <section className="bg-sand px-6 py-20 sm:px-8 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-terra">
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              Get involved
            </div>
            <h2 className="max-w-[11ch] font-serif text-[clamp(2.4rem,4vw,4rem)] font-bold leading-[1.03] tracking-[-0.025em] text-earth">
              Change takes all of us.
            </h2>
            <p className="mt-6 max-w-md text-[1rem] leading-[1.75] text-earth-mid">
              Give, volunteer, share, or partner with us. Choose the role that is right for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2">
            {ways.map((way) => {
              const Icon = way.icon;
              return (
                <div key={way.title} className="border-t border-earth/15 py-8 sm:odd:pr-8 sm:even:pl-8">
                  <Icon className="h-6 w-6 text-terra" strokeWidth={1.7} aria-hidden="true" />
                  <h3 className="mt-6 font-serif text-[1.4rem] font-bold text-earth">{way.title}</h3>
                  <p className="mt-3 text-[0.9rem] leading-[1.7] text-earth-mid">{way.desc}</p>
                  <a
                    href={way.href}
                    className="group mt-5 inline-flex min-h-11 items-center text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-terra"
                  >
                    {way.cta} <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

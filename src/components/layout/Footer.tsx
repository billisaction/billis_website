import Link from "next/link";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "What We Do", href: "/what-we-do/" },
      { name: "Impact", href: "/impact/" },
      { name: "About Us", href: "/about/" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { name: "Donate", href: "/#donate" },
      { name: "Volunteer", href: "mailto:hello@billisaction.org?subject=Volunteer%20with%20Bilis%20Initiative" },
      { name: "Partner with us", href: "mailto:hello@billisaction.org?subject=Partnership%20with%20Bilis%20Initiative" },
      { name: "Newsletter", href: "/#newsletter" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "hello@billisaction.org", href: "mailto:hello@billisaction.org" },
      { name: "billisaction.org", href: "https://billisaction.org/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-earth/10 bg-white px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.2fr_repeat(3,0.7fr)] md:gap-10">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label="Bilis Initiative Home">
              <img src="/logo.svg" alt="Bilis Initiative logo" className="h-12 w-auto object-contain" />
            </Link>
            <p className="mt-6 max-w-sm text-[0.92rem] leading-[1.75] text-earth-mid">
              A community-driven organisation ending FGM and advancing the rights, dignity, and empowerment of women and girls in Somali Regional State and Kenya.
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-terra">{col.title}</p>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-10 items-center text-[0.9rem] text-earth-mid transition-colors duration-200 hover:text-terra"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-earth/10 pt-6 md:mt-16 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.8rem] text-earth-mid">© 2026 Bilis Initiative. All rights reserved.</p>
          <p className="text-[0.8rem] text-earth-mid">Community-led. Survivor-centred. Built for lasting change.</p>
        </div>
      </div>
    </footer>
  );
}

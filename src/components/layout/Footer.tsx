import Link from "next/link";

const footerLinks = [
  {
    title: "About",
    links: [
      { name: "Our Story", href: "/about" },
      { name: "Our Team", href: "/about" },
      { name: "Governance", href: "/about" },
      { name: "Annual Reports", href: "/about" },
    ],
  },
  {
    title: "Work",
    links: [
      { name: "Programmes", href: "/what-we-do" },
      { name: "Impact", href: "/impact" },
      { name: "Resources", href: "/what-we-do" },
      { name: "Research", href: "/what-we-do" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { name: "Donate", href: "/#donate" },
      { name: "Volunteer", href: "/about" },
      { name: "Partner with us", href: "/about" },
      { name: "Contact", href: "/about" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-earth px-6 py-14 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center" aria-label="Bilis Initiative Home">
              <img
                src="/logo-white.svg"
                alt="Bilis Initiative logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-6 max-w-65 text-[0.85rem] leading-[1.75] text-sand-dark/50">
              A community-driven organisation ending FGM and advancing the
              rights, dignity, and empowerment of women and girls in Somali Regional State and Kenya
              communities.
            </p>
          </div>

          {/* Links Cols */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h5 className="mb-5 text-[0.72rem] uppercase tracking-[0.12em] text-gold">
                {col.title}
              </h5>
              <div className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[0.84rem] text-sand-dark/55 transition-colors hover:text-sand"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 md:mt-20 md:flex-row">
          <p className="text-[0.78rem] text-sand-dark/30">
            © 2026 Bilis Initiative. All rights reserved.
          </p>
          <div className="mt-4 flex items-center gap-4 text-[0.72rem] tracking-wide text-sand-dark/25 md:mt-0">
            <span>Registered Charity No. 1234567</span>
            <span>Privacy Policy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "What We Do", href: "/what-we-do/" },
  { name: "Impact", href: "/impact/" },
  { name: "About Us", href: "/about/" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    const path = pathname?.endsWith("/") ? pathname : `${pathname}/`;
    return path === href || path.startsWith(href);
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-earth/10 bg-white/90 px-6 py-3.5 font-sans backdrop-blur-md md:px-10"
      aria-label="Main Navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" aria-label="Bilis Initiative Home" className="shrink-0">
          <img
            src="/logo.svg"
            alt="Bilis Initiative logo"
            className="h-12 w-auto object-contain md:h-10"
          />
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "rounded-sm px-3 py-2.5 font-sans text-[0.85rem] uppercase tracking-widest transition-colors duration-200",
                isActive(link.href)
                  ? "font-medium text-terra"
                  : "text-earth-mid hover:text-terra"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button
            render={<Link href="/#donate" />}
            nativeButton={false}
            className="ml-2 min-h-11 rounded-sm bg-terra px-5 py-2.5 font-sans text-[0.8rem] font-medium uppercase tracking-[0.06em] text-white transition-colors duration-200 hover:bg-terra-light"
          >
            Get Involved
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-earth transition-colors hover:bg-cream"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="border-none bg-white text-earth">
              <SheetHeader>
                <SheetTitle className="text-left font-serif text-earth">
                  Bilis <span className="text-terra">Initiative</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "rounded-sm px-3 py-3 font-sans text-[0.95rem] uppercase tracking-widest transition-colors duration-200",
                      isActive(link.href)
                        ? "bg-cream font-medium text-terra"
                        : "text-earth-mid hover:bg-cream hover:text-terra"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button
                  render={
                    <Link href="/#donate" onClick={() => setIsOpen(false)} />
                  }
                  nativeButton={false}
                  className="mt-4 min-h-12 rounded-sm bg-terra py-3 text-sm font-medium uppercase tracking-[0.06em] text-white hover:bg-terra-light"
                >
                  Get Involved
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

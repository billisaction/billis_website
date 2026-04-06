"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "What We Do", href: "/what-we-do" },
  { name: "Impact", href: "/impact" },
  { name: "Stories", href: "/impact#stories" },
  { name: "About Us", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full font-sans bg-earth px-6 py-4 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-terra">
            <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
              <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5" />
              <path
                d="M10 4 L10 16 M6 7 Q10 5 14 7"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="font-serif text-lg tracking-wide text-sand">
            Bilis <span className="text-terra-light">Initiative</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-[0.85rem] uppercase tracking-widest text-sand-dark transition-colors hover:text-terra-light"
            >
              {link.name}
            </Link>
          ))}
          <Button
              render={<Link href="#donate" />}
              nativeButton={false}
              className="font-sans rounded-sm bg-terra px-5 py-2 text-[0.8rem] font-medium uppercase tracking-[0.06em] hover:bg-terra-light"
            >
              Get Involved
            </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="text-sand">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="bg-earth text-sand border-none">
              <SheetHeader>
                <SheetTitle className="text-left font-serif text-sand">
                  Bilis <span className="text-terra-light">Initiative</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-sans text-[0.85rem] uppercase tracking-widest text-sand-dark transition-colors hover:text-terra-light"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button
                    render={<Link href="#donate" onClick={() => setIsOpen(false)} />}
                    nativeButton={false}
                    className="mt-4 rounded-sm bg-terra py-6 text-sm font-medium uppercase tracking-[0.06em] hover:bg-terra-light"
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

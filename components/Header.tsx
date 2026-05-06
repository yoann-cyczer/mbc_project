"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-light/80 backdrop-blur-xl border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl md:text-[26px] font-medium tracking-tightest text-secondary">
            MBC
          </span>
          <span className="font-display italic text-xl text-primary -ml-0.5">
            Visuel
          </span>
          <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-primary translate-y-[-2px] transition-transform duration-500 group-hover:scale-150" />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-[0.18em] text-secondary/80 font-medium">
          <Link href="/" className="link-underline">Accueil</Link>
          <Link href="/services" className="link-underline">Services</Link>
          <Link href="/about" className="link-underline">À propos</Link>
          <Link href="/contact" className="link-underline">Contact</Link>
          <Link href="/shop" className="link-underline">Boutique</Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 group border border-secondary/90 bg-secondary text-light px-5 py-2.5 rounded-full text-[13px] tracking-wide hover:bg-primary hover:border-primary hover:text-secondary transition-all duration-300"
        >
          Demander un devis
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`w-6 h-px bg-secondary transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`w-6 h-px bg-secondary transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-px bg-secondary transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-light border-t border-line">
          <div className="px-6 py-8 flex flex-col gap-5 font-display text-2xl">
            <Link href="/" onClick={() => setOpen(false)} className="hover:text-primary transition">Accueil</Link>
            <Link href="/services" onClick={() => setOpen(false)} className="hover:text-primary transition">Services</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="hover:text-primary transition">À propos</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-primary transition">Contact</Link>
            <Link href="/shop" onClick={() => setOpen(false)} className="hover:text-primary transition">Boutique</Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-secondary text-light px-6 py-3 rounded-full text-sm tracking-wide font-sans"
            >
              Demander un devis →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

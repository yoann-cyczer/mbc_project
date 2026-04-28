"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-primary">
        MBC Visuel
      </Link>

      {/* Menu desktop */}
      <nav className="hidden md:flex gap-8 text-secondary font-medium">
        <Link href="/">Accueil</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">À propos</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/shop">Boutique</Link>
      </nav>

      {/* Bouton devis (desktop) */}
      <Link
        href="/contact"
        className="hidden md:block bg-primary text-white px-5 py-2 rounded-md hover:bg-accent transition"
      >
        Demander un devis
      </Link>

      {/* Menu mobile (burger) */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Menu mobile déroulant */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden">
          <Link href="/" onClick={() => setOpen(false)}>Accueil</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setOpen(false)}>À propos</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/shop" onClick={() => setOpen(false)}>Boutique</Link>

          <Link
            href="/contact"
            className="bg-primary text-white px-5 py-2 rounded-md text-center"
            onClick={() => setOpen(false)}
          >
            Demander un devis
          </Link>
        </div>
      )}
    </header>
  );
}

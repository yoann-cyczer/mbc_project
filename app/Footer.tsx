import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-light border-t border-light/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-light/10">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-baseline gap-2">
              <span className="font-display text-5xl md:text-6xl font-light tracking-tightest">MBC</span>
              <span className="font-display italic text-3xl md:text-4xl text-primary">Visuel</span>
            </Link>
            <p className="mt-6 text-light/60 leading-relaxed max-w-sm">
              Agence de communication digitale.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-5">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="link-underline text-light/80 hover:text-light">Accueil</Link></li>
              <li><Link href="/services" className="link-underline text-light/80 hover:text-light">Services</Link></li>
              <li><Link href="/portfolio" className="link-underline text-light/80 hover:text-light">Réalisations</Link></li>
              <li><Link href="/about" className="link-underline text-light/80 hover:text-light">À propos</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-light/80">
              <li><a href="mailto:contact@mbcvisuel.fr" className="link-underline">contact@mbcvisuel.fr</a></li>
              <li><a href="tel:+33123456789" className="link-underline">01 23 45 67 89</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-light/40 font-mono uppercase tracking-[0.18em]">
          <span>© 2024 MBC Visuel — Tous droits réservés</span>
          <span>Crafted with care · Montpellier</span>
        </div>
      </div>
    </footer>
  );
}

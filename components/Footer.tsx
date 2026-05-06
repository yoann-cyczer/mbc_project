import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-light border-t border-light/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
        {/* Bloc haut : grand logo + grilles */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-light/10">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-baseline gap-2">
              <span className="font-display text-5xl md:text-6xl font-light tracking-tightest">MBC</span>
              <span className="font-display italic text-3xl md:text-4xl text-primary">Visuel</span>
            </Link>
            <p className="mt-6 text-light/60 leading-relaxed max-w-sm">
              Studio de communication digitale dédié aux marques qui veulent
              affirmer une identité forte et durable.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-5">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="link-underline text-light/80 hover:text-light">Accueil</Link></li>
              <li><Link href="/services" className="link-underline text-light/80 hover:text-light">Services</Link></li>
              <li><Link href="/about" className="link-underline text-light/80 hover:text-light">À propos</Link></li>
              <li><Link href="/contact" className="link-underline text-light/80 hover:text-light">Contact</Link></li>
              <li><Link href="/shop" className="link-underline text-light/80 hover:text-light">Boutique</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-light/80">
              <li>
                <a href="mailto:contact@mbcvisuel.fr" className="link-underline">
                  contact@mbcvisuel.fr
                </a>
              </li>
              <li>
                <a href="tel:+33123456789" className="link-underline">
                  01 23 45 67 89
                </a>
              </li>
              <li className="text-light/50 mt-4">
                Du lundi au vendredi
                <br />
                9h — 18h
              </li>
            </ul>
          </div>
        </div>

        {/* Marquee décoratif */}
        <div className="overflow-hidden py-10 border-b border-light/10">
          <div className="flex gap-12 whitespace-nowrap font-display text-4xl md:text-6xl text-light/20 animate-marquee">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                <span>Branding</span>
                <span className="text-primary">✶</span>
                <span className="italic">Web Design</span>
                <span className="text-primary">✶</span>
                <span>Print</span>
                <span className="text-primary">✶</span>
                <span className="italic">Direction artistique</span>
                <span className="text-primary">✶</span>
                <span>E-commerce</span>
                <span className="text-primary">✶</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bas */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-light/40 font-mono uppercase tracking-[0.18em]">
          <span>© {new Date().getFullYear()} MBC Visuel — Tous droits réservés</span>
          <span>Crafted with care · Montpellier</span>
        </div>
      </div>
    </footer>
  );
}

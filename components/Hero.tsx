import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-light">
      {/* Halo doré décoratif */}
      <div className="halo w-[600px] h-[600px] -top-40 -right-40 rounded-full" />
      <div className="halo w-[400px] h-[400px] bottom-0 left-1/4 rounded-full opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-24 md:pt-28 md:pb-32">
        {/* Petite étiquette */}
        <div className="flex items-center gap-3 mb-10 animate-rise" style={{ animationDelay: "0.05s" }}>
          <span className="w-8 h-px bg-primary" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            Studio · Communication · Web
          </span>
        </div>

        {/* Titre éditorial */}
        <h1
          className="font-display font-light text-secondary tracking-tightest leading-[0.95] animate-rise"
          style={{ animationDelay: "0.15s", fontSize: "clamp(2.75rem, 9vw, 8.5rem)" }}
        >
          Votre image
          <br />
          mérite l’
          <span className="italic font-normal text-primary">excellence</span>.
        </h1>

        {/* Bloc bas : description + CTAs */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 items-end animate-rise" style={{ animationDelay: "0.3s" }}>
          <p className="md:col-span-6 md:col-start-1 text-base md:text-lg leading-relaxed text-secondary/75 max-w-xl">
            Création visuelle, sites web & communication digitale —
            pensés pour les entreprises qui refusent l’ordinaire.
            Chaque projet est un objet sur-mesure.
          </p>

          <div className="md:col-span-5 md:col-start-8 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 bg-secondary text-light px-7 py-3.5 rounded-full text-[13px] tracking-wide hover:bg-primary hover:text-secondary transition-all duration-300"
            >
              Voir nos services
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-secondary/30 text-secondary px-7 py-3.5 rounded-full text-[13px] tracking-wide hover:border-secondary hover:bg-secondary hover:text-light transition-all duration-300"
            >
              Demander un devis
            </Link>
          </div>
        </div>

        {/* Indices visuels en bas du hero */}
        <div className="mt-20 md:mt-28 pt-8 border-t border-line grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
          {[
            { k: "12+", v: "Années d’expertise" },
            { k: "180", v: "Projets livrés" },
            { k: "98%", v: "Clients satisfaits" },
            { k: "24h", v: "Premier retour" },
          ].map((s) => (
            <div key={s.v} className="flex flex-col gap-1">
              <span className="font-display text-3xl md:text-4xl text-secondary">{s.k}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{s.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

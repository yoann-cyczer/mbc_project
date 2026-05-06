export default function ServicesPage() {
  return (
    <section className="relative px-6 md:px-10 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
          ✶ Prestations
        </span>
        <span className="flex-1 h-px bg-line" />
      </div>

      <h1
        className="font-display font-light tracking-tightest leading-[0.95] mb-12"
        style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
      >
        Nos <span className="italic text-primary">services</span>
      </h1>

      <p className="max-w-2xl text-lg leading-relaxed text-secondary/80 mb-10">
        Découvrez l’ensemble de nos prestations pour booster votre image.
      </p>
      {/* Tu pourras ajouter ici une liste détaillée */}
    </section>
  );
}

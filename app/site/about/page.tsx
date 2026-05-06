export default function AboutPage() {
  return (
    <section className="relative px-6 md:px-10 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
          ✶ Studio
        </span>
        <span className="flex-1 h-px bg-line" />
      </div>

      <h1
        className="font-display font-light tracking-tightest leading-[0.95] mb-12"
        style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
      >
        nathan
      </h1>

      <div className="grid md:grid-cols-12 gap-8 mt-16">
        <div className="md:col-span-7 md:col-start-2 space-y-6 text-lg leading-relaxed text-secondary/80">
          <p>
            MBC Visuel est une agence de communication digitale dédiée aux entreprises ambitieuses.
            Nous accompagnons nos clients dans la construction d&apos;une image forte et cohérente.
          </p>
          <p>
            Notre équipe passionnée met son expertise au service de votre visibilité : identité visuelle,
            création web, communication print et digitale.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function WhyUs() {
  const items = [
    { title: "Rapidité & efficacité", description: "Nous livrons vos projets dans des délais courts sans sacrifier la qualité." },
    { title: "Design moderne", description: "Des visuels professionnels adaptés aux tendances actuelles." },
    { title: "Accompagnement personnalisé", description: "Nous vous guidons à chaque étape pour garantir un résultat optimal." },
    { title: "Résultats mesurables", description: "Des solutions pensées pour améliorer votre visibilité et vos performances." },
  ];

  return (
    <section className="relative px-6 md:px-10 py-24 md:py-32 bg-light text-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                03 — Méthode
              </span>
              <span className="flex-1 h-px bg-line" />
            </div>
            <h2 className="font-display font-light tracking-tightest leading-[1] text-5xl md:text-7xl">
              Pourquoi nous <span className="italic text-primary">choisir</span> ?
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {items.map((item, index) => (
            <div key={index} className="group relative pt-8 border-t border-secondary/15 hover:border-primary transition-colors duration-500">
              <span className="absolute -top-px left-0 h-0.5 w-0 bg-primary transition-all duration-700 group-hover:w-full" />

              <span className="font-mono text-[11px] tracking-[0.2em] text-muted">
                / {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="font-display text-2xl md:text-[28px] font-light leading-tight mt-4 mb-4 tracking-tightest">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-secondary/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

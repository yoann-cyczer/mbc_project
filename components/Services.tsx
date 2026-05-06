import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    { title: "Identité Visuelle", description: "Logo, charte graphique, branding" },
    { title: "Création de Site Web", description: "Sites vitrines, e-commerce, refontes" },
    { title: "Communication & Publicité", description: "Flyers, affiches, réseaux sociaux" },
    { title: "Audit & Optimisation", description: "Analyse, conseils, amélioration" },
  ];

  return (
    <section className="relative px-6 md:px-10 py-24 md:py-32 bg-light text-secondary">
      <div className="max-w-7xl mx-auto">
        {/* En-tête éditoriale */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                01 — Prestations
              </span>
              <span className="flex-1 h-px bg-line" />
            </div>
            <h2 className="font-display font-light tracking-tightest leading-[1] text-5xl md:text-7xl">
              Nos <span className="italic text-primary">services</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-secondary/70 leading-relaxed">
            Quatre expertises complémentaires pour construire et faire rayonner
            votre marque, du concept à la diffusion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

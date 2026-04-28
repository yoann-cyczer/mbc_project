import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Identité Visuelle",
      description: "Logo, charte graphique, branding",
    },
    {
      title: "Création de Site Web",
      description: "Sites vitrines, e-commerce, refontes",
    },
    {
      title: "Communication & Publicité",
      description: "Flyers, affiches, réseaux sociaux",
    },
    {
      title: "Audit & Optimisation",
      description: "Analyse, conseils, amélioration",
    },
  ];

  return (
    <section className="px-8 py-20 bg-light text-secondary">
      <h2 className="text-3xl font-bold text-center mb-12">Nos services</h2>

      <div className="grid md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

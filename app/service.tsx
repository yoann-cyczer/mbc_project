const services = [
  {
    title: "Identité Visuelle",
    desc: "Logo, charte graphique, branding",
  },
  {
    title: "Création de Site Web",
    desc: "Sites vitrines, e-commerce, refontes",
  },
  {
    title: "Communication & Publicité",
    desc: "Flyers, affiches, réseaux sociaux",
  },
  {
    title: "Audit & Optimisation",
    desc: "Analyse, conseils, amélioration",
  },
];

export default function Services() {
  return (
    <section className="px-8 py-20 bg-light text-secondary">
      <h2 className="text-3xl font-bold text-center mb-12">Nos services</h2>

      <div className="grid md:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="mb-4">{s.desc}</p>
            <button className="text-primary font-semibold hover:underline">
              En savoir plus
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

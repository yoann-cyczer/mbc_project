export default function WhyUs() {
  const items = [
    { title: "Rapidité & efficacité", description: "Nous livrons vos projets dans des délais courts sans sacrifier la qualité." },
    { title: "Design moderne", description: "Des visuels professionnels adaptés aux tendances actuelles." },
    { title: "Accompagnement personnalisé", description: "Nous vous guidons à chaque étape pour garantir un résultat optimal." },
    { title: "Résultats mesurables", description: "Des solutions pensées pour améliorer votre visibilité et vos performances." },
  ];

  return (
    <section className="px-8 py-20 bg-light text-secondary">
      <h2 className="text-3xl font-bold text-center mb-12">
        Pourquoi travailler avec nous ?
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm opacity-80">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

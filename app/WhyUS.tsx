const items = [
  { title: "Rapidité & efficacité" },
  { title: "Design moderne" },
  { title: "Accompagnement personnalisé" },
  { title: "Résultats mesurables" },
];

export default function WhyUs() {
  return (
    <section className="px-8 py-20 bg-light">
      <h2 className="text-3xl font-bold text-center mb-12">
        Pourquoi travailler avec nous ?
      </h2>

      <div className="grid md:grid-cols-4 gap-8 text-center">
        {items.map((i, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="font-semibold text-lg">{i.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

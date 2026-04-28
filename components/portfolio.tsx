export default function Portfolio() {
  const projects = [
    { src: "/portfolio1.png", alt: "Projet 1" },
    { src: "/portfolio2.png", alt: "Projet 2" },
    { src: "/portfolio3.png", alt: "Projet 3" },
    { src: "/portfolio4.png", alt: "Projet 4" },
    { src: "/portfolio5.png", alt: "Projet 5" },
    { src: "/portfolio6.png", alt: "Projet 6" },
  ];

  return (
    <section className="px-8 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Nos réalisations</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
            <img src={project.src} alt={project.alt} className="w-full h-auto" />
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/portfolio"
          className="bg-primary text-white px-6 py-3 rounded-md hover:bg-accent transition"
        >
          Voir tout le portfolio
        </a>
      </div>
    </section>
  );
}

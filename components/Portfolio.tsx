import Link from "next/link";

export default function Portfolio() {
  const projects = [
    { src: "/portfolio1.png", alt: "Projet 1", category: "Branding" },
    { src: "/portfolio2.png", alt: "Projet 2", category: "Web Design" },
    { src: "/portfolio3.png", alt: "Projet 3", category: "Print" },
    { src: "/portfolio4.png", alt: "Projet 4", category: "E-commerce" },
    { src: "/portfolio5.png", alt: "Projet 5", category: "Identité" },
    { src: "/portfolio6.png", alt: "Projet 6", category: "Direction artistique" },
  ];

  return (
    <section className="relative px-6 md:px-10 py-24 md:py-32 bg-secondary text-light overflow-hidden grain">
      <div className="halo w-[500px] h-[500px] -top-20 left-1/2 -translate-x-1/2 rounded-full opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-light/50">
                02 — Réalisations
              </span>
              <span className="flex-1 h-px bg-light/15" />
            </div>
            <h2 className="font-display font-light tracking-tightest leading-[1] text-5xl md:text-7xl">
              Nos <span className="italic text-primary">réalisations</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-light/60 leading-relaxed">
            Une sélection de projets récents — chacun pensé comme une réponse
            sur-mesure à un défi de communication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <figure
              key={index}
              className={`group relative overflow-hidden rounded-sm bg-ink ${
                index === 0 ? "md:col-span-2 md:row-span-2 aspect-[16/10]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex justify-between items-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                    {project.category}
                  </span>
                  <p className="font-display text-lg md:text-xl mt-1">{project.alt}</p>
                </div>
                <span className="text-primary text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">↗</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 border border-light/30 px-7 py-3.5 rounded-full text-[13px] tracking-wide hover:border-primary hover:bg-primary hover:text-secondary transition-all duration-300"
          >
            Voir tout le portfolio
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

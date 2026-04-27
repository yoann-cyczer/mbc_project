export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-secondary text-light">
      <div className="max-w-lg">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Votre image mérite l’excellence.
        </h2>

        <p className="text-lg mb-6">
          Création visuelle, sites web & communication digitale pour les entreprises ambitieuses.
        </p>

        <div className="flex gap-4">
          <button className="bg-accent text-white px-6 py-3 rounded-md hover:bg-primary transition">
            Voir nos services
          </button>

          <button className="border border-accent text-accent px-6 py-3 rounded-md hover:bg-accent hover:text-white transition">
            Demander un devis
          </button>
        </div>
      </div>

      <img
        src="/hero.png"
        alt="Illustration MBC Visuel"
        className="w-96 mt-10 md:mt-0"
      />
    </section>
  );
}

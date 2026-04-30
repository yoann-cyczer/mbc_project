import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-secondary text-light">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Votre image mérite l&apos;excellence.
        </h1>

        <p className="text-lg opacity-90 mb-8">
          Création visuelle, sites web & communication digitale pour les entreprises ambitieuses.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Link
            href="/services"
            className="bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-primary transition"
          >
            Voir nos services
          </Link>

          <Link
            href="/contact"
            className="border border-accent text-accent px-6 py-3 rounded-md font-medium hover:bg-accent hover:text-white transition"
          >
            Demander un devis
          </Link>
        </div>
      </div>

      <img
        src="/hero.png"
        alt="Illustration MBC Visuel"
        className="w-80 md:w-96 mt-10 md:mt-0"
      />
    </section>
  );
}

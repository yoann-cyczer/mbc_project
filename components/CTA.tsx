export default function CTA() {
  return (
    <section className="px-8 py-20 bg-primary text-white text-center rounded-none">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Prêt à booster votre image ?
      </h2>

      <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
        Contactez-nous dès aujourd’hui pour discuter de votre projet et obtenir un devis personnalisé.
      </p>

      <a
        href="/contact"
        className="bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-light transition"
      >
        Demander un devis
      </a>
    </section>
  );
}

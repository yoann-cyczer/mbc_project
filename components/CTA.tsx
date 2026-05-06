import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-secondary text-light grain">
      <div className="halo w-[700px] h-[700px] -bottom-60 -right-40 rounded-full opacity-30" />
      <div className="halo w-[400px] h-[400px] -top-20 -left-20 rounded-full opacity-15" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-36">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
            ✶ Démarrer un projet
          </span>
        </div>

        <h2
          className="font-display font-light tracking-tightest leading-[0.95] mb-10"
          style={{ fontSize: "clamp(2.5rem, 8vw, 7.5rem)" }}
        >
          Prêt à <span className="italic text-primary">élever</span>
          <br />
          votre image ?
        </h2>

        <div className="grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-6 text-light/70 text-base md:text-lg leading-relaxed max-w-xl">
            Discutons de votre projet — un échange, un café, et nous repartirons
            avec une vision claire et un devis personnalisé sous 48h.
          </p>

          <div className="md:col-span-5 md:col-start-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-primary text-secondary px-8 py-4 rounded-full text-[13px] tracking-wide font-medium hover:bg-light transition-all duration-300"
            >
              Demander un devis
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>

            <a
              href="mailto:contact@mbcvisuel.fr"
              className="inline-flex items-center gap-2 border border-light/30 px-7 py-4 rounded-full text-[13px] tracking-wide hover:border-light hover:bg-light hover:text-secondary transition-all duration-300"
            >
              contact@mbcvisuel.fr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

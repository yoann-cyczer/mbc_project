export const metadata = {
  title: "Contact – MBC Visuel",
};

export default function ContactPage() {
  return (
    <section className="relative px-6 md:px-10 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
          ✶ Discutons de votre projet
        </span>
        <span className="flex-1 h-px bg-line" />
      </div>

      <h1
        className="font-display font-light tracking-tightest leading-[0.95] mb-16"
        style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
      >
        Prenons <span className="italic text-primary">contact</span>
      </h1>

      <div className="grid md:grid-cols-12 gap-12">
        {/* Infos à gauche */}
        <aside className="md:col-span-4 space-y-10">
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-3">
              Email
            </h3>
            <a href="mailto:contact@mbcvisuel.fr" className="font-display text-2xl link-underline">
              contact@mbcvisuel.fr
            </a>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-3">
              Téléphone
            </h3>
            <a href="tel:+33123456789" className="font-display text-2xl link-underline">
              01 23 45 67 89
            </a>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-3">
              Disponibilités
            </h3>
            <p className="text-secondary/70">
              Du lundi au vendredi
              <br />
              9h — 18h
            </p>
          </div>
        </aside>

        {/* Formulaire à droite */}
        <div className="md:col-span-7 md:col-start-6">
          <div className="space-y-6">
            <div>
              <label className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted mb-2 block">
                Votre nom
              </label>
              <input
                className="w-full bg-transparent border-0 border-b border-secondary/30 px-0 py-3 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-secondary/30"
                placeholder="Jean Dupont"
              />
            </div>

            <div>
              <label className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted mb-2 block">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-0 border-b border-secondary/30 px-0 py-3 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-secondary/30"
                placeholder="vous@exemple.com"
              />
            </div>

            <div>
              <label className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted mb-2 block">
                Votre message
              </label>
              <textarea
                rows={5}
                className="w-full bg-transparent border-0 border-b border-secondary/30 px-0 py-3 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-secondary/30 resize-none"
                placeholder="Parlez-nous de votre projet…"
              />
            </div>

            <button className="group mt-6 inline-flex items-center gap-3 bg-secondary text-light px-8 py-4 rounded-full text-[13px] tracking-wide hover:bg-primary hover:text-secondary transition-all duration-300">
              Envoyer le message
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

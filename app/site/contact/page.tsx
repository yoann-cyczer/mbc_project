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

      <form className="grid gap-6 max-w-2xl">
        <div>
          <label className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted mb-2 block">
            Nom
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
            className="w-full bg-transparent border-0 border-b border-secondary/30 px-0 py-3 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-secondary/30"
            placeholder="vous@exemple.com"
          />
        </div>

        <div>
          <label className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted mb-2 block">
            Message
          </label>
          <textarea
            rows={5}
            className="w-full bg-transparent border-0 border-b border-secondary/30 px-0 py-3 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-secondary/30 resize-none"
            placeholder="Parlez-nous de votre projet…"
          />
        </div>

        <button className="group mt-4 inline-flex items-center justify-center gap-3 bg-secondary text-light px-8 py-4 rounded-full text-[13px] tracking-wide hover:bg-primary hover:text-secondary transition-all duration-300 self-start">
          Envoyer
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </form>
    </section>
  );
}

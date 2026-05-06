import Testimonial from "./Testimonial";

export default function Testimonials() {
  const testimonials = [
    { name: "Sophie L.", message: "Notre nouveau logo et site internet sont superbes !" },
    { name: "Alex T.", message: "Excellent travail, service rapide et efficace." },
    { name: "Marie D.", message: "Très professionnel, ils ont su capter notre univers." },
  ];

  return (
    <section className="relative px-6 md:px-10 py-24 md:py-32 bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                04 — Témoignages
              </span>
              <span className="flex-1 h-px bg-line" />
            </div>
            <h2 className="font-display font-light tracking-tightest leading-[1] text-5xl md:text-7xl">
              Ils nous font <span className="italic text-primary">confiance</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <Testimonial key={index} name={t.name} message={t.message} />
          ))}
        </div>
      </div>
    </section>
  );
}

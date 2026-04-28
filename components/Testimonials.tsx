import Testimonial from "./Testimonial";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sophie L.",
      message: "Notre nouveau logo et site internet sont superbes !",
    },
    {
      name: "Alex T.",
      message: "Excellent travail, service rapide et efficace.",
    },
    {
      name: "Marie D.",
      message: "Très professionnel, ils ont su capter notre univers.",
    },
  ];

  return (
    <section className="px-8 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Ils nous font confiance
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <Testimonial key={index} name={t.name} message={t.message} />
        ))}
      </div>
    </section>
  );
}

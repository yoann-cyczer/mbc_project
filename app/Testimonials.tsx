export default function Testimonials() {
  return (
    <section className="px-8 py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        Ils nous font confiance
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-light rounded-lg shadow-md">
          <h3 className="font-semibold">Sophie L.</h3>
          <p className="text-sm mt-2">
            “Notre nouveau logo et site internet sont superbes !”
          </p>
        </div>

        <div className="p-6 bg-light rounded-lg shadow-md">
          <h3 className="font-semibold">Alex T.</h3>
          <p className="text-sm mt-2">
            “Excellent travail, service rapide et efficace.”
          </p>
        </div>

        <div className="p-6 bg-light rounded-lg shadow-md">
          <h3 className="font-semibold">Marie D.</h3>
          <p className="text-sm mt-2">
            “Très professionnel, ils ont su capter notre univers.”
          </p>
        </div>
      </div>
    </section>
  );
}

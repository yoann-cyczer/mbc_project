export const metadata = {
  title: "Contact – MBC Visuel",
};

export default function ContactPage() {
  return (
    <section className="px-8 py-20">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <div className="grid gap-4 max-w-lg">
        <input className="border p-3 rounded" placeholder="Nom" />
        <input className="border p-3 rounded" placeholder="Email" type="email" />
        <textarea className="border p-3 rounded" placeholder="Message" rows={5} />
        <button className="bg-primary text-white px-6 py-3 rounded hover:bg-accent transition">
          Envoyer
        </button>
      </div>
    </section>
  );
}

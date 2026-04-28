import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-8 py-12 bg-secondary text-light">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-2">MBC Visuel</h3>
          <p>Agence de communication digitale.</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Liens utiles</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:underline">Accueil</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/portfolio" className="hover:underline">Réalisations</Link></li>
            <li><Link href="/about" className="hover:underline">À propos</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Contact</h3>
          <p>contact@mbcvisuel.fr</p>
          <p>01 23 45 67 89</p>
        </div>
      </div>

      <p className="text-center mt-10 text-sm opacity-70">
        © 2024 MBC Visuel — Tous droits réservés
      </p>
    </footer>
  );
}

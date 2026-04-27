export default function Header() {
  return (
    <header className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-primary">MBC Visuel</h1>

      <nav className="hidden md:flex gap-6 text-secondary">
        <a href="#">Accueil</a>
        <a href="#">Services</a>
        <a href="#">Réalisations</a>
        <a href="#">À propos</a>
        <a href="#">Contact</a>
      </nav>

      <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-accent transition">
        Demander un devis
      </button>
    </header>
  );
}

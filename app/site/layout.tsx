import "./globals.css";

export const metadata = {
  title: "MBC Visuel",
  description: "Agence de communication digitale et création visuelle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-light text-secondary">{children}</body>
    </html>
  );
}

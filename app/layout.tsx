import type { ReactNode } from "react";
import "@/styles/globals.css";
import ClientLayout from "./client-layout";

export const metadata = {
  title: "MBC Visuel – Agence de communication digitale",
  description:
    "Création visuelle, sites web & communication digitale pour les entreprises ambitieuses.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-light text-secondary">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

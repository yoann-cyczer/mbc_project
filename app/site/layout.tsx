import type { ReactNode } from "react";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-light text-secondary">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
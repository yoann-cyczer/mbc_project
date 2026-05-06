import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette « éditoriale luxe » — ivoire, encre profonde, accent ambre
        primary: "#C9A36A",      // ambre / or doux (accent principal)
        accent:  "#E8C58A",      // ambre clair (hover)
        secondary: "#0E0E10",    // encre profonde (texte / fond sombre)
        light: "#F6F1EA",        // ivoire chaud
        ink:   "#1A1A1F",        // noir bleuté pour fonds dark
        muted: "#8A8478",        // gris taupe pour texte secondaire
        line:  "#E5DED2",        // hairline beige
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(14,14,16,0.04), 0 8px 24px -12px rgba(14,14,16,0.12)",
        glow: "0 0 0 1px rgba(201,163,106,0.25), 0 20px 60px -20px rgba(201,163,106,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;

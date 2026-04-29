import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        accent: "#3B82F6",
        secondary: "#1E293B",
        light: "#F8FAFC",
      },
    },
  },
  plugins: [],
};

export default config;

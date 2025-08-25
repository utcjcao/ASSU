import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["questrial", "sans-serif"],
        body: ["din-next-w01-light", "sans-serif"],
        bitter: ["var(--font-bitter)", "serif"],
      },
    },
  },
};

export default config;

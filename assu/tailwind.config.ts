import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        pink: {
          DEFAULT: "rgb(201, 8, 111)",
          light: "rgb(254, 234, 250)",
          lighter: "rgb(243, 243, 243)",
        },
        blue: {
          DEFAULT: "rgb(0, 136, 203)",
          dark: "rgb(11, 0, 20)",
        },
        yellow: "rgb(255, 203, 5)",
        red: "rgb(237, 28, 36)",
        green: "rgb(179, 217, 67)",
        orange: "rgb(222, 93, 53)",
        
        // Gray scale
        gray: {
          DEFAULT: "rgb(114, 114, 114)",
          light: "rgb(176, 176, 176)",
          lighter: "rgb(243, 243, 243)",
          dark: "rgb(69, 61, 76)",
          darker: "rgb(11, 0, 20)",
        },
        
        // Base colors
        background: "rgb(243, 243, 243)",
        foreground: "rgb(11, 0, 20)",
        white: "rgb(255, 255, 255)",
        black: "rgb(0, 0, 0)",
      },
      fontFamily: {
        sans: ["questrial", "sans-serif"],
        body: ["din-next-w01-light", "sans-serif"],
      },
    },
  },
};

export default config;

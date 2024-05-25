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
        softblush: "#F8E1E7",
        darkdusty: "#D49191",
        saturatedgray: "#5C3D3D",
        darkgreen: "#33474D",
        strongblush: "#DF6B6B",
        neutralblush: "#F6EEEE",
      },
      fontFamily: {
        lato: ["var(--font-lato)"],
        greatvibes: ["var(--font-greatvibes)"],
      },
    },
  },
  plugins: [],
};
export default config;

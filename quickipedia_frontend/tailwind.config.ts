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
        primary: "#8758FF",
        primaryB: "#FAF5FF",
        primaryC: "#7b50e6",
        secondary: "#000000",
        secondaryB: "#F92D64",
        ternary: "#2fb596",
      },
      screens: {
        betterhover: { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
};

export default config;

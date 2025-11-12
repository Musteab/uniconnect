import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D3557",
        secondary: "#457B9D",
        accent: "#2A9D8F",
        light: "#0F172A",
        dark: "#E5E7EB"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        glow: "0 10px 30px rgba(42,157,143,0.25)",
      }
    },
  },
  plugins: [],
};

export default config;

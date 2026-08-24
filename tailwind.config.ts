import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF7F0",
        ivory: "#F7F1E6",
        burgundy: {
          DEFAULT: "#6B0F1A",
          light: "#8A1B29",
          dark: "#4A0A12",
        },
        gold: {
          DEFAULT: "#B8892B",
          light: "#D4AF6A",
          dark: "#8F6A1F",
        },
        charcoal: "#2A2420",
      },
      fontFamily: {
        // Elegant system-font fallback stacks (no network fetch required at
        // build time). See README.md for how to swap in Playfair Display +
        // Jost via next/font/google once deploying somewhere with open
        // internet access at build time.
        display: [
          "Georgia",
          "'Iowan Old Style'",
          "'Palatino Linotype'",
          "'URW Palladio L'",
          "P052",
          "serif",
        ],
        body: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 4px 24px rgba(107, 15, 26, 0.08)",
        gold: "0 2px 12px rgba(184, 137, 43, 0.25)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

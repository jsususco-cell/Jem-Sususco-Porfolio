import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm "brewed" palette — driven by CSS vars for light/dark theming
        cream: "var(--cream)",
        sand: "var(--sand)",
        card: "var(--card)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        muted: "var(--muted)",
        line: "var(--line)",
        "line-card": "var(--line-card)",
        brand: "var(--brand)",
        "brand-soft": "var(--brand-soft)",
        verified: "#1d9bf0",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,30,63,0.04), 0 12px 30px -12px rgba(11,30,63,0.12)",
        "card-hover": "0 2px 6px rgba(11,30,63,0.06), 0 22px 45px -16px rgba(11,30,63,0.20)",
        pill: "0 10px 30px -8px rgba(11,30,63,0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

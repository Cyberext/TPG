import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#b7d63f",
          dark: "#9dbb2d",
        },
        background: "#ffffff",
        foreground: "#111111",
        charcoal: "#1f1f1f",
        offwhite: "#f7f7f5",
        gray: {
          100: "#f3f3f3",
          200: "#e5e5e5",
          300: "#bdbdbd",
        },
        success: "#34c759",
        danger: "#ff3b30",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-clash-display)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

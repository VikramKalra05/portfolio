/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          dark: "#4f46e5",
        },
        accent: {
          DEFAULT: "#06b6d4",
          light: "#22d3ee",
        },
        surface: {
          DEFAULT: "#0f172a",
          light: "#1e293b",
          lighter: "#334155",
          card: "rgba(30, 41, 59, 0.7)",
        },
        "text-primary": "#f1f5f9",
        "text-secondary": "#94a3b8",
        "text-muted": "#64748b",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

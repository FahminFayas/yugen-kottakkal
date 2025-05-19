/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#03b97c",
          dark: "#00a06b",
        },
        green: {
          DEFAULT: "#27b737",
          dark: "#22a32f",
        },
        teal: {
          DEFAULT: "#14b0a9",
          dark: "#10918b",
        },
        red: {
          DEFAULT: "#e42d29",
          dark: "#c02622",
        },
        orange: {
          DEFAULT: "#ff9b20",
          dark: "#e68a1c",
        },
        pink: {
          DEFAULT: "#f33066",
          dark: "#c72a54",
        },
        dark: {
          DEFAULT: "#3c4852",
          dark: "#e5e7eb",
        },
        dark2: {
          DEFAULT: "#30384e",
          dark: "#d1d5db",
        },
        dark3: {
          DEFAULT: "#333d46",
          dark: "#9ca3af",
        },
        bg: {
          DEFAULT: "#f8f8f8",
          dark: "#18181b",
        },
        bg2: {
          DEFAULT: "#f4f5f7",
          dark: "#23272f",
        },
        bg3: {
          DEFAULT: "#f4f8fa",
          dark: "#23272f",
        },
        white: {
          DEFAULT: "#fff",
          dark: "#18181b",
        },
      },
    },
  },
  plugins: [],
}


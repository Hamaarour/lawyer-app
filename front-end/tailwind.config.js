/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A365D", // Dark blue
          light: "#2A4A7F",
        },
        secondary: {
          DEFAULT: "#C7974F", // Gold accent
          light: "#D4AF37",
        },
        neutral: {
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/images/hero.jpg')",
      },
    },
  },
  plugins: [],
};

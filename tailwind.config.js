/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#333333",
        gold: "#d4a373",
        secondary: "#737373",
        cream: "#f3f2ed",
        lightGray: "#ececec",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Roboto"', "sans-serif"],
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/images/hero-law.png')",
      },
      boxShadow: {
        custom: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      },
      spacing: {
        "section-padding": "5rem",
      },
    },
  },
  plugins: [],
};

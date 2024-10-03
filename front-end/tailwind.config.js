/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#333333", // Dark text color
        gold: "#d4a373", // Gold color for headings and buttons
        secondary: "#737373", // Neutral gray
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"], // Use Playfair Display for headers
      },
      backgroundImage: {
        "hero-bg": "url('./src/assets/images/hero-law.png')",
      },
    },
  },
  plugins: [],
};

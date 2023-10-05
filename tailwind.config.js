/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        monserrat: ["Montserrat", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#4A3BB9",
        secondary: "#64748b",
        dark: "#030712",
        gradasi: "#853FF7",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

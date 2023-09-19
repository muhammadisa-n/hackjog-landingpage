/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
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
        primary : '#4A3BB9',
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
}

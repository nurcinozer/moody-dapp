/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "#FBEBEB",
        "pigeon-post": "#A1B8DC",
        "can-can": "#D698BF",
        "blue-haze": "#CDC8E0",
        "blue-jeans": "#1C202B",
      },
      boxShadow: {
        colorful:
          "rgb(251, 235, 235) 0px 0px 0px 3px, rgb(161, 184, 220) 0px 0px 0px 6px, rgb(214, 152, 191) 0px 0px 0px 9px, rgb(205, 200, 224) 0px 0px 0px 12px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

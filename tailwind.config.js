/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      marker: ['"Permanent Marker"', "cursive"],
      merienda: ["Merienda", "cursive"],
    },
    borderRadius: {
      xxl: "2rem",
    },
    extend: {},
  },
  plugins: [],
};

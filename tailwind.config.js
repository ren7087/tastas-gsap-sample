/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#2a5298",
        primaryGray: "#152632",
        primaryBG: "#05163d",
        primarySkyBlue: "#4878ae",
      },
    },
  },
  plugins: [],
};

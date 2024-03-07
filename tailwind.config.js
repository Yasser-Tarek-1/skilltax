/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        transparent: "transparent",
        primary: "#373873",
        orange: "#ED723F",
        secondary: "#00000099",
      },
    },
  },
  plugins: [],
};

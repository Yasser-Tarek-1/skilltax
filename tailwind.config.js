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
    // same screens in bootstrap
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "992px",
      // => @media (min-width: 992px) { ... }
      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
      "3xl": "1680px",
      // => @media (min-width: 1600px) { ... }
    },
  },
  plugins: [],
};

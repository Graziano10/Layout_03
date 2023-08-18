/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "300px",

      s: "548px",

      md: "735px",

      mdd: "857px",

      x: "1120px",

      xl: "1280px",

      "3xl": "1900px",
    },
    extend: {
      colors: {
        primary: "#ffff", // white 
        secondary: "#f2f4f1", // green
        tertiary: " #171d1b", // black footer
        fourth: "  #ecf0f1", // white02
        invert: " #fe092d", // red 
      },
    },
  },
  plugins: [],
};
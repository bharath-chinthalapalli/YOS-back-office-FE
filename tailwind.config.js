/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],

  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "3839px",
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};

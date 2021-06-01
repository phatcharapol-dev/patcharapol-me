module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Main Color
        "black-main": "#232931",
        "blue-main": "#3fc1c9",
        "white-main": "#eeeeee",

        // For Dark Theme
        "gray-dark": "#393e46",
        // For White Theme
        "gray-light": "#F4FFFF",
        "blue-light": "#E4FBFF",
      },
      screens: {
        xs: { max: "420px" },
        md: { min: "769px" },
        // => @media (min-width: 425) { ... }
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    fontFamily: {
      sans: ['"PT Sans"', "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

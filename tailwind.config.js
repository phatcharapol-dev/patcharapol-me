module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // #8E8E8E
        // 0d7377
        "black-custom": "#232931",
        "gray-custom": "#393e46",
        "blue-custom": "#3fc1c9",
        "white-custom": "#eeeeee",
        // #191919
        // 212121
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
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

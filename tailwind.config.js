const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  content: ["./public/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {},
      fontFamily: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

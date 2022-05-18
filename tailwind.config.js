module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./public/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
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

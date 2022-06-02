const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      "suisei-gray": "#1a1a1a",
      "suisei-blue": "#122752",
      "suisei-yellow": "#c49c6d",
      "aws-cloud": "#63BFB3",
      "aws-develop": "#C9208A",
      facebook: "#1877F2",
      linkedin: "#0077B5",
    },
    fontFamily: {
      sans: ['"Baloo Bhaijaan 2"'],
      display: ["Noto Serif Display"],
    },
    extend: {},
  },
  plugins: [],
};

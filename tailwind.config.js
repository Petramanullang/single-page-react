/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        108: "27rem",
        112: "28rem",
        120: "30rem",
        160: "40rem",
      },
      height: {
        108: "27rem",
        112: "28rem",
        120: "30rem",
        160: "40rem",
      },
    },
  },
  plugins: [],
});

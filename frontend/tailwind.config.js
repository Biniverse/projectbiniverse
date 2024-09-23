/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "color-gradient":
          "linear-gradient(rgba(0, 96, 214, 0.87), rgba(8, 83, 196, 0.88), #04327c, #032459)",
      },
    },
  },
  plugins: [flowbite.content()],
};

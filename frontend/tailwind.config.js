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
        "custom-background": "url('/public/images/background.jpg')",
        "custom-gradient": "linear-gradient(90deg, #1c1c1c 0%, #2b2b2b 100%)",
      },
    },
  },
  plugins: [flowbite.content()],
};

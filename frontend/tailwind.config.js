/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      backgroundImage: {
        "body-bg": "url('/public/images/background.jpg')", // Background image for body
        "nav-gradient":
          "linear-gradient(-90deg, rgba(8, 83, 196, 0.88), #04327c, #032459)", // Gradient for #navDashboard
        "body-gradient":
          "linear-gradient(rgba(0, 96, 214, 0.87), rgba(8, 83, 196, 0.88), #04327c, #032459)", // Gradient for body::before
      },
      boxShadow: {
        dark: "rgba(34, 34, 34, 0.83) -1px 1px 15px",
      },
      colors: {
        white: "#f4f4f4",
        darkmode: "#0f172a",
      },
      zIndex: {
        "-1": "-1", // Allow z-index: -1 for ::before
      },
      fontSize: {
        h3: "clamp(1.6rem, 1.0273rem + 1.5909vw, 3.0rem)", // Custom h3 font size
      },
    },
  },
  plugins: [flowbite.content()],
};

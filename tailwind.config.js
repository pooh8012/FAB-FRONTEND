/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ssp: ["Source Sans Pro", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        cardbg: "#E5FDD1",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

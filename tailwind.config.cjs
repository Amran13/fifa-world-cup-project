/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        fifa : '#9a1032'
      }
    },
  },
  plugins: [require("daisyui")],
}

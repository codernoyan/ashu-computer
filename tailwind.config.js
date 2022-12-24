/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        siliguri: ["Hind Siliguri", "sans-serif"]
      },
      colors: {
        dark: '#181D31'
      }
    },
  },
  plugins: [],
}

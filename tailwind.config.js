/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown-1': '#654540',
        'brown-2': '#503735',
        'brown-3': '#845C47',
        'brown-4': '#986B54',
      }
    },
  },
  plugins: [],
}
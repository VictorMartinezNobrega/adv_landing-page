import plugin from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#090831',
        'blue-regular': '#082d4a',
        'blue-light': '#07445f',
        'gold': '#efce78'
      }
    },
  },
  plugins: [],
}
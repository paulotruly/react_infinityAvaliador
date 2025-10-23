/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'infinity-black': '#2f2f2f',
        'infinity-gray': '#656565',
        'infinity-orange': '#c64132',
      }
    },
  },
  plugins: [],
}


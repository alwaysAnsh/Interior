/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair Display', serif",
      },
      colors:{
        sandbrown: '#c89666',
        lightgreen: '#F4FCED',
        darkblue: '#030725'
      }
    },
  },
  plugins: [],
}
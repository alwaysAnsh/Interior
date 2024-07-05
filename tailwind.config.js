const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require('tailwindcss/defaultTheme')
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
     extend: {
            fontFamily: {
              playfair: "'Playfair Display', serif",
              maven: "'Maven Pro', sans-serif;",
            },
            colors:{
              sandbrown: '#c89666',
              lightgreen: '#F4FCED',
              darkblue: '#030725',
              violet: '#7c3aed',
              emerald500: '#10b981',
              emerald900: '#064e3b',
            }
          },
          screens: {
            'sm': '320px',
            
      
            'md': '425px',
            
      
            'lg': '768px',
            
      
            'xl': '1024px',
            
      
            '2xl': '1440px',
            
          }
          
  },
  plugins: [],
});













// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         playfair: "'Playfair Display', serif",
//       },
//       colors:{
//         sandbrown: '#c89666',
//         lightgreen: '#F4FCED',
//         darkblue: '#030725'
//       }
//     },
//   },
//   plugins: [],
// }
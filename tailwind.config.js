/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(216, 248, 218)',
        secondary: 'black',
        tertiary: '#4b5563',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize:{
        '4xl5': ['2.7rem', {
          lineHeight: '3.5rem',
        }],
      },
      margin: {
        '0-auto': '0 auto',
      },
      flex: {
        '1-costum': '1 1 0%',
      }
    },
  },
  plugins: [],
}


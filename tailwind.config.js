/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customYellow: '#fdedae', // Color amarillo personalizado
        customYellowDark: '#e6d097', // Amarillo más oscuro
        customPinkclaro: '#f8bdcc', // Color rosa claro personalizado
        customPink: '#ffa5d7', // Color rosa personalizado
        cafe:'#6b4226',
        verde:'#556b2f '
      },
    },
  },
  plugins: [],
}

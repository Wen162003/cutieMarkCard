/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customYellow: '#fdedae', // Color amarillo personalizado
        customPinkclaro: '#f8bdcc', // Color rosa claro personalizado
        customPink: '#ffa5d7', // Color rosa personalizado
      },
    },
  },
  plugins: [],
}

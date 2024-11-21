/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          800: '#1a1a1a',
          900: '#121212',
        },
      },
    },
  },
  plugins: [],
};
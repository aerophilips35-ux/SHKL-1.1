/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F5EDE3',
          300: '#EDE2D4',
          400: '#E5D7C6',
          500: '#DCC9B3',
          600: '#C9B299',
          700: '#B39B80',
          800: '#9A8469',
          900: '#7A6A54',
        },
        forest: {
          400: '#3D5A4C',
          500: '#2C4A3A',
          600: '#1E3A2A',
          700: '#152B1F',
        },
      },
    },
  },
  plugins: [],
};

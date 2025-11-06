/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: '#f3f7f4',
          100: '#e6efe8',
          200: '#c4dcc9',
          300: '#9fc8a7',
          400: '#76b182',
          500: '#529c62',
          600: '#3d7a4b',
          700: '#2f5d39',
          800: '#22432a',
          900: '#162b1c'
        }
      }
    }
  },
  plugins: []
};

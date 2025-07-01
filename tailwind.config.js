module.exports = {
  purge: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx}'],
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
      colors: {
        primary: '#14213D',
        white: '#FFFFFF',
        cream: '#FDFDFB',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'monospace'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
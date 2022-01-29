module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '96': '28rem',
      }
    },
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif'],
    }
  },
  variants: {
    extend: {
      backgroundColor: ['even'],
      borderWidth: ['last'],
    },
  },
  plugins: [],
}

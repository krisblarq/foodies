module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        tertiary: {
          100: '#e0e1dd',
          200: '#778da9',
          300: '#001d3d',
        }
      },
      fontFamily: {
        body: ['Nunito'],
        h1: ['Lilita One'],
        h2: ['Kaushan Script']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

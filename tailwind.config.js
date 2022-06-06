const defaultTHeme = require('tailwindcss/defaultConfig')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  important: true,
  theme: {
    ...defaultTHeme,
    colors: {
      ...defaultTHeme.colors,
      primary: '',
      white: '#FFFFFF'
    },
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#3c62bd',
        secondary: '#282828',
        tertiary: '#f2f2f2',
        gray: '#555556',
        lightGray: '#f2f2f2',
      },
      container: {
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

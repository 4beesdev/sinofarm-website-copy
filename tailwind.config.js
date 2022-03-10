module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
      colors: {
        primary: '#3c62bd',
        secondary: '#282828',
        tertiary: '#f2f2f2',
        lightBlue: '#7fc9ef',
        gray: '#555556',
        lightGray: '#f2f2f2',
        poPrimary: '#6E6E6E',
        laPrimary: '#0038AE',
        danger: '#fa1e0e',
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

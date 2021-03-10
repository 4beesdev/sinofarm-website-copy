export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'sinofarm-website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'sr',
            file: 'sr-SR.js',
          },
          {
            code: 'en',
            file: 'en-EN.js',
          },
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'sr',
        detectBrowserLanguage: false,
      },
    ],
    ['@nuxtjs/strapi'],
  ],

  strapi: {
    url: 'http://localhost:1337',
    entities: ['subcategories', 'categories'],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}

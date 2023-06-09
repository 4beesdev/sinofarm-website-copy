export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  generate: {
    fallback: '404.html'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Sinofarm',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png'
      }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  vuetify: {
    treeShake: true,
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'sr',
            iso: 'sr',
            file: 'sr-SR.js',
          },
          {
            code: 'en',
            iso: 'en',
            file: 'en-EN.js',
          },
        ],
        // lazy: true,
        langDir: 'lang/',
        defaultLocale: 'sr',
        vueI18n: {
          useCookie: true,
          cookieDomain: null,
          cookieKey: 'lang',
          alwaysRedirect: false,
          fallbackLocale: 'sr'
        },
      },
    ],
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
  ],

  axios: {
    // proxy: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/,
        options: {
          fix: true
        }
      })
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}

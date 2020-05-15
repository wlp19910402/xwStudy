import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.less'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/axios', '~/plugins/poly'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/proxy', { pathRewrite: { '^/api': '/api/v1' } }]
  ],
  axios: { proxy: true },
  proxy: { '/api': 'http://39.105.50.203:8081' },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.lighten1,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.red.lighten1,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  /*
   ** You can extend webpack config here
   */
  router: { middleware: 'auth', base: '/xw/dist/' },
  build: {
    extend(config, { isClient, isDev }) {
      if (!isDev) {
        config.output.publicPath = 'http://127.0.0.1:8000/xw/dist/_nuxt/'
      }
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://39.105.50.203:8081',
    jest: true
  }
}

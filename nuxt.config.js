
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.min.css',
    '@/assets/styles/index.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '@/plugins/prism',
      ssr: false
    },
    '@/plugins/axios',
    '@/plugins/antd-ui',
    '@/plugins/router'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    ['@/modules/auth', { namespace: 'auth' }]
  ],
  auth: {
    api: {
      login: {
        url: '/api/auth/login',
        method: 'post',
        tokenProp: 'token'
      }
    },
    cookie: {
      prefix: '_lyj_',
      options: {
        expires: 1 // 一天后过期, 如果不设置该选项, 则默认关闭浏览器cookie失效
      }
    },
    debug: true
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) { },
    loaders: {
      scss: {
        implementation: require('dart-sass')
      }
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  server: {
    port: 3003
  }
}

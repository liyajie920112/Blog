import Storage from './storage'
export default class Auth {
  constructor(ctx, options) {
    this.ctx = ctx
    this.options = options

    this.storage = new Storage(ctx, options)
  }

  login(params) {
    const { api } = this.options
    return this.request({
      url: api.login.url,
      method: 'post',
      data: params
    }).then((res) => {
      console.log('===', res)
      if (res.code === 200) {
        // 设置token
        this.storage.setCookie('blog-strategy', res.token)
      }
      return res
    })
  }

  request(params) {
    if (!this.ctx.app.$axios) {
      // eslint-disable-next-line no-console
      console.error('[AUTH] add the @nuxtjs/axios module to nuxt.config file')
      return
    }
    const http = this.ctx.app.$request || this.ctx.app.$axios
    return http(params)
  }
}

import { message } from 'ant-design-vue'
import { Api } from '../api/index'
export default function(ctx, inject) {
  const { $axios } = ctx
  // Create a custom axios instance
  const server = $axios.create({
    headers: {}
  })

  server.interceptors.response.use(
    (response) => {
      const res = response.data
      if (res.code !== 200) {
        if (!process.server) {
          message.error(res.error)
        }
        return {
          ...res,
          data: ''
        }
        // return Promise.reject(res.message || res.msg || res.error || res.err || 'Error')
      } else {
        // 成功的时候
        return res
      }
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // Set baseURL to something different
  server.setBaseURL('http://localhost:3003')

  inject('request', server)
  // Inject to context as $api
  const api = new Api(server)
  inject('api', api)
}

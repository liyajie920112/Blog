export default function({ $axios, redirect }, inject) {
  // Create a custom axios instance
  const server = $axios.create({
    headers: {}
  })

  server.interceptors.response.use(
    (response) => {
      const res = response.data
      if (res.code !== 200) {
        return Promise.reject(new Error(res.message || res.msg || 'Error'))
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
  server.setBaseURL('http://localhost:3000')

  // Inject to context as $api
  inject('request', server)
}

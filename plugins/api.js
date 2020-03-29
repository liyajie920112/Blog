import { Api } from '../api/index'
export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  const api = new Api(app.$request)
  inject('api', api)
}

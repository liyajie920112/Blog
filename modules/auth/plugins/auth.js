import Auth from '../core/Auth'
import '../core/middleware'
// Options
const options = JSON.parse(`<%= JSON.stringify(options) %>`)
export default function(ctx, inject) {
  // const { $axios, store, redirect } = ctx
  const auth = new Auth(ctx, options)
  // Inject to context as $api
  inject('auth', auth)
}

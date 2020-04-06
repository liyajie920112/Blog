import Middleware from '../../middleware'
Middleware.auth = (ctx) => {
  const { store, redirect } = ctx
  console.log('112233')
  ctx.req.headers.authorization = '1111111'
  // If the user is not authenticated
  if (!store.state.authenticated) {
    return redirect('/admin/login')
  }
}

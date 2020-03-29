export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    if (to.path === '/') { // 如果是根目录, 需要调整布局
    }
    next()
  })
}

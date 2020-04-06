const Router = require('koa-router')
const router = new Router()
const db = require('../utils/db')
const { getToken } = require('../utils/common')

router.post('/api/auth/login', (ctx) => {
  const { username, password } = ctx.request.body
  console.log('u', username)
  console.log('p', password)
  const user = db.get('users').find({ username, password }).value()
  console.log('user', user)
  if (user) {
    ctx.body = {
      code: 200,
      token: getToken(user)
    }
  } else {
    ctx.body = {
      code: -1,
      error: '用户名或密码错误'
    }
  }
})

router.get('/api/auth/user', (ctx) => {
  const { username, password } = ctx.request.body
  const user = db.find({ username, password }).values()
  if (user) {
    ctx.body = {
      user
    }
  }
})

router.get('/api/blog/list', (ctx) => {
  ctx.body = {
    code: 200,
    data: {
      list: [{
        title: 123,
        tags: 'js,css'
      }]
    }
  }
})

module.exports = router

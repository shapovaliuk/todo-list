const Router = require('@koa/router')
const router = new Router({ prefix: '/api/tasks' })
const store = require('../store')

router.get('/', async (ctx) => {
  ctx.response.body = await store.listTasks()
  // ctx.status = 200
})

router.post('/', async (ctx) => {
  await store.addTask(ctx.request.body)
  ctx.status = 200
})

router.delete('/', async (ctx) => {
  ctx.status = 501
})

module.exports = router
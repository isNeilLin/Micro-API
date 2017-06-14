const path = require('path')
const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onError = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logUtil = require('./util/log_util')
const users = require('./routes/users')

// error handler
onError(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))

app.use(json())

app.use(require('koa-static')(path.resolve(__dirname, '/public')))

app.use(async (ctx, next) => {
  const start = new Date()
  let ms
  try {
    await next()
    ms = new Date() - start
    // 记录响应日志
    logUtil.logResponse(ctx, ms)
  } catch (error) {
    ms = new Date() - start
    // 记录异常日志
    logUtil.logError(ctx, error, ms)
  }
})

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(users.routes(), users.allowedMethods())

module.exports = app

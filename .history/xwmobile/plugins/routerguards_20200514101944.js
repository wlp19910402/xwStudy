export default ({ app }) => {
  app.router.beforeEach(async (to, from, next) => {
    console.log('to:', to.path)
    console.log('from:', from.path)
    await next()
  })
  console.log(app.router.beforeEach)
}

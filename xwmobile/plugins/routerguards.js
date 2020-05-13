export default ({ app }) => {
  app.router.beforeEach(async (to, from, next) => {
    console.log(1111111111)
    console.log('to:', to.path)
    console.log('from:', from.path)
    await next()
  })
}

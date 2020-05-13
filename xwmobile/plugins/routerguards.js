export default ({ app, store }) => {
  app.router.beforeEach(async (to, from, next) => {
    // console.log(process.client)
    console.log('to:', to.path)
    console.log('from:', from.path)
    next()
  })
}

import routerguards from '~/plugins/routerguards'
describe('页面跳转触发全局前置守卫', () => {
  it('routerguards', async () => {
    const to = { name: 'login', path: '/login' }
    const from = { name: 'home', path: '/home' }
    const next = jest.fn()
    const beforeEachFun
    await routerguards({
      app: {
        router: {
          beforeEach: ((async (to, from, next) => {}))=>{}
        }
      }
    })
  })
})

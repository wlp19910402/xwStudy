import authFun from '~/middleware/auth'

// describe('sssss', () => {
//   it('ttttt', async () => {
//     await authFilter(
//       '/my',
//       (redirectPath) => { console.log('重定向地址:' + redirectPath) },
//       async () => {
//         console.log('调用了 setFristAuth')
//       },
//       async () => {
//         console.log('调用了 setRedirectPath')
//       },
//       () => {
//         console.log('调用了 isAuth')
//         return false
//       })
//     // expect(router.currentRoute.path).toMatch('/')
//     // router.push('/home')
//     // expect(router.currentRoute.path).toMatch('/home')

//     // expect(next).toBeCalled()
//   })
// })

describe('sssss', () => {
  it('ttttt', async () => {
    await authFun({
      route: { path: '/my' },
      redirect: async (path) => {
        console.log(path)
      },
      store: {
        // dispatch: async (str) => {
        //   console.log(str)
        // },
        dispatch: (str, path) => {
          console.log(str, path)
        },
        getters: {
          isAuth: false
        }
      }
    })
  })
})

// import axios from 'axios'

export class Res {
  constructor(name, path, isAuth = true) {
    this.name = name
    this.path = path
    this.isAuth = isAuth
  }
}
const loginRes = new Res('登录页面', '/login', false)

export const resArray = [
  new Res('注册', '/reg', false),
  new Res('首页', '/home', false),
  new Res('默认', '/', false),
  new Res('购物车', '/cart'),
  new Res('我的订单', '/order'),
  new Res('我的', '/my'),
  new Res('帮助中心', '/my/help'),
  new Res('用户信息', '/account/info'),
  loginRes
]

export async function authFilter(
  path,
  redirect,
  setFristAuth,
  setRedirectPath,
  isAuth
) {
  await setFristAuth() //黑盒啦
  const needLogin = resArray.find((res) => {
    return res.path === path && res.isAuth && !isAuth()
  })
  if (needLogin) {
    setRedirectPath()
    redirect(loginRes.path)
  }
}

export default async ({ route, redirect, store }) => {
  const path = route.path
  await store.dispatch('setFristAuth')
  const needLogin = resArray.find((res) => {
    return res.path === path && res.isAuth && !store.getters['isAuth']
  })
  if (needLogin) {
    store.dispatch('setRedirectPath', path)
    redirect(loginRes.path)
  }
  // authFilter(
  //   route.path,
  //   redirect,
  //   () => store.dispatch('setFristAuth'),
  //   () => store.dispatch('setRedirectPath', route.path),
  //   () => { return store.getters[ 'isAuth' ] })
}

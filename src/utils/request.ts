import axios, { type Method } from 'axios'
import { useUserStore } from '../stores'
import { showToast } from 'vant'
import router from '../router'
// 1.axios的配置
// 1.1创建axios实例。配置基准地址，超时响应时间
// 1.2请求拦截器，配置请求头token，
// 1.3响应拦截器，401错误拦截去登录页面，判断业务是否成功，剥离无效数据
const baseURL = 'https://consult-api.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 5000
})

// axios.get().
//then((res) => {//此时的res就是res.data})
//.catch(e => {//200 10001 那么e也就是res.data  //如果是404 401 那么e就是错误对象})
// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // pinia 引入token
    const store = useUserStore()
    // token携带
    if (store.user?.token && config.headers) {
      // 注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意
      // 注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意注意
      // Bearer ${store.user.token} 中间一个空格 千万不要多写
      config.headers.Authorization = `Bearer ${store.user.token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)
// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    if (res.data?.code !== 10000) {
      showToast(res.data?.message || '网络异常')
      return Promise.reject(res.data)
    }
    return res.data
  },
  (err) => {
    // 401错误
    // token失效返回登录页面，登陆后再返回退出的页面，地址携带到router.push()的值中
    // 我认为也可以存到store里，毕竟这是个持久化存储，其实也可以不用持久化存储，毕竟谁会刷新一下页面呢
    // 这个功能后续在做
    // vue2的$router 路由实例,路由函数等相关操作  $route 路由信息 path parmars query
    if (err.response.status === 401) {
      const store = useUserStore()
      store.delUser()
      // path不携带参数
      // fullpath 完整路径 携带查询参数
      router.push(`/login?returnUrl=${router.currentRoute.value.fullPath}`)
    }
    return Promise.reject(err)
  }
)

// 请求工具函数
type Data<T> = {
  code: number
  message: string
  data: T
}
const request = <T>(url: string, method: Method = 'get', submitData?: object) => {
  return instance.request<T, Data<T>>({
    url,
    method,
    [method.toLocaleLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
export { baseURL, instance, request }

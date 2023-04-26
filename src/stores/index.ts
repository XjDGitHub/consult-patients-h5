import { createPinia } from 'pinia'
// 信息持久化插件
import persist from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(persist)
export default pinia

// 统一导出
// import { useUserStore } from './user'
// export { useUserStore }
export * from './user'

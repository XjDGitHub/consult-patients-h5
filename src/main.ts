import { createApp } from 'vue'

import App from './App.vue'
// 路由
import router from './router'
// 共享数据
import pinia from './stores'
// vant组件库css样式
import 'vant/lib/index.css'
import './styles/main.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')

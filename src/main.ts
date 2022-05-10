import { createApp } from 'vue'
import App from './App.vue'

// 引入 定义的 Store
import store from './store'
const app = createApp(App)
app.use(store)
app.mount('#app')


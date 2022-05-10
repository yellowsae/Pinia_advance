// Store 的根文件， 创建Store 配置
import { createPinia } from "pinia";
// 引入
import piniaPluginPersist from "pinia-plugin-persist"
const store = createPinia();
// 使用
store.use(piniaPluginPersist)
console.log(store)
export default store;


// 数据持久化
//  使用 pinia-plugin-persist 插件

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //省略store/index.js vuex
import elementplus from "element-plus"
import "element-plus/dist/index.css"
// pc界面 elementplus（element-ui），antDesign，移动端：vant，iview，minu-ui...
// 安装 cnpm install element-plus --save
let app = createApp(App)
//全局配置
// Vue.prototype.$store =store;   2.0写法
app.config.globalProperties.$store = store; //vue3  this.$store
// 挂载router对象
app.use(store).use(router).use(elementplus).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//cnpm install element-plus --save
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus';
// cnpm install @element-plus/icons-vue
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
app.use(ElementPlus)
app.use(store).use(router).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

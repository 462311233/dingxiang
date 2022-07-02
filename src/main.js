import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//载入初始化重置样式
import '@/assets/style/common.less'

createApp(App).use(router).mount('#app')

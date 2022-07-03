import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vant from 'vant'
import 'vant/lib/index.css'
//载入初始化重置样式
import '@/assets/style/common.less'
import store from '@/store'

createApp(App).use(router).use(store).use(Vant).mount('#app')

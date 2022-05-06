import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/style/el-style.less'
import '@/assets/fonts/iconfont.css'

import '@/mock'
import './permission'


createApp(App).use(ElementPlus,{ size: 'small'}).use(store).use(router).mount('#app')

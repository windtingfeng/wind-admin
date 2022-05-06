import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import '@/style/el-style.less'
import '@/assets/fonts/iconfont.css'

import '@/mock'
import './permission'


createApp(App).use(ElementPlus,{ size: 'small',locale: zhCn,}).use(store).use(router).mount('#app')

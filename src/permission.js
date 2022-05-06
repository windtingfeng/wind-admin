import router from './router'
import store from './store'
//进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const writeList = ['/login']

router.beforeEach((to,from,next) => {
    NProgress.start()
    if( writeList.includes(to.path)){
        console.log('白名单');
        next()
        NProgress.done()
        return
    }
    else if(store.state.user.token == ''){
        console.log('登录');
        next('/login')
        NProgress.done()
        return
    }
    else{
        if(to.path !== from.path){
            console.log('跳转');
            next()
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})
import { asyncRouters } from '@/router'
import router from '@/router'
import cookie from '../../utils/cookie'


//过滤菜单权限
function filterRouter() {
    let user = cookie.get('token')
    asyncRouters.forEach(item => {
        if(item.children && item.children.length >= 1){
            item.children = item.children.filter(child => {
                if(child.rule && child.rule.length >=1){
                    return child.rule.includes(user)
                }else{
                    return child
                }
            })
        }
    })
    let currouter = router.options.routes
    //遍历异步菜单，some过滤相同的item，加入到currouter中，再遍历currouter使用addRoute方法重新构建路由
    asyncRouters.forEach(item => {
        let has = currouter.some(it => it.path === item.path)
        if(!has){
            currouter.push(...asyncRouters)
        }
    })
    currouter.forEach(item => {
        router.addRoute(item)
    })
    return asyncRouters
}

export default {
    state: {
        menulist: filterRouter() || [],
        breadmenu: []
    },
    mutations:{
        //保存动态菜单
        SET_MENU:(state) => {
            const asyncRouter = filterRouter()
            state.menulist = asyncRouter
        },
        //面包屑菜单
        SET_BREAD:(state,data) => {
            state.breadmenu = data
        }
    }
}
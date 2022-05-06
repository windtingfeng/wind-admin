import cookie from '@/utils/cookie'

function getToken(){
    let token = cookie.get('token')
    if(token){
        return token
    }else{
        return undefined
    }
}
function getUser(){
    let token = cookie.get('user')
    if(token){
        return token
    }else{
        return undefined
    }
}

const user = {
    state: {
        token: getToken() || '',
        user: getUser() || ''
    },
    mutations: {
        SET_TOKEN:(state,data) => {
            state.token = data
            cookie.set('token',data)
        },
        SET_USER:(state,data) => {
            state.user = data
            cookie.set('user',data)
        },
        LOGOUT:(state) => {
            state.token = ''
            state.user = ''
            cookie.set('token','')
            cookie.set('user','')
        }
    },
}
export default user
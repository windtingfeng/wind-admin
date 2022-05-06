import request from '@/utils/request'

//登录
export function login(params) {
    return request({
        url:'/login',
        method:'get',
        data:params
    })
}

//退出
export function logout(params) {
    return request({
        url:'/logout',
        method:'get',
        data:params
    })
}

//获取用户信息
export function getUserInfo(params) {
    return request({
      url: '/getUserInfo',
      method: 'get',
      data:params
    })
}

//获取用户列表
export function getUserList(params) {
    return request({
      url: '/getUserList',
      method: 'get',
      data:params
    })
}
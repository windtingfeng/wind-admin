import Mock from 'mockjs'
import user from './user'
import sales from './sales'

//指定被拦截的 Ajax 请求的响应时间
Mock.setup({
    timeout: '200-600'
})

//用户信息mock接口
Mock.mock(/login/,'get',user.login)
Mock.mock(/logout/,'get',user.logout)
Mock.mock(/getUserInfo/,'get',user.getUserInfo)
Mock.mock(/getUserList/,'get',user.getUserList)

//获取销售信息
Mock.mock(/getSalesData/,'get',sales.getSalesData)
import request from '@/utils/request'

export function getSalesData(params){
    return request({
        url:'/getSalesData',
        method:'get',
        data:params
    })
}
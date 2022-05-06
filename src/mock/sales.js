import Mock from 'mockjs'

let list = []
const count = 7

for(let i = 0 ;i<count;i++){
    list.push(Mock.mock({
        id:Mock.Random.guid(),
        userImg:Mock.Random.image(),
        username: Mock.Random.name(),
        date: Mock.Random.datetime(),
        price: Mock.Random.float(0, 9999, 2,2),
        status:Mock.Random.natural( 1,4 ),
        commentContent:Mock.Random.paragraph()
    }))
}

export default {
    getSalesData: config => {
        let data = JSON.parse(config.body)
        if(data.token){
            return {
                code:200,
                data:{
                    msg:'请求成功',
                    saleslist:list
                }
            }
        }else{
            return{
                code:201,
                data:{
                    msg:'请先登录'
                }
            }
        }
    }
}
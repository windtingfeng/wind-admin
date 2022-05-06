import Mock from 'mockjs'

let list = []
let count = 100
let typelist = ['联通', '移动', '电信', '铁通']

//随机生成用户信息数据
for(let i=0;i<count;i++){
    list.push(Mock.mock({
        id:Mock.Random.guid(),
        sortnum:i+1,
        username:Mock.Random.cname(),
        address:Mock.mock('@city'),
        createTime:Mock.Random.datetime(),
        updateTime:Mock.Random.now(),
        ip:Mock.Random.ip(),
        region:Mock.mock('@region'),
        areaId:/\d{7}/,
        email:Mock.Random.email(),
        'isp|1': typelist
    }))
}

export default {
    //登录
    login: config => {
        let data = JSON.parse(config.body)
        const { username } = data
        let userlist = {}
        if(username === 'admin'){
            userlist = {
                token:'admin',
                name:'管理员'
            }
        }else if(username === 'editor'){
            userlist = {
                token:'editor',
                name:'编辑'
            }
        }else{
            return {
                code:-1,
                data:{
                    msg:'用户名错误',
                    status:false
                }
            }
        }
        return{
            code:200,
            data:{userlist}
        }
    },
    //退出
    logout: () => {
        return {
            code:200,
            data:{
                userlist:''
            }
        }
    },
    //获取用户登录信息
    getUserInfo: config => {
        const data = JSON.parse(config.body)
        let user = {}
        if(data.token === 'admin'){
            user = {
                roles:['admin'],
                name:'admin',
                avator:''
            }
        }else if(data.token === 'editor'){
            user = {
                roles:['editor'],
                name:'editor',
                avator:''
            }
        }else{
            user = ''
        }
        return {
            code:200,
            data:{
                user
            }
        }
    },
    //获取用户列表
    getUserList: config => {
        const data = JSON.parse(config.body)
        const { limit, page } = data
        const userlist = list.filter((item,index) => index < limit * page && index > limit * (page -1))
        return {
            code:200,
            data:{
                userlist
            }

        }
    }
}
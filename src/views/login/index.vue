<template>
  <div class="login">
      <div class="login__container">
          <div class="login__container__title">
              <el-image
                style="width: 50px; height: 50px"
                :src="require('../../assets/img/letter-f.png')"
                fit="cover"
              />
              <div class="login__container__title__text">WIND <span>ADMIN</span></div>
          </div>
        <div class="login__container__from">
            <el-input
                v-model="username"
                class="login__container__from__username"
                size="large"
                placeholder="请输入账号"
            >
            <template #prefix>
                <span class="iconfont icon-geren"></span>
            </template>
            </el-input>
            <el-input
                v-model="password"
                type="password"
                size="large"
                placeholder="请输入密码"
                class="login__container__from__password"
            >
            <template #prefix>
                <span class="iconfont icon-unlock"></span>
            </template>
            </el-input>
            <el-button class="login__container__from__btn" type="warning" plain @click="checklogin">Sign in</el-button>
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { login } from '@/api/user'
import { useStore } from 'vuex'
import router from '@/router'
export default {
    name:'Login',
    setup(){
        let username = ref('admin')
        let password = ref('123456')
        const store = useStore()
        async function checklogin(){
            let data = await login({username:username.value,password:password.value})
            if(data.code === 200){
                const { token,name } = data.data.userlist
                store.commit('SET_TOKEN',token)
                store.commit('SET_USER',name)
                store.commit('SET_MENU')
                router.push('/')
            }
        }        
        return{
            username,
            password,
            checklogin
        }
    }
}
</script>

<style lang="less" scoped>
.login{
    height: 100%;
    width: 100%;
    background: url('../../assets/img/bg9.jpg') no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login__container{
        width: 370px;
        height: 300px;
        border-radius: 10px;
        padding: 25px;
        background-color: #fff;
        .login__container__title{
            display: flex;
            align-items: center;
            justify-content: center;
            .login__container__title__text{
                margin-left: 10px;
                font-size: 22px;
                span{
                    color: rgb(250, 102, 43);
                }
            }
        }
        .login__container__from{
            .login__container__from__username{
                margin: 20px 0px;
                .icon-geren{
                    margin: 0 10px 0 0;
                }
            }
            .login__container__from__password{
                .icon-unlock{
                    margin: 0 10px 0 0;
                }
            }
            .login__container__from__btn{
                width: 100%;
                height: 40px;
                background-color: orange;
                color: #fff;
                font-size: 20px;
                margin-top: 20px;
            }
        }
    }
}
</style>
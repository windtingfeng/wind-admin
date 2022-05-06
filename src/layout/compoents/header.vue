<template>
  <div class="headermenu">
    <div class="headermenu__left">
      <el-image
        style="width: 50px; height: 50px"
        :src="require('../../assets/img/letter-f.png')"
        fit="cover"
      />
      <div class="headermenu__left__text">WIND.<span>ADMIN</span></div>
    </div>
    <div class="headermenu__right">
      <el-image
        style="width: 20px; height: 20px"
        :src="require('../../assets/img/github.png')"
        fit="cover"
        class="headermenu__right__img"
      />
      <el-image
        style="width: 20px; height: 20px"
        :src="require('../../assets/img/wx.png')"
        fit="cover"
        class="headermenu__right__img"
      />
      <el-image
        style="width: 20px; height: 20px"
        :src="require('../../assets/img/qq2.png')"
        fit="cover"
        class="headermenu__right__img"
      />
      <el-image
        style="width: 25px; height: 25px"
        :src="require('../../assets/img/zg.png')"
        fit="cover"
        class="headermenu__right__img"
      />
      <div class="headermenu__right__hovercontainer">
      <div class="headermenu__right__hover"
        @mouseover="overshow(1)"
        @mouseleave="overshow(-1)"
      >
      <div class="headermenu__right__hover__show">
        <div class="headermenu__right__name">
            您好,<span class="headermenu__right__name__right">{{ user }}</span>
        </div>
        <el-image
            style="width: 30px; height: 30px"
            :src="require('../../assets/img/avatar.png')"
            fit="cover"
            class="headermenu__right__hover__avator"
        />
        </div>
        <div class="headermenu__right__over">
            <a href="javascript:;">个人信息</a>
            <a href="javascript:;">修改信息</a>
            <a href="javascript:;" @click="checklogout">退出登录</a>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref } from 'vue'
import router from '@/router'
export default {
  name: "headermenu",
  setup() {
    const store = useStore();
    let user = store.state.user.user;
    let isShowAction = ref(false)
    let action = ref(false)
    function overshow(num){
        const hover = document.querySelector('.headermenu__right__hover')
        if(num === 1){
            hover.style.transitionProperty = 'height'
            hover.style.transitionDuration = '1s'
            hover.style.height = '200px'
        }else{
            hover.style.height = '59px' 
        }
    }
    function checklogout(){
        store.commit('LOGOUT')
        router.push('/login')
    }
    return {
      user,
      overshow,
      isShowAction,
      action,
      checklogout
    };
  },
};
</script>

<style lang="less" scoped>
.headermenu {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .headermenu__left {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    .headermenu__left__text {
      margin-left: 10px;
      font-size: 22px;
      span {
        color: rgb(250, 102, 43);
      }
    }
  }
  .headermenu__right {
    display: flex;
    align-items: center;
    margin-right: 40px;
    position: relative;
    .headermenu__right__img {
      margin: 0px 20px ;
    }
    .headermenu__right__name {
      color: #909399;
      font-size: 12px;
            margin-top: 20px;
      
      .headermenu__right__name__right {
        color: #a9d86e;
        font-weight: bolder;
        font-size: 13px;
      }
    }
    .headermenu__right__hover{
        height: 59px;
        overflow: hidden;
        position: absolute;
        top: 0;
        z-index: 99;
        .headermenu__right__hover__avator{
            margin-top: 15px;
            margin-left: 20px;
        }
        .headermenu__right__over{
            margin-top: 15px;
            width: 110px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            a{
                color: #909399;
                display: block;
                width: 100%;
                margin: 10px 5px;
                font-size: 13px;
            }
            a:hover{
                color: #575757;
            }
        }
        .headermenu__right__hover__show{
            display: flex;
        }
    }
    .headermenu__right__hovercontainer{
        position: relative;
        width: 120px;
        height: 60px;
    }
  }
}
</style>
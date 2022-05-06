<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header>
            <headermenu></headermenu>
      </el-header>
      <el-container>
        <el-aside width="200px" v-show="!showSmall">
          <div class="container__aside">
            <leftmenu></leftmenu>
          </div>
        </el-aside>
        <el-aside width="50px" v-show="showSmall">
          <div class="container__aside">
            <leftmenusmall></leftmenusmall>
          </div>
        </el-aside>
        <el-main>
          <breadcrumb @hiddenLeftMenu="hiddenLeftMenu"/>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftmenu from './compoents/leftmenu.vue'
import leftmenusmall from './compoents/leftmenusmall.vue'
import headermenu from './compoents/header.vue'
import breadcrumb from './compoents/breadcrumb.vue'
import { useRouter } from 'vue-router'
import { watch,ref } from 'vue'
import { useStore } from 'vuex'
export default {
    name:'Layout',
    components:{
      leftmenu,
      headermenu,
      breadcrumb,
      leftmenusmall
    },
    setup(){
      let store = useStore()
      let bread
      let router = useRouter()
      watch(()=>router.currentRoute.value.path,() => {
        bread = router.currentRoute.value.matched.map(item => item.meta.title)
        store.commit('SET_BREAD',bread)
      },{immediate:true})

      let showSmall = ref(false) //定义是否缩放左侧菜单
      function hiddenLeftMenu(){
        showSmall.value = !showSmall.value
      }

      return {
        bread,
        showSmall,
        hiddenLeftMenu
      }
    }
}
</script>

<style lang="less" scoped>
.common-layout{
    width: 100%;
    height: 100%;
    .container{
      height: 100%;
    }
    .container__aside{
      height: 100%;
      background-color: #fff;
    }
}
</style>
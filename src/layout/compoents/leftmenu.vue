<template>
    <el-menu
        default-active="0"
        class="el-menu-vertical-demo"
        router
      >
      <el-menu-item index="/index">
          <span class="iconfont icon-home"></span>
          <span>首页</span>
      </el-menu-item>
      <div v-for="(item,index) in menulist" :key="index">
        <el-sub-menu :index="(index+1).toString()" v-if="!item.noDropdown">
          <template #title>
            <span :class="['iconfont',item.meta.icon]"></span>
            <span>{{ item.meta.title }}</span>
          </template>
            <el-menu-item :index="child.path" v-for="(child,childindex) in item.children" :key="childindex">
                <span class="menuitem">{{ child.meta.title }}</span>
            </el-menu-item>
        </el-sub-menu>
        <el-menu-item :index="item.children[0].path" v-else>
          <span :class="['iconfont',item.meta.icon]"></span>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
      </div>
    </el-menu>
</template>

<script>
import { useStore } from 'vuex'
import { toRaw } from 'vue'
export default {
    name:'LeftMenu',
    setup(){
        let menulist = []
        const store = useStore()
        menulist = toRaw(store.state.permission.menulist)
        return{
            menulist
        }
    }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo{
    border: none;
    .menuitem{
        padding-left: 10px;
    }
    .iconfont{
        margin-right: 5px;
    }
}
.el-menu-item{
    padding: 0;
}
</style>
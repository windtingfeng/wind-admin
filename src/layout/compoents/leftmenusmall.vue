<template>
    <el-menu
        default-active="0"
        class="el-menu-vertical-demo-small"
        router
      >
      <el-tooltip
        class="box-item"
        effect="dark"
        content="首页"
        placement="right"
      >
        <el-menu-item index="/index">
            <span class="iconfont icon-home"></span>
        </el-menu-item>
      </el-tooltip>
      <div v-for="(item,index) in menulist" :key="index">
        <el-tooltip
          class="box-item"
          effect="dark"
          :content="item.meta.title"
          placement="right"
          v-if="item.noDropdown"
        >
            <el-menu-item :index="item.children[0].path">
            <span :class="['iconfont',item.meta.icon]"></span>
            </el-menu-item>
        </el-tooltip>
        <div v-else>
            <el-popover placement="right" :width="100">
                <div class="popstyle">
                    <!-- <a :href="child.path" v-for="(child,childindex) in item.children" :key="childindex">{{ child.meta.title }}</a> -->
                    <router-link :to="child.path" v-for="(child,childindex) in item.children" :key="childindex">{{ child.meta.title }}</router-link>
                </div>
                <template #reference>
                    <el-menu-item>
                        <span :class="['iconfont',item.meta.icon]"></span>
                    </el-menu-item>
                </template>
            </el-popover>
        </div>
      </div>
    </el-menu>
</template>

<script>
import { useStore } from "vuex";
import { toRaw } from "vue";
export default {
  name: "LeftMenuSmall",
  setup() {
    let menulist = [];
    const store = useStore();
    menulist = toRaw(store.state.permission.menulist);
    return {
      menulist,
    };
  },
};
</script>

<style lang="less" scoped>
.el-popover{
    padding: 0;
    min-width: none;
}
.popstyle{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 0px;
    a:hover{
        background-color: rgb(231, 230, 230);
    }
    a{
        padding: 10px 5px;
    }
}
.el-menu-vertical-demo-small {
  border: none;
  .menuitem {
    padding-left: 10px;
  }
  .iconfont {
    margin-right: 5px;
  }
}
.el-menu-item {
  padding: 0;
}
</style>
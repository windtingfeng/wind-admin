<template>
  <share-layout sharename="分享组件三：横向排列">
      <template v-slot:share>
          <div class="shareone">
            <div>分享到</div>
            <el-image
                style="width: 20px; height: 20px"
                :src="require('../../../assets/img/wx.png')"
                fit="cover"
                class="headermenu__right__img"
            />
            <el-image
                style="width: 20px; height: 20px"
                :src="require('../../../assets/img/qq2.png')"
                fit="cover"
                class="headermenu__right__img"
            />
            <el-image
                style="width: 20px; height: 20px"
                :src="require('../../../assets/img/github.png')"
                fit="cover"
                class="headermenu__right__img"
            />
            <el-image
                style="width: 20px; height: 20px"
                :src="require('../../../assets/img/wx.png')"
                fit="cover"
                class="headermenu__right__img"
            />
          </div>
      </template>
  </share-layout>
</template>

<script>
import shareLayout from './layout.vue'
export default {
    name:'ShareThree',
    components:{
        shareLayout
    }

}
</script>

<style lang="less" scoped>
.shareone{
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
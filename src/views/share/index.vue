<template>
  <div class="shareContainer">
    <div class="shareContainer__Top">
      <shareone />
      <sharetwo />
      <sharethree />
      <sharefour />
    </div>
    <div class="shareContainer__Top">
      <shareone />
      <sharetwo />
      <sharethree />
      <sharefour />
    </div>
  </div>
  <about />
</template>

<script>
import shareone from './components/shareone.vue'
import sharetwo from './components/sharetwo.vue'
import sharethree from './components/sharethree.vue'
import sharefour from './components/sharefour.vue'
import about from '@/components/about.vue'
export default {
  name:'Share',
  components:{
    shareone,
    sharetwo,
    sharethree,
    sharefour,
    about
  }

}
</script>

<style lang="less" scoped>
.shareContainer{
  width: 100%;
  height: 93%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .shareContainer__Top{
    display: flex;
    justify-content: space-between;
  }
}
</style>
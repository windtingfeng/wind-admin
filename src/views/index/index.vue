<template>
  <el-scrollbar wrap-class="home__scrollbar" :height="scrollHeight + 'px'">
    <div style="height:100%;">
      <div class="home">
        <hometop />
        <div class="home__mid">
          <logs />
          <visitechart />
        </div>
        <echart />
        <bottom />
      </div>
      <about />
    </div>
  </el-scrollbar>
</template>

<script>
import hometop from './components/top.vue'
import logs from './components/logs.vue'
import visitechart from './components/visitechart.vue'
import echart from './components/echart.vue'
import bottom from './components/bottom.vue'
import about from '@/components/about.vue'
export default {
  name:'Home',
  components:{
    hometop,
    logs,
    visitechart,
    echart,
    bottom,
    about
  },
  setup(){
    const scrollHeight = window.innerHeight - 31 - 59

    return{
      scrollHeight
    }
  }
}
</script>

<style lang="less" scoped>
.home{
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 98%;
  .home__mid{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
}
</style>
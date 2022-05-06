<template>
  <el-scrollbar :height="scrollHeight + 'px'">
    <div class="usermanager">
      <usertable />
    </div>
    <about />
  </el-scrollbar>
</template>

<script>
import usertable from './components/usertable.vue'
import about from '@/components/about.vue'
export default {
  name:'UserManager',
  components:{
    usertable,
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
.usermanager{
  padding: 20px;
  box-sizing: border-box;
}
</style>
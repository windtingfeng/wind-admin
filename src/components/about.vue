<template>
  <div class="about">
      <div>WIND ADMIN</div>
      <el-image
        style="width: 20px; height: 20px"
        :src="require('../assets/img/github.png')"
        fit="cover"
        class="headermenu__right__img"
      />
      <div>windAha(微信号)</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.about{
  width: 100%;
  height: 2%;
  padding: 10px 0px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    margin: 0 10px;
  }
}
</style>
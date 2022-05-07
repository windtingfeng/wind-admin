<template>
  <div class="shareLayout">
      <div class="shareLayout__title">
          <span>{{ sharename }}</span>
      </div>
      <slot name="share"></slot>
  </div>
</template>

<script>
export default {
    name:'ShareLayout',
    props:['sharename'],
    setup(){
    }
}
</script>

<style lang="less" scoped>
.shareLayout{
    width: 24%;
    height: 210px;
    background-color: #fff;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    .shareLayout__title{
        border-bottom: 1px solid #dedede;
        padding: 10px;
        font-size: 15px;
    }
}
</style>
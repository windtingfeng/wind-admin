<template>
  <div class="prologs">
    <div class="prologs__container">
      <div class="prologs__container__title">
        <el-image
          style="width: 20px; height: 20px"
          :src="require('../../../assets/img/github.png')"
          fit="cover"
        />
        <span>项目更新日志</span>
      </div>
      <div class="prologs__container__content">
        <el-scrollbar wrap-class="prologs__container__content__scrollbar" always>
            <div v-for="(item,index) in logs" :key="index">
                <div>日期： <span class="prologs__container__content__date">{{ item.createTime }}</span></div>
                <div>更新内容：</div>
                <div class="prologs__container__content__ulstyle">
                    <ul class="prologs__container__content__li">
                        <li v-for="(line,lineindex) in item.data" :key="lineindex">{{ line }}</li>
                    </ul>
                </div>
            </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import logsdata from '@/mock/data/logs.json'
export default {
  name: "Logs",
  setup(){
      const logs = logsdata.data

      return{
          logs
      }
  }
};
</script>

<style lang="less" scoped>
.prologs {
  height: 370px;
  width: 30%;
  background-color: #fafafa;
  border-radius: 7px;
  padding: 10px;
  .prologs__container {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 #ebeef5;
    border-radius: 4px;
    .prologs__container__title {
      height: 20px;
      padding: 15px;
      border-bottom: 1px solid #dedede;
      display: flex;
      align-items: center;
      span {
        margin-left: 10px;
      }
    }
    .prologs__container__content {
      height: 325px;
      padding: 10px 20px 5px 10px;
      box-sizing: border-box;
      font-size: 14px;
      overflow: hidden;
      .prologs__container__content__ulstyle{
          padding: 0px 10px;
      }
      .prologs__container__content__date{
          color: rgb(56, 197, 150);
          font-size: 13px;
      }
      .prologs__container__content__li{
          font-size: 12px;
          border-bottom: 1px solid #dedede;
          padding: 0 0 10px 10px;
      }
    }
  }
}
</style>
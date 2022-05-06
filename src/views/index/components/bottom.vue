<template>
  <div class="bottomContainer">
      <div class="bottomContainer__table">
          <el-table :data="tableData" stripe style="width: 100%;height:100%;">
            <el-table-column label="USERNAME" width="180">
                <template #default="scope">
                    <div class="bottomContainer__table__username">
                        <el-image 
                            style="width: 40px; height: 40px;margin-right:5px;border-radius:50%;"
                            fit="cover"
                            :src="scope.row.userImg"
                        />
                        <span>{{ scope.row.username }}</span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="PRICE" width="100">
                <template #default="scope">
                    <span 
                    :class="{'green-color':scope.row.status === 1, 'red-color':scope.row.status === 2,'orange-color':scope.row.status === 3,'blue-color':scope.row.status === 4}"
                    >${{scope.row.price}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="DATE"  width="180">
                <template #default="scope">
                    <span class="iconfont icon-time"></span>
                    <span>{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="STATUS"  width="180">
                <template #default="scope">
                    <span class="bottomContainer__table__status green" v-if="scope.row.status === 1">LIKE</span>
                    <span class="bottomContainer__table__status red" v-else-if="scope.row.status === 2">UNLIKE</span>
                    <span class="bottomContainer__table__status orange" v-else-if="scope.row.status === 3">TAX</span>
                    <span class="bottomContainer__table__status blue" v-else>EXTENDED</span>
                </template>
            </el-table-column>
          </el-table>
      </div>
      <div class="bottomContainer__mid">
          <div class="bottomContainer__mid__item" v-for="(item,index) in tableData.slice(0,3)" :key="index">
              <div>
                  <el-image 
                    style="width: 40px; height: 40px;margin-right:5px;border-radius:50%;"
                    fit="cover"
                    :src="item.userImg"
                  />
              </div>
              <div>
                  <b>{{ item.username }}</b>
                  <p class="bottomContainer__mid__item__content">{{ item.commentContent }}</p>
                  <div><span class="bottomContainer__mid__item__time"><span class="iconfont icon-time"></span>{{ item.date }}</span></div>
              </div>
          </div>
      </div>
      <div class="bottomContainer__right">
          <div class="bottomContainer__right__container">
              <el-image 
                style="width:100%;height:200px;"
                :src="require('@/assets/img/avatar-3.png')"
                fit="cover"
              />
              <div class="bottomContainer__right__container__progress">
                  <div class="flex">
                    <div style="width:10%">vue:</div><div style="width:80%"><el-progress :percentage="100" status="success" :format="format" /></div>
                  </div>
                  <div class="flex">
                    <div style="width:10%">js:</div><div style="width:80%"><el-progress :percentage="80" :format="format" /></div>
                  </div>
                  <div class="flex">
                    <div style="width:10%">html:</div><div style="width:80%"><el-progress :percentage="80" :format="format" /></div>
                  </div>
                  <div class="flex">
                    <div style="width:10%">css:</div><div style="width:80%"><el-progress :percentage="70" :format="format" /></div>
                  </div>
                  <div class="flex">
                    <div style="width:10%">angular:</div><div style="width:80%"><el-progress :percentage="0" :format="format" /></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { getSalesData } from '@/api/sales'
import { useStore } from 'vuex'
import { ref } from 'vue'
export default {
    name:'Bottom',
    setup(){
        let tableData = ref([])
        const store = useStore()
        async function getsales(){
            let data = await getSalesData({token:store.state.user.token})
            tableData.value = data.data.saleslist
        }
        getsales()

        const format = (percentage) => (`${percentage}%`)
        return{
            tableData,
            format
        }
    }
}
</script>

<style lang="less" scoped>
.bottomContainer{
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .bottomContainer__table{
        height: 100%;
        width: 40%;
        overflow: auto;
        border-radius: 7px;
        .bottomContainer__table__username{
            display: flex;
            align-items: center;
        }
        .icon-time{
            color: #95E185;
        }
        .bottomContainer__table__status{
            padding: 5px 10px;
            color: #fff;
        }
        .green{
            background-color: #95E185;
        }
        .blue{
            background-color: aqua;
        }
        .orange{
            background-color: orange;
        }
        .red{
            background-color: red;
        }
        .green-color{
            color: #95E185;
        }
        .blue-color{
            color: aqua;
        }
        .orange-color{
            color: orange;
        }
        .red-color{
            color: red;
        }
    }
    .bottomContainer__mid{
        width: 29%;
        height: 400px;
        border-radius: 7px;
        background-color: #fff;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .bottomContainer__mid__item{
            display: flex;
            border-bottom: 1px solid #dedede;
            margin-bottom: 5px;
            .bottomContainer__mid__item__content{
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .bottomContainer__mid__item__time{
                float: right;
                margin-bottom: 5px;
                font-size: 14px;
                color: #95E185;
            }
        }
    }
    .bottomContainer__right{
        width: 29%;
        height: 400px;
        background-color: #F8F8F8;
        border-radius: 7px;
        padding: 10px;
        box-sizing: border-box;
        .bottomContainer__right__container{
            width: 100%;
            height: 100%;
            background-color: #fff;
            border-radius: 3px;
            overflow: hidden;
            .bottomContainer__right__container__progress{
                width: 100%;
                padding: 10px;
                box-sizing: border-box;
                .flex{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 10px;
                }
            }
        }
    }
}
</style>
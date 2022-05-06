<template>
    <div class="usertable">
        <el-table 
        :data="tableData" 
        stripe style="width: 100%" 
        border 
        header-cell-class-name="column"
        row-class-name="rowstyle"
        v-loading="loading"
        >
            <el-table-column type="index" align="center" label="序号" width="50">
                <template #default="scope">
                    {{scope.$index+1}}
                </template>
            </el-table-column>
            <el-table-column align="center" prop="username" label="用户姓名"  width="100"/>
            <el-table-column align="center" prop="email" label="邮箱地址" />
            <el-table-column align="center" prop="region" label="注册地址" />
            <el-table-column align="center" prop="address" label="地区" />
            <el-table-column align="center" prop="isp" label="网络" />
            <el-table-column align="center" prop="ip" label="IP地址" />
            <el-table-column align="center" prop="createTime" label="注册时间" />
            <el-table-column align="center" prop="updateTime" label="登录时间" />
        </el-table>
        <div class="usertable__pagination">
            <el-pagination
            v-model:currentPage="seachData.page"
            v-model:page-size="seachData.limit"
            :page-sizes="[10, 20, 40, 60]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="seachData.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            />
        </div>
    </div>
</template>

<script>
import { getUserList } from '@/api/user'
import { ref,reactive } from 'vue'
export default {
    name:'UserTable',
    setup(){
        let tableData = ref([])
        let loading = ref(false)
        const seachData = reactive({
            limit:20,
            page:1,
            total:0
        })
        async function getUser(){
            loading.value = true
            const data = await getUserList(seachData)
            loading.value = false
            tableData.value = data.data.userlist
            seachData.total = data.data.total
        }
        getUser()
        //分页数量变化
        const handleSizeChange = (num)=>{
            seachData.limit = num
            getUser()
        }
        //分页页数变化
        const handleCurrentChange = (num)=>{
            seachData.page = num
            getUser()
        }
        return{
            tableData,
            seachData,
            handleSizeChange,
            handleCurrentChange,
            loading
        }
    }
}
</script>

<style lang="less">
.column{
    background-color: #EEF2FE !important;
    height: 50px;
}
.usertable{
    padding: 10px;
    background-color: #fff;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .rowstyle{
        height: 40px;
    }
    .usertable__pagination{
        display: flex;
        justify-content: flex-end;
        margin:10px 0px;
    }
}
</style>
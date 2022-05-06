<template>
 <div class="breadcrumbbox">
    <a href="javascript:;" @click="hiddenLeftMenu"><span :class="['iconfont',menuicon]"></span></a>
    <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item v-for="(item,index) in bread" :key="index">{{ item }}</el-breadcrumb-item>
    </el-breadcrumb>
 </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed,ref } from 'vue'
export default {
    name:'Breadcrumb',
    setup(prop,context){
        let store = useStore()
        let bread = computed(()=>{
            let val = store.state.permission.breadmenu
            let newval = []
            val.forEach(item => {
                val.forEach(() =>{
                    if(!newval.includes(item) && item !== undefined){
                        newval.push(item)
                    }
                })
            });
            return newval
        })

        let menuicon = ref('icon-toggle-left')
        //关闭左侧菜单
        function hiddenLeftMenu(){
            if(menuicon.value === 'icon-toggle-left'){
                menuicon.value = 'icon-toggle-right'
            }else{
                menuicon.value = 'icon-toggle-left'
            }
            context.emit('hiddenLeftMenu')
        }
        return{
            bread,
            hiddenLeftMenu,
            menuicon
        }
    }
}
</script>

<style lang="less" scoped>
.breadcrumbbox{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 5px 10px;
    box-sizing: border-box;
    background-color: #eaebec;
    box-sizing: border-box;
}
.breadcrumb{
    margin-left: 10px;
}
</style>
<template>
<el-container>
    <el-aside width="200px">
        <vSidenav></vSidenav>
    </el-aside>
    <el-container>
            <el-header class="el-header">
                <v-header v-once>
                </v-header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
    </el-container>
</el-container>

</template>

<script>
import vHeader from '@/common/header.vue'
import vSidenav from '@/common/menu.vue'

export default {
    data(){
        return {
        
        }
    },
    components:{
        vHeader,
        vSidenav
    }
}
</script>

<style>
.el-container{
    height:100%;
}
.el-header{
    background-color:#fff;
    padding:0px;
}
</style>


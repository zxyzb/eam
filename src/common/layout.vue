<template>
<el-container>
    <vSidenav></vSidenav>
    <el-container>
            <el-header class="el-header">
                <v-header @tags="tags" v-once>
                </v-header>
            </el-header>
            <el-main class="el-main-bg">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
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
            tagsList:[]
        }
    },
    components:{
        vHeader,
        vSidenav,
    },

    methods:{
        tags(msg){
            let arr = [];
            for(let i = 0, len = msg.length; i < len; i ++){
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr
        }
    },
}
</script>

<style>
.el-container{
    height:100%;
}
.el-header{
    background-color:#fff;
    padding:0px;
    height: 90px !important;
}
.el-main-bg{
    background-color:#f0f0f0;
}
</style>


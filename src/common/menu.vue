<template>
<div class="sys-menu">
    <el-switch
        class="switch_silderBar"
        v-model="value1"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @change="change">
    </el-switch>

    <el-menu  
        :default-active="onRoutes"
        class="el-menu-vertical-demo el-menu-rm_br"
        background-color="#545c64"
        text-color="#fff"
        :router=true
        @select=clickMenu
        :collapse="collapse"
        active-text-color="#ffd04b">

        <template v-for="(item,index) in leftMenus">
            <template v-if="item.child">
                <el-submenu :index="item.level" :route="{path: item.path}" :key="item.index">
                    <template slot="title">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </template>
                    <el-menu-item v-for="(subItem,i) in item.child" :key="i" :index="subItem.level" :route="{path: subItem.path}">
                        {{ subItem.title }}
                    </el-menu-item>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item :index="item.level" :route="{path: item.path}" :key="item.index">
                    <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                </el-menu-item>
            </template>
        </template>
    </el-menu>

</div>

</template>

<script>
import '@/assets/iconfont/iconfont.css'

import { getPermission } from '@/config/getData'
import store from '@/store/store'

export default {
    data(){
        return {
            onRoutes:sessionStorage.getItem('defultActive') ? sessionStorage.getItem('defultActive'):'/home' ,
            collapse: false,
            value1:false,
        }
    },
    mounted(){
    
    },
    computed:{
        leftMenus(){
            return store.state.permission.list
        },
    },
    methods:{
        clickMenu(index,indexPath){
            sessionStorage.setItem('defultActive',index)
            this.onRoutes = index
        },
        
        //菜单展开控制
        change(status){
            this.collapse = status
        }
    },
    watch:{
        $route(to,from){
            let list = store.state.permission.list

        }
    }
}
</script>

<style>
.sys-menu{
    height:100%;
    border-right: solid 1px #000;
    background-color:#545c64;
    position: relative;
}
.el-menu-rm_br{
    border-right:0px;
    margin-top: 30px
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.switch_silderBar{
    position: absolute;
    left: 20px;
    top: 10px
}
</style>
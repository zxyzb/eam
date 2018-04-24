<template>
<div class="sys-menu">
    <el-menu  
        :default-active="onRoutes"
        class="el-menu-vertical-demo rm_br"
        background-color="#545c64"
        text-color="#fff"
        :router=true
        active-text-color="#ffd04b">
       <NavMenu :navMenus="leftMenus"></NavMenu>
     </el-menu> 
</div>

</template>

<script>
import NavMenu from '@/common/navItem'
import { getPermission } from '@/config/getData'
import store from '@/store/store'

export default {
    data(){
        return {
            
        }
    },
    mounted(){
    
    },
    computed:{
        leftMenus(){
            return store.state.permission.list
        },
        onRoutes(){
            return this.$route.path
        },
    },
    methods:{
    
    },
    components: { NavMenu }
}
</script>

<style>
.sys-menu{
    height:100%;
    border-right: solid 1px #000;
    background-color:#545c64;
}
.rm_br{
    border-right:0px;
}
</style>
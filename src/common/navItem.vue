<template>  
  <div class="navMenu">  
    <label v-for="navMenu in navMenus">
        <div v-if="navMenu.child">
            <el-submenu :index=navMenu.index>
                <template slot="title">
                    <span>{{navMenu.title}}</span>
                </template>
                <navmenu :navMenus="navMenu.child"></navmenu>  
            </el-submenu>
        </div>
        
        <div v-else>
            <el-menu-item :index=navMenu.path :route="{path: navMenu.path}">
                <span slot="title">{{navMenu.title}}</span>
            </el-menu-item>
        </div>
        
    </label>  
  </div>  
</template>  
  
<script>
  export default {
    name: 'navmenu',
    props: ['navMenus'],
    data() {
        return {
            list:this.navMenus
        }  
    }
  }
</script>

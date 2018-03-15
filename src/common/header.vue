<template>
<el-col>
	<el-menu
	  :default-active="activeIndex2"
	  class="el-menu-demo"
	  mode="horizontal"
	  @select="handleSelect"
	  background-color="#545c64"
	  text-color="#fff"
	  
	  active-text-color="#ffd04b">
	  	<el-submenu index="1" class="right">
	  		<template slot="title">彭岳阳</template>
    		<el-menu-item index="1-1" v-on:click='loginOut'>退出</el-menu-item>
	    	<el-menu-item index="1-2" v-on:click='dialogChangePwd = true'>修改密码</el-menu-item>
	  	</el-submenu>
	</el-menu>
	
	<el-dialog title="修改密码" :visible.sync="dialogChangePwd" width="25%" :before-close="handleClose">
		<el-form ref="form" :model="form" label-width="90px">
			<el-form-item label="原密码">
			    <el-input v-model="form.name"></el-input>
		  	</el-form-item>
		  	<el-form-item label="新密码">
			    <el-input v-model="form.newName1"></el-input>
		  	</el-form-item>
		  	<el-form-item label="确认新密码">
			    <el-input v-model="form.newName2"></el-input>
		  	</el-form-item>
		</el-form>
	  <span slot="footer" class="dialog-footer">
	    <el-button @click="dialogChangePwd = false">取 消</el-button>
	    <el-button type="primary" @click="dialogChangePwd = false">确 定</el-button>
	  </span>
	</el-dialog>

</el-col>
</template>

<script>
import { loginOut } from '@/config/getData'
import Cookies from 'js-cookie'

export default {
    data() {
      	return {
	        activeIndex: '1',
	        activeIndex2: '1',
	        dialogChangePwd:false,
	        form:{
				name:'',
				newName1:'',
				newName2:''
	        }
      	}
    },
    methods: {
     	handleSelect(key, keyPath) {
       		console.log(key, keyPath);
     	},
      	loginOut(){
			loginOut().then(() =>{
				sessionStorage.removeItem('token')
				this.$router.push({path:'/login'})
			})
    	},
		handleClose(done){
			this.$confirm('确认关闭？')
				.then(r =>{
					done();
				})
				.catch(r =>{

				})
		}

  }
}
</script>

<style>
	.right{
		float:right !important;
	}
</style>

<template>
<el-col>
	<el-menu
	  :default-active="activeIndex2"
	  class="el-menu-demo pd_20"
	  mode="horizontal"
	  @select="handleSelect"
	  background-color="#fff"
	  active-text-color="#blue">
		<el-breadcrumb separator="/" class="breadcrumb">
			<el-breadcrumb-item :to="{ path: '/home' }" v-if="($route.path =='/home')" >首页</el-breadcrumb-item>
			<el-breadcrumb-item v-if="!($route.path =='/home')" v-for="(item,index) in $route.meta.breadcrumb" :key="index">{{item}}</el-breadcrumb-item>
		</el-breadcrumb>
		
  		<el-dropdown class="right" trigger="click" split-button @command="handleCommand">
		  	<span class="el-dropdown-link">
		    彭岳阳
		 	</span>
		  	<el-dropdown-menu slot="dropdown" >
		    	<el-dropdown-item command="changePwd">修改密码</el-dropdown-item>
		    	<el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
		  	</el-dropdown-menu>
		</el-dropdown>
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
		handleCommand(command){
			switch(command){
				case 'loginOut':
					this.loginOut()
					break;
				case 'changePwd':
					this.dialogChangePwd = true
					break;
				default:
					break;
			}
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
	.breadcrumb{
		position:absolute;
		top:20px;
	}
	.pd_20{
		padding:0 20px;
	}
</style>

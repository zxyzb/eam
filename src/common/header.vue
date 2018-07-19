<template>
<el-row>
	<el-col>
		<el-menu
			:default-active="activeIndex2"
			class="el-menu-demo pd_20 zIndex"
			mode="horizontal"
			@select="handleSelect"
			background-color="#fff"
			active-text-color="#blue">
			  <el-breadcrumb separator="/" class="breadcrumb">
				  	<el-breadcrumb-item v-for="(item,index) in crumbs_list" :key="index" :to="{ path: item.path }"> {{item.name}}</el-breadcrumb-item>
			  </el-breadcrumb>
			  
				<el-dropdown class="right" trigger="click" split-button @command="handleCommand" size="medium">
					<span class="el-dropdown-link">
				  	彭岳阳
				  	</span>
					<el-dropdown-menu slot="dropdown">
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
	<el-col class="el-tag-b">
		<div v-for="(item,index) in tagsList">
			<el-tag size="medium" :type=isActive(item.path) closable class="tags" :disable-transitions="false" @close="tagClose(index)" :key="index">
				<router-link :to="item.path" class="tags-li-title active">
					{{item.title}}
				</router-link>
			</el-tag>
		</div>
		
	</el-col>
</el-row>
</template>

<script>
import { loginOut } from '@/config/getData'
import Cookies from 'js-cookie'
import breadcrumb from '@/config/crumbs'

export default {
    data() {
      	return {
	        activeIndex: '1',
	        activeIndex2: '1',
	        dialogChangePwd:false,
	        form:{										//修改密码form
				name:'',
				newName1:'',
				newName2:''
			},
			crumbs_list:breadcrumb[this.$route.path], 	//面包屑
			title:'', 									//网页title
			inputVisible: false,
			inputValue: '',
		
			tagsList:[],  								//标签页list
      	}
	},

    created(){
		//初始化标签页
        this.setTags(this.$route);
	},
		
    methods: {
		//添加active
		isActive(path) {
			return  path === this.$route.fullPath ? '':'info';
		},

		//删除标签页面
		tagClose(index){
			const delItem = this.tagsList.splice(index, 1)[0];
			const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
			if (item) {
				delItem.path === this.$route.fullPath && this.$router.push(item.path);
			}else{
				this.$router.push('/');
			}
		},

		// 设置标签
		setTags(route){
			const isExist = this.tagsList.some(item => {
				return item.path === route.fullPath;
			})
			
			if(!isExist){
				let routeName;
				route.matched.forEach(item => {
					if(item.path === route.fullPath){
						routeName =  item.components.default.name
					}
				})

				this.tagsList.push({
					title: route.meta.title,
					path: route.fullPath,
					name: routeName
				})
			}
			
			//标签不能超过7个，超出默认删除第一个
			if(this.tagsList.length > 7){
				this.tagClose(0)
			}
			this.$emit('tags', this.tagsList);
		},


		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},

		//退出
		loginOut(){
			loginOut().then(() =>{
				sessionStorage.removeItem('token');
				sessionStorage.removeItem('defultActice');
				this.$router.push({path:'/login'});
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
	},
	watch:{
		//监听路由改变面包屑导航 / 设置标签页 / 设置页面title
		$route(to,from){
			this.crumbs_list = breadcrumb[to.path];
			this.title = this.$route.meta.title
			this.setTags(to)
		}
	},
}
</script>

<style>
	.right{
		float:right !important;
	}
	.zIndex{
		z-index: 999;
	}
	.breadcrumb{
		position:absolute;
		top:20px;
		outline: none;
	}
	.pd_20{
		padding:0 20px;
	}
	.tags{
		margin:5px 0px 5px 20px;
		float: left;
	}
	.redColor{
		background-color: aqua
	}

	.el-tag-b{
		position: relative;
		border-bottom: 1px solid #e6e6e6;
		z-index: 999
	}
</style>

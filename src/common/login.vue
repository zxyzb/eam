<template>
<div class="sys-login">
    <div class="login-area">
	    <div class="logo">
            不知道管理什么的管理系统
        </div>
		<div class="form-group">
			<el-form :model="form" :rules="rules" ref="form"  label-width="100px">
				<el-form-item label="登录账号：" prop="account">
					<el-input v-model="form.account"></el-input>
				</el-form-item>
				<el-form-item label="登录密码：" prop="password">
					<el-input v-model="form.password"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('form')">登录</el-button>
					<el-button @click="resetForm('form')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>	
</div>
</template>

<script>
import { login } from '@/config/getData'
//import Cookies from 'js-cookie'

export default {
	name: 'login',
	data () {
		return {
			form:{
				account:'',
				password:''
			},
			rules:{
				account:[
					{required: true, message: '请输入用户名', trigger: 'blur'},
					{ min: 6, max: 18, message: '长度在 6 到 18个字符', trigger: 'blur' }
				],
				password:[
					{required: true, message: '请输入登录密码', trigger: 'blur'},
					{min: 9, max: 18, message: '长度在 9 到 18个字符', trigger: 'blur' }
				]
			}
		}
	},

	methods: {
		submitForm(formName){
			this.$refs[formName].validate((valid)=>{
				if(valid){
					login().then(res =>{
						sessionStorage.setItem('token',res.data.userInfo.userId)
						this.$router.push({path:'/home'})
					})
				}else {
					console.log('err submit')
					return false;
				}
					
			})
		},
		resetForm(formName){
			this.$refs[formName].resetFields();
		}

	}
}
</script>

<style>
.sys-login{
    width: 100%;
    height: 100%;
    background: #2c3949;
}
.sys-login .login-area .logo img {
    width: 160px;
}
.sys-login .login-area {
    width: 430px;
    padding-top: 10%;
    margin: 0 auto;
}
.sys-login .login-area .logo {
    width: 100%;
	line-height:60px;
    font-size:20px;
    color:#fff;
    text-align: center;
}
.sys-login .form-group {
	border-radius :10px;
	box-shadow: 0px 0px 15px #fff;
	background-color:#fff;
	padding:30px;
    position: relative;
    color: #ccc;
    overflow: hidden;
}
</style>
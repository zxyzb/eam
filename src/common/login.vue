<template>
<div class="sys-login">
    <div class="login-area">
	    <div class="logo">
            进件系统
        </div>
		<div class="form-group">
			<!-- 登录 -->
			<el-form :model="loginForm" :rules="rules" ref="loginForm"  label-width="100px" v-show="logined">
				<el-form-item label="登录账号：" prop="account">
					<el-input v-model="loginForm.account"></el-input>
				</el-form-item>
				<el-form-item label="登录密码：" prop="password">
					<el-input v-model="loginForm.password" v-on:keyup.native.13="submitForm('loginForm')"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" size="normal"  @click="submitForm('loginForm')">登录</el-button>
					<el-button size="normal" @click="resetForm('loginForm')">重置</el-button>
					<el-button type="danger" size="normal" @click="forgotPwd">忘记密码</el-button>
				</el-form-item>
			</el-form>

			<!-- 忘记密码 -->
			<el-form :model="forgotForm"  :rules="forgotRules"  ref="forgotForm"  v-show="changePwd" label-width="100px">
				<el-form-item label="登录账号：" prop="account">
					<el-input v-model="forgotForm.account"></el-input>
				</el-form-item>
				<el-form-item prop="code" label="验证码：">
					<el-col :span='14'>
						<el-input v-model="forgotForm.code"></el-input>
					</el-col>
					<el-col :span='9'>
						<div class="code">这是图像</div>
					</el-col>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="goLogin">确 定</el-button>
					<el-button @click="resetForm('forgotForm')">重 置</el-button>
					<el-button @click="backLogin">返 回</el-button>
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
			loginForm:{
				account:'',
				password:'',
			},
			forgotForm:{
				account:'',
				code:'',
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
			},
			forgotRules:{
				account:[
					{required:true, message: '请输入用户名/手机号', trigger:'blur'},
					{min: 6, max: 18, message: '长度在 6 到 18个字符', trigger: 'blur'}
				],
				code:[
					{required:true, message:'请输入验证码', trigger:'blur'},
					{min:4,max:4,message:'长度为4位',trigger:'blur'}
				]
			},
			logined:true,
			changePwd:false
		}
	},

	methods: {
		submitForm(formName){
			this.$refs[formName].validate((valid)=>{
				if(valid){
					login().then(res =>{
						sessionStorage.setItem('token',res.data.userInfo.userId)
						sessionStorage.setItem('defultActive','/home')
						this.$router.push({path:'/home'})

					})
				}else {
					console.log('err submit')
					return false;
				}
					
			})
		},
		ffform(){
			console.log(111)
		},

		resetForm(formName){
			this.$refs[formName].resetFields();
		},

		forgotPwd(){
			this.changePwd = true;
			this.logined = false;
		},

		backLogin(){
			this.changePwd = false;
			this.logined = true;
		},
		
		goLogin(){
			// todo 和后台交互

			this.backLogin();
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
.code{
	display: inline-block;
	margin-left: 20px;
}
</style>
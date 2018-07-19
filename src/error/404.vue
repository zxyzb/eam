<template>
	<div class="sys-page">
		<img src="@/assets/images/404.jpg" alt="">
		<div class="sys-link">
			<el-button type="warning" v-on:click="backHome">返回首页</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			}
		},
		methods:{
			backHome(){
				this.$router.push({path:'/home'})
				sessionStorage.setItem('defultActive','/home')
			}
		}
	}
</script>

<style>
.sys-page{
	padding-top:5%;
	text-align:center
}
.sys-page img{
	display:inline-block;
	width:700px;
}
</style>
<template>
	<div class="sys-page">
		<img src="@/assets/images/404.jpg" alt="">
		<div class="sys-link">
			<el-button type="warning" v-on:click="back">返回首页</el-button>
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
			back(){
				this.$router.push({path:'/home'})
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
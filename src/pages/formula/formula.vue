<template>
	<div>
		<div id="editor_formula"></div>
		<br>
		<el-button @click="getContent">保存</el-button>
	</div>
</template>

<script>
	export default {
		name:'formula',
		data(){
			return {
				mathEditor:''
			}
		},
		mounted(){
			this.mathEditor = new MathEditor('editor_formula');
			this.mathEditor.styleMe({
			    width: '500',
			    height: '80'
			});
		},
		methods:{
			getContent(){
				console.log(this.mathEditor.getLatex())
			}
		}
	}
</script>
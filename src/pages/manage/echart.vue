<template>
	<div>
		<form action="getContent.php" id="form" method="post"">
		    <script id="editor" type="text/plain" name="content" style="width:100%;height:300px;"></script>
		</form>
		<br>
		<el-button size="small" type="success" @click="getContent">保存</el-button>
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				editor:''
			}
		},
		mounted(){
			UE.delEditor('editor');
			UE.getEditor('editor',{
				toolbars: [[
			        'fullscreen','fontsize', '|', 'kityformula', 'preview'
			    ]]
			})
		},
		methods:{
		    getContent(){
		    	this.editor.getKfContent(function(content){
					console.log(content)
		    	})
		    },   
		}
	}
</script>
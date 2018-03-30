<template>
	<div>
		<div id="myChart" :style="{width: '600px', height: '300px'}">
		
		</div>
		<form action="getContent.php" id="form" method="post">
		    <script id="editor" type="text/plain" name="content" style="width:1024px;height:500px;"></script>
		</form>

		<a @click="getContent">获取数据</a>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				editor:null
			}
		},
		mounted(){
			this.drawLine()
			this.editor = UE.getEditor('editor',{
				toolbars: [[
			        'fullscreen', 'source', '|',
			          'fontsize', '|', 'kityformula', 'preview'
			    ]]
			})
		},
		methods:{
			drawLine(){
		        let myChart = this.$echarts.init(document.getElementById('myChart'))
		        myChart.setOption({
		            title: { text: '在Vue中使用echarts' },
		            tooltip: {},
		            xAxis: {
		                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
		            },
		            yAxis: {},
		            series: [{
		                name: '销量',
		                type: 'bar',
		                data: [5, 20, 36, 10, 10, 20]
		            }]
		        });
		    },
		    getContent(){
		    	var editor = document.getElementById('editor')
		    	console.log(editor.value)
		    }
		}
	}
</script>
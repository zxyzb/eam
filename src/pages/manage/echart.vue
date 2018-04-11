<template>
	<div>
		<div id="myChart" :style="{width: '1000px', height: '400px'}"></div>
	</div>
</template>

<script>
	import {getEchartsData} from '@/config/getData'
	export default {
		data(){
			return {
				data:''
			}
		},
		mounted(){
			this.initData();
		},
		methods:{
		    drawLine(data){
		    	// 基于准备好的dom，初始化echarts实例
		        let myChart = this.$echarts.init(document.getElementById('myChart'))
		        // 绘制图表
		        myChart.setOption({
		            title: { text: '在Vue中使用echarts' },
		            tooltip: {},
		            series: [{
		                name: '销量',
		                type: 'pie',
		                roseType: 'angle',
		                data:data
		            }]
	            })
		    },
		    
			async initData(){
				let data = await getEchartsData();
				this.data = data.data.eData
				this.drawLine(data.data.eData);
			}
		}
	}
</script>
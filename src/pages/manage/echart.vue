<template>
	<div>
		<div id="myChart" :style="{width: '600px', height: '300px'}">
		
		</div>
		<canvas id="drawing"></canvas>
	</div>
</template>

<script>
	


	export default {
		data(){
			return {

			}
		},
		mounted(){
			this.drawLine()
			let drawing = document.getElementById('drawing')
			if(drawing.getContext){

				let cv = drawing.getContext("2d")
				cv.beginPath();
				
				cv.moveTo(50,40)
				cv.lineTo(20,60)
				cv.lineTo(60,60)
				cv.moveTo(20,60)
				cv.lineTo(20,80)
				cv.moveTo(50,60)
				cv.lineTo(50,80)
				cv.moveTo(0,80)
				cv.lineTo(70,80)
				cv.moveTo(35,85)
				cv.lineTo(35,105)
				cv.moveTo(25,88)
				cv.lineTo(25,105)
				cv.lineTo(45,105)
				cv.lineTo(45,88)
				
				cv.font = 'bold 15px yahei'
				cv.fillText("岳阳",40,43)
				cv.fillText("岳阳",24,46)
				cv.fillText("岳阳",30,40)
				cv.fillText("岳阳",10,30)
				cv.fillText("岳阳",0,40)

				cv.stroke()
			}else{
				console.log('浏览器不支持')
				drawing.remove()
			}
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
		    }
		}
	}
</script>
<template>
	<el-row>
		<el-col :span='11'>
			<div id="myChart1" :style="{width: '100%', height: '500px'}"></div>
		</el-col>
		<el-col :span='11'>
				<div id="myChart2" :style="{width: '100%', height: '500px'}"></div>
		</el-col>

		<el-row>
			<el-col>
					<div class="amap-page-container">
						<el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo" :plugin="plugin">
							<el-amap-info-window  :position="mywindow.position" :content="mywindow.content" :visible="mywindow.visible" :events="mywindow.events"></el-amap-info-window>
							<el-amap-marker :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
							<el-amap-circle :center="circle.center" :radius="circle.radius" :fillOpacity="circle.fillOpacity" :events="circle.events" :strokeColor="circle.strokeColor" :strokeStyle="circle.strokeStyle" :fillColor="circle.fillColor"></el-amap-circle>
					
						</el-amap>
					</div>
			</el-col>
		</el-row>
	</el-row>
</template>
<style>
	.amap-page-container {
		height: 500px;
	}
</style>
<script>
	import {getEchartsData} from '@/config/getData'
	export default {
		name:'manage_echart',
		data(){
			const self = this;
			return {
				zoom: 15,
				center: [114.1192200000,22.5385900000],
				circle: {
					clickable: true,
					center: [114.1192200000,22.5385900000],
					radius: 200,
					fillOpacity: 0.3,
					strokeStyle: 'dashed',
					fillColor: '#FFFF00',
					strokeColor: '#00BFFF'
				},
				marker: {
					position: [114.1192200000,22.5385900000],
					events: {
						click: () => {
							if (this.mywindow.visible === true) {
								this.mywindow.visible = false
							} else {
								this.mywindow.visible = true
							}
						},
						dragend: (e) => {
							this.markers[0].position = [e.lnglat.lng, e.lnglat.lat]
						}
					},
					visible: true,
					draggable: false
				},
				mywindow: {
					position: [114.1192200000,22.5385900000],
					content: '<h4>该点数据信息</h4><div class="text item">Information A: 发展中心大厦</div><div class="text item">Information B: 30楼</div>',
					visible: true,
					events: {
						close () {
							this.mywindow.visible = false
						}
					}
				},
				plugin: {
					pName: 'Scale',
					events: {
						init (instance) {
							console.log(instance)
						}
					}
				}
			}
		},
		mounted(){
			this.initData();
			this.drawLine2();
		},
		methods:{
		    drawLine1(data){
		    	// 基于准备好的dom，初始化echarts实例
		        let myChart = this.$echarts.init(document.getElementById('myChart1'))
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
			
			drawLine2(){
				let myCharts = this.$echarts.init(document.getElementById('myChart2'))
				myCharts.setOption({
					title: {
						text: '堆叠区域图'
					},
					tooltip : {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}
					},
					legend: {
						data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis : [{
						type : 'category',
						boundaryGap : false,
						data : ['周一','周二','周三','周四','周五','周六','周日']
					}],
					yAxis : [{
						type : 'value'
					}],
					series : [
						{
							name:'邮件营销',
							type:'line',
							stack: '总量',
							areaStyle: {normal: {}},
							data:[120, 132, 101, 134, 90, 230, 600]
						},
						{
							name:'联盟广告',
							type:'line',
							stack: '总量',
							areaStyle: {normal: {}},
							data:[220, 182, 191, 234, 290, 330, 310]
						},
						{
							name:'视频广告',
							type:'line',
							stack: '总量',
							areaStyle: {normal: {}},
							data:[150, 232, 201, 154, 190, 330, 410]
						},
						{
							name:'直接访问',
							type:'line',
							stack: '总量',
							areaStyle: {normal: {}},
							data:[320, 332, 301, 334, 390, 330, 320]
						},
						{
							name:'搜索引擎',
							type:'line',
							stack: '总量',
							label: {
								normal: {
									show: true,
									position: 'top'
								}
							},
							areaStyle: {normal: {}},
							data:[820, 932, 901, 934, 1290, 1330, 1320]
						}
					]
				})
			},
			async initData(){
				let data = await getEchartsData();
				this.data = data.data.eData
				this.drawLine1(data.data.eData);
			}
		}
	}
</script>
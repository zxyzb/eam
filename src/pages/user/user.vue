<template>
	<div>
		<el-form class="demo-form-inline search-background" label-position="top" label-width="70px" :model="searchForm" :inline="true" size="small">
			<el-form-item label="名称">
				<el-input v-model="searchForm.name"></el-input>
			</el-form-item>
			<el-form-item label="日期">
				<el-date-picker type="date" v-model="searchForm.date"></el-date-picker>
			</el-form-item>
			<el-form-item label="地址">
				<el-input v-model="searchForm.address"></el-input>
			</el-form-item>
			<el-row>
				<el-form-item>
				    <el-button type="primary" @click="onSearch">查询</el-button>
			  	</el-form-item>
			</el-row>
		</el-form>

		<div class="inline"></div>
		
		<!-- 组件之间的通信 -->
		<pageTable :pageTables="tableList" v-on:changeData="changeData($event)" v-on:checkAll="checkAll(d)">
			<!-- 使用具名插槽 -->
			<el-table-column
			  slot="select-column"
		      type="selection"
		      width="55">
		    </el-table-column>

			<el-table-column label="操作">
			    <template slot-scope="scope">
					<el-dropdown trigger="click" split-button type="primary" size="small" @command="handleCommand">
				      	<span class="el-dropdown-link">
				        	操作</i>
				      	</span>
				      	<el-dropdown-menu slot="dropdown">
					        <el-dropdown-item :command="scope.row" v-if="hasPermission('edit')">编辑</el-dropdown-item>
					        <el-dropdown-item :command="scope.row" v-if="hasPermission('delete')" type="danger">删除</el-dropdown-item>
				      	</el-dropdown-menu>
				    </el-dropdown>
			    </template>
		    </el-table-column>
		</pageTable>
	</div>
</template>

<script>
import { userTableList } from '@/config/getData'
import pageTable from '@/common/paginationModul/table.vue'

export default {
	data (){
		return {
			tableList:[],
			searchForm:{
				name:'',
				date:'',
				address:''
			},
			multipleSelection: []
		}
	},
	mounted(){
		//初始化列表数据
		userTableList({}).then(res =>{
			this.tableList = Object.assign({},res.data.list)
		})
	},
	methods:{
		changeData(data){
			//更新列表数据  data为当前页码
			userTableList({}).then(res =>{
				this.tableList = res.data.list
			})
		},
		onSearch(){
			console.log(this.searchForm)
		},
		handleCommand(command){
			this.$message('这是一条消息提示');
			console.log(command)
		},
		checkAll(val){
			this.multipleSelection = val
		}
	},
	components:{
		pageTable
	},

}
</script>

<style>
	.inline{
		width:100%;
		height:1px;
		margin:10px 0px;
		background-color:#fff;
	}
	.search-background{
		background-color :#fff;
	    padding: 10px 20px 0px 20px;
	    border-radius:15px;
	    box-shadow:0px 0px 22px -8px #20A0E6;
	}
</style>
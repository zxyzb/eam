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

		<pageTable :pageTables="tableList"  v-on:changeData="changeData($event)">
			<el-table-column label="操作">
			    <template slot-scope="scope">
			        <el-button size="mini" @click="edit(scope.row)" v-if="hasPermission('edit')">编辑</el-button>
			        <el-button size="mini" type="danger" v-if="hasPermission('delete')">删除</el-button>
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
			}
		}
	},
	mounted(){
		//初始化列表数据
		userTableList({}).then(res =>{
			this.tableList = res.data.list
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
			console.log(this.searchForm.date +','+ this.searchForm.name)
		},
		edit(data){
			console.log(data.name)
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
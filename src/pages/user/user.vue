<template>
	<div v-loading="loading">
		<el-form class="demo-form-inline search-background" label-position="top" label-width="70px" :model="searchForm" :inline="true" size="small">
			<el-form-item label="名称">
				<el-input v-model.trim="searchForm.name"></el-input>
			</el-form-item>
			<el-form-item label="日期">
				<el-date-picker type="date" v-model="searchForm.date"></el-date-picker>
			</el-form-item>
			<el-form-item label="地址">
				<el-input v-model.trim="searchForm.address"></el-input>
			</el-form-item>
			<el-row>
				<el-form-item>
				    <el-button type="primary" @click="onSearch">查询</el-button>
			  	</el-form-item>
			</el-row>
		</el-form>

		<div class="inline"></div>
		
		<!-- 组件之间的通信 -->
		<pageTable :pageTables="tableList"
			v-on:changeData="changeData($event)"
			v-on:checkAll="checkAll($event)">
			<!-- 使用具名插槽 -->
			<el-table-column
			  slot="select-column"
		      type="selection"
		      width="55">
		    </el-table-column>

			<el-table-column label="操作">
			    <template slot-scope="scope">
					<el-button type="primary" @click = "edit(scope.$index,scope.row)" size="small" v-if="hasPermission('edit')">编辑</el-button>
					<el-button type="danger" @click = "delete(scope.$index,scope.row)" size="small" v-if="hasPermission('delete')">删除</el-button>
			    </template>
		    </el-table-column>
		</pageTable>

		<!-- 用户编辑 -->
		<el-dialog title="编辑用户信息" :visible.sync="userDialogStatus"  width="40%">
			<el-form ref="form" :model="userFormData" label-width="90px">
				<el-form-item label="姓名">
					<el-input v-model="userFormData.name"></el-input>
					</el-form-item>
					<el-form-item label="家庭住址">
					<el-input v-model="userFormData.address"></el-input>
					</el-form-item>
					<el-form-item label="用户ID">
					<el-input v-model="userFormData.userId" disabled></el-input>
					</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="userCancel">取 消</el-button>
				<el-button type="primary" @click="userFormSub">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import { userTableList } from '@/config/getData'
import pageTable from '@/common/paginationModul/table.vue'

export default {
	name: 'user',
	data (){
		return {
			tableList:[],
			userEditInfo:{
				info:'',
				dialogStatus:''
			},
			searchForm:{
				name:'',
				date:'',
				address:''
			},
			multipleSelection: [],
			userDialogStatus:false,
			userFormData:{
				name:'',
				address:'',
				userId:'',
			},
			loading:true,
		}
	},
	mounted(){
		//初始化列表数据
		userTableList({}).then(res =>{
			this.tableList = Object.assign({},res.data.list)
			setTimeout(() => this.loading = false,400)
		})
	},
	methods:{
		changeData(data){
			//更新列表数据  data为当前页码
			this.loading = true
			userTableList({}).then(res =>{
				this.tableList = res.data.list
				setTimeout(() => this.loading = false,400)
			})
		},
		onSearch(){
			console.log(this.searchForm)
		},

		//用户编辑
		edit(index,data){
			this.userDialogStatus = true;
			
			this.userFormData = Object.assign({},data) //此处通过拷贝不需要双向绑定
			//this.userFormData = data   此处应该使用上面方法来实现
		},

		//删除用户
		delete(idnex,data){
			console.log(data)
		},

		userCancel(){
			this.userDialogStatus = false;
		},

		// 用户信息提交 
		userFormSub(){
			this.userDialogStatus = false;
		},

		checkAll(checkItems){
			this.multipleSelection = [];
			for(let i=0;i<checkItems.length;i++){
				this.multipleSelection.push(checkItems[i].userId)
			}
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
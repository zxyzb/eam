<template>
	<div v-loading="loading">
		<el-form class="demo-form-inline search-background" label-position="top" label-width="70px" :model="searchForm" :inline="true" size="small">
			<el-form-item label="角色名称">
				<el-input v-model.trim="searchForm.name"></el-input>
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
			<el-table-column label="操作">
			    <template slot-scope="scope">
			        <el-button size="mini" type="primary" @click="editRole(scope.row)"><i class="el-icon-edit"></i></el-button>
			        <el-button size="mini" type="danger" @click="deleteRole(scope.row)"><i class="el-icon-delete"></i></el-button>
			    </template>
		    </el-table-column>
		</pageTable>

		<!-- 编辑角色组件 -->
		<el-dialog title="提示" :visible.sync="dialogVisible" width="60%">
			<el-input placeholder="输入关键字进行过滤" v-model="filterText">
			</el-input>

			<el-tree
			  class="filter-tree"
			  :data="data2"
			  show-checkbox
			  :props="defaultProps"
			  default-expand-all
			  :filter-node-method="filterNode"
			  ref="tree2">
			</el-tree>
			
			<span slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">取 消</el-button>
			    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>

	</div>
</template>

<script>
import { getRole } from '@/config/getData'
import pageTable from '@/common/paginationModul/table.vue'

export default {
	name: 'user_role',
	data (){
		return {
			tableList:[],
			searchForm:{
				name:'',
				date:'',
				address:''
			},
			loading:true,
			dialogVisible:false,
			filterText: '',
			data2: [{
	          	id: 1,
	          	label: '一级 1',
	          	children: [{
	            	id: 4,
	            	label: '二级 1-1',
	            	children: [{
	              		id: 9,
	              		label: '三级 1-1-1'
	            	}, {
	              		id: 10,
	              		label: '三级 1-1-2'
	            	}]
	        	}]
        	}],
        	defaultProps: {
          		children: 'children',
          		label: 'label'
	        }
		}
	},
	mounted(){
		//初始化列表数据
		this.initData()
	},
	methods:{
		initData(){
			this.loading = true
			getRole({}).then(res =>{
				this.tableList = Object.assign({},res.data.list)
				setTimeout(() => this.loading = false,400)
			})
		},

		changeData(data){
			//更新列表数据  data为当前页码
			this.loading = true
			getRole({}).then(res =>{
				this.tableList = res.data.list
				setTimeout(() => this.loading = false,400)
			})
		},
		onSearch(){
			console.log(this.searchForm)
		},

		editRole(data){
			console.log(data)
			this.dialogVisible = true
		},

		deleteRole(data){
			this.$confirm('角色删除后所有权限会跟随失效，确认删除？','提示',{
				confirmButtonText: '确定',
		        cancelButtonText: '取消',
		        type: 'warning'
			}).then(()=>{
				this.$message({
		            type: 'success',
		            message: '删除成功!',
		        });
		        this.initData()
			}).catch(()=>{
				this.$message({
		            type: 'info',
		            message: '已取消删除'
		        });
			})
		},

		filterNode(value, data) {
	        if (!value) return true;
	        return data.label.indexOf(value) !== -1;
	    }
	},
	components:{
		pageTable
	}
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
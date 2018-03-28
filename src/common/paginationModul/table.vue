<template>
	<el-row>
		<el-table
		  border
		  @selection-change="handleSelectionChange"
	      :data="dataTable.body"
	      style="width: 100%">
	      <slot name="select-column"></slot>
	      <el-table-column v-for="(item,index) in dataTable.header" :prop="item.name" :label="item.label" :key="index">
	      </el-table-column>
	      <slot></slot>
	    </el-table>
		<br/>
	    <el-pagination
	      class="center"
		  background
		  @current-change="currentChange"
		  :page-size="currentPageSize"
		  :page-sizes="[10, 20, 30]"
		  layout="prev, pager, next ,sizes"
		  :total="1000">
		</el-pagination>
	</el-row>
</template>

<script>
import http from '@/config/axios'
export default {
	name: 'pageTable',
	props: ['pageTables'],
	computed:{
		dataTable(){
			return this.pageTables
		},
		currentPageSize(){
			return this.pageTables.currentPageSize
		}
	},
	methods:{
		currentChange(val){
			this.$emit("changeData",val)
		},
		handleSelectionChange(val){
			this.$emit("checkAll",val)
		}
	}
}

</script>

<style scoped>
	.center{
		text-align:center;
	}
</style>


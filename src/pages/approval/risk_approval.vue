<template>
    <div v-loading='loading'>
        <el-form class="demo-form-inline search-background" label-position="top" label-width="70px" :model="searchForm" :inline="true" size="small">
            <el-form-item label="业务单号">
                <el-input v-model.trim="searchForm.bCode"></el-input>
            </el-form-item>
            <el-form-item label="产品大类">
                <el-input v-model="searchForm.prdp"></el-input>
            </el-form-item>
            <el-form-item label="产品子类">
                <el-input v-model.trim="searchForm.prdc"></el-input>
            </el-form-item>
            <el-row>
                <el-form-item>
                    <el-button type="primary" @click="onSearch">查询</el-button>
                    </el-form-item>
            </el-row>
        </el-form>

        <div class="inline"></div>
        
        <pageTable :pageTables="tableList"
                   v-on:changeData="changeData($event)">
                <el-table-column
                slot="select-column"
                type="selection"
                width="55">
                </el-table-column>
    
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" @click = "approval(scope.$index,scope.row)" size="small">审批</el-button>
                    </template>
                </el-table-column>
        </pageTable>

        <router-view></router-view>
    </div>
</template>

<script>
import { riskApproval } from '@/config/getData'
import pageTable from '@/common/paginationModul/table.vue'

export default {
    components:{
        pageTable
    },
    props:{
    },
    data(){
        return {
            searchForm:{

            },
            tableList:[],
            loading:true
        }
    },
    mounted(){
        this.getTableData()
    },
    methods:{
        getTableData(){
            riskApproval({}).then(res =>{
                this.tableList = Object.assign({},res.data.list)
                setTimeout(() => this.loading = false,400)
            })
        },
        
        changeData(){
            //更新列表数据  data为当前页码
			this.loading = true
			riskApproval({}).then(res =>{
				this.tableList = res.data.list
				setTimeout(() => this.loading = false,400)
			})
        },
        onSearch(){

        },
        approval(){
            this.$router.push({path:'/risk/risk_edit'})
        }

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
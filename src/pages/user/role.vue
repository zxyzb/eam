<template>
	<el-row :gutter="20">
		<el-col :span="10">
			<el-tag><i class="el-icon-menu"></i> 菜单配置</el-tag>
			<div class="divider hidden"></div>
			<el-tree
			  :data="data"
			  :props="defaultProps"
			  :show-checkbox = false
			  node-key="id"
			  default-expand-all
			  :expand-on-click-node="false"
			  :render-content="renderContent">

				<span class="custom-tree-node" slot-scope="{ node, data }">
			        <span>{{ node.label }}</span>
			        <span>
			          <el-button
			            type="text"
			            size="mini"
			            @click="append">
			            添加
			          </el-button>
			          <el-button
			            type="text"
			            size="mini"
			            @click="dialogFormVisible">
			            编辑
			          </el-button>
			          <el-button
			            type="text"
			            size="mini"
			            @click="remove">
			            删除
			          </el-button>
			        </span>
		      	</span>
			</el-tree>
			<div class="divider hidden"></div>
			<el-button type="primary">保存</el-button>
		</el-col>

		<!--菜单编辑dialog -->
		<el-dialog title="菜单编辑" :visible.sync="dialogFormVisible" :close-on-click-modal = false>
			<el-form :model="form" label-width="80px" size="small" :rules="formRules" ref="form">
				<el-form-item label="名称" prop="label">
				    <el-input v-model="form.label"></el-input>
			 	</el-form-item>
			 	<el-form-item label="链接" v-if="parentNode" prop="url">
				    <el-input v-model="form.url"></el-input>
			 	</el-form-item>
			 	 <el-form-item>
				    <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
				    <el-button @click="dialogFormVisible = false">取消</el-button>
			  </el-form-item>
			</el-form>
		</el-dialog>
	</el-row>
</template>

<script>
  let id = 1000;
  export default {
    data() {
    	//自定义rule
		var checkAge = (rule, value ,callBack) => {
			if(!value){
				return callBack(new Error('名称不能为空'));
			}
		}

	    return {
      		data :[{
  				id:1,
  				url:'/home',
      			label:'首页'
      		},{
				label:'用户管理',
				url:'',
				id:2,
				children:[{
					label:'用户列表',
					url:'/user/list',
					id:3
				},{
					label:'菜单管理',
					url:'/user/role',
					id:4
				}]	
      		}],
      		defaultProps: {
	          children: 'children',
	          label: 'label'
	        },
	        form:{
	      		label:'',
	      		url:''
	      	},
	      	formRules:{
	      		label:[{ validator:checkAge , trigger: 'blur' }],
	      		url:[{required: true, message: '请输入地址', trigger: 'blur' }]
	      	},
	      	parentNode:false,
	      	dialogFormVisible:false
      	}
    },
	methods: {
		submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	            alert('submit!');
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	  	},
	  	append(data) {
	        const newChild = { id: id++, label: '***', children: []};
	        if (!data.children) {
	          this.$set(data, 'children', []);
	        }
	        data.children.push(newChild);
	    },
	    edit(node,data){
			this.dialogFormVisible = true
			if(node.childNodes.length == 0){
				this.parentNode = true;
			}else{
				this.parentNode = false;
			}
			this.form = data
	    },

	  	remove(node, data) {
	        const parent = node.parent;
	        const children = parent.data.children || parent.data;
	        const index = children.findIndex(d => d.id === data.id);
	        children.splice(index, 1);
	    },

	    renderContent(h, { node, data, store }) {
	        return (
	          	<span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
	            <span>
	              <span>{node.label}&emsp;&emsp;{data.url}</span>
	            </span>
	            <span>
	          		<el-button style="font-size: 12px;" type="text" on-click={ () => this.append(data) }>添加</el-button>
	        		<el-button style="font-size: 12px;" type="text" on-click={ () => this.edit(node,data) }>编辑</el-button>
	      			<el-button style="font-size: 12px;" type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
	        	</span>
	      		</span>);
  		}
	}
};
</script>


<style>
.divider.hidden{
	height:10px;
	width:100%;
}
</style>
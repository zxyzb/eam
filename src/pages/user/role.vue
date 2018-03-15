<template>
	<el-row :gutter="20">
		<el-col :span="10">
			<el-tag><i class="el-icon-menu"></i> 菜单配置</el-tag>
			<div class="divider hidden"></div>
			<el-tree
			  :data="data"
			  :props="defaultProps"
			  show-checkbox
			  node-key="id"
			  default-expand-all
			  :expand-on-click-node="false"
			  :render-content="renderContent">
			</el-tree>
			<div class="divider hidden"></div>
			<el-button type="primary" @click="onSubmit">保存</el-button>
		</el-col>
		<el-col :span="10">
			<el-tag><i class="el-icon-menu"></i> 菜单内容编辑</el-tag>
			<div class="divider hidden"></div>
			<el-form ref="form" :model="form" label-width="80px" size="small">
				<el-form-item label="名称">
				    <el-input v-model="form.label"></el-input>
			 	</el-form-item>
			 	<el-form-item label="链接">
				    <el-input v-model="form.url"></el-input>
			 	</el-form-item>
			 
			</el-form>
		</el-col>

	</el-row>
</template>



<script>
  let id = 1000;
  export default {
    data() {
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
	      	}
      	}
    },

methods: {
	onSubmit(){

	},
  	append(data) {
        const newChild = { id: id++, label: '***', children: []};
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
    },
    edit(data){
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
              <span>{node.label}</span>
            </span>
            <span>
          		<el-button style="font-size: 12px;" type="text" on-click={ () => this.append(data) }>添加</el-button>
        		<el-button style="font-size: 12px;" type="text" on-click={ () => this.edit(data) }>编辑</el-button>
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
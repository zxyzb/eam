<template>
  <el-row :gutter="20" v-loading="loading">
    <el-col :span="10">
      <el-tag><i class="el-icon-menu"></i> 菜单配置</el-tag>
      <div class="divider hidden"></div>
      <el-tree
        :data="dataList"
        :props="defaultProps"
        :show-checkbox=false
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :render-content="renderContent">
      </el-tree>
      <div class="divider hidden"></div>
      <el-button type="primary" @click="submitTreeData(dataList)">保存</el-button>
    </el-col>

    <!--菜单编辑dialog -->
    <el-dialog title="菜单编辑" :visible.sync="dialogFormVisible" :close-on-click-modal=false>
      <el-form :model="editForm" label-width="100px" size="medium" :rules="formRules" ref="editForm">
        <el-form-item label="名称" prop="label">
          <el-col :span="20">
            <el-input v-model="editForm.label"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="链接" v-if="parentNode" prop="path">
          <el-col :span="20">
            <el-input v-model="editForm.path"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('editForm')">保存</el-button>
          <el-button @click="formReset">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-row>
</template>

<script>
  import { getTreeData } from '@/config/getData'
  import { Message } from "element-ui";

  let id = 1000;
  export default {
    data() {
      //自定义rule
      var checkAge = (rule, value, callBack) => {
        if (!value) {
          	return callBack(new Error('名称不能为空'));
        }
      }

      return {
      	loading:true,
        dataList: [],
        defaultProps: {
          	children: 'children',
          	label: 'label'
        },
        editForm: {
          	label: '',
          	path: '',
        },
        formRules: {
          	label: [{validator: checkAge, trigger: 'blur'}],
          	path: [{required: true, message: '请输入地址', trigger: 'blur'}]
        },
        parentNode: false,
        dialogFormVisible: false
      }
    },
    mounted(){
      	getTreeData().then(res =>{
          	this.dataList = res.data.menuTree
          	setTimeout(() => this.loading = false,400)
        })
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
		
		submitTreeData(data){
			//校验树
			var validate = (data) => {
				for(var i in data){
					if(data[i].path == '' && data[i].children.length == 0){
						Message({
					      message:data[i].label+'链接不能为空',
					      type:'error',
					      showClose:true
					    })
						return validate = false;
					}
					if(data[i].children){
						validate(data[i].children)
					}
				}
			}
			validate(data);
			if(validate!= false){
				Message({
			      message:'提交成功',
			      type:'success',
			      showClose:true
			    })
			}
		},

		formReset(){
			this.editForm = {label: '',url: '',domains: []},
			this.dialogFormVisible = false;
		},

	    append(node,data) {
	    	data.path = '';
	        const newChild = {id: id++, label: '***', children: [] ,path:''};
	        if (!data.children) {
	          this.$set(data, 'children', []);
	        }
	        data.children.push(newChild);
	    },
	    edit(node, data) {
	        this.dialogFormVisible = true
	        if (node.childNodes.length == 0) {
	          this.parentNode = true;
	        } else {
	          this.parentNode = false;
	        }
	        this.editForm = data
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
	          <span>{node.label}&emsp;&emsp;{data.path}</span>
	        </span>
	        <span>
	        <el-button style="font-size: 12px;" type="text" on-click={ () => this.append(node,data) }>添加</el-button>
	        <el-button style="font-size: 12px;" type="text" on-click={ () => this.edit(node,data) }>编辑</el-button>
	        <el-button style="font-size: 12px;" type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
	        </span>
	        </span>);
      	}
    }
  };
</script>


<style>
  .divider.hidden {
    height: 10px;
    width: 100%;
  }
</style>

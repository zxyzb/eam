<template>
  <el-row :gutter="24" v-loading="loading">
    <el-col :span="12">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>菜单配置</span>
            </div>
            <el-tree
            :data="dataList"
            :props="defaultProps"
            node-key="id"
            @node-click="getBtnPermission"
            default-expand-all
            :expand-on-click-node="false"
            :render-content="renderContent">
            </el-tree>
            <div class="divider hidden"></div>
        </el-card>      
    </el-col>
    <el-col :span="12">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>添加按钮权限</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="addBtnPermisstion(btnPermission.parent)">增加</el-button>
            </div>
            <div>{{btnPermission.parent}}</div>
            <div v-for="(item,index) in btnPermission.btnList" class="card_item">
                <span class="f_14">{{item.name}} | {{item.alias}}</span>
                <el-button class="right" size="mini" type="danger" @click="removeBtn(index)">删除</el-button>
            </div>
        </el-card>
    </el-col>

    <!--菜单编辑dialog -->
    <el-dialog :title="formTitle" :visible.sync="dialogFormVisible" :close-on-click-modal=false :show-close=false>
        <el-form :model="form" label-width="100px" size="medium" :rules="formRules" ref="form">
            <el-form-item label="父菜单" prop="parentMenu">
              <el-col :span="20">
                <el-input v-model="form.parentMenu" readonly></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="菜单名称" prop="label">
              <el-col :span="20">
                <el-input v-model="form.label"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="菜单别名" prop="menuAlias">
              <el-col :span="20">
                <el-input v-model="form.menuAlias"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="链接" v-if="parentNode" prop="url">
              <el-col :span="20">
                <el-input v-model="form.url"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">保存</el-button>
              <el-button @click="formReset">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>

    <!-- 按钮操作dialog -->
    <el-dialog :title="btnFormTitle" :visible.sync="dialogBtnForm" :close-on-click-modal=false :show-close=false>
        <el-form :model="btnForm" label-width="100px" size="medium" :rules="btnFormRules" ref="btnForm">
            <el-form-item label="父菜单" prop="parentMenu">
              <el-col :span="20">
                <el-input v-model="btnForm.parentMenu" readonly></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="按钮名称" prop="name">
              <el-col :span="20">
                <el-input v-model="btnForm.name"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="按钮别名" prop="alias">
              <el-col :span="20">
                <el-input v-model="btnForm.alias"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="saveBtnForm">保存</el-button>
              <el-button @click="btnCancel('btnForm')">取消</el-button>
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
    name: 'user_menu',
    data() {
        return {
          	loading:true,
            dataList: [],
            defaultProps: {
              	children: 'children',
              	label: 'label'
            },
            form: {
              	parentMenu:'',
                label:'',
                menuAlias:'',
                url:''
            },
            btnForm:{
                parentMenu:'',
                name:'',
                alias:''
            },
            formTitle:'新增菜单',
            btnFormTitle:'新增按钮权限',
            btnPermission:{
                parent:'首页',
                btnList:[] //按钮权限列表
            }, 
            btnFormRules:{
                name:[{required: true, message: '按钮名称不为空', trigger: 'blur'}],
                alias:[{required: true, message: '按钮别名不为空', trigger: 'blur'}]
            },
            formRules: {
                label:[{required: true, message: '菜单名称不为空', trigger: 'blur'}],
                menuAlias:[{required: true, message: '菜单别名不为空', trigger: 'blur'}],
                url:[{required: true, message: '链接不为空', trigger: 'blur'}]
            },
            parentNode: false,
            dialogFormVisible: false,
            dialogBtnForm:false,
            addMenuModel: false,
        }
    },
    mounted(){
        //初始化数据
      	getTreeData().then(res =>{
          	this.dataList = res.data.menuTree
          	setTimeout(() => this.loading = false,400)
        })
    },
    methods: {
		//取消modal
		formReset(){
            this.initForm();
			this.dialogFormVisible = false;
		},

        //初始化form表单
        initForm(){
            this.form = {parentMenu:'',label:'',menuAlias:'',url:''};
        },

        //获取按钮权限列表
        getBtnPermission(data,node){
            this.btnPermission.btnList = data.permission ? data.permission:[];
            this.btnPermission.parent = data.label;
        },
	    append(node,data) {
            this.formTitle = '新增菜单'
            this.dialogFormVisible = true;
            this.initForm();
	        const newChild = {id: id++, label: '***', children: [] ,path:''};
	        if (!data.children) {
	          this.$set(data, 'children', []);
	        }
	        data.children.push(newChild);
	    },
	    edit(node, data) {
	        this.dialogFormVisible = true
            this.formTitle = '编辑菜单'
	        if (node.childNodes.length == 0) {
	          this.parentNode = true;
	        } else {
	          this.parentNode = false;
            }
            this.form = data
            console.log(data)
            if(node.parent){
                this.form.parentMenu = node.parent.data.label
            }
	    },
        //添加按钮权限
        addBtnPermisstion(url){
            this.btnForm.parentMenu = url;
            this.dialogBtnForm = true;
        },
        
	    remove(node, data) {
            this.$confirm('删除此节点将会删除对应按钮权限，是否继续？','提示',{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
            }).then(() =>{
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);

                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() =>{
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            })
            
        },
        
        //保存按钮权限
        saveBtnForm(){
            let btnList = Object.assign({},this.btnForm)
            this.btnPermission.btnList.push(btnList)
            this.$refs['btnForm'].resetFields()
            this.dialogBtnForm = false;
        },
        btnCancel(formName){
            this.$refs[formName].resetFields()
            this.dialogBtnForm = false;
        },
        
        //删除按钮权限
        removeBtn(index){
            this.btnPermission.btnList.splice(index,1)
        },
	    renderContent(h, { node, data, store }) {
	        return (
	          <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
  	          <span>
  	           <span>{node.label}</span>
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
    .card_item{
        line-height:34px;
        padding:2px 0px;
    }
    .f_14{
        font-size:14px;
    }
</style>

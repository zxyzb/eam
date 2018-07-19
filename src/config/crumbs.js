
//面包屑导航配置
const breadcrumb = {
    '/home':'',

    '/user/list':[{
        name:'用户管理',
        path:'',
    },{
        name:'用户列表',
        path:'',
    }],

    '/user/menu':[{
        name:'用户管理',
        path:''
    },{
        name:'菜单管理',
        path:''
    }],

    '/user/role':[{
        name:'用户管理',
        path:''
    },{
        name:'用户角色管理',
        path:''
    }],
    
    '/manage/echarts':[{
        name:'产品管理',
        path:'',
    },{
        name:'数据统计',
        path:''
    }],

    '/formula/add':[{
        name:'产品管理',
        path:''
    },{
        name:'公式操作',
        path:''
    }],

    '/risk/risk_approval':[{
        name:'审批管理',
        path:''
    },{
        name:'风控审批',
        path:''
    }],

    '/risk/risk_edit':[{
        name:'审批管理',
        path:''
    },{
        name:'风控审批',
        path:'/risk/risk_approval'
    
    },{
        name:'风控编辑',
        path:''
    }]
}

export default breadcrumb
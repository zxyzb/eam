
import layout from '@/common/layout'
import menu from '@/pages/user/menu'
import user from '@/pages/user/user'
import userEdit from '@/pages/user/userEdit'
import echart from '@/pages/manage/echart'
import formula from '@/pages/formula/formula'

//配置页面路由入口
const asyncRouter = [
	{
        path: '/asyncRouter',component: layout,
        children: []
    },{
		path: '/user/menu',component: menu,  
		meta:{
            permission:[],
            breadcrumb:['用户管理','菜单管理'],
            title:'菜单管理'
        },
	},{
        path:'/user/list',component: user,
        meta:{
             permission:[],
             breadcrumb:['用户管理','用户列表'],
             title:'用户列表'
        }
    },{
        path: '/user/edit',component: userEdit,
        meta:{
            permission:[]
        },
    },{
        path:'/manage/echarts',component: echart,
        meta:{
            permission:[],
            breadcrumb:['产品管理','数据统计'],
            title:'数据统计'
        }
    },{
        path:'/formula/add',component :formula,
        meta:{
            permission:[],
            breadcrumb:['产品管理','公式操作'],
            title:'公式操作'
        }
    }
]

export default asyncRouter

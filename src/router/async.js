
import layout from '@/common/layout'
import menu from '@/pages/user/menu'
import user from '@/pages/user/user'
import userEdit from '@/pages/user/userEdit'
import role from '@/pages/user/role'
import echart from '@/pages/manage/echart'
import formula from '@/pages/formula/formula'

import risk from '@/pages/approval/risk'
import risk_approval from '@/pages/approval/risk_approval'

//配置页面路由入口
const asyncRouter = [
	{
        path: '/asyncRouter',component: layout,
        children: [],
    },{
		path: '/user/menu',component: menu,  
		meta:{
            permission:[],
            title:'菜单管理'
        },
	},{
        path:'/user/list',component: user,
        meta:{
             permission:[],
             title:'用户列表',
        }
    },{
        path:'/user/role',component: role,
        meta:{
             permission:[],
             title:'用户角色管理'
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
            level:'',
            title:'数据统计'
        }
    },{
        path:'/formula/add',component :formula,
        meta:{
            permission:[],
            title:'公式操作'
        }
    },{
        path:'/risk',
        redirect:'/risk/risk_approval',
        component:risk,
        meta:{
            permission:[],
            title:'风控审批'
        },
        children:[{
            path:'/risk/risk_edit',
            component:r => require.ensure([], () => r(require('@/pages/approval/risk_edit')), 'risk_approval'),
            meta:{
                permission:[],
                title:'风控编辑'
            }
        },{
            path:'/risk/risk_approval',component :risk_approval,
            meta:{
                permission:[],
                title:'风控审批'
            }
        }]
    },
]

export default asyncRouter


import Home from '@/pages/home'
import layout from '@/common/layout'
import role from '@/pages/user/role'
import user from '@/pages/user/user'
import userEdit from '@/pages/user/userEdit'
import echart from '@/pages/manage/echart'

//配置页面路由入口
const asyncRouter = [
	{
        path: '/asyncRouter',component: layout,
        children: []
    },{
		path: '/home',component: Home,
     	meta:{
            permission:[]
        }
	},{
		path: '/user/role',component: role,  
		meta:{
            permission:[]
        },
	},{
        path:'/user/list',component: user,
        meta:{
             permission:[]
        }
    },{
        path: '/user/edit',component: userEdit,
        meta:{
            permission:[]
        },
    },{
        path:'/manage/echarts',component: echart,
        meta:{
            permission:[]
        }
    }
]

export default asyncRouter

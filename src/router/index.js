import Vue from 'vue'
import Router from 'vue-router'
// import Cookies from 'js-cookie'
import { getPermission } from '@/config/getData'
import asyncRouter from '@/router/async'
import store from '@/store/store'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false });

Vue.use(Router)

const routes = [{
	path:'/',
	redirect: '/home'
},{
	path:'/login',
	component: r => require.ensure([], () => r(require('@/common/login')), 'login')
},{
	path: '/defaultLayout',
    component: r => require.ensure([], () => r(require('@/common/layout')), 'layout'),
    meta:{
        permission:[],
        breadcrumb :[]
    },
    // 需要进行用户登录验证
    children: [{
        path: '/home',
        component: r => require.ensure([], () => r(require('@/common/home')), 'home'),
    }]
},{
	path: '/error',
        component: r => require.ensure([], () => r(require('@/error/error')), 'error'),
        children: [
            {
                path: '/error/401',
                component: r => require.ensure([], () => r(require('@/error/401')), 'error')
            },
            {
                path: '/error/403',
                component: r => require.ensure([], () => r(require('@/error/403')), 'error')
            },
            {
                path: '/error/404',
                component: r => require.ensure([], () => r(require('@/error/404')), 'error')
            },
            {
                path: '/error/500',
                component: r => require.ensure([], () => r(require('@/error/500')), 'error')
            }
        ]
}]

             
const router = new Router({
    mode: 'history',
    routes: routes
})

/**
 * 根据权限匹配路由
 * @param {array} permission 权限列表（菜单列表）
 * @param {array} asyncRouter 异步路由对象
 */
function routerMatch(permission, asyncRouter){
    return new Promise((resolve) => {
        const routers = asyncRouter[0]
        // 创建路由
        function createRouter(permission){
            permission.forEach((item) =>{
                if(item.child && item.child.length){
                    // 递归
                    createRouter(item.child)
                }
                let path = item.path
                // 循环异步路由，将符合权限列表的路由加入到routers中
                asyncRouter.find(function(s){
                    if(s.path == path){
                        s.meta.permission = item.meta.permission
                        s.meta.breadcrumb = item.meta.breadcrumb
                        routers.children.push(s)
                        return
                    }
                })
            })
        }
        createRouter(permission)
        resolve([routers])
    })
}

router.beforeEach((to, from, next)=>{
    // 开启进度条
    NProgress.start();

	if(sessionStorage.getItem('token')){
		if(to.path === '/login'){
			router.replace('/home')
		} else {
			// 页面跳转前先判断是否存在权限列表，如果存在则直接跳转，如果没有则请求一次
			if(store.state.permission.list.length === 0){
				// 获取权限列表，如果失败则跳回登录页重新登录
				getPermission().then(res =>{
					store.dispatch('permission/getPermission').then(res =>{
                        var menus = res.menu;
						// 匹配并生成需要添加的路由对象
						routerMatch(menus, asyncRouter).then(res =>{
	                        router.addRoutes(res)
	                        next(to.path)
	                    })
					})
				})
			}else{
				if(to.matched.length){
                    next()
                } else{
                    router.replace('/error/404')
                }
			}
		}
	}else{
		 // 如果是免登陆的页面则直接进入，否则跳转到登录页面
        if (to.path === '/login') {
            console.log('该页面无需登录即可访问')
            next()
        } else {
            router.replace('/login')
            NProgress.done()
        }
	}
})

router.afterEach(() => {
    NProgress.done(); // 结束Progress
})

export default router


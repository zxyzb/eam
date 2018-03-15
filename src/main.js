// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import hasPermission from '@/config/permission'
import css from '@/assets/css/common.css'
import echarts from 'echarts'

Vue.config.productionTip = false

//设置全局变量$echarts
Vue.prototype.$echarts = echarts

//开发环境才能mock数据
if(process.env.NODE_ENV == 'development'){
	require('./mock.js')
}

Vue.use(hasPermission)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  css,
  router,
  components: { App },
  template: '<App/>'
})

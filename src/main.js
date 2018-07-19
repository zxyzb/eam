// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import hasPermission from '@/config/permission'
import filters from '@/config/filter'
import css from '@/assets/css/common.css'
import echarts from 'echarts'
import AMap from 'vue-amap'

Vue.config.productionTip = false

//设置全局变量$echarts
Vue.prototype.$echarts = echarts

//开发环境才能mock数据
if(process.env.NODE_ENV == 'development'){
	require('./mock.js')
}

Vue.use(hasPermission)
Vue.use(ElementUI)
Vue.use(AMap)

// 初始化vue-amap

AMap.initAMapApiLoader({
  // 高德的key
  key: '6b1d3e2293a7126f41d6261597d9a5c7',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
});

/*定义全局过滤器*/
for(let filterName in filters){
	Vue.filter(filterName,filters[filterName])
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  css,
  router,
  components: { App },
  template: '<App/>'
})

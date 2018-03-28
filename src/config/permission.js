//公共权限判断方法，判断meta中的pression
const hasPermission = {
	install(Vue, options){
		Vue.mixin({
			methods:{
				//权限判断
				hasPermission(d){
					let permissionList = this.$route.meta.permission
                    if(permissionList && permissionList.length && permissionList.includes(d)){
                        return true
                    }
                    return false
				}
            }
		})
	}
}

export default hasPermission
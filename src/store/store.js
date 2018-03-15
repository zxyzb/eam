import Vue from 'vue'
import Vuex from 'vuex'
import { getPermission } from '@/config/getData'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		permission:{
			namespaced:true,
			state:{
				mode:'login',
		    	list:[]
			},
			mutations:{
				setList:(state, data) => {
		    		state.list = data
		    	}
			},
			actions:{
				getPermission({ commit }){
					return new Promise((resolve, reject)=>{
						getPermission().then(res =>{
							commit('setList',res.data)
							resolve(res.data)
						})
					})
				}
			}
		}
	}
})
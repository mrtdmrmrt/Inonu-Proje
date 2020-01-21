import Vue from"vue"
import Vuex from "vuex"


Vue.use(Vuex)

const store = new Vuex.Store({
	state : {
		id: 1
		
	},
	mutations : {
		addIdMutations(state,data){
			state.id=data;
		
		}
	},
	actions : {
		addIdActions(vuexContext,data){
			
			vuexContext.commit("addIdMutations",data);
			
		}
	},
	getters : {
		getId(state){
			return state.id;
		}
	}

})

export default store
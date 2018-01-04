import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import state from './modules/state'
import mutations from './modules/mutations'
import getters from './modules/getters'
import actions from './modules/actions'

const store = new Vuex.Store({
	state,mutations,getters,actions
})

export default store

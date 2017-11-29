import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions/actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  errors: [],
  notifications: [],
  sites: [],
  selectedSite: false,
  user: {
    authenticated: false,
    fullname: null
  },
  isLoading: false,
  isError: false
}

export default new Vuex.Store({
  strict: true,
  state,
  mutations,
  actions,
  getters
})

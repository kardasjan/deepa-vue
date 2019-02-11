import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations/mutations'
import actions from './actions/actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  errors: [],
  notifications: [],
  sites: [],
  messageTypes: [],
  selectedSite: false,
  contacts: [],
  selectedContact: false,
  assignableContacts: [],
  assignableMsgTypes: [],
  user: {
    authenticated: false,
    fullname: null,
    username: 'Admin'
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

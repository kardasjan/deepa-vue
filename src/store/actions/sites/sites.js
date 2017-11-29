import Vue from 'vue'
import axios from 'axios'

const API_URL = 'http://localhost:3015'
const SITES_URL = API_URL + '/sites'
const SITE_URL = API_URL + '/sites/site'

export default {
  getSites ({ state, commit }) {
    commit('requestTriggered')
    axios.request({
      url: SITES_URL,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'token': Vue.localStorage.get('token'),
        'filter': '{}'
      }
    })
    .then(response => {
      commit('requestSuccess')
      commit('setSites', response.data.data)
    })
    .catch(e => {
      commit('requestFailed', e.response)
      commit('addErrors', e.response.data.errors)
    })
  },
  selectSite ({ commit }, { id }) {
    commit('requestTriggered')
    axios.request({
      url: SITE_URL,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'token': Vue.localStorage.get('token'),
        filter: `{"_id":"${id}"}`
      }
    })
    .then(response => {
      commit('requestSuccess')
      commit('selectSite', response.data.data)
    })
    .catch(e => {
      commit('requestFailed', e.response)
      commit('addErrors', e.response.data.errors)
    })
  }
}

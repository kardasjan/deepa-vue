import Vue from 'vue'
import axios from 'axios'

const API_URL = 'http://localhost:3015'
const AUTH_URL = API_URL + '/auth'
const SITES_URL = API_URL + '/sites'
const SITE_URL = API_URL + '/sites/site'

export default {
  tryLogin ({ commit }, { username, password, router }) {
    axios.post(AUTH_URL, {
      username,
      password
    })
    .then(response => {
      commit('loginSuccess', response.data.data)
      router.push('/')
    })
    .catch(e => {
      commit('addErrors', e.response.data.errors)
    })
  },
  getSites ({ state, commit }) {
    axios.get(SITES_URL, {
      headers: {
        token: Vue.localStorage.get('token'),
        filter: '{}'
      }
    })
    .then(response => {
      commit('setSites', response.data.data)
    })
    .catch(e => {
      commit('addErrors', e.response.data.errors)
    })
  },
  selectSite ({ commit }, { id }) {
    axios.get(SITE_URL, {
      headers: {
        'Content-Type': 'application/json',
        'token': Vue.localStorage.get('token'),
        'filter': JSON.stringify({'_id': id})
      }
    })
    .then(response => {
      commit('selectSite', response.data.data)
    })
    .catch(e => {
      commit('addErrors', e.response.data.errors)
    })
  }
}

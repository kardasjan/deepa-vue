import axios from 'axios'

const API_URL = 'http://10.67.0.1:3015'
const AUTH_URL = API_URL + '/auth'

export default {
  tryLogin ({ state, commit }, { username, password, router }) {
    commit('requestTriggered')
    axios.post(AUTH_URL, {
      username,
      password
    })
    .then(response => {
      commit('requestSuccess')
      commit('loginSuccess', response.data.data)
      router.push('/')
    })
    .catch(e => {
      commit('requestFailed', e.response)
      commit('addErrors', e.response.data.errors)
    })
  }
}

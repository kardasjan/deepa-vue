import Vue from 'vue'
import axios from 'axios'

const API_URL = "http://10.67.0.1:3015"
const SITES_URL = API_URL + '/sites'
const SITE_URL = API_URL + '/sites/site'
const MESSAGE_TYPES_URL = API_URL + '/messageTypes'

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
  getMessageTypes ({ state, commit }) {
    commit('requestTriggered')
    axios.request({
      url: MESSAGE_TYPES_URL,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'token': Vue.localStorage.get('token'),
        'filter': '{}'
      }
    })
    .then(response => {
      commit('requestSuccess')
      commit('setMessageTypes', response.data.data)
    })
    .catch(e => {
      commit('requestFailed', e.response)
      commit('addErrors', e.response.data.errors)
    })
  },
  selectSite ({ commit, dispatch }, { id }) {
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
      dispatch('tryGetAssignableContacts', { siteId: id })
    })
    .catch(e => {
      commit('requestFailed', e.response)
      commit('addErrors', e.response.data.errors)
    })
  },
  tryCreateSite ({ state, commit, dispatch }, { site }) {
    commit('requestTriggered')
    axios.request({
      url: SITE_URL,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'token': Vue.localStorage.get('token')
      },
      data: {
        site
      }
    })
    .then(response => {
      commit('requestSuccess')
      dispatch('getSites')
      commit('selectSite', response.data.data)
    })
    .catch(e => {
      commit('requestFailed', e.response)
      commit('addErrors', e.response.data.errors)
    })
  },
  tryAssignMessageTypes ({ state, commit, dispatch }, { siteId, contactId, msgtypes, router }) {
    commit('requestTriggered')
    let values = {
      'siteId': siteId,
      'contactId': contactId,
      'messageTypes': msgtypes
    }
    axios.request({
      url: SITE_URL + '/assignMessageTypes',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'token': Vue.localStorage.get('token')
      },
      data: {
        values
      }
    })
    .then(response => {
      commit('requestSuccess')
      dispatch('selectSite', {id: siteId})
      commit('pushNotification', {cssClass: 'notification is-success', text: 'Zprávy přirazeny!'})
    })
    .catch(e => {
      commit('requestFailed', e.response)
      commit('addErrors', e.response.data.errors)
    })
  },
  tryUnassignMessageType ({ state, commit, dispatch }, { siteId, contactId, msgType, router }) {
    commit('requestTriggered')
    let values = {
      'siteId': siteId,
      'contactId': contactId,
      'messageType': msgType
    }
    axios.request({
      url: SITE_URL + '/unassignMessageType',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'token': Vue.localStorage.get('token')
      },
      data: {
        values
      }
    })
    .then(response => {
      commit('requestSuccess')
      dispatch('selectSite', {id: siteId})
      commit('pushNotification', {cssClass: 'notification is-success', text: 'Zpráva odebrána!'})
    })
    .catch(e => {
      commit('requestFailed', e.response)
      commit('addErrors', e.response.data.errors)
    })
  }
}

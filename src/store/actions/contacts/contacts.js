import Vue from 'vue'
import axios from 'axios'

const API_URL = 'http://10.67.0.1:3015'
const CONTACTS_URL = API_URL + '/contacts'
const SITE_URL = API_URL + '/sites/site'
// const PARAM_URL = API_URL + '/contacts/getByParam'

export default {
  getContacts ({ state, commit }) {
    commit('requestTriggered')
    axios.request({
      url: CONTACTS_URL,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'token': Vue.localStorage.get('token')
      }
    })
    .then(response => {
      commit('requestSuccess')
      commit('setContacts', response.data.data)
    })
    .catch(e => {
      commit('requestFailed', e.response)
      commit('addErrors', e.response.data.errors)
    })
  },
  selectContact ({ commit }, { id }) {
    commit('requestTriggered')
    axios.request({
      url: CONTACTS_URL,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'token': Vue.localStorage.get('token'),
        filter: `{"_id":"${id}"}`
      }
    })
    .then(response => {
      commit('requestSuccess')
      commit('selectContact', response.data.data)
    })
    .catch(e => {
      commit('requestFailed', e.response)
      commit('addErrors', e.response.data.errors)
    })
  },
  tryCreateContact ({ state, commit, dispatch }, { contact, router }) {
    commit('requestTriggered')
    axios.request({
      url: CONTACTS_URL,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'token': Vue.localStorage.get('token')
      },
      data: {
        contact
      }
    })
    .then(response => {
      commit('requestSuccess')
      dispatch('getContacts')
      dispatch('selectContact', {id: response.data.data._id})
      commit('pushNotification', {cssClass: 'notification is-success', text: 'Kontakt vytvořen!'})
      router.push('/kontakty')
    })
    .catch(e => {
      commit('requestFailed', e.response)
      commit('addErrors', e.response.data.errors)
    })
  },
  tryDeleteContact ({ state, commit, dispatch }, { id, router }) {
    commit('requestTriggered')
    axios.request({
      url: CONTACTS_URL + '/' + id,
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'token': Vue.localStorage.get('token')
      }
    })
    .then(response => {
      commit('requestSuccess')
      commit('freeSelectedContact')
      dispatch('getContacts')
      commit('pushNotification', {cssClass: 'notification is-success', text: 'Kontakt smazán!'})
      router.push('/kontakty')
    })
    .catch(e => {
      commit('requestFailed', e.response)
      commit('addErrors', e.response.data.errors)
    })
  },
  tryEditContact ({ state, commit, dispatch }, { id, contact, router }) {
    axios.request({
      url: CONTACTS_URL + '/' + id,
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'token': Vue.localStorage.get('token')
      },
      data: {
        contact
      }
    })
    .then(response => {
      commit('requestSuccess')
      dispatch('getContacts')
      dispatch('selectContact', {id: response.data.data._id})
      commit('pushNotification', {cssClass: 'notification is-success', text: 'Kontakt upraven!'})
      router.push('/kontakty')
    })
    .catch(e => {
      commit('requestFailed', e.response)
      commit('addErrors', e.response.data.errors)
    })
  },
  tryAssignContacts ({ state, commit, dispatch }, { siteId, contacts, router }) {
    let values = {
      siteId,
      contacts
    }
    axios.request({
      url: SITE_URL + '/assignContacts',
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
      dispatch('selectSite', { id: siteId })
      commit('pushNotification', {cssClass: 'notification is-success', text: 'Kontakty přiřazeny!'})
    })
    .catch(e => {
      commit('requestFailed', e.response)
      commit('addErrors', e.response.data.errors)
    })
  },
  tryUnassignContact ({ state, commit, dispatch }, { siteId, contactId, router }) {
    let values = {
      siteId,
      contactId
    }
    axios.request({
      url: SITE_URL + '/unassignContact',
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
      dispatch('selectSite', { id: siteId })
      commit('pushNotification', {cssClass: 'notification is-success', text: 'Kontakt odebrán!'})
    })
    .catch(e => {
      commit('requestFailed', e.response)
      commit('addErrors', e.response.data.errors)
    })
  },
  tryGetAssignableContacts ({ state, commit }, { siteId }) {
    commit('requestTriggered')
    axios.request({
      url: CONTACTS_URL + '/getAssignable',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'token': Vue.localStorage.get('token'),
        'siteid': siteId
      }
    })
    .then(response => {
      commit('requestSuccess')
      commit('setAssignableContacts', response.data.data)
    })
    .catch(e => {
      commit('requestFailed', e.response)
      commit('addErrors', e.response.data.errors)
    })
  }
}

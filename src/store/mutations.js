import Vue from 'vue'

const uuid = require('uuid/v4')

export default {
  loginSuccess (store, data) {
    Vue.localStorage.set('token', data.token)
    store.user.fullname = data.user.fullname
    store.user.authenticated = true
  },
  logout (store) {
    Vue.localStorage.set('token', null)
    store.user.fullname = null
    store.user.authenticated = false
    store.notifications.push({if: uuid(), cssClass: 'notification is-success', text: 'Odhlášení úspěšné.'})
  },
  addErrors (store, errors) {
    for (let error of errors) {
      store.notifications.push({id: uuid(), cssClass: 'notification is-danger', text: error})
    }
  },
  setSites (store, sites) {
    for (let site of sites) {
      store.sites.push({
        id: site._id,
        name: site.name,
        slug: site.slug
      })
    }
  },
  selectSite (store, site) {
    store.selectedSite = site
  },
  pushNotification (store, {cssClass, text}) {
    store.notifications.push({id: uuid(), cssClass, text})
  },
  closeNotification (store, id) {
    store.notifications = store.notifications.filter(item => item.id !== id)
  },
  requestTriggered (store) {
    store.isLoading = true
    store.isError = false
  },
  requestSuccess (store) {
    store.isLoading = false
    store.isError = false
  },
  requestFailed (store, response) {
    console.log(response)
    store.isLoading = false
    store.isError = true
  }
}

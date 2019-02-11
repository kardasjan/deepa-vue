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
  }
}

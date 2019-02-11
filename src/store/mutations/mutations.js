import sites from './sites/sites'
import login from './login/login'
import contacts from './contacts/contacts'

const uuid = require('uuid/v4')

export default {
  ...sites,
  ...login,
  ...contacts,
  addErrors (store, errors) {
    for (let error of errors) {
      store.notifications.push({id: uuid(), cssClass: 'notification is-danger', text: error})
    }
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
    store.isLoading = false
    store.isError = true
  }
}

export default {
  getNotifications (store) {
    return store.notifications
  },
  getSiteList (store) {
    return store.sites
  },
  selectedSite (store) {
    return store.selectedSite
  },
  sites (store) {
    return store.sites
  },
  messageTypes (store) {
    return store.messageTypes
  },
  contacts (store) {
    return store.contacts
  },
  selectedContact (store) {
    return store.selectedContact
  },
  assignableContacts (store) {
    return store.assignableContacts
  },
  assignableMsgTypes (store) {
    return store.assignableMsgTypes
  },
  isLoading (store) {
    return store.isLoading
  }
}

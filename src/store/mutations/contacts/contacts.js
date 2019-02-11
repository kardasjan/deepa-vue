export default {
  setContacts (store, contacts) {
    store.contacts = []
    for (let contact of contacts) {
      store.contacts.push({
        id: contact._id,
        name: contact.name,
        phone: contact.phone,
        email: contact.email
      })
    }
  },
  selectContact (store, contacts) {
    for (let contact of contacts) {
      store.selectedContact = contact
      // Allways ends here because ID filter returns one item
    }
  },
  freeSelectedContact (store) {
    store.selectedContact = false
  },
  setAssignableContacts (store, contacts) {
    store.assignableContacts = contacts
  }
}

export default {
  setSites (store, sites) {
    store.sites = []
    for (let site of sites) {
      store.sites.push({
        id: site._id,
        name: site.name,
        slug: site.slug
      })
    }
  },
  setMessageTypes (store, messageTypes) {
    store.messageTypes = messageTypes
  },
  selectSite (store, site) {
    store.selectedSite = site
  },
  setAssignableMessageTypes (store, messageTypes) {
    store.assignableMessageTypes = messageTypes
  }
}

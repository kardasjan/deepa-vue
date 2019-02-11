<template>
  <section class="row">
    <side-panel class="col-xs-12 col-sm-4 col-md-3"></side-panel>
    <contact-detail class="col-xs-12 col-sm-8 col-md-7"></contact-detail>
    <div class="col-xs-12 col-md-2"></div>
  </section>
</template>

<script>

import SidePanel from './SidePanel.vue'
import ContactDetail from './ContactDetail.vue'

export default {
  name: 'contacts',
  created () {
    this.$store.dispatch('getContacts')
    this.$store.commit('selectContact', false)
  },
  watch: {
    $route () {
      if (this.$route.path === '/kontakty') {
        this.$store.commit('selectContact', false)
      }
    }
  },
  computed: {
    contacts () {
      return this.$store.state.contacts
    }
  },
  components: {
    SidePanel,
    ContactDetail
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

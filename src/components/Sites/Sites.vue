<template>
  <section class="row">
    <side-panel class="col-xs-12 col-sm-4 col-md-3"></side-panel>
    <site-watch class="col-xs-12 col-sm-8 col-md-7"></site-watch>
    <div class="col-xs-12 col-md-2"></div>
  </section>
</template>

<script>

import SidePanel from './SidePanel.vue'
import SiteWatch from './SiteWatch.vue'

export default {
  name: 'sites',
  created () {
    this.$store.dispatch('getSites')
    this.$store.dispatch('getMessageTypes')
    this.$store.commit('selectSite', false)
  },
  watch: {
    $route () {
      if (this.$route.path === '/objekty') {
        this.$store.commit('selectSite', false)
      }
    }
  },
  computed: {
    sites () {
      return this.$store.state.sites
    }
  },
  components: {
    SidePanel,
    SiteWatch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

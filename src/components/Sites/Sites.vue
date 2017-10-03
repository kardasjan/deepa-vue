<template>
  <div class="columns">
    <site-list class="column is-3"></site-list>
    <site-detail class="column is-7"></site-detail>
    <div class="column is-2"></div>
  </div>
</template>

<script>

import SiteList from './SiteList.vue'
import SiteDetail from './SiteDetail.vue'

export default {
  name: 'sites',
  created () {
    this.$store.dispatch('getSites')
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
    SiteList,
    SiteDetail
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

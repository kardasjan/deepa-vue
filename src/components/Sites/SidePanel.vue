<template>
  <aside>
    <div class="menu">

      <loading v-if="isLoading && !sites && sites.length != 0" />
      <div v-else>
        <div class="field">
          <div class="control search">
            <input class="input" type="text" placeholder="Hledat objekt dle názvu..." @input="update">
          </div>
        </div>

        <div v-if="filteredSites.length != 0">
          <scrollbar :items="filteredSites" class="scrollbar is-hidden-mobile"></scrollbar>
          <site-list :items="filteredSites.slice(0,2)" class="is-hidden-tablet"></site-list>
        </div>
        <div v-else class="has-text-centered">
          Nebyly nalezeny žádné objekty...
        </div>
      </div>
      <div class="site-menu is-pulled-right">
        <add-site />
      </div>

    </div>
  </aside>
</template>

<script>
import Scrollbar from './Scrollbar.vue'
import SiteList from './SiteList.vue'
import _ from 'lodash/lodash.js'
import Loading from '../Loading.vue'
import AddSite from './AddSite.vue'

export default {
  name: 'side-panel',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.search = e.target.value
    }, 300)
  },
  computed: {
    sites () {
      return this.$store.getters.sites
    },
    filteredSites () {
      return this.sites.filter((site) => {
        return site.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
      })
    },
    isLoading () {
      return this.$store.getters.isLoading
    }
  },
  components: {
    Scrollbar,
    SiteList,
    Loading,
    AddSite
  }
}
</script>

<style scoped lang="scss">
.menu {
  border-width: 0 5px 0 0;
  border-color: #ececec;
  border-style: solid;
  padding: 12px 0 0 0;
  overflow: hidden;
  height: 100%;
}
.scrollbar {
  overflow: auto;
  height: 75vh;
}
.search {
  width: auto;
  padding: 0 10px 0 59px;
  input {
    box-shadow: none;
    -webkit-box-shadow: none;
    border-color: #ececec;
    border: 1px 1px 1px 1px;
    border-radius: 0;
    font-size: 12px;
    height: 37px;
    color: #222222;
  }
}
.site-menu {
  padding: 20px 15px 20px 0;
}
@media (max-width: 768px) {
  .menu {
    border-width: 0 0 5px 0;
  }
}
</style>

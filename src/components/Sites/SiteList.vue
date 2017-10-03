<template>
  <aside>
    <div class="menu">
      <div v-if="!sites && sites.length" class="loading">
        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>
      </div>
      <div v-else>
        <div class="field">
          <div class="control search">
            <input class="input" type="text" placeholder="Hledat objekt dle názvu..." v-model="search">
          </div>
        </div>
        <ul v-if="filteredSites" class="menu-list">
          <li v-for="site in filteredSites.slice(0,10)" :key="site.id" :class="{active : isActive(site.id)}" @click="selectSite(site)">
            <a>{{ site.name }}</a>
          </li>
        </ul>
      </div>
      <div class="site-menu">
        <div class="add-site"></div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'site-list',
  data () {
    return {
      search: ''
    }
  },
  computed: {
    sites () {
      return this.$store.getters.sites
    },
    active () {
      return this.$store.getters.selectedSite
    },
    filteredSites () {
      return this.sites.filter((site) => {
        return site.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
      })
    }
  },
  methods: {
    selectSite (site) {
      this.$store.dispatch('selectSite', {id: site.id})
      this.$router.push('/objekty/' + site.slug)
    },
    isActive (id) {
      return this.active._id === id
    }
  }
}
</script>

<style scoped lang="scss">
.menu {
  border-width: 0 5px 0 0;
  border-color: #ececec;
  border-style: solid;
  padding: 12px 0 0 0;
  min-height: 500px;
  position: relative;
}
.loading {
  margin: 15px 0 0 15px;
  i {
    font-size: 35px;
  }
}
.search {
  max-width: 250px;
  padding: 0 0 0 37px;
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
  position: absolute;
  bottom: 12px;
  right: 12px;
  padding: 0 0 5px 0;
  .add-site {
    background: url('../../assets/img/add-site.png');
    height: 30px;
    width: 30px;
    float: right;
  }
}
.menu-list {
  li {
    padding: 10px 0 0 37px;
    height: 45px;
    font-size: 12px;
    font-weight: 600;
    color: #343434;
    &.active {
      background: #5996c6;
      a {
        color: #ececec;
      }
    }
    a:hover {
      background: none;
    }
  }
  li:hover {
    background: #cfcfcf;
    a {
      color: #2C2C2C;
    }
  }
}
</style>

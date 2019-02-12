<template>
  <div>
    <ul class="menu-list">
      <li v-for="site in items" :key="site.id" :class="{active : isActive(site.id)}" @click="selectSite(site)">
        <a>{{ site.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'site-list',
  props: ['items'],
  computed: {
    active () {
      return this.$store.getters.selectedSite
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
.menu-list {
  li {
    padding: 10px 0 0 58px;
    height: 45px;
    font-size: 12px;
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

<template>
  <ceri-side-nav class="side-nav" target=#nav-toggle>
    <div class="apsystem-logo"></div>
    <div v-on:click="setActive('objekty')">
      <side-nav-item :image="objektyIcon" link="/objekty">OBJEKTY</side-nav-item>
    </div>
    <div v-on:click="setActive('nastaveni')">
      <side-nav-item :image="settingsIcon" link="/settings">NASTAVENÍ</side-nav-item>
    </div>
  </ceri-side-nav>
</template>

<script>
import SideNavItem from './SideNavItem.vue'

// MenuItem Icons
import objektyIconActive from '@/assets/img/side-nav/objekty-icon-active.png'
import objektyIcon from '@/assets/img/side-nav/objekty-icon.png'
import settingsIconActive from '@/assets/img/side-nav/settings-icon-active.png'
import settingsIcon from '@/assets/img/side-nav/settings-icon.png'

export default {
  name: 'side-nav',
  components: {
    SideNavItem
  },
  data () {
    return {
      active: ''
    }
  },
  methods: {
    setActive (menuItem) {
      this.active = menuItem
    }
  },
  computed: {
    objektyIcon () {
      return this.active === 'objekty' ? objektyIconActive : objektyIcon
    },
    settingsIcon () {
      return this.active === 'nastaveni' ? settingsIconActive : settingsIcon
    }
  }
}
</script>

<style scoped>
.side-nav {
  width: 252px;
  background: #343434;
}
.apsystem-logo {
  background: url('../assets/img/logo.png');
  width: 92px;
  height: 45px;
  margin: 10px 0 20px 80px;
}
</style>

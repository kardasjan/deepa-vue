<template>
  <div id="app">
    
    <notifications></notifications>
    <side-nav></side-nav>
    <toolbar></toolbar>
    <router-view></router-view>
    <foot></foot>
    
  </div>
</template>

<script>

import Toolbar from './components/Toolbar.vue'
import Foot from './components/Foot.vue'
import Notifications from './components/Notifications.vue'
import SideNav from './components/SideNav.vue'

require('../node_modules/font-awesome/css/font-awesome.min.css')
require('../node_modules/bulma/css/bulma.css')
require('../node_modules/flexboxgrid/css/flexboxgrid.min.css')

export default {
  name: 'app',
  components: {
    Toolbar,
    SideNav,
    Foot,
    Notifications
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
@import './assets/scss/style.scss';
</style>

<template>
  <nav>
    <div id="nav-toggle"></div>
    <breadcrumbs />
    <toolbar-user-panel></toolbar-user-panel>
    <div class="datetime is-hidden-mobile">{{ datetime }}</div>
  </nav> 
</template>

<script>
import ToolbarUserPanel from './ToolbarUserPanel.vue'
import Breadcrumbs from './Breadcrumbs/Breadcrumbs.vue'

export default {
  name: 'toolbar',
  data () {
    return {
      datetime: new Date().toLocaleString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' })
    }
  },
  components: {
    ToolbarUserPanel,
    Breadcrumbs
  }
}
</script>

<style scoped>
nav {
  padding: 10px 0 0 21px;
  height: 75px;
  background-color: #343e45;
  border-width: 0 0 5px 0;
  border-color: #ececec;
  border-style: solid;
}
#nav-toggle {
  width: 29px;
  height: 21px;
  float: left;
  margin: 15px 0 0 0;
  background: url('../assets/img/hamburger.png');
}
.datetime {
  float: right;
  color: #ececec;
  margin: 15px 30px 0 0;
}
</style>

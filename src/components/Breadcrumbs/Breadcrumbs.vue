<template>
  <ul class="menu">
    <li v-for="(route, index) in $route.matched" :key="index">
      <breadcrumb :route="route"></breadcrumb>
    </li>
  </ul>
</template>

<script>
import Breadcrumb from './Breadcrumb.vue'
export default {
  name: 'breadcrumbs',
  components: {
    Breadcrumb
  }
}
</script>

<style scoped>
.menu {
  float: left;
  font-size: 16px;
  margin: 8px 0 0 46px;
}
.menu li {
  display: inline-block;
  margin: 0 15px 0 0;
}
.menu li:first-of-type {
  font-size: 24px;
}
.menu a {
  color: #ececec;
}
</style>

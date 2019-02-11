<template>
  <ul class="menu">
    <li>
      <assign-contact></assign-contact>
    </li>
  </ul>
</template>

<script>
import AssignContact from './AssignContact.vue'

export default {
  name: 'site-watch-menu',
  components: {
    AssignContact
  }
}
</script>

<style scoped lang="scss">
.menu {
  font-size: 14px;
  color: #343434;
  li {
    display: inline-block;
    margin: 0 10px 0 0;
  }
}
@media (max-width: 768px) {
  .menu {
    li {
      padding: 5px 0;
      display: block;
    }
  }
}
</style>

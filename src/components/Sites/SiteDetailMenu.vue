<template>
  <ul class="menu">
    <li>
      <router-link :to="'/'">Servisní kniha</router-link>
    </li>
    <li>
      <router-link :to="'/'">Dohled</router-link>
    </li>
    <li>
      <router-link :to="'/'">Technické informace</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'site-detail-menu'
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

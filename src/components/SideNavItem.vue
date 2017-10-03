<template>
  <router-link :to="link">
    <div class="sidenav-menu-item clearfix">
      <div class="stripe"></div>
      <img class="icon" :src="image" />
      <div class="text"><slot></slot></div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'side-nav-item',
  props: ['link', 'image']
}
</script>

<style scoped>
.icon {
  width: 40px;
  height: 43px;
  float: left;
  margin: 13px 0 13px 32px;
}
.sidenav-menu-item {
  height: 70px;
  font-size: 14px;
  color: #ececec;
}
.sidenav-menu-item:hover {
  color: #5996c6;
}
.text {
  float: left;
  margin: 27px 0 0 44px;
}
.stripe {
  width: 9px;
  height: 70px;
  position: absolute;
  left: 0;
  background-color: #5996c6;
  display: none;
}
</style>

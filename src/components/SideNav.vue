<template>
  <sidebar-menu :menu="menu" :collapsed="collapsed" :width="width" />
</template>

<script>
import ApsystemLogo from './ApsystemLogo.vue'

export default {
  name: 'side-nav',
  data () {
    return {
      menu: [
        {
          header: true,
          // title: 'Main Navigation',
          component: ApsystemLogo,
          visibleOnCollapse: false
        },
        {
          href: '/objekty',
          title: 'Objekty',
          icon: 'fa fa-building'
        },
        {
          title: 'Kontakty',
          icon: 'fa fa-address-book',
          href: '/kontakty'
        },
        {
          title: 'Registrace',
          icon: 'fa fa-user-plus',
          href: '/signin'
        }
      ],
      collapsed: true,
      width: '250px'
    }
  }
}
</script>

<style scoped>
</style>

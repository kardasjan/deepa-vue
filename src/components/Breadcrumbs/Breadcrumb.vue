<template>
  <span>
    <router-link v-if="!route.meta.bcDynamic" :to="{name: route.name}">
      {{route.meta.bcLinkText}}
    </router-link>
    <router-link v-if="route.meta.bcDynamic" :to= "{name: route.name, params: {id: $route.params.id}}">
      <template v-if="value">
        {{formattedValue}}  
      </template>
      <template v-if="!value">
        {{loadingText}}
      </template>
    </router-link>
  </span>
</template>

<script>
export default {
  name: 'breadcrumb',
  props: ['route'],
  beforeCreate () {
    this.$options.computed.value = function () {
      if (this.route.meta.bcGetter) {
        return this.$store.getters[this.route.meta.bcGetter]
      } else {
        return null
      }
    }
  },
  computed: {
    formattedValue () { return this.route.meta.bcLinkText(this.value) },
    loadingText () {
      const loadingText = this.route.meta.bcLoadingText
      return loadingText || 'Loading...'
    }
  }
}
</script>

<style scoped>
span a {
  color: #ececec;
}
span a:hover {
  color: #8f8f8f;
}
</style>

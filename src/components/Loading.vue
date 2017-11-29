<template>
  <div class="loading">
    <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style scoped lang="scss">
.loading {
  margin: 15px 0 0 15px;
  i {
    font-size: 35px;
  }
}
</style>
<template>
    <div v-if="notifications && notifications.length" class="notifications">
      <div v-for="item in notifications" :key='item.id' :class="item.cssClass">
          <button @click='closeNotification(item.id)' class="delete"></button>
          {{ item.text }}
      </div>
    </div>
</template>

<script>
export default {
  name: 'notifications',
  computed: {
    notifications () {
      return this.$store.getters.getNotifications
    }
  },
  methods: {
    closeNotification (id) {
      this.$store.commit('closeNotification', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .notification {
    min-width: 250px;
    max-width: 500px;
    margin: 10px auto;
    padding: 12px;
  }
  .notifications {
    position: fixed;
    top: 70px;
    right: 15px;
    height: 0;
    width: auto;
    z-index: 9999;
  }
</style>

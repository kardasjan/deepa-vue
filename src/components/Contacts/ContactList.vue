<template>
  <div>
    <ul class="menu-list">
      <li v-for="contact in items" :key="contact.id" :class="{active : isActive(contact.id)}" @click="selectContact(contact)">
        <a>{{ contact.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'contact-list',
  props: ['items'],
  computed: {
    active () {
      return this.$store.getters.selectedContact
    }
  },
  methods: {
    selectContact (contact) {
      this.$store.dispatch('selectContact', {id: contact.id})
      this.$router.push('/kontakty/' + contact.id)
    },
    isActive (id) {
      return this.active._id === id
    }
  }
}
</script>

<style scoped lang="scss">
.menu-list {
  li {
    padding: 10px 0 0 58px;
    height: 45px;
    font-size: 12px;
    color: #343434;
    &.active {
      background: #5996c6;
      a {
        color: #ececec;
      }
    }
    a:hover {
      background: none;
    }
  }
  li:hover {
    background: #cfcfcf;
    a {
      color: #2C2C2C;
    }
  }
}
</style>

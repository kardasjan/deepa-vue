<template>
  <ul class="menu">
    <li>
      <assign-message-types :contactId="contactId" :contactMsgTypes="contactMsgTypes"></assign-message-types>
    </li>
    <li>
      <unassign-contact :contactId="contactId" :title="contactName"></unassign-contact>
    </li>
  </ul>
</template>

<script>
import AssignMessageTypes from './AssignMessageTypes.vue'
import UnassignContact from './UnassignContact.vue'

export default {
  props: ['contactId', 'contactName', 'contactMsgTypes'],
  name: 'assigned-contact-menu',
  components: {
    AssignMessageTypes,
    UnassignContact
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

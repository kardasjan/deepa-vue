<template>
  <section class="unassign-msgtype">
    <div class="unassign-msgtype-button" @click="triggerModal"><span class="fa fa-times" /></div>
    <div class="modal" :class="{'is-active' : isActive}">
      <div class="modal-background"></div>
      <div class="modal-content">

          <h3>Opravdu chcete odebrat zprávu {{ title }}?</h3>

          <div class="field-body">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-danger" @click="unassignMessageType">
                  Odebrat
                </a>
              </p>
              <p class="control">
                <a class="button is-light" @click="triggerModal">
                  Zrušit
                </a>
              </p>
            </div>
          </div>
      </div>

      <button class="modal-close is-large" aria-label="close" @click="triggerModal"></button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'unassign-msgtype',
  props: ['id', 'contactId', 'siteId', 'title'],
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    triggerModal () {
      this.isActive = !this.isActive
    },
    unassignMessageType: function () {
      this.$store.dispatch('tryUnassignMessageType', { siteId: this.siteId, contactId: this.contactId, msgType: this.id, router: this.$router })
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped lang="scss">
.modal-content {
  background: white;
  padding: 20px 40px;
  h3 {
    font-size: 24px;
  }
  .field-body {
    margin-top: 25px;
  }
}
.unassign-msgtype-button {
    span {
        font-size: 16px;
        color: #ad4949;
        float: right;
        cursor: pointer;
    }
}
</style>

<template>
  <section class="unassign-contact">
    <a @click="triggerModal">Odebrat kontakt</a>
    <div class="modal" :class="{'is-active' : isActive}">
      <div class="modal-background"></div>
      <div class="modal-content">

          <h3>Opravdu chcete odebrat kontakt {{ title }}?</h3>

          <div class="field-body">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-danger" @click="unassignContact">
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
  name: 'unassign-contact',
  props: ['contactId', 'title'],
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    triggerModal () {
      this.isActive = !this.isActive
    },
    unassignContact: function () {
      this.$store.dispatch('tryUnassignContact', { siteId: this.site._id, contactId: this.contactId, router: this.$router })
      this.isActive = !this.isActive
    }
  },
  computed: {
    site () {
      return this.$store.getters.selectedSite
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
.unassign-contact-button {
    span {
        font-size: 16px;
        color: #ad4949;
        float: right;
        cursor: pointer;
    }
}
</style>

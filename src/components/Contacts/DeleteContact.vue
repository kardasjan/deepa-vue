<template>
  <section class="delete-contact">
    <div class="delete-contact-button" @click="triggerModal"><span class="fa fa-trash" /></div>
    <div class="modal" :class="{'is-active' : isActive}">
      <div class="modal-background"></div>
      <div class="modal-content">

          <h3>Opravdu chcete kontakt smazat?</h3>

          <div class="field-body">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-danger" @click="deleteContact">
                  Smazat kontakt
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
  name: 'delete-contact',
  props: ['id'],
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    triggerModal () {
      this.isActive = !this.isActive
    },
    deleteContact: function () {
      this.$store.dispatch('tryDeleteContact', { id: this.id, router: this.$router })
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
.delete-contact-button {
    span {
        font-size: 24px;
        color: #ad4949;
    }
}
</style>

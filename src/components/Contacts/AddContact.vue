<template>
  <section class="add-contact">
    <div class="add-contact-button" @click="triggerModal"></div>
    <div class="modal" :class="{'is-active' : isActive}">
      <div class="modal-background"></div>
      <div class="modal-content">

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Jméno</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Jméno" v-model="name">
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Telefon</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Telefon" v-model="phone">
                <span class="icon is-small is-left">
                  <i class="fa fa-phone"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Email</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Email" v-model="email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <!-- Left empty for spacing -->
          </div>
          <div class="field-body">
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-primary" @click="createContact">
                  Vytvořit kontakt
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
      </div>

      <button class="modal-close is-large" aria-label="close" @click="triggerModal"></button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'add-contact',
  data () {
    return {
      isActive: false,
      name: '',
      phone: '',
      email: ''
    }
  },
  methods: {
    triggerModal () {
      this.isActive = !this.isActive
    },
    createContact: function () {
      var contact = {
        name: this.name,
        phone: this.phone,
        email: this.email
      }
      this.$store.dispatch('tryCreateContact', { contact, router: this.$router })
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped lang="scss">
.add-contact-button {
  background: url('../../assets/img/add-site.png');
  height: 30px;
  width: 30px;
}
.modal-content {
  background: white;
  padding: 20px 0px;
}
</style>

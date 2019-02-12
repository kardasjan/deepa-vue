<template>
    <section class="section">
        <div class="form">
          <div class="field is-horizontal has-addons">
            <p class="control has-icons-left is-expanded">
              <input class="input" type="text" placeholder="Username" v-model="username">
              <span class="icon is-small is-left">
                <i class="fa fa-user"></i>
              </span>
            </p>
          </div>
          <div class="field is-horizontal has-addons">
            <p class="control has-icons-left is-expanded">
              <input class="input" type="password" placeholder="Password" v-model="password">
              <span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field is-horizontal is-grouped is-grouped-right">
            <p class="control">
              <a class="button is-success" :class="{'is-loading' : isLoading}" @click='tryLogin'>
                Registrovat
              </a>
            </p>
          </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'signin-form',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    trySignin: function () {
      this.$store.dispatch('trySignin', { username: this.username, password: this.password, router: this.$router })
    }
  },
  computed: {
    isLoading () {
      return this.$store.getters.isLoading
    }
  }
}
</script>

<style scoped lang="scss">
.form {
  max-width: 500px;
  margin: 0 auto;
}
</style>
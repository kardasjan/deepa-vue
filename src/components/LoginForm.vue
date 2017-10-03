<template>
    <div class="form container columns is-desktop is-vcentered">
      <div class="column">
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Username" v-model="username">
            <span class="icon is-small is-left">
              <i class="fa fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model="password">
            <span class="icon is-small is-left">
              <i class="fa fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success" @click='tryLogin'>
              Login
            </button>
            <button class="button is-default" @click='checkToken'>
              Check Token
            </button>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login-form',
  data () {
    return {
      username: '',
      password: '',
      msg: 'Please login first!'
    }
  },
  methods: {
    tryLogin: function () {
      this.$store.dispatch('tryLogin', { username: this.username, password: this.password, router: this.$router })
    },
    checkToken: function () {
      alert(this.token)
    }
  },
  computed: {
    errors () {
      return this.$store.state.errors
    },
    token () {
      return this.$store.state.token
    }
  }
}
</script>

<style scoped>
.form {
  padding: 80px 0;
  margin: 0 auto;
  max-width: 500px;
}
.errors {
  margin: 15px 0;
}
.columns.is-vcentered {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>
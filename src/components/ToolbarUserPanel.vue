<template>
  <div v-if="isAuthenticated" class="user-panel">
      <div v-bind:class="[isActive ? activeClass : '', constantClass]">
      <div class="dropdown-trigger" @click="toggleActive">
          <div aria-haspopup="true" aria-controls="dropdown-menu">
          <div class="user-image"></div>
          <div class="fullname is-hidden-mobile">{{ username }}</div>
          <div class="carret"></div>
          </div>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu" @click="toggleActive">
          <div class="dropdown-content">
          <a href="#" class="dropdown-item">
              Profil
          </a>
          <hr class="dropdown-divider">
          <a @click="logout" class="dropdown-item">
              Odhlásit se
          </a>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'toolbar-user-panel',
  data () {
    return {
      isActive: false,
      activeClass: 'is-active',
      constantClass: 'dropdown'
    }
  },
  computed: {
    username () {
      return this.$store.state.user.username
    },
    fullname () {
      return this.$store.state.user.fullname != null ? this.$store.state.user.fullname : 'Neznámé jméno'
    },
    isAuthenticated () {
      return this.$store.state.user.authenticated
    }
  },
  methods: {
    toggleActive () {
      this.isActive = !this.isActive
    },
    logout () {
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.user-panel {
  float: right;
  margin: 6px 25px 0 0;  
}
.user-panel .user-image {
  float: left;
  width: 44px;
  height: 44px;
  background: url('../assets/img/user-image.png');
  margin-left: 20px;
}
.user-panel .fullname {
  float: left;
  color: #ececec;
  margin: 9px 0 0 12px;
}
.user-panel .carret {
  float: left;
  width: 10px;
  height: 7px;
  margin: 20px 0 0 8px;
  background: url('../assets/img/carret.png');
}
</style>

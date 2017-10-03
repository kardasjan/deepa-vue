import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

// Fallback value if nothing found in localStorage
Vue.localStorage.get('propertyThatNotExists', 'fallbackValue') // Will return 'fallbackValue' string

export default {
  localStorage: {
    token: {
      type: String,
      default: null
    }
  }
}

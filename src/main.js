// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store.js'
import router from './router/index.js'
import localStorage from './store/localStorage.js'
import Vuebar from 'vuebar'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'

import 'document-register-element'

Vue.config.productionTip = false

Vue.use(Vuebar)
Vue.use(VueLodash, lodash)

function polyfillCE () {
  require.ensure([], require => {
    require('document-register-element')
    window.customElements.define('ceri-side-nav', require('ceri-side-nav'))
  }, 'cePoly')
}
if (!window.customElements) {
  polyfillCE()
} else {
  window.customElements.define('ceri-side-nav', require('ceri-side-nav'))
}

/* eslint-disable no-new */
export default new Vue({
  router,
  store,
  localStorage,
  el: '#app',
  template: '<App/>',
  components: { App }
})

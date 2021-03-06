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
import PrettyCheckbox from 'pretty-checkbox-vue'
import VueCollapse from 'vue2-collapse'
import VueSidebarMenu from 'vue-sidebar-menu'

Vue.config.productionTip = false

Vue.use(Vuebar)
Vue.use(VueLodash, lodash)
Vue.use(PrettyCheckbox)
Vue.use(VueCollapse)
Vue.use(VueSidebarMenu)

/* eslint-disable no-new */
export default new Vue({
  router,
  store,
  localStorage,
  el: '#app',
  template: '<App/>',
  components: { App }
})

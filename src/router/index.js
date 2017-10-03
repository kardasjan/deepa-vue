import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sites from '@/components/Sites/Sites'
import SiteDetail from '@/components/Sites/SiteDetail'
import LoginForm from '@/components/LoginForm'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      bcLinkText: 'Hlavní stránka'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm,
    meta: {
      bcLinkText: 'Přihlásit se'
    }
  },
  {
    path: '/objekty',
    name: 'Objekty',
    component: Sites,
    meta: {
      bcLinkText: 'Objekty'
    },
    children: [
      {
        path: ':slug',
        name: 'Objekt detail',
        component: SiteDetail,
        meta: {
          bcDynamic: true,
          bcGetter: 'selectedSite', // <breadcrumb> will use this getter to get the user from vuex
          bcLinkText: site => site.name,
          bcLoadingText: 'Loading...'
        }
      }
    ]
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (!router.app.$store.state.user.authenticated && to.path !== '/login') {
    router.app.$store.commit('pushNotification', {cssClass: 'notification is-info', text: 'Přihlaste se...'})
    next('/login')
  } else {
    next()
  }
})

export default router

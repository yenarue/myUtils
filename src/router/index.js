import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Building from '../components/Building.vue'
import IndentControl from '../components/IndentControl.vue'
import GunTae from '../components/GunTae.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    }, {
      path: '/warn_building',
      name: 'Building',
      component: Building,
      props: true,
    }, {
      path: '/indent_control',
      name: 'IndentControl',
      component: IndentControl,
    }, {
      path: '/guntae',
      name: 'GunTae',
      component: GunTae,
    }
  ],
})

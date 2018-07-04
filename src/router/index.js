import Vue from 'vue'
import Router from 'vue-router'
import IndentControl from '../components/IndentControl.vue'
import Main from '../components/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    }, {
      path: '/indent_control',
      name: 'IndentControl',
      component: IndentControl,
    }
  ],
})

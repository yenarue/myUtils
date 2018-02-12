import Vue from 'vue';
import Router from 'vue-router';
import IndentControl from '../components/IndentControl.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndentControl',
      component: IndentControl,
    },
  ],
});

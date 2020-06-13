import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import SingleLand from '@/components/SingleLand';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/land/:slug',
      name: 'SingleLand',
      component: SingleLand,
    },
  ],
});

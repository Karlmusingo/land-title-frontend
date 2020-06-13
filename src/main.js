// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App';
import router from './router';
import store from './store/index';

Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.token;
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' });
  else next();
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});

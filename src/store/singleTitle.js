import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
// Important attach to instance
Vue.use(Vuex);
// const { VUE_APP_SERVER_URL } = process.env;
// axios.defaults.baseURL = VUE_APP_SERVER_URL;

const states = {
  data: {
    loading: false,
    error: null,
  },
};
const getters = {
  authenticated(state) {
    return !!state.data.token || !!localStorage.token;
  },
  user(state) {
    return {
      firstName: state.data.firstName,
      lastName: state.data.lastName,
    };
  },
};
const mutations = {
  LOADING_LOGIN: (state) => {
    state.data.loading = true;
  },
  LOGIN_SUCCESS: (state, payload) => {
    state.data = {
      loading: false,
      error: null,
      ...payload,
    };
  },
  LOGIN_ERROR: (state, payload) => {
    state.data.error = payload;
    state.data.loading = false;
  },
};
const actions = {
  async login({ commit }, data) {
    try {
      commit('LOADING_LOGIN');
      const response = await axios.post('https://land-title.herokuapp.com/api/v1/auth/users/signin', data);
      const user = response.data.data;
      localStorage.token = user.token;
      localStorage.firstName = user.firstName;
      localStorage.lastName = user.lastName;
      commit('LOGIN_SUCCESS', user);
    } catch (e) {
      commit('LOGIN_ERROR', e);
    }
  },
};

export default {
  namespace: true,
  state: states,
  getters,
  mutations,
  actions,
};

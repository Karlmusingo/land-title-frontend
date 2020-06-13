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
const mutations = {
  ADD_TITLE_TITLE_LOADING: (state) => {
    state.data.loading = true;
  },
  ADD_TITLE_TITLE_SUCCESS: (state, payload) => {
    state.data = {
      loading: false,
      error: null,
      ...payload,
    };
  },
  ADD_TITLE_TITLE_ERROR: (state, payload) => {
    state.data.error = payload;
    state.data.loading = false;
  },
};
const actions = {
  async createTitle({ commit }, data) {
    try {
      commit('ADD_TITLE_TITLE_LOADING');
      const token = localStorage.token;
      const response = await axios.post(
        'http://localhost:8000/api/v1/titles/',
        data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      const title = response.data;
      commit('ADD_TITLE_TITLE_SUCCESS', title);
    } catch (e) {
      commit('ADD_TITLE_TITLE_ERROR', e.response.data);
    }
  },
};

export default {
  namespace: true,
  state: states,
  // getters,
  mutations,
  actions,
};

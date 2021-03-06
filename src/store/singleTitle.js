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
    status: 'success',
    title: [{}],
  },
};
const mutations = {
  GET_SINGLE_TITLE_LOADING: (state) => {
    state.data.loading = true;
  },
  GET_SINGLE_TITLE_SUCCESS: (state, payload) => {
    state.data = {
      loading: false,
      error: null,
      ...payload,
    };
  },
  GET_SINGLE_TITLE_ERROR: (state, payload) => {
    state.data.error = payload;
    state.data.loading = false;
  },
};
const actions = {
  async getSingleTitle({ commit }, { title }) {
    try {
      commit('GET_SINGLE_TITLE_LOADING');
      const token = localStorage.token;
      const response = await axios.get(
        `http://localhost:8000/api/v1/titles/search?param=${title}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      const user = response.data;
      commit('GET_SINGLE_TITLE_SUCCESS', user);
    } catch (e) {
      commit('GET_SINGLE_TITLE_ERROR', e.response.data);
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

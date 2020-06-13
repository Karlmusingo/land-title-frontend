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
    loading: true,
    error: null,
    status: 'success',
    title: [
      {
        createdAt: '2020-06-12T11:29:56.246Z',
        _id: '5ee36cb9da8699002aef99b0',
        title: 'manut',
        squareMeter: '60x120',
        mortgage: 'cleared',
        address: '23 kco street',
        __v: 0,
      },
    ],
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
      const response = await axios.get(
        `http://localhost:8000/api/v1/titles/search?param=${title}`,
        {
          headers: {
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTMzMDZiZGI4ZmNhMDAyYWE0NDZhZiIsImlhdCI6MTU5MTk1MDE5NywiZXhwIjoxNTkyMDM2NTk3fQ.vxzeDMQT0apVVZTAhPwplPUIdDXcKxrlpUHhBGS9n3g',
          },
        },
      );
      const user = response.data.data;
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

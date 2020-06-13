import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
import VueAxios from 'vue-axios';

import login from './login';
import singleTitle from './singleTitle';
import addTitle from './addTitle';

Vue.use(VueAxios, axios);
// Important attach to instance
Vue.use(Vuex);

// export const store = new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions,
//   modules: {
//     scoreBoard: childA,
//     resultBoard: childB
//   }
// })

export default new Vuex.Store({
  namespace: true,
  state: {
    titles: [],
    filteredTitles: [],
    loadingTitles: false,
    singleTitle: {
      loading: false,
    },
  },
  getters: {
    titlesFilterCreatedAt: state =>
      state.titles.map(title => title.created_at.substring(0, 10)),
  },
  mutations: {
    SET_TITLE: (state, payload) => {
      state.titles = payload;
    },
    SET_FILTERED_TITLE: (state, payload) => {
      state.filteredTitles = payload;
    },
    SET_LOADING_TITLE: (state, payload) => {
      state.loadingTitles = payload;
    },
    SET_SINGLE_TITLE: (state, payload) => {
      state.singleTitle = payload;
    },
  },
  actions: {
    filter({ commit }, { text }) {
      const filteredTitles = this.state.titles.filter(land =>
        land.title.includes(text),
      );
      if (text === '') commit('SET_FILTERED_TITLE', this.state.titles);
      else commit('SET_FILTERED_TITLE', filteredTitles);
    },
    async getTitles({ commit }) {
      try {
        commit('SET_LOADING_TITLE', true);
        const token = localStorage.token;
        const response = await axios.get(
          'http://localhost:8000/api/v1/titles/',
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        );
        commit('SET_LOADING_TITLE', false);
        const titles = response.data && response.data.titles;
        commit('SET_TITLE', titles);
        commit('SET_FILTERED_TITLE', titles);
      } catch (e) {
        // console.log(e);
      }
    },
  },
  modules: {
    login,
    singleTitle,
    addTitle,
  },
});

import Vue from 'vue';
import Vuex from 'vuex';
import { getters } from './getters.js';
import { mutations } from './mutations.js';
import { actions } from './actions.js';



Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    token: "",
    user:{
    },
    songs:[],

  },
  mutations,
  getters,
  actions
});

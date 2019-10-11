import Vue from 'vue';
import Vuex from 'vuex';
import app from './app';
import apply from './apply';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,apply
  },
  getters
});

export default store

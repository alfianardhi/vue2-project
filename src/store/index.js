import Vue from 'vue';
import Vuex from 'vuex';

// store modules
import product from './product';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    product,
  },
});

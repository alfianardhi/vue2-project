import { SET_PRODUCTS, CLEAR_PRODUCTS, SET_CARTS } from './types';

export default {
  [SET_PRODUCTS](state, payload) {
    state.products = payload;
  },

  [SET_CARTS](state, payload) {
    state.carts = payload;
  },

  [CLEAR_PRODUCTS](state) {
    state.products = [];
    state.carts = [];
  },
};

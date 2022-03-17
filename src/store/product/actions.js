import {
  fetchProducts, addProductToCart, removeCartItem, SET_PRODUCTS, SET_CARTS,
} from './types';

export default {
  [fetchProducts]({ commit }, payload) {
    return new Promise((resolve) => {
      commit(SET_PRODUCTS, payload);
      resolve(payload);
    });
  },

  [removeCartItem]({ state, commit }, payload) {
    return new Promise((resolve) => {
      const { carts } = state;
      const index = state.carts.indexOf(payload);

      if (index > -1) {
        const products = carts[index];

        carts.splice(index, 1);
        commit(SET_CARTS, carts);
        resolve(products);
      }
    });
  },

  [addProductToCart]({ state, commit }, payload) {
    return new Promise((resolve) => {
      const { carts } = state;
      const index = state.carts.findIndex((p) => p.id === payload.id);

      if (index > -1) {
        const item = carts[index];
        item.quantity += 1;
        item.totalPrice = item.quantity * payload.price;
      } else {
        const item = { ...payload };

        item.quantity = 1;
        item.totalPrice = payload.price;
        carts.push(item);
      }

      commit(SET_CARTS, carts);
      resolve(carts);
    });
  },
};

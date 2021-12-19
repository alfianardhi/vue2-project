import { getProducts, getCarts } from './types';

export default {
  [getProducts]: (state) => state.products,

  [getCarts]: (state) => state.carts,

};

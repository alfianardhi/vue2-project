import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Product from '../views/Product.vue';
import ProductRel from '../views/RelatedProduct.vue';
import ShoppingCart from '../views/ShoppingCart.vue';
import Success from '../views/Success.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/product/:id',
      name: 'Product',
      props: {
        default: true,
      },
      component: Product,
    },
    {
      path: '/productrel/:id',
      name: 'ProductRel',
      props: {
        default: true,
      },
      component: ProductRel,
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      component: ShoppingCart,
    },
    {
      path: '/success',
      name: 'Success',
      component: Success,
    }],
});

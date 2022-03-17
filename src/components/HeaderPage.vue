<template>
    <BaseHeader>
      <template slot="cart">
        <div class="col-lg-7 col-md-7"></div>
          <div class="col-lg-3 text-right col-md-3">
            <p>Hi! <a class="user" href="#">Sign in</a> or <a class="user" href="#">register</a></p>
              <ul class="nav-right">
                  <li class="cart-icon">
                      Cart&nbsp;
                      <a href="#">
                          <i class="icon_bag_alt"></i>
                          <span>{{ getCart.length }}</span>
                      </a>
                      <div v-if="getCart.length>0" class="cart-hover">
                          <div class="select-items">
                              <table>
                                  <tbody>
                                      <tr v-for="product in getCart" :key="product.id">
                                          <td class="si-pic">
                                              <img v-bind:src="product.photo"
                                                alt="" />
                                          </td>
                                          <td class="si-text">
                                              <div class="product-selected">
                                                  <p>${{product.price}} x {{product.quantity}}</p>
                                                  <h6>{{product.name}}</h6>
                                              </div>
                                          </td>
                                          <td v-on:click="removeCart(product)"
                                            class="si-close">
                                              <i class="ti-close"></i>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                          <div class="select-total">
                              <span>total:</span>
                              <h5>${{ totalAmount }}</h5>
                          </div>
                          <div class="select-button">
                              <router-link v-bind:to="'/cart'"
                                class="primary-btn view-card"
                                 >CHECK OUT</router-link>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
      </template>
    </BaseHeader>
</template>
<script>

import { mapGetters, mapActions } from 'vuex';
import { getCarts, removeCartItem } from '../store/product/types';

import BaseHeader from './BaseHeader.vue';

export default {
  name: 'HeaderPage',
  components: {
    BaseHeader,
  },
  data() {
    return {
    };
  },
  methods: {
    removeCart(product) {
      this.removeCartItem(product);
    },
    ...mapActions('product', [removeCartItem]),
  },
  computed: {
    getCart() {
      return this.getCarts;
    },
    totalAmount() {
      let total = 0;
      const items = this.getCarts;
      for (let i = 0; i < items.length; i += 1) {
        total += items[i].totalPrice;
      }

      return total.toFixed(2);
    },
    ...mapGetters('product', [getCarts]),
  },
};
</script>

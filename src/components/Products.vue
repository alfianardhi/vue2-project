<template>
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 mt-5" v-if="availableProducts.length > 0">
          <carousel class="product-slider" :items="3" :nav="false" :autoplay="true" :dots="false">
            <div class="product-item" v-for="item in availableProducts" v-bind:key="item.id">
              <div class="pi-pic">
                <img v-bind:src="item.galleries[0].photo" alt="" />
                <ul>
                  <li
                  v-on:click="addToCart(item)"
                    class="w-icon active"
                  >
                    <a href="#"><i class="icon_bag_alt"></i></a>
                  </li>
                  <li class="quick-view">
                    <router-link v-bind:to="'/products/' + item.id"> + Quick View</router-link>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name">{{ item.type }}</div>
                <a href="#">
                  <h5>{{ item.name }}</h5>
                </a>
                <div class="product-price">
                  ${{ item.price }}
                  <span>$900000.00</span>
                </div>
              </div>
            </div>
          </carousel>
        </div>
        <div class="col-lg-12" v-else>
          <p style="text-align:center;">Products Not Found</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import carousel from 'vue-owl-carousel';
import axios from 'axios';

import { mapActions, mapGetters } from 'vuex';
import { fetchProducts, addProductToCart, getProducts } from '../store/product/types';

export default {
  components: {
    carousel,
  },
  data() {
    return {
      errors: [],
    };
  },
  created() {
    this.doInititate();
  },
  methods: {
    doInititate() {
      axios.get('/api/products')
        .then((response) => {
          this.fetchProducts(response.data.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addToCart(item) {
      const product = {
        id: item.id,
        name: item.name,
        price: item.price,
        photo: item.galleries[0].photo,
        quantity: 0,
        totalPrice: 0,
      };

      this.addProductToCart(product);
    },
    ...mapActions('product', [fetchProducts, addProductToCart]),
  },
  computed: {
    availableProducts() {
      return this.getProducts;
    },
    ...mapGetters('product', [getProducts]),
  },
};
</script>

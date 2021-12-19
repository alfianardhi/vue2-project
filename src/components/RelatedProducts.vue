<template>
  <!-- Related Products Section End -->
  <div class="related-products spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Related Products</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 mt-5" v-if="availableProducts.length > 0">
          <carousel class="product-slider" :items="3" :nav="false" :autoplay="true" :dots="false">
            <div class="product-item" v-for="item in availableProducts" v-bind:key="item.id">
              <div class="pi-pic">
                <img v-bind:src="item.galleries[0].photo" alt="" />
                <ul>
                  <li
                    v-on:click="addToCart(item.id, item.name, item.price, item.galleries[0].photo)"
                    class="w-icon active"
                  >
                    <a href="#"><i class="icon_bag_alt"></i></a>
                  </li>
                  <li class="quick-view">
                    <router-link v-bind:to="'/productrel/' + item.id"> + Quick View</router-link>
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
         <div class="col-lg-3" v-else>
          <p style="text-align:center;">Products Not Found</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Related Products Section End -->
</template>

<script>
import carousel from 'vue-owl-carousel';

export default {
  name: 'RelatedProducts',
  components: {
    carousel,
  },
  data() {
    return {
      errors: [],
      userCart: [],
    };
  },
  created() {
    this.doInitiate();
  },
  methods: {
  },
  computed: {
    availableProducts() {
      return [];
    },
  },
};
</script>

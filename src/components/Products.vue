<template>
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 mt-5" v-if="availableProducts.length > 0">
          <carousel class="product-slider">
            <div class="product-item">
              <div class="pi-pic">
                <img src="" alt="" />
                <ul>
                  <li
                    class="w-icon active"
                  >
                    <a href="#"><i class="icon_bag_alt"></i></a>
                  </li>
                  <li class="quick-view">
                    <router-link > + Quick View</router-link>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="catagory-name"></div>
                <a href="#">
                  <h5></h5>
                </a>
                <div class="product-price">
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

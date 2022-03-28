<template>
  <div class="product">
    <HeaderPage/>
    <BreadCrumb parentPage="Home" currentPage="Detail"/>
    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="product-pic-zoom">
                                <img class="product-big-img" v-bind:src="firstImage"
                                 alt="" />
                            </div>
                            <div class="product-thumbs"
                            v-if="typeof productDetails.galleries === 'object' &&
                            Object.keys(productDetails.galleries).length > 0 ">
                            <carousel class="product-thumbs-track ps-clider"
                            :nav="false" :dots="false" :autoplay="true">
                              <div v-for="cap in productDetails.galleries" :key="cap.id">
                                <div class="pt" v-on:click="selectImage(cap.photo)"
                                v-bind:class="cap.photo === firstImage
                                ?'active':''">
                                <img v-bind:src="cap.photo" alt="" />
                                </div>
                              </div>
                            </carousel>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="product-details">
                                <div class="pd-title">
                                    <span>{{ productDetails.type }}</span>
                                    <h3>{{ productDetails.name }}</h3>
                                </div>
                                <div class="pd-desc">
                                    <span v-html="productDetails.description"></span>
                                    <h4>${{ productDetails.price }}</h4>
                                </div>
                                <div class="quantity">
                                  <router-link to="/cart">
                                    <a v-on:click="addToCart(productDetails.id,
                                    productDetails.name, productDetails.price,
                                    productDetails.galleries[0].photo)" href="#"
                                    class="primary-btn pd-cart">Add To Cart</a>
                                  </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Shop Section End -->
    <!-- <RelatedProducts/> -->
    <Footer/>
  </div>
</template>

<script>

import carousel from 'vue-owl-carousel';
import axios from 'axios';
import { mapActions } from 'vuex';
import { addProductToCart } from '../store/product/types';

import HeaderPage from '../components/HeaderPage.vue';
import Footer from '../components/Footer.vue';
// import RelatedProducts from '../components/RelatedProducts.vue';
import BreadCrumb from '../components/BreadCrumb.vue';

export default {
  name: 'product',
  components: {
    HeaderPage,
    Footer,
    // RelatedProducts,
    BreadCrumb,
    carousel,
  },
  data() {
    return {
      arrImage: [],
      firstImage: '',
      productDetails: [],
    };
  },
  mounted() {
    axios.get('/api/products', {
      params: {
        id: this.$route.params.id,
      },
    })
      .then((response) => {
        this.setProductDetails(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    selectImage(imageUrl) {
      this.firstImage = imageUrl;
    },
    setProductDetails(product) {
      this.productDetails = product;
      this.firstImage = product.galleries[0].photo;
    },
    addToCart(productId, productName, productPrice, photoProduct) {
      const productStore = {
        id: productId,
        name: productName,
        price: productPrice,
        photo: photoProduct,
      };

      console.log(`productStore --- ${JSON.stringify(productStore)}`);

      this.addProductToCart(productStore);
    },
    ...mapActions('product', [addProductToCart]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

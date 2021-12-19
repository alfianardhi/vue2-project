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
                                <img class="product-big-img" src="first_image"
                                 alt="" />
                            </div>
                            <div class="product-thumbs">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="product-details">
                                <div class="pd-title">
                                    <span></span>
                                    <h3></h3>
                                </div>
                                <div class="pd-desc">
                                    <span></span>
                                    <h4></h4>
                                </div>
                                <div class="quantity">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Shop Section End -->
    <RelatedProducts/>
    <Footer/>
  </div>
</template>

<script>

import HeaderPage from '../components/HeaderPage.vue';
import Footer from '../components/Footer.vue';
import RelatedProducts from '../components/RelatedProducts.vue';
import BreadCrumb from '../components/BreadCrumb.vue';

export default {
  name: 'relateproduct',
  components: {
    HeaderPage,
    Footer,
    RelatedProducts,
    BreadCrumb,
  },
  data() {
    return {
      arr_image: [],
      first_image: '',
      product_details: [],
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

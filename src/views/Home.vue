<template>
  <div class="home">
    <HeaderPage/>
    <Banner />
    <Products/>
    <Footer/>
  </div>
</template>

<script>

import HeaderPage from '../components/HeaderPage.vue';
import Banner from '../components/Banner.vue';
import Products from '../components/Products.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'home',
  components: {
    HeaderPage,
    Banner,
    Products,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

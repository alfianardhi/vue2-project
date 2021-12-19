<template>
<!-- Hero Section Begin -->
    <section class="hero-section">
        <carousel class="hero-items" :items="1" :nav="false">
            <div class="single-hero-items set-bg" style="background-image: url('/img/hero-1.jpg')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span>Furniture</span>
                            <h1>Family Collection</h1>
                            <p>
                                Design and build your ideal interior with Denklik projects,
                                We are ready to help you build your dream come true.
                            </p>
                            <a href="#" class="primary-btn">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-hero-items set-bg" style="background-image: url('/img/hero-2.jpg')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span>Furniture</span>
                            <h1>Office Collection</h1>
                            <p>
                                Make the interior design as you want,
                                We are ready to help you build your dream come true.
                            </p>
                            <a href="#" class="primary-btn">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-hero-items set-bg" style="background-image: url('/img/hero-3.jpg')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span>Furniture</span>
                            <h1>Home Decoration</h1>
                            <p>
                                Design and build your ideal interior with Denklik projects,
                                We are ready to help you build your dream come true.
                            </p>
                            <a href="#" class="primary-btn">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </carousel>
    </section>
    <!-- Hero Section End -->
</template>

<script>
import carousel from 'vue-owl-carousel';

export default {
  name: 'Banner',
  components: {
    carousel,
  },
};
</script>

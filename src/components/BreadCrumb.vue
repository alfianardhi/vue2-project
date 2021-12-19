<template>
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text product-more">
                        <router-link to="/"><i class="fa fa-home"></i>{{parentPage}}</router-link>
                        <span>{{currentPage}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Begin -->
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    parentPage: {
      type: String,
      required: true,
    },
    currentPage: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
<!-- Header Section Begin -->
    <header class="header-section">
        <div class="container">
            <div class="inner-header">
                <div class="row">
                    <div class="col-lg-2 col-md-2">
                        <div class="logo">
                            <router-link to='/'>
                                <img src="img/Denklik.svg" alt="" />
                            </router-link>
                        </div>
                    </div>
                    <slot name="cart"></slot>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'BaseHeader',
};
</script>

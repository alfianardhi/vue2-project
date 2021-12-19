<template>
  <div class="shoppingcart">
    <!-- Header Section Begin -->
    <BaseHeader/>
    <BreadCrumb parentPage="Home" currentPage="Shopping Chart"/>

    <!-- Shopping Cart Section Begin -->
    <section class="shopping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-12" v-if="getCart && getCart.length > 0">
                            <div class="cart-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th class="p-name text-center">Product Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="cart-pic first-row">
                                                <img src="" />
                                            </td>
                                            <td class="cart-title first-row text-center">
                                                <h5></h5>
                                            </td>
                                            <td class="p-price first-row"></td>
                                            <td class="p-price first-row"></td>
                                            <td class="delete-item">
                                                <a href="#">
                                                <i class="material-icons">
                                              close
                                              </i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-lg-12" v-else>
                                <p style="text-align:center;">No Transaction</p>
                            </div>
                        <div class="col-lg-8">
                            <h4 class="mb-4">
                                Informasi Pembeli:
                            </h4>
                            <div class="user-checkout">
                                <form>
                                    <div class="form-group">
                                        <label for="namaLengkap">Your name</label>
                                        <input type="text" class="form-control" id="namaLengkap"
                                         aria-describedby="namaHelp" placeholder="Input Name"
                                         v-model="customerInfo.name" >
                                    </div>
                                    <div class="form-group">
                                        <label for="namaLengkap">Email Address</label>
                                        <input type="email" class="form-control" id="emailAddress"
                                         aria-describedby="emailHelp" placeholder="Input Email"
                                         v-model="customerInfo.email">
                                    </div>
                                    <div class="form-group">
                                        <label for="namaLengkap">No. HP</label>
                                        <input type="text" class="form-control" id="noHP"
                                         aria-describedby="noHPHelp" placeholder="Input No. HP"
                                         v-model="customerInfo.number">
                                    </div>
                                    <div class="form-group">
                                        <label for="alamatLengkap">Address</label>
                                        <textarea class="form-control" id="alamatLengkap"
                                         rows="3" v-model="customerInfo.address"></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="proceed-checkout">
                                <ul>
                                    <li class="subtotal">ID Transaction <span>#SH12000</span></li>
                                    <li class="subtotal mt-3">Subtotal
                                         <span></span></li>
                                    <li class="subtotal mt-3">Pajak <span>10%</span></li>
                                    <li class="subtotal mt-3">Total Amount
                                         <span></span></li>
                                    <li class="subtotal mt-3">Bank Transfer
                                         <span>Mandiri</span></li>
                                    <li class="subtotal mt-3">No. Rekening
                                         <span>3319 2997 2514</span></li>
                                    <li class="subtotal mt-3">Nama Penerima
                                         <span>Denklik</span></li>
                                </ul>
                                <a href="#"
                                 class="proceed-btn primary-btn">I ALREADY PAID</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Shopping Cart Section End -->

    <Footer/>
  </div>
</template>

<script>

import Footer from '../components/Footer.vue';
import BaseHeader from '../components/BaseHeader.vue';
import BreadCrumb from '../components/BreadCrumb.vue';

export default {
  name: 'shoppingcart',
  components: {
    BaseHeader,
    Footer,
    BreadCrumb,
  },
  data() {
    return {
      customerInfo: {
        name: '',
        email: '',
        number: '',
        address: '',
      },
    };
  },
  methods: {
  },
  computed: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

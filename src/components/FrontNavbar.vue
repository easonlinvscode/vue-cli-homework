<template>
  <nav class="navbar navbar-expand-lg navbar-light " style="background-color: #00E3E3;">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <router-link class="navbar-brand" to='/'>專案名稱</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to='/'>首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to='/products'>產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to='/cart'>購物車</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to='/admin'>後台</router-link>
          </li> -->
        </ul>
      </div>
      <button type="button" class="btn btn-primary">
        結帳
        <span class="badge rounded-pill bg-danger">{{ cartData.carts.length }}</span>
      </button>

      <router-link  class="btn btn-warning ms-2" to='/login'>後台登入</router-link>

    </div>

  </nav>
</template>

<script>
import emitter from '../libs/emitter';

const apiUrl = `${process.env.VUE_APP_API}`;
const apiPath = `${process.env.VUE_APP_PATH}`;

export default {
  data() {
    return {
      cartData: {
        carts: [],
      },
    };
  },
  methods: {
    // 取得購物車列表
    getCart() {
      this.$http.get(`${apiUrl}/api/${apiPath}/cart`)
        .then((res) => {
          // console.log(res);
          this.cartData = res.data.data;
        })
        .catch((error) => {
          console.log(error.data.message);
        });
    },

  },
  mounted() {
    // this.checkLoginStatus();
    this.getCart();
    emitter.on('get-cart', () => {
      this.getCart();
    });
  },
};

</script>

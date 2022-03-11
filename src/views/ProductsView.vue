<template>
  <div>
    <h2>前台-產品列表</h2>

     <Loading :active="isLoading"></Loading>
    <div class="container">
        <table class="table align-middle">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td style="width: 200px">
              <div :style="{backgroundImage:`url(${product.imageUrl})`}" style="
                      height: 100px;
                      background-size: cover;
                      background-position: center;
                    "></div>
            </td>
            <td>{{ product.title  }}</td>
            <td>
              <div class="h5" v-if="product.price == product.origin_price">
                {{ product.price }} 元
              </div>
              <div v-else>
                <del class="h6">原價 {{ product.origin_price }} 元</del>
                <div class="h5">現在只要 {{ product.price }} 元</div>
              </div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <!-- <button @click="openProductModal(product.id)" type="button"
                  class="btn btn-outline-secondary">
                  查看更多
                </button> -->
                <router-link class="btn btn-outline-secondary"
                :to="`/product/${product.id}`">查看更多</router-link>
                <button type="button" class="btn btn-danger" @click="addToCart(product.id)"
                  :disabled="loadingStatus.loadingItem === product.id">
                  <span class="spinner-grow spinner-grow-sm"
                    v-show="loadingStatus.loadingItem === product.id"></span>
                  加到購物車
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import emitter from '../libs/emitter';

export default {
  data() {
    return {
      products: [],
      loadingStatus: {
        loadingItem: '',
      },
      isLoading: false,
    };
  },
  methods: {
    // 帶入產品data
    getProducts() {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products;
          this.isLoading = false;
        });
    },
    // 加入購物車
    addToCart(id, qty = 1) {
      this.isLoading = true;
      const data = {
        product_id: id,
        qty,
      };
      this.loadingStatus.loadingItem = id;
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, {
        data,
      })
        .then(() => {
          //   console.log(res);
          this.loadingStatus.loadingItem = '';
          //   this.$refs.productModal.closeModal();
          emitter.emit('get-cart');
          this.isLoading = false;
        });
    },
  },
  mounted() {
    // 執行：帶入產品data
    this.getProducts();
  },

};

</script>

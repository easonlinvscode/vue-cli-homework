<template>
  <div>
    <h2>前台-產品列表</h2>
    <!-- {{ products }} -->
    <div class="container">
      <!-- row決定內層的寬度 -->
      <div class="row row-cols-md-4 row-cols-1 g-3">
        <!-- 內層不定義寬度 -->
        <div class="col" v-for="product in products" :key="product.id">
          <div class="card h-100">
            <img :src="product.imageUrl" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text"> {{ product.description }} </p>
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
            <div class="card-footer">
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
              <router-link class="btn btn-primary" :to="`/product/${product.id}`">查看商品</router-link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      //   console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
        //   console.log(res.data.products);
          this.products = res.data.products;
        });
    },
  },
  mounted() {
    this.getProducts();
  },

};

</script>

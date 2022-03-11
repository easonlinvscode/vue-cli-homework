<template>
    <div>
        <h2>單一產品頁面</h2>
        <img :src="product.imageUrl" alt="">
        {{ product }}
    </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProduct() {
    //   console.log(this.$route.params);
      const { id } = this.$route.params;
      this.$http.get(`${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
        //   console.log(res.data.product);
          this.product = res.data.product;
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>

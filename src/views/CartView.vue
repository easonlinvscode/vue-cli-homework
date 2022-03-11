<template>
  <div>
    <h2>購物車</h2>
    <Loading :active="isLoading"></Loading>
  </div>

  <div class="container">
    <div class="mt-4">
      <!-- 產品Modal -->
      <!-- <product-modal :id="productId"
      ref="productModal" @add-cart="addToCart"></product-modal> -->

      <!-- 產品Modal -->

      <!-- 購物車列表 -->
      <div class="text-end" v-show="cartData.carts.length !== 0">
        <button class="btn btn-outline-danger" type="button" @click="removerCartAll">
          清空購物車
        </button>
      </div>

      <table class="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <!-- 購物車資料有沒有存在 -->
          <template v-if="cartData.carts">
            <tr v-for="cartItem in cartData.carts" :key="cartItem.id">
              <td>
                <button type="button" class="btn btn-outline-danger btn-sm"
                  @click="removerCartItem(cartItem.id)"
                  :disabled="loadingStatus.loadingItem === cartItem.id">
                  x
                </button>
              </td>
              <td>
                {{ cartItem.product.title }}
                <!-- <div class="text-success">已套用優惠券</div> -->
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <!-- <input min="1" type="number" class="form-control"
                          v-model="cartItem.qty"/> -->
                    <select id="" class="form-select" v-model="cartItem.qty"
                      @change="updateCartItem(cartItem)"
                      :disabled="loadingStatus.loadingItem === cartItem.id">
                      <option v-for="num in 20" :key="`${num}-${cartItem.id}`" :value="num">
                        {{ num }}
                      </option>
                    </select>
                    <span class="input-group-text"
                      id="basic-addon2">{{ cartItem.product.unit }}</span>
                  </div>
                </div>
              </td>
              <td class="text-end">
                {{ cartItem.product.price }}
              </td>
            </tr>
            <div v-show="cartData.carts.length === 0">
              <h1>尚未有商品加入</h1>
            </div>
          </template>
          <!-- {{cartData.carts}} -->
          <!-- <template v-else>

          </template> -->

        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{ cartData.total }}</td>
          </tr>
          <!-- <tr>
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ }}</td>
              </tr> -->
        </tfoot>
      </table>
    </div>
    <div class="my-5 row justify-content-center">
      <Form ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field id="email" name="email" type="email" class="form-control"
            :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email"
            rules="email|required" v-model="form.user.email"></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field id="name" name="姓名" type="text" class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required"
            v-model="form.user.name"></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field id="tel" name="電話" type="text" class="form-control"
            :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話" rules="required"
            v-model="form.user.tel"></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field id="address" name="地址" type="text" class="form-control"
            :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址" rules="required"
            v-model="form.user.address"></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea name="" id="message" class="form-control" cols="30" rows="10"
            v-model="form.message"></textarea>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-danger" :disabled="Object.keys(errors).length > 0
               || cartData.carts.length === 0">送出訂單</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import emitter from '../libs/emitter';

export default {
  data() {
    return {
      cartData: {
        carts: [],
      },
      products: [],
      //   productId: '',
      loadingStatus: {
        loadingItem: '',
      },
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    // 帶入產品data
    getProducts() {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          // console.log(res);
          this.products = res.data.products;
          // console.log(this.products);
        });
    },

    // 取得購物車列表
    getCart() {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.isLoading = false;
          this.cartData = res.data.data;
        });
    },

    // 刪除購物車單一品項
    removerCartItem(id) {
      //   console.log(id);
      this.loadingStatus.loadingItem = id;
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then(() => {
          //   console.log(res);
          this.getCart();
          this.loadingStatus.loadingItem = '';
          emitter.emit('get-cart');
        });
    },
    // 刪除購物車所有品項
    removerCartAll() {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`)
        .then(() => {
          this.getCart();
          emitter.emit('get-cart');
        });
      // .then((res) => {
      //   //  console.log(res);
      //   alert(res.data.message);
      //   this.getCart();
      //   console.log(this.cartData.carts);
      // })
      // .catch((error) => {
      //   alert(error.data.message);
      // });
    },

    // 更新購物車列表品項數量
    updateCartItem(item) {
      const data = {
        product_id: item.id,
        qty: item.qty,
      };
      this.loadingStatus.loadingItem = item.id;
      this.$http
        .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, {
          data,
        })
        .then(() => {
          // console.log(res);
          //   alert(res.data.message);
          this.getCart();
          this.loadingStatus.loadingItem = '';
        }).catch(() => {
          //   alert(err.data.message);
          this.loadingStatus.loadingItem = '';
        });
    },
    // 新增訂單
    createOrder() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http
        .post(url, {
          data: order,
        })
        .then((response) => {
          console.console.log(response.data.message);
          this.$refs.form.resetForm();
          this.isLoading = false;
        })
        .catch((err) => {
          console.console.log(err.data.message);
        });
    },

  },
  mounted() {
    // 執行：帶入產品data
    this.getProducts();
    // 執行；取得購物車列表
    this.getCart();
  },
};

</script>

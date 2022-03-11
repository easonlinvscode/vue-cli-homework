<template>
 <nav class="navbar navbar-expand-lg navbar-light " style="background-color: #00E3E3;">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <router-link class="navbar-brand" to='/'>回到首頁</router-link>

    </div>

  </nav>
  <div class="body">
    <div class="login-container">
      <div style="margin:30px">
        <h2 class="text-center">登入頁面</h2>
      </div>
      <div class="container">
        <div class="row">
          <form class="form-signin" @submit.prevent="login">
            <div class="row">
              <div class="col-md-12 form-group mb-3">
                <input type="email" class="form-control" v-model="user.username"
                  placeholder="name@example.com" autocomplete="name@example.com" required>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 form-group mb-3">
                <input type="password" class="form-control" v-model="user.password"
                  placeholder="Password" autocomplete="Password" required>
              </div>
            </div>
            <span v-if="hintMessage == '1'" class="alert-danger">帳號或密碼輸入錯誤</span>
            <span v-else-if="hintMessage == '0'" class="alert-success">登入成功</span>
            <button class="btn btn-lg btn-warning w-100 mt-3" type="submit">
              登入
            </button>

          </form>
        </div>
        <p class="copyright ">
          &copy; 2022~∞ - Eason
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const apiUrl = `${process.env.VUE_APP_API}`;
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      hintMessage: '',
    };
  },
  methods: {

    login() {
      const api = `${apiUrl}/v2/admin/signin`;
      this.$http.post(api, this.user).then((response) => {
        console.log(response.data);
        // 寫入 cookie token
        // expires 設置有效時間
        if (response.data.success) {
          this.hintAlert = '0';
          const {
            token,
            expired,
          } = response.data;
          document.cookie = `cakeToken=${token}; expires=${new Date(expired)};`;
          // 使用 $router.push 進行轉址的動作
          this.$router.push('/admin/products');
        }
      }).catch((error) => {
        // alert(error.data.message);
        console.log(error.response.data.message);
        this.hintMessage = '1';
      });
    },

  },
};

</script>

<style lang="scss" scoped>
  .body {
    // background-color: #5286F3;
    font-size: 14px;
    color: #fff;

  }

  .login-container {
    /* border: red solid; */
    width: 300px;
    max-width: 100%;
    /* margin: 50px auto; */
    margin: 10% auto;
    height: 420px;
    padding: 20px;
    background-color: rgba(43, 142, 249);

  }

  .login-container h2 {
    text-align: center;
    font-size: 20px;
  }

  .login-container .btn-login {
    background-color: #FF5964;
    color: #fff;
  }

  a {
    color: #fff;
  }

  .copyright {
    width: 130px;
    margin: auto;
    margin-top: 50%;
  }

</style>

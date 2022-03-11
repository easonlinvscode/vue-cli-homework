<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to='/admin'>後台</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to='/admin/products'>後台產品列表</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to='/admin/coupon'>優惠券</router-link>
            </li>
          </ul>
        </div>
        <transition name="fadeBtn" mode="out-in">
          <!-- <button v-if="logoutBtn" @click="logout" class="btn btn-warning" type="button">
            登出
          </button> -->
          <button v-if="logoutBtn"
          @click.prevent="singout"
          class="btn btn-warning" type="button">
            登出
          </button>
          <button v-else class="btn btn-danger" type="button">
            已登出...
          </button>
        </transition>
      </div>
    </nav>
    <!-- <h1>後台</h1> -->
    <router-view></router-view>
  </div>
</template>

<script>
// const apiUrl = `${process.env.VUE_APP_API}/v2/admin/signin`;
const apiUrl = `${process.env.VUE_APP_API}`;

export default {
  data() {
    return {
      logoutBtn: true,
    };
  },
  methods: {
    // 登出
    // logout() {
    //   this.logoutBtn = false;
    //   this.$http.post(`${apiUrl}/v2/logout`)
    //     .then((response) => {
    //       console.log(response.data);
    //       if (response.data.success) {
    //         this.$router.push('/login');
    //       }
    //     })
    //     .catch((error) => {
    //       console.dir(error);
    //     });
    // },
    singout() {
      document.cookie = 'hexToken=;expires=;';
      this.$router.push('/login');
    },

    // 查看是否登入
    checkLoginStatus() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)cakeToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1');
      this.$hppt.defaults.headers.common.Authorization = `${token}`;

      this.$hppt.post(`${apiUrl}/v2/admin/signin/api/user/check`)
        .then((response) => {
          console.log(response.data);
          if (response.data.success === false) {
            // parent.window.location.replace('./index.html');
            // alert(response.data.message);
            this.$router.push('/login');
          }
        })
        .catch(() => {
          this.$router.push('/login');
          // parent.window.location.replace('./index.html');
          // alert('請重新登入');
        });
    },
  },
};

</script>

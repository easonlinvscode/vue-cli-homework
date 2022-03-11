<template>
  <div>
    <FrontNavbar></FrontNavbar>
    <router-view></router-view>
<!-- ProductView.vue  -->
  </div>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';

export default {
  data() {
    return {

    };
  },
  components: {
    FrontNavbar,
  },

};
</script>

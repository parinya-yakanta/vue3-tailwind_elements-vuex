<template>
  <div class="home">
    <WebLayout>
      <DetailShopComponent />
    </WebLayout>
  </div>
</template>

<script>
import WebLayout from "@/layouts/web";
import DetailShopComponent from "../../components/DetailShop.vue";

export default {
  name: "DetailShopView",
  components: {
    WebLayout,
    DetailShopComponent,
  },
};
</script>

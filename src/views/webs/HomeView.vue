<template>
  <div class="home">
    <WebLayout>
      <ProductComponent />
    </WebLayout>
  </div>
</template>

<script>
import WebLayout from "@/layouts/web";
import ProductComponent from "../../components/Product.vue";

export default {
  name: "HomeView",
  components: {
    WebLayout,
    ProductComponent,
  },
};
</script>

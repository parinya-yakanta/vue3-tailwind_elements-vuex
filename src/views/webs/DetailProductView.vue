<template>
  <div class="home">
    <WebLayout>
      <DetailProductComponent />
    </WebLayout>
  </div>
</template>

<script>
import WebLayout from "@/layouts/web";
import DetailProductComponent from "../../components/DetailProduct.vue";

export default {
  name: "DetailProductView",
  components: {
    WebLayout,
    DetailProductComponent,
  },
};
</script>

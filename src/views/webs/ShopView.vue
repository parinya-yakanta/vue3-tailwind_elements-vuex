<template>
  <div>
    <WebLayout>
      <ShopComponent />
    </WebLayout>
  </div>
</template>

<script>
import WebLayout from "@/layouts/web.vue";
import ShopComponent from "@/components/Shop.vue";
WebLayout;
export default {
  components: { WebLayout, ShopComponent },
};
</script>

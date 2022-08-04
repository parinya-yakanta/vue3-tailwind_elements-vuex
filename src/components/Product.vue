<template>
  <div class="mx-auto px-2">
    <div class="w-full mx-auto py-6 px-4 sm:py-2 sm:px-2 lg:w-full lg:px-6">
      <div class="border-b-sky-400 border-b-2 border-solid">
        <h1>รายการสินค้า</h1>
      </div>
      <div
        class="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 xl:gap-x-4"
      >
        <div
          class="group relative border-solid border border-sky-200 shadow-gray-200 shadow-sm p-2 hover:border-2 hover:border-lime-500"
          v-for="(product, i) in products"
          :key="i"
          @click="detailProduct(i)"
        >
          <div
            class="w-full min-h-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-90 lg:h-50 lg:aspect-none"
          >
            <img
              :src="product.image.toString()"
              class="w-full object-center object-cover xl:h-44 lg:h-48 md:h-56 sm:h-56"
            />
          </div>
          <p class="text-xs text-gray-800">{{ product.name }}</p>

          <div class="mt-4 flex justify-between">
            <p class="text-xs font-medium text-gray-900">
              ฿ {{ product.price }}
            </p>
            <div>
              <h3 class="text-xs text-gray-500">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  ขายแล้ว 0 ชิ้น
                </a>
              </h3>
            </div>
          </div>
        </div>

        <!-- More products... -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductComponent",
  created() {
    this.findAllProducts();
    this.getAllProducts();
  },
  computed: {
    products() {
      return this.getAllProducts();
    },
  },
  methods: {
    ...mapActions({
      findAllProducts: "product/products",
    }),
    ...mapGetters({
      getAllProducts: "product/getAllProducts",
    }),
    detailProduct(value) {
      console.log(value);
      this.$router.replace({ path: "/detail-product" });
    },
  },
};
</script>

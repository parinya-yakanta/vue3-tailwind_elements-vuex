<template>
  <div>
    <AdminLayout>
      <article
        class="hidden xl:flex xl:flex-col w-full border-r border-gray-200 h-screen"
      >
        <!-- content -->
        <TopMenuAdmin />
        <div class="flex-1 overflow-y-auto">
          <!-- Profile header -->
          <div>
            <div>
              <img
                class="h-28 w-full object-cover lg:h-60"
                src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
            </div>
          </div>

          <!-- Tabs -->
          <div class="mt-10 sm:mt-2 2xl:mt-5">
            <div class="border-b border-gray-300">
              <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav
                  class="-mb-px flex justify-between space-x-8"
                  aria-label="Tabs"
                >
                  <div class="w-6/12 py-2 px-2">
                    <span class="text-2xl text-indigo-700"
                      >ร้านสหภัณฑ์การเกษตร</span
                    >
                    <p class="text-xs">จำหน่ายอุปกรณ์การเกษตร</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="inline-flex justify-center px-4 py-2 mx-1 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >
                      <!-- Heroicon name: solid/mail -->
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>

                      <span class="text-md">แก้ไข</span>
                    </button>
                    <router-link to="/add-product">
                      <button
                        type="button"
                        class="inline-flex justify-center px-4 py-2 mx-1 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:shadow-md hover:shadow-gray-400"
                      >
                        <!-- Heroicon name: solid/mail -->
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>

                        <span class="text-md">เพิ่มสินค้าใหม่</span>
                      </button>
                    </router-link>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <!-- products -->
          <div
            class="mt-2 grid grid-cols-1 gap-y-6 gap-x-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-2 px-2"
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
      </article>
    </AdminLayout>
  </div>
</template>

<script>
import AdminLayout from "../../layouts/admin.vue";
import TopMenuAdmin from "@/components/admins/TopMenuAdmin.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MyShopView",
  components: { AdminLayout, TopMenuAdmin },
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
  data() {
    return {
      page: "MyShop",
    };
  },
};
</script>

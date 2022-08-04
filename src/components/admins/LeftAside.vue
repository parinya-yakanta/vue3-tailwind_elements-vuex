<template>
  <div>
    <aside
      class="hidden xl:flex xl:flex-col w-80 border-r border-gray-200 h-screen"
    >
      <div
        class="px-6 pt-6 pb-4 border-solid border-b shadow-red-700 shadow-sm border-amber-400 bg-gradient-to-b from-indigo-500 to-pink-500 flex justify-center text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <h2 class="text-xl font-medium text-white">My Shops</h2>
      </div>
      <!-- Directory list -->
      <nav class="flex-1 overflow-y-scroll" aria-label="Directory">
        <div class="relative">
          <ul role="list" class="relative z-0 divide-y divide-gray-200">
            <li
              v-show="getAllShops === null"
              class="flex justify-center py-4 px-2"
            >
              <router-link to="/add-shop">
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

                  <span class="text-md">เพิ่มร้านค้าใหม่</span>
                </button>
              </router-link>
            </li>
            <li
              v-for="shop in shops"
              :key="shop.id"
              @click="detailShop(shop.id)"
            >
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-lg border-collapse border border-lime-600"
                    :src="shop.image"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-shop" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      {{ shop.name }}
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      {{ shop.code }}
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      Tel. {{ shop.phone }}
                    </p>
                  </router-link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "LeftAside",
  created() {
    this.findAllShops();
    this.getAllShops();
  },
  computed: {
    shops() {
      return this.getAllShops();
    },
  },
  methods: {
    ...mapActions({
      findAllShops: "shop/shops",
    }),
    ...mapGetters({
      getAllShops: "shop/getAllShops",
    }),
    detailShop(value) {
      console.log(value);
      // this.$router.replace({ path: "/detail-sh" });
    },
  },
};
</script>

<template>
  <div class="mx-auto px-2">
    <div class="w-full mx-auto py-6 px-4 sm:py-2 sm:px-2 lg:w-full lg:px-6">
      <div class="border-b-sky-400 border-b-2 border-solid">
        <h1>ร้านค้า ช๊อปเลย วิ้ดวิ้ววว..</h1>
      </div>
      <div
        class="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-4"
      >
        <div
          class="group relative border-solid border border-sky-200 shadow-gray-200 shadow-sm p-2 hover:border-2 hover:border-lime-600"
          v-for="(shop, i) in shops"
          :key="i"
          @click="detailShop(i)"
        >
          <div
            class="w-full min-h-40 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-90 lg:h-50 lg:aspect-none"
          >
            <img
              :src="shop.image"
              alt="Front of men&#039;s Basic Tee in black."
              class="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
          <p class="text-sm pt-1 text-gray-800">{{ shop.name }}</p>

          <div class="mt-2">
            <h3 class="text-xs text-gray-500">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                {{ shop.description }}
              </a>
            </h3>
          </div>
        </div>

        <!-- More products... -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopComponent",
  methods: {
    detailShop(value) {
      console.log(value);
      this.$router.replace({ path: "/detail-shop" });
    },
  },
  data() {
    return {
      shops: [
        {
          name: "ร้านสหภัณฑ์การเกษตร ศิริการพนัน กรุ๊ป",
          owner: "จอร์น วิค",
          description: "ขายอุปกรณ์การเกษตร จำหน่ายอุปกรณ์การฆ่าหญ้าแมลงทุกชนิด",
          phone: "09876789009",
          location: { long: "16.009702", lat: "101.015257" },
          image:
            "https://www.brandage.com/images/paragraph/4926E19-D45B114-EABF509.jpg",
        },
        {
          name: "ร้านสหภัณฑ์การเกษตร ศิริการพนัน กรุ๊ป",
          owner: "จอร์น วิค",
          description: "ขายอุปกรณ์การเกษตร จำหน่ายอุปกรณ์การฆ่าหญ้าแมลงทุกชนิด",
          phone: "09876789009",
          location: { long: "16.009702", lat: "101.015257" },
          image:
            "https://www.brandage.com/images/paragraph/4926E19-D45B114-EABF509.jpg",
        },
        {
          name: "ร้านสหภัณฑ์การเกษตร ศิริการพนัน กรุ๊ป",
          owner: "จอร์น วิค",
          description: "ขายอุปกรณ์การเกษตร จำหน่ายอุปกรณ์การฆ่าหญ้าแมลงทุกชนิด",
          phone: "09876789009",
          location: { long: "16.009702", lat: "101.015257" },
          image:
            "https://www.brandage.com/images/paragraph/4926E19-D45B114-EABF509.jpg",
        },
        {
          name: "ร้านสหภัณฑ์การเกษตร ศิริการพนัน กรุ๊ป",
          owner: "จอร์น วิค",
          description: "ขายอุปกรณ์การเกษตร จำหน่ายอุปกรณ์การฆ่าหญ้าแมลงทุกชนิด",
          phone: "09876789009",
          location: { long: "16.009702", lat: "101.015257" },
          image:
            "https://www.brandage.com/images/paragraph/4926E19-D45B114-EABF509.jpg",
        },
        {
          name: "ร้านสหภัณฑ์การเกษตร ศิริการพนัน กรุ๊ป",
          owner: "จอร์น วิค",
          description: "ขายอุปกรณ์การเกษตร จำหน่ายอุปกรณ์การฆ่าหญ้าแมลงทุกชนิด",
          phone: "09876789009",
          location: { long: "16.009702", lat: "101.015257" },
          image:
            "https://www.brandage.com/images/paragraph/4926E19-D45B114-EABF509.jpg",
        },
        {
          name: "ร้านสหภัณฑ์การเกษตร ศิริการพนัน กรุ๊ป",
          owner: "จอร์น วิค",
          description: "ขายอุปกรณ์การเกษตร จำหน่ายอุปกรณ์การฆ่าหญ้าแมลงทุกชนิด",
          phone: "09876789009",
          location: { long: "16.009702", lat: "101.015257" },
          image:
            "https://www.brandage.com/images/paragraph/4926E19-D45B114-EABF509.jpg",
        },
        {
          name: "ร้านสหภัณฑ์การเกษตร ศิริการพนัน กรุ๊ป",
          owner: "จอร์น วิค",
          description: "ขายอุปกรณ์การเกษตร จำหน่ายอุปกรณ์การฆ่าหญ้าแมลงทุกชนิด",
          phone: "09876789009",
          location: { long: "16.009702", lat: "101.015257" },
          image:
            "https://www.brandage.com/images/paragraph/4926E19-D45B114-EABF509.jpg",
        },
        {
          name: "ร้านสหภัณฑ์การเกษตร ศิริการพนัน กรุ๊ป",
          owner: "จอร์น วิค",
          description: "ขายอุปกรณ์การเกษตร จำหน่ายอุปกรณ์การฆ่าหญ้าแมลงทุกชนิด",
          phone: "09876789009",
          location: { long: "16.009702", lat: "101.015257" },
          image:
            "https://www.brandage.com/images/paragraph/4926E19-D45B114-EABF509.jpg",
        },
        {
          name: "ร้านสหภัณฑ์การเกษตร ศิริการพนัน กรุ๊ป",
          owner: "จอร์น วิค",
          description: "ขายอุปกรณ์การเกษตร จำหน่ายอุปกรณ์การฆ่าหญ้าแมลงทุกชนิด",
          phone: "09876789009",
          location: { long: "16.009702", lat: "101.015257" },
          image:
            "https://www.brandage.com/images/paragraph/4926E19-D45B114-EABF509.jpg",
        },
      ],
    };
  },
};
</script>

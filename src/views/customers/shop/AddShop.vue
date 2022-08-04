<template>
  <div>
    <AdminLayout>
      <article
        class="flex-col sm:w-full md:w-10/12 lg:w-10/12 lg:mx-auto md:mx-auto sm:mx-auto xl:w-full flex justify-center border-r border-gray-200 h-screen"
      >
        <div class="flex justify-center py-5 px-2 border-b border-gray-300">
          <span class="block font-bold text-gray-600">เพิ่มร้านค้าใหม่</span>
        </div>
        <!-- Directory list -->
        <nav class="flex-1 overflow-y-scroll" aria-label="Directory">
          <div class="relative px-4 pt-5 pb-16">
            <!-- form -->

            <form
              @submit.prevent="submit"
              class="space-y-8 divide-y divide-gray-200"
            >
              <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                  <div>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                      กรอกข้อมูลร้านค้าของท่าน. {{ form }}
                    </p>
                  </div>

                  <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                      <label
                        for="username"
                        class="block text-md font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        รูปปกร้านค้า
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                          <div
                            class="relative inline-block overflow-hidden w-full"
                          >
                            <div v-if="!form.image">
                              <label
                                class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300"
                              >
                                <div
                                  class="flex flex-col items-center justify-center pt-7"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    />
                                  </svg>
                                  <p
                                    class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600"
                                  >
                                    Attach a file
                                  </p>
                                </div>

                                <input
                                  type="file"
                                  accept="image/*"
                                  class="opacity-0"
                                  ref="file"
                                  @change="change"
                                />
                              </label>
                            </div>
                            <div v-else>
                              <div
                                class="relative inline-block overflow-hidden"
                              >
                                <input
                                  type="file"
                                  accept="image/*"
                                  class="hidden"
                                  ref="file"
                                  @change="change"
                                />

                                <img
                                  :src="form.image"
                                  alt="image"
                                  class="h-full w-full object-cover px-4 py-2"
                                />

                                <div
                                  class="absolute top-0 h-full w-full bg-black bg-opacity-25 flex items-center justify-center"
                                >
                                  <button
                                    type="button"
                                    @click="browse()"
                                    class="rounded-lg px-auto bg-white bg-opacity-25 border border-solid border-sky-500 hover:bg-amber-500 hover:text-black p-2 focus:outline-none text-white transition duration-200"
                                  >
                                    <span class="text-2xl"> Browse </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                      <label
                        for="name"
                        class="block text-md font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        ชื่อร้านค้า
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                          <input
                            v-model="form.name"
                            type="text"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="name"
                            placeholder="ชื่อร้านค้า"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                      <label
                        for="shopKeeper"
                        class="block text-md font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        ชื่อเจ้าของร้านค้า
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                          <input
                            v-model="form.shopKeeper"
                            type="text"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="shopKeeper"
                            placeholder="ชื่อเจ้าของร้านค้า"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                      <label
                        for="shopType"
                        class="block text-md font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        ประเภทของร้านค้า
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <textarea
                          v-model="form.shopType"
                          id="shopType"
                          placeholder="ประเภทของร้านค้า"
                          rows="2"
                          class="max-w-lg shadow-sm block w-full px-1.5 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-md border border-gray-300 rounded-md"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                      <label
                        for="address"
                        class="block text-md font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        ที่อยู่ร้านค้า
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <textarea
                          v-model="form.address"
                          id="address"
                          placeholder="ที่อยู่ร้านค้า"
                          rows="2"
                          class="max-w-lg shadow-sm block w-full px-1.5 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-md border border-gray-300 rounded-md"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                      <label
                        for="phone"
                        class="block text-md font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        เบอร์โทร
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                          <input
                            v-model="form.phone"
                            type="text"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="phone"
                            placeholder="เบอร์โทร"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                      <label
                        for="location"
                        class="block text-md font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        ตำแหน่ง
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                          <input
                            v-model="form.location"
                            type="text"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="location"
                            placeholder="ตำแหน่ง"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="pt-5">
                <div class="flex justify-end">
                  <button
                    type="button"
                    class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </nav>
      </article>
    </AdminLayout>
  </div>
</template>

<script>
import AdminLayout from "@/layouts/admin.vue";
import { mapActions } from "vuex";

export default {
  name: "AddShop",
  components: { AdminLayout },
  methods: {
    ...mapActions({
      createShop: "shop/createShop",
    }),
    submit() {
      this.createShop(this.form);
    },
    browse() {
      this.$refs.file.click();
    },
    change(e) {
      const file = e.target.files[0];
      if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          this.form.image = e.target.result;
        };
      }
    },
  },
  data() {
    return {
      form: {
        name: "",
        image: "",
        shopType: "",
        location: "",
        address: "",
        phone: "",
        shopKeeper: "",
      },
    };
  },
};
</script>

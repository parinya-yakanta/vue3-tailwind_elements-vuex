<template>
  <div>
    <AdminLayout>
      <article
        class="flex-col sm:w-full md:w-10/12 lg:w-10/12 lg:mx-auto md:mx-auto sm:mx-auto xl:w-full flex justify-center border-r border-gray-200 h-screen"
      >
        <TopMenuAdmin />
        <div class="flex justify-between py-5 px-2 border-b border-gray-300">
          <span class="block font-bold text-gray-600"
            >ชื่อร้านค้า : เกษตรยนต์</span
          >
          <span class="block font-bold text-gray-600">เพิ่มสินค้าใหม่</span>
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
                      กรอกข้อมูลสินค้าของท่าน.
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
                        รูปปกสินค้า
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
                        ชื่อสินค้า
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                          <input
                            v-model="form.name"
                            type="text"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="name"
                            placeholder="ชื่อสินค้า"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                      <label
                        for="description"
                        class="block text-md font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        รายละเอียดสินค้า
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <textarea
                          v-model="form.description"
                          id="description"
                          placeholder="รายละเอียดสินค้า"
                          rows="2"
                          class="max-w-lg shadow-sm block w-full px-1.5 py-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-md border border-gray-300 rounded-md"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                      <label
                        for="price"
                        class="block text-md font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        ราคา
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                          <input
                            v-model.number="form.price"
                            type="number"
                            min="0"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="price"
                            placeholder="ราคาสินค้า"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                      <label
                        for="discount"
                        class="block text-md font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        ส่วนลด
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                          <input
                            v-model.number="form.discount"
                            type="number"
                            min="0"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="discount"
                            placeholder="ส่วนลด"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                      <label
                        for="total"
                        class="block text-md font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        ราคารวม
                      </label>
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                          <input
                            v-model.number="total"
                            type="number"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="total"
                            placeholder="ราคารวมสินค้า"
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5"
                    >
                      <div>
                        <div
                          class="text-base font-medium text-gray-900 sm:text-md sm:text-gray-700"
                          id="label-email"
                        >
                          หมวดหมู่
                        </div>
                      </div>
                      <div class="mt-4 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg space-y-4">
                          <div class="grid grid-cols-2 w-full">
                            <div
                              class="relative flex items-start"
                              v-for="(category, i) in getAllCategorys"
                              :key="i"
                            >
                              <div class="flex items-center h-5">
                                <input
                                  v-model="form.categorys"
                                  :value="category.id"
                                  :id="i"
                                  type="checkbox"
                                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div class="ml-3 text-sm">
                                <label
                                  for="offers"
                                  class="font-medium text-gray-700"
                                  >{{ category.name }}</label
                                >
                              </div>
                            </div>
                          </div>
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
import TopMenuAdmin from "@/components/admins/TopMenuAdmin.vue";
import { mapActions, mapGetters } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "AddProduct",
  components: { AdminLayout, TopMenuAdmin },
  created() {
    this.findAllCategory();
  },
  methods: {
    ...mapActions({
      findAllCategory: "category/findAllCategory",
      createProduct: "product/createProduct",
    }),
    submit() {
      this.createProduct(this.form).then(() => {
        Swal.fire({
          position: "top-end",
          title: "บันทึกข้อมูลสำเร็จ",
          showConfirmButton: false,
          timer: 2000,
        });
        this.$router.replace({ path: "/my-shop" });
        return {
          form: {
            name: "",
            description: "",
            image: "",
            qty: 1,
            price: 0,
            discount: 0,
            categorys: [],
            shopId: 1,
          },
        };
      });
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
        description: "",
        image: "",
        qty: 1,
        price: 0,
        discount: 0,
        categorys: [],
        shopId: 1,
      },
    };
  },
  computed: {
    total() {
      return this.form.price - this.form.discount;
    },
    ...mapGetters({
      getAllCategorys: "category/getAllCategory",
    }),
  },
};
</script>

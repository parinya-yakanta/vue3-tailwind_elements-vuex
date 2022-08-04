<template>
  <div>
    <section class="h-screen">
      <NavbarAuth />
      <div class="container px-20 py-12 h-full">
        <div
          class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"
        >
          <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <div
              class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
            >
              <p
                class="text-center font-semibold text-xl mx-4 text-violet-700 py-4 mb-0 border-2 border-dotted border-lime-500 px-4"
              >
                LAZAPEE
              </p>
            </div>

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="w-full max-h-96"
              alt="Phone image"
            />

            <div class="flex justify-between mt-4">
              <router-link
                to="/login"
                class="px-7 py-3 lg:mr-2 xl:mr-4 text-stone-800 font-medium text-lg leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-amber-300"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                เข้าระบบ
              </router-link>
              <router-link
                to="/"
                class="px-7 py-3 lg:ml-2 xl:ml-4 text-stone-800 font-medium text-lg leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-amber-300"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                รายการสินค้า
              </router-link>
            </div>
          </div>
          <div
            class="md:w-8/12 lg:w-5/12 lg:ml-20 border-dashed border border-blue-500 p-5"
          >
            <form @submit.prevent="submit">
              <div class="mb-4">
                <input
                  v-model="form.username"
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Username"
                />
              </div>

              <div class="mb-4">
                <input
                  v-model="form.password"
                  type="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>

              <div class="mb-4">
                <input
                  v-model="form.name"
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Fullname"
                />
              </div>

              <div class="mb-4">
                <input
                  v-model="form.email"
                  type="email"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>

              <div class="mb-4">
                <input
                  v-model="form.phone"
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Phone"
                />
              </div>

              <div class="mb-4">
                <textarea
                  v-model="form.address"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Address"
                ></textarea>
              </div>

              <div class="items-center mb-6">
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck3"
                    required
                  />
                  <label
                    class="form-check-label inline-block text-gray-800"
                    for="exampleCheck2"
                  >
                    ยอมรับ
                    <a href="#"
                      ><span class="text-xs text-red-600"
                        >อ่านรายละเอียด</span
                      ></a
                    >
                  </label>
                </div>
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                class="inline-block px-7 py-3 bg-blue-600 text-white font-bold text-lg leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                ลงทะเบียน
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavbarAuth from "@/components/webs/NavbarAuth.vue";
import { mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
  components: { NavbarAuth },
  data() {
    return {
      form: {
        username: "",
        password: "",
        name: "",
        email: "",
        address: "",
        phone: "",
      },
    };
  },
  methods: {
    ...mapActions({
      registerAsync: "auth/register",
    }),
    submit() {
      this.registerAsync(this.form)
        .then(() => {
          this.$router.replace({ path: "/login" });
        })
        .catch(() => {
          Swal.fire({
            position: "top-end",
            title: "ลงทะเบียนไม่สำเร็จ",
            showConfirmButton: false,
            timer: 2000,
          });
        });
    },
  },
};
</script>

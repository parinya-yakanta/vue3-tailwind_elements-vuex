<template>
  <div>
    <section class="h-full gradient-form bg-gray-200">
      <NavbarAuth />
      <div class="px-6 h-6/12 flex justify-center pb-20">
        <div
          class="block mt-20 bg-white shadow-lg rounded-lg xl:w-4/12 lg:w-5/12 sm:w-7/12 w-10/12 px-4 md:px-0"
        >
          <div class="g-0">
            <div class="md:p-12 md:mx-6">
              <div class="text-center">
                <img
                  class="mx-auto w-48"
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  alt="logo"
                />
                <h4 class="text-xl font-semibold text-rose-600 mt-1 mb-2 pb-1">
                  WELCOME LAZAPEE
                </h4>
              </div>
              <form @submit.prevent="submit">
                <p class="mb-2 text-teal-700">กรุณาเข้าสู่ระบบบัญชีของคุณ</p>
                <div class="mb-4">
                  <input
                    v-model="form.username"
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="username"
                    placeholder="Username"
                  />
                </div>
                <div class="mb-4">
                  <input
                    v-model="form.password"
                    type="password"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div class="text-center pt-1 mb-6 pb-1">
                  <button
                    class="inline-block px-6 py-4 text-white bg-blue-700 font-medium text-lg leading-tight uppercase rounded shadow-lg hover:bg-lime-500 hover:text-zinc-800 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                    type="submit"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    เข้าระบบ
                  </button>
                  <a class="text-gray-500" href="#!">เปลี่ยนรหัสผ่าน?</a>
                </div>
                <div class="flex items-center justify-between pb-6">
                  <router-link to="/register">
                    <p class="mb-0 mr-2 text-sky-600">ลงทะเบียนใหม่ ?</p>
                  </router-link>
                  <router-link to="/">
                    <button
                      type="button"
                      class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      รายการสินค้า
                    </button>
                  </router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="bg-gray-200 text-center lg:text-left fixed-bottom">
      <div
        class="text-gray-700 text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.2)"
      >
        ก็เพราะรักเธอทั้งหัวใจ.. อะไรก็ยอมเทอร์.. เย้...
      </div>
    </footer>
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
      form: { username: "", password: "" },
    };
  },
  methods: {
    ...mapActions({
      loginAsync: "auth/login",
    }),
    submit() {
      this.loginAsync(this.form)
        .then(() => {
          this.$router.replace({ path: "/" });
        })
        .catch(() => {
          Swal.fire({
            position: "top-end",
            title: "ผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
            showConfirmButton: false,
            timer: 2000,
          });
        });
    },
  },
};
</script>

<template>
  <div class="z-50 h-16">
    <nav
      class="w-full flex flex-wrap items-center justify-between py-3 bg-blue-500 text-white shadow-lg navbar navbar-expand-lg navbar-light fixed z-50"
    >
      <div
        class="container-fluid w-full flex flex-wrap items-center justify-between px-6"
      >
        <button
          class="navbar-toggler text-white border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            class="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
        <div
          class="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent1"
        >
          <a
            class="text-xl bg-orange-600 text-white shadow-white shadow-sm px-2 font-semibold"
            href="#"
            >Lazapee</a
          >
          <!-- Left links -->
          <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
            <li class="nav-item p-2">
              <router-link to="/" class="nav-link text-white" href="#"
                >รายการสินค้า</router-link
              >
            </li>
            <li class="nav-item p-2">
              <router-link to="/shops" class="nav-link text-white"
                >ร้านค้า</router-link
              >
            </li>
            <li class="nav-item dropdown static">
              <a
                class="nav-link pr-2 lg:px-2 py-2 text-white transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap"
                href="#"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                type="button"
                id="dropdownMenuButtonZ"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                หมวดหมู่
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  class="w-2 ml-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </a>
              <div
                class="dropdown-menu mt-0 hidden shadow-lg bg-white absolute left-50 top-full"
                aria-labelledby="dropdownMenuButtonZ"
              >
                <div class="px-1 lg:px-2 py-2">
                  <div class="grid">
                    <div class="bg-white text-gray-600">
                      <a
                        href="#!"
                        aria-current="true"
                        class="px-1 py-1 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          class="w-1.5 mr-1.5"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 192 512"
                        >
                          <path
                            fill="currentColor"
                            d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                          ></path>
                        </svg>
                        สินค้าการเกษตร
                      </a>
                      <a
                        href="#!"
                        aria-current="true"
                        class="px-1 py-1 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          class="w-1.5 mr-1.5"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 192 512"
                        >
                          <path
                            fill="currentColor"
                            d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                          ></path>
                        </svg>
                        อุปกรณ์เครื่องใช้ไฟฟ้า
                      </a>
                      <a
                        href="#!"
                        aria-current="true"
                        class="px-1 py-1 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out flex items-center"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          class="w-1.5 mr-1.5"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 192 512"
                        >
                          <path
                            fill="currentColor"
                            d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                          ></path>
                        </svg>
                        ยานพาหนะ รถยนต์
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item p-2">
              <a class="nav-link text-white" href="#">เกี่ยวกับ</a>
            </li>
            <li class="nav-item p-2">
              <a class="nav-link text-white" href="#">ติดต่อเรา</a>
            </li>
          </ul>
          <!-- Left links -->
        </div>
        <!-- Collapsible wrapper -->

        <!-- Right elements -->
        <div class="flex items-center relative">
          <!-- Icon -->
          <a
            class="text-white opacity-90 hover:opacity-100 focus:opacity-100 mr-4"
            href="#"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="shopping-cart"
              class="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
              ></path>
            </svg>
          </a>
          <div class="dropdown relative">
            <a
              v-show="user"
              class="text-white opacity-90 hover:opacity-100 focus:opacity-100 mr-4 dropdown-toggle hidden-arrow flex items-center"
              href="#"
              id="dropdownMenuButton1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="bell"
                class="w-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                ></path>
              </svg>
              <span
                class="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5"
                >10</span
              >
            </a>
            <ul
              class="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a
                  class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                  >Action</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                  >Another action</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                  >Something else here</a
                >
              </li>
            </ul>
          </div>
          <div class="ml-5" v-if="!user">
            <router-link to="/register">ลงทะเบียน</router-link> |
            <router-link to="/login">เข้าระบบ</router-link>
          </div>
          <div class="dropdown relative ml-5" v-else>
            <a
              class="dropdown-toggle flex items-center hidden-arrow"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span
                class="rounded-l-full text-blue-800 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max"
              >
                <img
                  class="rounded-full w-10 h-10 max-w-none border-solid border border-white"
                  alt="A"
                  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg"
                />
                <span class="flex items-center px-3 py-2">
                  {{ user.email }}
                </span>
              </span>
            </a>
            <ul
              class="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <router-link
                  to="/profile"
                  class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                  >โปรไฟล์ของฉัน</router-link
                >
              </li>
              <li>
                <a
                  class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                  @click="logOut"
                  >ออกจากระบบ</a
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- Right elements -->
      </div>
    </nav>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions } from "vuex";

export default {
  name: "NavbarWeb",
  data() {
    return {
      login: true,
    };
  },
  props: ["user"],
  methods: {
    logOut() {
      this.logoutUser();
      Swal.fire({
        position: "top-end",
        title: "ออกจากระบบสำเร็จ",
        showConfirmButton: false,
        timer: 1000,
      }).then(() => {
        this.$router.replace({ path: "/login" });
      });
    },
    ...mapActions({
      logoutUser: "auth/logout",
    }),
  },
};
</script>

<template>
  <div>
    <AdminLayout>
      <article>
        <!-- Profile header -->
        <div>
          <TopMenuAdmin />
          <div>
            <img
              class="h-32 w-full object-cover lg:h-48"
              src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt=""
            />
          </div>
          <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="-mt-16 sm:-mt-20 sm:flex sm:items-end sm:space-x-5">
              <div class="flex">
                <img
                  class="h-24 w-24 rounded-full ring-4 ring-white sm:h-40 sm:w-40"
                  src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                  alt=""
                />
              </div>
              <div
                class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
              >
                <div class="sm:hidden 2xl:block mt-2 min-w-0 flex-1">
                  <h1 class="text-2xl font-bold text-gray-900 truncate">
                    Ricardo Cooper
                  </h1>
                </div>
                <div
                  class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"
                >
                  <button
                    type="button"
                    class="inline-flex justify-center px-4 py-1 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    <!-- Heroicon name: solid/mail -->
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
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>

                    <span class="text-lg">แก้ไข</span>
                  </button>
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
                </div>
              </div>
            </div>
            <div class="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
              <h1 class="text-2xl font-bold text-gray-900 truncate">
                Parinya Yakanta
              </h1>
              <p>09865434567890-09876</p>
            </div>
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
                <span class="text-xl text-indigo-700">โปรไฟล์ของฉัน</span>
                <span class="text-sm text-gray-600"
                  >วันที่สร้าง : 31-12-2025</span
                >
              </nav>
            </div>
          </div>
        </div>

        <div class="my-2 px-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div
            class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
          >
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="flex-1 min-w-0">
              <a href="#" class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true"></span>
                <p class="text-md font-medium text-gray-900">
                  จำนวนร้านค้าของคุณ
                </p>
                <p class="text-sm pt-1 text-gray-600 truncate">
                  ทั้งหมด 10 ร้าน
                </p>
              </a>
            </div>
          </div>

          <div
            class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
          >
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="flex-1 min-w-0">
              <a href="#" class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true"></span>
                <p class="text-md font-medium text-gray-900">
                  จำนวนสินค้าของคุณ
                </p>
                <p class="text-sm pt-1 text-gray-600 truncate">
                  ทั้งหมด 300 รายการ
                </p>
              </a>
            </div>
          </div>

          <div
            class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
          >
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="flex-1 min-w-0">
              <a href="#" class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true"></span>
                <p class="text-md font-medium text-gray-900">
                  จำนวนออเดอร์ของคุณ
                </p>
                <p class="text-sm pt-1 text-gray-600 truncate">
                  ทั้งหมด 18 รายการ
                </p>
              </a>
            </div>
          </div>
        </div>

        <!-- Description list -->
        <div class="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div class="sm:col-span-1">
              <dt class="text-md font-medium text-gray-500">รหัส</dt>
              <dd class="mt-1 text-sm text-gray-900">MML0987654345678909876</dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-md font-medium text-gray-500">ชื่อบัญชี</dt>
              <dd class="mt-1 text-sm text-gray-900">ricard ocooper</dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-md font-medium text-gray-500">อีเมล</dt>
              <dd class="mt-1 text-sm text-gray-900">Senior@gmail.com</dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-md font-medium text-gray-500">เบอร์โทร</dt>
              <dd class="mt-1 text-sm text-gray-900">09876567890</dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-md font-medium text-gray-500">ที่อยู่</dt>
              <dd class="mt-1 text-sm text-gray-900">
                San Francisco 12/9 aadd ooeo loei 09876
              </dd>
            </div>

            <div class="sm:col-span-1">
              <dt class="text-md font-medium text-gray-500">ชื่อผู้ใช้</dt>
              <dd class="mt-1 text-sm text-gray-900">Oasis ppos</dd>
            </div>
          </dl>
        </div>
      </article>
    </AdminLayout>
  </div>
</template>

<script>
import AdminLayout from "../../layouts/admin.vue";
import TopMenuAdmin from "@/components/admins/TopMenuAdmin.vue";

export default {
  name: "ProfileView",
  components: { AdminLayout, TopMenuAdmin },
  data() {
    return {
      page: "profile",
    };
  },
};
</script>

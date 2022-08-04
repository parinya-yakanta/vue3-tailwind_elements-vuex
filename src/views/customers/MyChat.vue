<template>
  <div>
    <AdminLayout>
      <article
        class="hidden xl:flex xl:flex-col w-full border-r border-gray-200 h-screen"
      >
        <TopMenuAdmin />
        <div class="flex items-center p-3 border-b border-gray-300">
          <img
            class="object-cover w-14 h-14 rounded-full ring-2"
            src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
            alt="username"
          />
          <span class="block ml-4 font-bold text-gray-600">Emma</span>
          <span
            class="absolute w-4 h-4 bg-green-600 rounded-full left-14 top-20"
          >
          </span>
        </div>
        <!-- Directory list -->
        <nav class="flex-1 overflow-y-scroll" aria-label="Directory">
          <div class="relative px-4">
            <ul class="space-y-2">
              <li class="flex justify-start">
                <div
                  class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow"
                >
                  <span class="block">Hi</span>
                </div>
              </li>
              <li class="flex justify-start">
                <div
                  class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow"
                >
                  <span class="block">Hi</span>
                </div>
              </li>
              <li class="flex justify-end">
                <div
                  class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow"
                >
                  <span class="block">Hiiii</span>
                </div>
              </li>
              <li class="flex justify-end">
                <div
                  class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow"
                >
                  <span class="block">how are you?</span>
                </div>
              </li>
              <li class="flex justify-end">
                <div
                  class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow"
                >
                  <span class="block">how are you?</span>
                </div>
              </li>
              <li class="flex justify-end">
                <div
                  class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow"
                >
                  <span class="block">how are you?</span>
                </div>
              </li>
              <li class="flex justify-start">
                <div
                  class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow"
                >
                  <span class="block"
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </span>
                </div>
              </li>
              <li class="flex justify-end">
                <div
                  class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow"
                >
                  <span class="block">how are you?</span>
                </div>
              </li>
              <li class="flex justify-start">
                <div
                  class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow"
                >
                  <span class="block"
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </span>
                </div>
              </li>
              <li class="flex justify-start">
                <div
                  class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow"
                >
                  <span class="block"
                    >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </span>
                </div>
              </li>
              <li class="flex justify-end">
                <div
                  class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow"
                >
                  <span class="block"
                    >Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit.?</span
                  >
                </div>
              </li>
              <li class="flex justify-end">
                <div
                  class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow"
                >
                  <span class="block"
                    >Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit.?</span
                  >
                </div>
              </li>
              <li class="flex justify-end">
                <div
                  class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow"
                >
                  <span class="block"
                    >Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit.?</span
                  >
                </div>
              </li>
              <li class="flex justify-end">
                <div
                  class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow"
                >
                  <span class="block"
                    >Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit.?</span
                  >
                </div>
              </li>
              <li class="flex justify-end">
                <div
                  class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow"
                >
                  <span class="block"
                    >Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit.?</span
                  >
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div
          class="flex items-center justify-between w-full p-4 border-t border-solid border-b-4 border-blue-300"
        >
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
          </button>

          <input
            type="text"
            placeholder="Message"
            class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
            name="message"
            required
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </button>
          <button type="submit">
            <svg
              class="w-7 h-7 text-gray-500 origin-center transform rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
              />
            </svg>
          </button>
        </div>
      </article>
    </AdminLayout>
  </div>
</template>

<script>
import AdminLayout from "../../layouts/admin.vue";
import TopMenuAdmin from "@/components/admins/TopMenuAdmin.vue";
export default {
  name: "MyChatView",
  components: { AdminLayout, TopMenuAdmin },
  data() {
    return {
      page: "MyChat",
    };
  },
};
</script>

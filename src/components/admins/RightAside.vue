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
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
        <h2 class="text-xl font-medium text-white">Messager</h2>
      </div>
      <!-- Directory list -->
      <nav class="flex-1 overflow-y-scroll" aria-label="Directory">
        <div class="relative">
          <ul role="list" class="relative z-0 divide-y divide-gray-200">
            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      paronya yakanta
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      code: 098765456789098765
                    </p>
                  </router-link>
                </div>
              </div>
            </li>
            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBgyXHHUdB79OtY_ROuuTtjSaqTib4m5QFe48o6BwCUKltKBanwIQ0R96ZI5teTp7KxY&usqp=CAU"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      pinom parotra
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      ode: 096545890987876675
                    </p>
                  </router-link>
                </div>
              </div>
            </li>

            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      paronya yakanta
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      code: 098765456789098765
                    </p>
                  </router-link>
                </div>
              </div>
            </li>
            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBgyXHHUdB79OtY_ROuuTtjSaqTib4m5QFe48o6BwCUKltKBanwIQ0R96ZI5teTp7KxY&usqp=CAU"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      pinom parotra
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      ode: 096545890987876675
                    </p>
                  </router-link>
                </div>
              </div>
            </li>

            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      paronya yakanta
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      code: 098765456789098765
                    </p>
                  </router-link>
                </div>
              </div>
            </li>
            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBgyXHHUdB79OtY_ROuuTtjSaqTib4m5QFe48o6BwCUKltKBanwIQ0R96ZI5teTp7KxY&usqp=CAU"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      pinom parotra
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      ode: 096545890987876675
                    </p>
                  </router-link>
                </div>
              </div>
            </li>

            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      paronya yakanta
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      code: 098765456789098765
                    </p>
                  </router-link>
                </div>
              </div>
            </li>
            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBgyXHHUdB79OtY_ROuuTtjSaqTib4m5QFe48o6BwCUKltKBanwIQ0R96ZI5teTp7KxY&usqp=CAU"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      pinom parotra
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      ode: 096545890987876675
                    </p>
                  </router-link>
                </div>
              </div>
            </li>

            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      paronya yakanta
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      code: 098765456789098765
                    </p>
                  </router-link>
                </div>
              </div>
            </li>
            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBgyXHHUdB79OtY_ROuuTtjSaqTib4m5QFe48o6BwCUKltKBanwIQ0R96ZI5teTp7KxY&usqp=CAU"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      pinom parotra
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      ode: 096545890987876675
                    </p>
                  </router-link>
                </div>
              </div>
            </li>

            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      paronya yakanta
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      code: 098765456789098765
                    </p>
                  </router-link>
                </div>
              </div>
            </li>
            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBgyXHHUdB79OtY_ROuuTtjSaqTib4m5QFe48o6BwCUKltKBanwIQ0R96ZI5teTp7KxY&usqp=CAU"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      pinom parotra
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      ode: 096545890987876675
                    </p>
                  </router-link>
                </div>
              </div>
            </li>

            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      paronya yakanta
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      code: 098765456789098765
                    </p>
                  </router-link>
                </div>
              </div>
            </li>
            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBgyXHHUdB79OtY_ROuuTtjSaqTib4m5QFe48o6BwCUKltKBanwIQ0R96ZI5teTp7KxY&usqp=CAU"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      pinom parotra
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      ode: 096545890987876675
                    </p>
                  </router-link>
                </div>
              </div>
            </li>

            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      paronya yakanta
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      code: 098765456789098765
                    </p>
                  </router-link>
                </div>
              </div>
            </li>
            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBgyXHHUdB79OtY_ROuuTtjSaqTib4m5QFe48o6BwCUKltKBanwIQ0R96ZI5teTp7KxY&usqp=CAU"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      pinom parotra
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      ode: 096545890987876675
                    </p>
                  </router-link>
                </div>
              </div>
            </li>

            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      paronya yakanta
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      code: 098765456789098765
                    </p>
                  </router-link>
                </div>
              </div>
            </li>
            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBgyXHHUdB79OtY_ROuuTtjSaqTib4m5QFe48o6BwCUKltKBanwIQ0R96ZI5teTp7KxY&usqp=CAU"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      pinom parotra
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      ode: 096545890987876675
                    </p>
                  </router-link>
                </div>
              </div>
            </li>

            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      paronya yakanta
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      code: 098765456789098765
                    </p>
                  </router-link>
                </div>
              </div>
            </li>
            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBgyXHHUdB79OtY_ROuuTtjSaqTib4m5QFe48o6BwCUKltKBanwIQ0R96ZI5teTp7KxY&usqp=CAU"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      pinom parotra
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      ode: 096545890987876675
                    </p>
                  </router-link>
                </div>
              </div>
            </li>

            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      paronya yakanta
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      code: 098765456789098765
                    </p>
                  </router-link>
                </div>
              </div>
            </li>
            <li>
              <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500"
              >
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full border-collapse border-2 border-sky-300"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBgyXHHUdB79OtY_ROuuTtjSaqTib4m5QFe48o6BwCUKltKBanwIQ0R96ZI5teTp7KxY&usqp=CAU"
                    alt=""
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <router-link to="/my-chat" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      pinom parotra
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                      ode: 096545890987876675
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
export default {
  name: "RightAside",
};
</script>

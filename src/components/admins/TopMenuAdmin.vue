<template>
  <div
    class="px-6 pt-5 pb-4 border-solid border-b shadow-red-700 shadow-sm border-amber-400 bg-gradient-to-b from-indigo-500 to-pink-500 text-white flex justify-between"
  >
    <div>
      <router-link to="/">
        <span
          class="text-lg hover:border hover:border-white hover:border-separate hover:rounded-md p-2 mx-1"
          >หน้าแรก</span
        >
      </router-link>
      <router-link to="/profile">
        <span
          class="text-lg hover:border hover:border-white hover:border-separate hover:rounded-md p-2 mx-1"
          >โปรไฟล์ของฉัน</span
        >
      </router-link>
    </div>
    <div>
      <h2
        class="text-xl font-medium text-white border-solid border-2 border-white rounded-md pr-1"
      >
        <span class="bg-white text-neutral-700 px-3 py-1 rounded-l-md mr-1"
          >You
        </span>
        parin@gmail.com
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopMenuAdmin",
};
</script>

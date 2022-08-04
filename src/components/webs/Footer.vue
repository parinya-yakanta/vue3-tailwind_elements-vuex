<template>
  <div class="pt-10">
    <footer class="bg-gray-200 text-center">
      <div class="px-6 pt-6">
        <form action="">
          <div
            class="md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center"
          >
            <div class="md:ml-auto md:mb-6">
              <p class="text-gray-800">
                <strong>Registers Now </strong>
              </p>
            </div>

            <div class="md:mr-auto mb-6">
              <button
                type="button"
                class="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                sign-up
              </button>
            </div>
          </div>
        </form>
      </div>

      <div
        class="text-center text-gray-700 p-4"
        style="background-color: rgba(0, 0, 0, 0.2)"
      >
        © 2023 Copyright:
        <a class="text-gray-800" href="#">Parinya Yakanta</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterWeb",
};
</script>

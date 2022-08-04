<template>
  <div>
    <div class="relative z-0 flex">
      <LeftAside />
      <main class="flex-1 relative z-0 focus:outline-none">
        <slot />
      </main>
      <RightAside />
    </div>
  </div>
</template>

<script>
import LeftAside from "../components/admins/LeftAside.vue";
import RightAside from "../components/admins/RightAside.vue";

export default {
  name: "AdminLayout",
  components: {
    LeftAside,
    RightAside,
  },
};
</script>

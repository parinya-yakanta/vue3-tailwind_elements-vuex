<template>
  <div>
    <NavbarWeb :user="getUser" />
    <slot />
    <FooterWeb />
  </div>
</template>

<script>
import NavbarWeb from "../components/webs/Navbar.vue";
import FooterWeb from "../components/webs/Footer.vue";
import { mapGetters } from "vuex";

export default {
  name: "WebLayout",
  components: {
    NavbarWeb,
    FooterWeb,
  },
  computed: {
    ...mapGetters({
      getUser: "auth/user",
    }),
  },
};
</script>

<style lang="scss" scoped></style>

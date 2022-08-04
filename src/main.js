import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./tailwind.css";
import "tw-elements";
import axios from "axios";
require("@/store/subscriber");
import middleware from "@grafikri/vue-middleware";

router.beforeEach(middleware({ store }));

axios.defaults.baseURL = "http://localhost:4000/api";

store.dispatch("auth/commitToken", localStorage.getItem("token"));

createApp(App).use(store).use(router).mount("#app");

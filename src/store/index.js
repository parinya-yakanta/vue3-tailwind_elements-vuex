import { createStore } from "vuex";
import auth from "./auth";
import category from "./category";
import product from "./product";
import shop from "./shop";

export default createStore({
  modules: { auth, category, product, shop },
});

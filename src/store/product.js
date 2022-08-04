import axios from "axios";
export default {
  namespaced: true,
  state: {
    products: null,
  },
  getters: {
    getAllProducts: (state) => state.products,
  },
  mutations: {
    SET_PRODUCT(state, product) {
      state.products = product;
    },
    async CREATE_PRODUCT(state, productData) {
      try {
        const product = await axios.post("/products", productData);

        if (product.status === 201) {
          const products = await axios.get("/products");
          state.products = products.data;
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  actions: {
    async products({ commit }) {
      const products = await axios.get("/products");
      if (!products) {
        return;
      }
      commit("SET_PRODUCT", products.data);
    },
    async createProduct({ commit }, productData) {
      await commit("CREATE_PRODUCT", productData);
    },
  },
};

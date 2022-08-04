import axios from "axios";

export default {
  namespaced: true,
  state: {
    shops: null,
  },
  getters: {
    getAllShops: (state) => state.shops,
  },
  mutations: {
    async CREATE_PRODUCT({ state }, shopData) {
      try {
        const shop = await axios.post("/shops", shopData);

        if (shop.status === 201) {
          const shops = await axios.get("/shops");
          state.shops = shops.data;
        }
      } catch (error) {
        console.log("err", error.message);
        return error.message;
      }
    },
    SET_SHOP(state, shop) {
      state.shops = shop;
    },
  },
  actions: {
    async shops({ commit }) {
      const shops = await axios.get("/shops");
      if (!shops) {
        return;
      }
      commit("SET_SHOP", shops.data);
    },
    async createShop({ commit }, shopData) {
      await commit("CREATE_PRODUCT", shopData);
    },
  },
};

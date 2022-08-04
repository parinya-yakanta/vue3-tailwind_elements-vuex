import axios from "axios";

export default {
  namespaced: true,
  state: {
    categorys: null,
  },
  getters: {
    getAllCategory: (state) => state.categorys,
  },
  mutations: {
    SET_CATEGORY(state, category) {
      state.categorys = category;
    },
  },
  actions: {
    async findAllCategory({ dispatch }) {
      const response = await axios.get("/categorys");
      dispatch("setCategory", response.data);
    },

    setCategory({ commit }, categoryData) {
      commit("SET_CATEGORY", categoryData);
    },
  },
};

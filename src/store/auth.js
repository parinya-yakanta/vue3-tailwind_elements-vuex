import axios from "axios";
import jwt_decode from "jwt-decode";

export default {
  namespaced: true,
  state: {
    access_token: null,
    user: null,
  },
  getters: {
    authenticate(state) {
      return state.access_token;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_TOKEN(state, access_token) {
      state.access_token = access_token;
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login({ dispatch }, data) {
      const response = await axios.post("/auth/login", data);

      dispatch("commitToken", response.data.access_token);
    },

    async commitToken({ commit, state }, access_token) {
      if (access_token) {
        commit("SET_TOKEN", access_token);
      }

      if (!state.access_token) {
        return;
      }

      const decoded = jwt_decode(access_token);
      const username = decoded.username;

      try {
        const response = await axios.get(`/users/${username}/username`, {
          headers: { Authorization: "Bearer " + access_token },
        });
        commit("SET_USER", response.data);
      } catch (error) {
        commit("SET_TOKEN", null);
        commit("SET_USER", null);
        localStorage.removeItem("token");
      }
    },

    async register({ dispatch }, data) {
      console.log("register", data);
      const response = await axios.post("/users", data);
      console.log(response);
      if (response.status === 201) {
        dispatch("logout");
      }
    },

    logout({ commit }) {
      localStorage.removeItem("token");
      commit("SET_TOKEN", null);
      commit("SET_USER", null);

      return;
    },
  },
};

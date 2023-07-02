import { Module } from "vuex";
import { User, RootState } from "@/types";

const user: Module<User, RootState> = {
  state: {
    isAdmin: false,
    normLevel: {
      val: 45,
      max: 100,
    },
    callsCount: {
      val: 56,
      max: 120,
    },
    comment: "",
  },

  mutations: {
    setUser(state, user: User) {
      state = user;
    },
  },

  actions: {
    setUser({ commit }, user: User) {
      commit("setUser", user);
    },
  },

  getters: {
    getUser: (state) => state,
  },
};

export default user;

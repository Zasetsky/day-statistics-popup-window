import { Module } from "vuex";
import { Status, RootState } from "@/types";

const statusModule: Module<Status, RootState> = {
  state: {
    dayStatus: "danger",
    comment: "Опоздание. Подписана объяснительная на имя директора.",
  },

  mutations: {
    setStatus(state, status: Status) {
      state = status;
    },
  },

  actions: {
    setStatus({ commit }, status: Status) {
      commit("setStatus", status);
    },
  },

  getters: {
    getStatus: (state) => state,
  },
};

export default statusModule;

import { Module } from "vuex";
import { LocalStates, RootState } from "@/types";

const localStates: Module<LocalStates, RootState> = {
  namespaced: true,

  state: {
    showOption: false,
  },

  mutations: {
    setShowOption(state, value: boolean) {
      state.showOption = value;
    },
  },

  actions: {
    toggleShowOption({ commit }, value: boolean) {
      commit("setShowOption", value);
    },
  },

  getters: {
    getShowOption: (state) => state.showOption,
  },
};

export default localStates;

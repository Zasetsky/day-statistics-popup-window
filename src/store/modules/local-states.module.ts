import { Module } from "vuex";
import { LocalStates, RootState } from "@/types";

const localStates: Module<LocalStates, RootState> = {
  namespaced: true,

  state: {
    showOptions: false,
  },

  mutations: {
    setshowOptions(state, value: boolean) {
      state.showOptions = value;
    },
  },

  actions: {
    toggleShowOptions({ commit }, value: boolean) {
      commit("setshowOptions", value);
    },
  },

  getters: {
    getshowOptions: (state) => state.showOptions,
  },
};

export default localStates;

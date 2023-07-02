import { Module } from "vuex";
import { Status, RootState } from "@/types";

const status: Module<Status[], RootState> = {
  namespaced: true,
  state: [
    {
      date: "02-07-2023",
      dayStatus: "success",
      comment: "",
    },
    {
      date: "03-07-2023",
      dayStatus: "success",
      comment: "",
    },
    {
      date: "04-07-2023",
      dayStatus: "danger",
      comment: "",
    },
    {
      date: "05-07-2023",
      dayStatus: "success",
      comment: "",
    },
    {
      date: "06-07-2023",
      dayStatus: "success",
      comment: "",
    },
  ],

  mutations: {
    setDayStatus(state, { date, dayStatus }) {
      const status = state.find((status) => status.date === date);
      if (status) status.dayStatus = dayStatus;
    },

    setStatusComment(state, { date, comment }) {
      const status = state.find((status) => status.date === date);
      if (status) status.comment = comment;
    },
  },

  actions: {
    updateDayStatus({ commit }, payload) {
      commit("setDayStatus", payload);
    },

    updateStatusComment({ commit }, payload) {
      commit("setStatusComment", payload);
    },
  },

  getters: {
    getStatusByDate: (state) => (date: string) => {
      return state.find((status) => status.date === date);
    },

    getAllStatuses: (state) => state,
  },
};

export default status;

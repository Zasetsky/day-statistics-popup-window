import { Module } from "vuex";
import { User, RootState } from "@/types";

const user: Module<User, RootState> = {
  namespaced: true,

  state: {
    isAdmin: true,
    normLevel: {
      val: 45,
      max: 100,
    },
    callsCount: {
      val: 56,
      max: 120,
    },
    workPoints: {
      "02-07-2023": [
        [
          {
            time: "9:34",
            name: "Начало работы",
            comment: "Встал в пробку на Невском проспекте",
          },
          {
            time: "13:00",
            name: "Блокировка",
            comment: "Забыл остановить таймер",
          },
        ],
        [
          {
            time: "14:00",
            name: "Продолжение работы",
            comment: "",
          },
          {
            time: "18:00",
            name: "Прогулка",
            comment: "",
          },
        ],
        [
          {
            time: "14:00",
            name: "Начало рабочего дня",
            comment: "",
          },
          {
            time: "18:00",
            name: "Конец рабочего дня",
            comment: "",
          },
        ],
        [
          {
            time: "14:00",
            name: "Начало рабочего дня",
            comment: "",
          },
          {
            time: "18:00",
            name: "Конец рабочего дня",
            comment: "",
          },
        ],
      ],
    },
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

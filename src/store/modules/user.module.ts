import { Module } from "vuex";
import { User, RootState } from "@/types";

const user: Module<User, RootState> = {
  namespaced: true,

  state: {
    isAdmin: false, // Поменяйте чтобы посмотреть состояния от лица админа
    normLevel: {
      val: 45,
      max: 100,
    },
    callsCount: {
      val: 56,
      max: 120,
    },
    dates: {
      "02-07-2023": {
        breaksCount: 4,
        totalTime: "8 ч. 10 мин.",
        downtime: "0 мин.",
        workPoints: [
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
      "03-07-2023": {
        breaksCount: 4,
        totalTime: "5 ч. 10 мин.",
        downtime: "3 ч.",
        workPoints: [],
      },
      "04-07-2023": {
        breaksCount: 4,
        totalTime: "7 ч. 00 мин.",
        downtime: "30 мин.",
        workPoints: [],
      },
      "05-07-2023": {
        breaksCount: 4,
        totalTime: "6 ч. 10 мин.",
        downtime: "0 мин.",
        workPoints: [],
      },
      "06-07-2023": {
        breaksCount: 4,
        totalTime: "8 ч. 20 мин.",
        downtime: "5 мин.",
        workPoints: [],
      },
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

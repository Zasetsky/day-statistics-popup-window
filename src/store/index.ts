import Vue from "vue";
import Vuex from "vuex";
import userModule from "./modules/user-module";
import statusModule from "./modules/status-module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: userModule,
    status: statusModule,
  },
});

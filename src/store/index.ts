import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user.module";
import status from "./modules/status.module";
import localStates from "./modules/local-states.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    status,
    localStates,
  },
});

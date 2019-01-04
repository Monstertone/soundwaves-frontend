import {VALIDATE_USER, REGISTER_USER, LOGOUT_USER} from "./mutation-types";
export const mutations = {
  // We're using this mutation for both login/reg
  [REGISTER_USER](state, payload){
    localStorage.setItem("user-token", payload.token);
    state.token = payload.token;
    state.user = payload.user;
  },
  [VALIDATE_USER](state, payload){
    state.user = payload.user;
    state.token = localStorage.getItem("user-token");

  },
  [LOGOUT_USER](state, payload){
    state.user = {};
    state.token = "";
    localStorage.removeItem("user-token");
  }


};

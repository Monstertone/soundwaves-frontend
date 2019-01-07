import {VALIDATE_USER, LOGIN_USER, REGISTER_USER, GET_SONGS} from "./mutation-types";
const serverUrl = "http://localhost:8000";
import axios from 'axios';

export const actions = {
  // Context is store itself and payload is the data
  [REGISTER_USER](context, payload){
    return new Promise((resolve, reject)=>{
      this._vm.$http.post("users/", payload.newUser, {emulateJSON:true}).then((res)=>{
        context.commit(REGISTER_USER, res.data)
        resolve();
      })
        .catch((err)=>{
          reject();
        })
    })
  },

  [LOGIN_USER](context, payload){
    return new Promise((resolve, reject)=>{
      this._vm.$http.post("sessions/", payload.logUser, {emulateJSON:true})
        .then((res)=>{
          context.commit(REGISTER_USER, res.data)
          resolve();
        })
        .catch((err)=>{
          reject(err);
        })
    })
  },

  [VALIDATE_USER](context, payload){
    return new Promise((resolve, reject)=>{
      const token = localStorage.getItem("user-token");
      console.log(token);
      if(token){
        this._vm.$http.post("users/validate", {token}, {emulateJSON:true})
          .then((res)=>{
            context.commit(VALIDATE_USER, res.data);
            resolve()
          })
          .catch((err)=>{
            localStorage.removeItem("user-token");
            reject(err);
          })
      }else{
        reject();
      }
    })
  },

  //GET SONGS FROM SERVER


  [GET_SONGS](context) {

    return new Promise((resolve, reject) => {

      let token = localStorage.getItem("user-token");

      if(!token){
        reject();
      }
      axios.get(`${serverUrl}/random?token=${token}`).then((result) => {

        context.commit(GET_SONGS, result.data);
      })
        .catch((err) => {
          console.log(err)
          reject();
        })
    })
  },




};

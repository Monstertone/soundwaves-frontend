<template>
  <div class="log-div">
    <h1 class="login-top">Log In</h1>
    <form @submit.prevent="login()">

      <!--<div class="form-group">-->
        <!--<label for="username">Username</label>-->
        <!--<input-->
          <!--type="text"-->
          <!--id="username"-->
          <!--class="form-control"-->
          <!--v-model.lazy.trim="userData.username">-->

      <!--</div>-->

      <div> <label for="email">Email</label>
      <input
        type="text"
        id="email"
        v-model="logUser.email">
  </div>
  <div>
    <label for="password">Password</label>
    <input
      type="password"
      id="password"
      v-model="logUser.password">
  </div>

      <button type="submit">Submit</button>

    </form>

      <div>
        <hr>
        <h3>Don't have an account?</h3>
        <router-link to="/Create">
          Create Account
        </router-link>
      </div>

  </div>


</template>

<script>

  import {LOGIN_USER, GET_NOTIFICATIONS} from "../../Vuex/mutation-types";

  export default {
    name: 'loginreg',
    data () {
      return {

        logUser:{
          email:"",
          password:""
        },
        dialog:false,
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        requiredRules:[
          (v)=> !!v || 'This field is required'
        ]
      }
    },
    computed:{
      user(){
        return this.$store.getters.user;
      }
    },
    methods:{

      login:function(){
        this.error=""
        this.$store.dispatch(LOGIN_USER, {
          logUser:this.logUser
        }).then(()=>{
          this.dialog=false;
          this.logUser = {
            email:"",
            password:""
          };
          this.$store.dispatch(GET_NOTIFICATIONS);
          console.log("running  this")
          this.$router.push("/Test");
        })
          .catch((err)=>{
            console.log(err)
            this.error = err.data;
          });

      }
    }
  }
</script>

<style>

  .login-top {
    color: black;
    font-size: 3vh;
  }

  .log-div {
    width: 600px;
    margin: auto;
    margin-top: 0;
    background-color: #fff;
    height: 100vh;

  }
</style>

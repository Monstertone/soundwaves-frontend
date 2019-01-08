<template>

  <div id="content">

   <header><router-link to="/"><h1 class="create-logo">SOUNDWAVES</h1></router-link></header>



    <main>

      <h2>Log In</h2>

      <form @submit.prevent="login()">

        <div>

          <!--<label for="email">Email</label>-->
          <input
            class="input-form"
            placeholder="Email address"
            type="text"
            id="email"
            v-model="logUser.email">

        </div>
        <div>
          <!--<label for="password">Password</label>-->
          <input
            class="input-form"
            placeholder="Password"
            type="password"
            id="password"
            v-model="logUser.password">
        </div>


        <button type="submit" class="submit-btn">SUBMIT</button>

      </form>

    <div>
        <hr>
        <h3>Don't have an account?</h3>
        <router-link to="/Create">
          <button class="signup-btn">SIGN UP!</button>
        </router-link>
      </div>


    </main>

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

  @font-face {
    font-family: 'six_capsregular';
    src: url('../assets/fonts/sixcaps-webfont.woff2') format('woff2'),
    url('../assets/fonts/sixcaps-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

  }



  .create-logo {

    font-family: six_capsregular;
    font-size: 6vw;
    color:rgb(255, 253, 173);
    margin: auto;
  }

  .input-form {
    border: 1px solid #d9dadc;
    width: 70%;
    height: 30px;
    padding: 6px 12px;
    font-size: 14px;
    margin-bottom: 8px;
  }

  .submit-btn {
    background-color:  rgb(1,11,23);
    color: rgb(255, 253, 173);
    border: 1px solid rgb(255, 253, 173);
    border-radius: 10px;
    width: 90px;
    height: 35px;
    font-size: 12px;
    cursor: pointer;
    cursor: hand;
  }

  .signup-btn {
    background-color:  rgb(1,11,23);
    color: rgb(255, 253, 173);
    border: 1px solid rgb(255, 253, 173);
    border-radius: 10px;
    height: 35px;
    width: 90px;
    font-size: 12px;
    cursor: pointer;
    cursor: hand;
  }
  #content {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(50px, auto);
    text-align: center;


  }

  header {
    grid-column: 1 / 7;
    /*background-color:#173348;*/
    /*background-color: rgb(39, 73, 87);*/
    background-color: rgb(1,11,23);
  }

  main {
    grid-column: 3 / 5 ;
    background-color: #fff;
    height: 100vh;
    text-align: center;
    color:rgb(1,11,23);
  }

  hr {
    width: 80%;
  }


</style>
